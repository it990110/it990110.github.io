/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import Tweet from '@site/src/components/Tweet';
import Tweets, {type TweetItem} from '@site/src/data/tweets';

import clsx from 'clsx';

import styles from './styles.module.css';

const QUOTES = [
  {
    thumbnail: require('../data/quotes/douyin.webp'),
    name: '抖音号',
//     title: translate({
// //       id: 'gitcoins：52401884651',
//       description: 'Title of quote of Christopher Chedeau on the home page',
//     }),
    text: (
      <Translate
        id="gitcoins：52401884651"
        description="Quote of Christopher Chedeau on the home page">
        
      </Translate>
    ),
  },
  {
    thumbnail: require('../data/quotes/3.jpg'),
    name: '西瓜视频账号',
//     title: translate({
// //       id: 'gitcoins.title',
//       description: 'Title of quote of Christopher Chedeau on the home page',
//     }),
    text: (
      <Translate
        id="gitcoins"
        description="Quote of Christopher Chedeau on the home page">
        
      </Translate>
    ),
  },
//   {
//     thumbnail: require('../data/quotes/douyin.webp'),
//     name: '抖音号',
//     title: translate({
//       id: 'gitcoins：52401884651.title',
//       description: 'Title of quote of Christopher Chedeau on the home page',
//     }),
//     text: (
//       <Translate
//         id="gitcoins：52401884651"
//         description="Quote of Christopher Chedeau on the home page">
        
//       </Translate>
//     ),
//   },
];

function TweetsSection() {
  const tweetColumns: Array<Array<TweetItem>> = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>
          Loved by many engineers
        </h2>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt={translate({message: 'Docusaurus with Keytar'})}
                className={styles.heroLogo}
                src={useBaseUrl('/img/docusaurus_keytar.svg')}
                width="200"
                height="200"
              />
              <span
                className={styles.heroTitleTextHtml}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'homepage.hero.title',
                    message:
                      '<b>Digital currencies</b> are like a box of <b>chocolates</b>',
                    description:
                      'Home page hero title, can contain simple html tags',
                  }),
                }}
              />
            </h1>
            <div className={styles.indexCtas}>
              <Link className="button button--primary" to="/docs">
                <Translate>Get Started</Translate>
              </Link>
              <Link className="button button--info" to="https://docusaurus.new">
                <Translate>Playground</Translate>
              </Link>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl('/img/undraw_typewriter.svg')}
                  width="1009.54"
                  height="717.96"
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Powered by Markdown</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Save time and focus on your project&apos;s documentation.
                    Simply write docs and blog posts with Markdown/MDX and
                    Docusaurus will publish a set of static HTML files ready to
                    serve. You can even embed JSX components into your Markdown
                    thanks to MDX.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_react.svg')}
                  width="1108"
                  height="731.18"
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Built Using React</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Extend or customize your project&apos;s layout by reusing
                    React. Docusaurus can be extended while reusing the same
                    header and footer.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_around_the_world.svg')}
                  width="1137"
                  height="776.59"
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Ready for Translations</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Localization comes pre-configured. Use Crowdin to translate
                    your docs into over 70 languages.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="Document Versioning"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_version_control.svg')}
                  width="1038.23"
                  height="693.31"
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Document Versioning</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Support users on all versions of your project. Document
                    versioning helps you keep documentation in sync with project
                    releases.
                  </Translate>
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Document Search"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_algolia.svg')}
                  width="1137.97"
                  height="736.21"
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Content Search</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Make it easy for your community to find what they need in
                    your documentation. We proudly support Algolia documentation
                    search.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
        <TweetsSection />
        <div className={clsx(styles.section)}>
          <div className="container">
            <div className="row">
              {QUOTES.map((quote) => (
                <div className="col" key={quote.name}>
                  <div className="avatar avatar--vertical margin-bottom--sm">
                    <Image
                      alt={quote.name}
                      className="avatar__photo avatar__photo--xl"
                      img={quote.thumbnail}
                      style={{overflow: 'hidden'}}
                    />
                    <div className="avatar__intro padding-top--sm">
                      <div className="avatar__name">{quote.name}</div>
                      <small className="avatar__subtitle">{quote.title}</small>
                    </div>
                  </div>
                  <p className="text--center text--italic padding-horiz--md">
                    {quote.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
