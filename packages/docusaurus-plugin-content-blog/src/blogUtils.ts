/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs-extra';
import path from 'path';
import readingTime from 'reading-time';
import {keyBy, mapValues} from 'lodash';
import type {
  BlogPost,
  BlogContentPaths,
  BlogMarkdownLoaderOptions,
  BlogTags,
  BlogPaginated,
} from './types';
import {
  parseMarkdownString,
  normalizeUrl,
  aliasedSitePath,
  getEditUrl,
  getFolderContainingFile,
  posixPath,
  replaceMarkdownLinks,
  Globby,
  normalizeFrontMatterTags,
  groupTaggedItems,
  getContentPathList,
} from '@docusaurus/utils';
import type {LoadContext} from '@docusaurus/types';
import {validateBlogPostFrontMatter} from './blogFrontMatter';
import {type AuthorsMap, getAuthorsMap, getBlogPostAuthors} from './authors';
import logger from '@docusaurus/logger';
import type {
  PluginOptions,
  ReadingTimeFunction,
} from '@docusaurus/plugin-content-blog';

export function truncate(fileString: string, truncateMarker: RegExp): string {
  return fileString.split(truncateMarker, 1).shift()!;
}

export function getSourceToPermalink(
  blogPosts: BlogPost[],
): Record<string, string> {
  return mapValues(
    keyBy(blogPosts, (item) => item.metadata.source),
    (v) => v.metadata.permalink,
  );
}

export function paginateBlogPosts({
  blogPosts,
  basePageUrl,
  blogTitle,
  blogDescription,
  postsPerPageOption,
}: {
  blogPosts: BlogPost[];
  basePageUrl: string;
  blogTitle: string;
  blogDescription: string;
  postsPerPageOption: number | 'ALL';
}): BlogPaginated[] {
  const totalCount = blogPosts.length;
  const postsPerPage =
    postsPerPageOption === 'ALL' ? totalCount : postsPerPageOption;
  const numberOfPages = Math.ceil(totalCount / postsPerPage);

  const pages: BlogPaginated[] = [];

  function permalink(page: number) {
    return page > 0 ? `${basePageUrl}/page/${page + 1}` : basePageUrl;
  }

  for (let page = 0; page < numberOfPages; page += 1) {
    pages.push({
      items: blogPosts
        .slice(page * postsPerPage, (page + 1) * postsPerPage)
        .map((item) => item.id),
      metadata: {
        permalink: permalink(page),
        page: page + 1,
        postsPerPage,
        totalPages: numberOfPages,
        totalCount,
        previousPage: page !== 0 ? permalink(page - 1) : null,
        nextPage: page < numberOfPages - 1 ? permalink(page + 1) : null,
        blogDescription,
        blogTitle,
      },
    });
  }

  return pages;
}

export function getBlogTags({
  blogPosts,
  ...params
}: {
  blogPosts: BlogPost[];
  blogTitle: string;
  blogDescription: string;
  postsPerPageOption: number | 'ALL';
}): BlogTags {
  const groups = groupTaggedItems(
    blogPosts,
    (blogPost) => blogPost.metadata.tags,
  );

  return mapValues(groups, (group) => {
    const {tag, items: tagBlogPosts} = group;
    return {
      name: tag.label,
      items: tagBlogPosts.map((item) => item.id),
      permalink: tag.permalink,
      pages: paginateBlogPosts({
        blogPosts: tagBlogPosts,
        basePageUrl: group.tag.permalink,
        ...params,
      }),
    };
  });
}

const DATE_FILENAME_REGEX =
  /^(?<folder>.*)(?<date>\d{4}[-/]\d{1,2}[-/]\d{1,2})[-/]?(?<text>.*?)(?:\/index)?.mdx?$/;

type ParsedBlogFileName = {
  date: Date | undefined;
  text: string;
  slug: string;
};

export function parseBlogFileName(
  blogSourceRelative: string,
): ParsedBlogFileName {
  const dateFilenameMatch = blogSourceRelative.match(DATE_FILENAME_REGEX);
  if (dateFilenameMatch) {
    const {folder, text, date: dateString} = dateFilenameMatch.groups!;
    // Always treat dates as UTC by adding the `Z`
    const date = new Date(`${dateString}Z`);
    const slugDate = dateString.replace(/-/g, '/');
    const slug = `/${slugDate}/${folder}${text}`;
    return {date, text, slug};
  }
  const text = blogSourceRelative.replace(/(?:\/index)?\.mdx?$/, '');
  const slug = `/${text}`;
  return {date: undefined, text, slug};
}

function formatBlogPostDate(locale: string, date: Date): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  } catch (e) {
    throw new Error(`Can't format blog post date "${date}"`);
  }
}

async function parseBlogPostMarkdownFile(blogSourceAbsolute: string) {
  const markdownString = await fs.readFile(blogSourceAbsolute, 'utf-8');
  try {
    const result = parseMarkdownString(markdownString, {
      removeContentTitle: true,
    });
    return {
      ...result,
      frontMatter: validateBlogPostFrontMatter(result.frontMatter),
    };
  } catch (e) {
    throw new Error(
      `Error while parsing blog post file ${blogSourceAbsolute}: "${
        (e as Error).message
      }".`,
    );
  }
}

const defaultReadingTime: ReadingTimeFunction = ({content, options}) =>
  readingTime(content, options).minutes;

async function processBlogSourceFile(
  blogSourceRelative: string,
  contentPaths: BlogContentPaths,
  context: LoadContext,
  options: PluginOptions,
  authorsMap?: AuthorsMap,
): Promise<BlogPost | undefined> {
  const {
    siteConfig: {baseUrl},
    siteDir,
    i18n,
  } = context;
  const {
    routeBasePath,
    tagsBasePath: tagsRouteBasePath,
    truncateMarker,
    showReadingTime,
    editUrl,
  } = options;

  // Lookup in localized folder in priority
  const blogDirPath = await getFolderContainingFile(
    getContentPathList(contentPaths),
    blogSourceRelative,
  );

  const blogSourceAbsolute = path.join(blogDirPath, blogSourceRelative);

  const {frontMatter, content, contentTitle, excerpt} =
    await parseBlogPostMarkdownFile(blogSourceAbsolute);

  const aliasedSource = aliasedSitePath(blogSourceAbsolute, siteDir);

  if (frontMatter.draft && process.env.NODE_ENV === 'production') {
    return undefined;
  }

  if (frontMatter.id) {
    logger.warn`name=${'id'} header option is deprecated in path=${blogSourceRelative} file. Please use name=${'slug'} option instead.`;
  }

  const parsedBlogFileName = parseBlogFileName(blogSourceRelative);

  async function getDate(): Promise<Date> {
    // Prefer user-defined date.
    if (frontMatter.date) {
      if (typeof frontMatter.date === 'string') {
        // Always treat dates as UTC by adding the `Z`
        return new Date(`${frontMatter.date}Z`);
      }
      // YAML only converts YYYY-MM-DD to dates and leaves others as strings.
      return frontMatter.date;
    } else if (parsedBlogFileName.date) {
      return parsedBlogFileName.date;
    }
    // Fallback to file create time
    return (await fs.stat(blogSourceAbsolute)).birthtime;
  }

  const date = await getDate();
  const formattedDate = formatBlogPostDate(i18n.currentLocale, date);

  const title = frontMatter.title ?? contentTitle ?? parsedBlogFileName.text;
  const description = frontMatter.description ?? excerpt ?? '';

  const slug = frontMatter.slug || parsedBlogFileName.slug;

  const permalink = normalizeUrl([baseUrl, routeBasePath, slug]);

  function getBlogEditUrl() {
    const blogPathRelative = path.relative(
      blogDirPath,
      path.resolve(blogSourceAbsolute),
    );

    if (typeof editUrl === 'function') {
      return editUrl({
        blogDirPath: posixPath(path.relative(siteDir, blogDirPath)),
        blogPath: posixPath(blogPathRelative),
        permalink,
        locale: i18n.currentLocale,
      });
    } else if (typeof editUrl === 'string') {
      const isLocalized = blogDirPath === contentPaths.contentPathLocalized;
      const fileContentPath =
        isLocalized && options.editLocalizedFiles
          ? contentPaths.contentPathLocalized
          : contentPaths.contentPath;

      const contentPathEditUrl = normalizeUrl([
        editUrl,
        posixPath(path.relative(siteDir, fileContentPath)),
      ]);

      return getEditUrl(blogPathRelative, contentPathEditUrl);
    }
    return undefined;
  }

  const tagsBasePath = normalizeUrl([
    baseUrl,
    routeBasePath,
    tagsRouteBasePath,
  ]);
  const authors = getBlogPostAuthors({authorsMap, frontMatter});

  return {
    id: slug,
    metadata: {
      permalink,
      editUrl: getBlogEditUrl(),
      source: aliasedSource,
      title,
      description,
      date,
      formattedDate,
      tags: normalizeFrontMatterTags(tagsBasePath, frontMatter.tags),
      readingTime: showReadingTime
        ? options.readingTime({
            content,
            frontMatter,
            defaultReadingTime,
          })
        : undefined,
      truncated: truncateMarker?.test(content) || false,
      authors,
      frontMatter,
    },
    content,
  };
}

export async function generateBlogPosts(
  contentPaths: BlogContentPaths,
  context: LoadContext,
  options: PluginOptions,
): Promise<BlogPost[]> {
  const {include, exclude} = options;

  if (!fs.existsSync(contentPaths.contentPath)) {
    return [];
  }

  const blogSourceFiles = await Globby(include, {
    cwd: contentPaths.contentPath,
    ignore: exclude,
  });

  const authorsMap = await getAuthorsMap({
    contentPaths,
    authorsMapPath: options.authorsMapPath,
  });

  const blogPosts = (
    await Promise.all(
      blogSourceFiles.map(async (blogSourceFile: string) => {
        try {
          return await processBlogSourceFile(
            blogSourceFile,
            contentPaths,
            context,
            options,
            authorsMap,
          );
        } catch (e) {
          logger.error`Processing of blog source file failed for path path=${blogSourceFile}.`;
          throw e;
        }
      }),
    )
  ).filter(Boolean) as BlogPost[];

  blogPosts.sort(
    (a, b) => b.metadata.date.getTime() - a.metadata.date.getTime(),
  );

  if (options.sortPosts === 'ascending') {
    return blogPosts.reverse();
  }
  return blogPosts;
}

export type LinkifyParams = {
  filePath: string;
  fileString: string;
} & Pick<
  BlogMarkdownLoaderOptions,
  'sourceToPermalink' | 'siteDir' | 'contentPaths' | 'onBrokenMarkdownLink'
>;

export function linkify({
  filePath,
  contentPaths,
  fileString,
  siteDir,
  sourceToPermalink,
  onBrokenMarkdownLink,
}: LinkifyParams): string {
  const {newContent, brokenMarkdownLinks} = replaceMarkdownLinks({
    siteDir,
    fileString,
    filePath,
    contentPaths,
    sourceToPermalink,
  });

  brokenMarkdownLinks.forEach((l) => onBrokenMarkdownLink(l));

  return newContent;
}
