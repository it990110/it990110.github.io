/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import type {Props as Tweet} from '../../components/Tweet';

export interface TweetItem extends Tweet {
  showOnHomepage: boolean;
}

const TWEETS: TweetItem[] = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'acemarke',
    name: 'Mark Erikson',
    date: 'Oct 26, 2021',
    avatar:
      'img/profile_images/tFKLiJI5_400x400.jpg',
    content: (
      <>
        We&apos;ve been using Docusaurus for all the Redux org docs sites for
        the last couple years, and it&apos;s great! We&apos;ve been able to
        focus on content, customize some presentation and features, and It Just
        Works.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/arcanis/status/1351620354561732608',
    handle: 'arcanis',
    name: 'Maël',
    date: 'Jan 20, 2021',
    avatar:
      'img/profile_images/7hPZqoJd_400x400.jpg',
    content: (
      <>
        I&apos;ve used Docusaurus for two websites this year, and I&apos;ve been
        very happy about the v2. Looks good, and simple to setup.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/maxlynch/status/1375113166007455748',
    handle: 'maxlynch',
    name: 'Max Lynch',
    date: 'Mar 25, 2021',
    avatar:
      'img/profile_images/bln98FNj_400x400.jpg',
    content: (
      <>
        Docusaurus v2 doubles as a really nice little static site generator tool
        for content-focused sites, love it 👏
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/supabase/status/1328960757149671425',
    handle: 'supabase',
    name: 'Supabase',
    date: 'Nov 18, 2020',
    avatar:
      'img/profile_images/jN-wuufb_400x400.jpg',
    content: (
      <>
        We&apos;ve been using V2 since January and it has been great - we spend
        less time building documentation and more time building 🛳
        <br />
        <br />
        Thanks @docusaurus team 🦖
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/paularmstrong/status/1387059593373700100',
    handle: 'paularmstrong',
    name: 'Paul Armstrong',
    date: 'Apr 27, 2021',
    avatar:
      'img/profile_images/C4KgET17_400x400.jpg',
    content: (
      <>
        Continue to be impressed and excited about Docusaurus v2 alpha releases.
        Already using the sidebar items generator to help monorepo workspace
        devs create their own doc pages without any configuration needed.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/sanketsahu/status/1328677366642528257',
    handle: 'Sanket Sahu',
    name: 'sanketsahu',
    date: 'Nov 17, 2020',
    avatar:
      'img/profile_images/aNZZgZME_400x400.jpg',
    content: <>.@docusaurus ❤️</>,
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/debs_obrien/status/1374615572298801155',
    handle: "Debbie O'Brien",
    name: 'debs_obrien',
    date: 'Mar 24, 2021',
    avatar:
      'img/profile_images/JLIVJ-TC_400x400.jpg',
    content: (
      <>
        Been doing a lot of work with @docusaurus lately and I have to say it is
        really fun to work with. A lot of really cool features. I love that you
        can easily reuse content by creating a markdown file and importing it as
        a component. 🔥
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/Dr_Electron/status/1443635328376508433',
    handle: 'Dr_Electron',
    name: 'Dr.Electron',
    date: 'Oct 11, 2021',
    avatar:
      'img/profile_images/nCWpKbYh_400x400.jpg',
    content: (
      <>
        The #IOTA wiki is now part of the @docusaurus showcase. We even have the
        honor of being a favorite. We are really happy that we found this
        project. It helped us a lot to improve the documentation. And we still
        have a lot of plans with things like tutorials, versioning and i8n.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/kentcdodds/status/1323806816019468288',
    handle: 'kentcdodds',
    name: 'Kent C. Dodds',
    date: 'Nov 4, 2020',
    avatar:
      'img/profile_images/IDffhy4i_400x400.jpg',
    content: (
      <>
        http://testing-library.com just got a nice update! We&apos;re now on the
        latest version of @docusaurus thanks to @matanbobi, @TensorNo, and
        @nickemccurdy 💙
        <br />
        <br />
        My favorite new feature: dark mode!! 🌑/☀️
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/bantg/status/1463608561368457225',
    handle: 'bantg',
    name: 'banteg',
    date: 'Nov 25, 2021',
    avatar:
      'img/profile_images/fLQOnMbp_400x400.jpg',
    content: <>I like docusaurus much more, it&apos;s so snappy.</>,
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/swyx/status/1418405515684581378',
    handle: 'swyx',
    name: 'swyx',
    date: 'Jul 23, 2021',
    avatar:
      'img/profile_images/iM2Hf8du_400x400.jpg',
    content: (
      <>
        Happy to share Temporal&apos;s first open source sponsorship — of
        @docusaurus!
        <br />
        <br />
        @temporalio uses it for http://docs.temporal.io, and it has been a huge
        boon to our docs team. @sebastienlorber is an incredible steward of the
        project, support it if you can!
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/rachelnabors/status/1478490902037467137',
    handle: 'rachelnabors',
    name: "R 'Nearest' Nabors 💙",
    date: 'Jan 5, 2022',
    avatar:
      'img/profile_images/7soY-vhs_400x400.jpg',
    content: <>I hear @docusaurus is a good tool for that!</>,
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/dabit3/status/1394685348375052295',
    handle: 'dabit3',
    name: 'Nader Dabit',
    date: 'May 19, 2021',
    avatar:
      'img/profile_images/7soY-vhs_400x400.jpg',
    content: (
      <>
        I did try Docusaurus, and I really liked it! Still investigating various
        options but it&apos;s probably at the top of my list for sure
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/johnny_reilly/status/1469238609266028545',
    handle: 'johnny_reilly',
    name: 'John Reilly',
    date: 'Dec 10, 2021',
    avatar:
      'img/profile_images/rPdTN64o_400x400.jpeg',
    content: (
      <>
        I ❤️ @docusaurus - it makes it so easy to spin up docs, blogs and simple
        websites. I&apos;ve used it to:
        <br />
        <br /> ✅ Replatform my blog with GitHub pages <br />
        ✅ Build a website for a local business <br />✅ Build internal facing
        blog/docs sites with @AzureStaticApps
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/tinkertim/status/1423358665726304260',
    handle: 'tinkertim',
    name: 'Tim Post 💉💉💉',
    date: 'Aug 6, 2021',
    avatar:
      'img/profile_images/59xAQG4y_400x400.jpg',
    content: (
      <>
        Docusaurus is mind-bendingly flexible. <br />
        <br />
        &quot;Wait! We need to have two products documented on the same site and
        both need to be translated into multiple languages!&quot;
        <br />
        <br /> ... and that&apos;s actually easy. Loving it!
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/sebastienlorber/status/1321784071815680000',
    handle: 'sebastienlorber',
    name: 'Sebastien Lorber',
    date: 'Oct 29, 2020',
    avatar:
      'img/profile_images/gKAusMeX_400x400.jpeg',
    content: (
      <>
        🥳🎊🥳🎊🥳🎊🥳🎊 The @reactnative website just migrated to @docusaurus
        v2
        <br />
        Some obvious changes: <br />
        🌔 Dark mode <br />
        ⚡️ SPA navigation / prefetching <br />
        🧐 @algolia DocSearch v3 <br />
        💥 @mdx_js enable many new possibilities <br />
        <br />
        Check it out: http://reactnative.dev
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/iansu/status/1184149586048245760',
    handle: 'iansu',
    name: 'Ian Sutherland',
    date: 'Oct 16, 2019',
    avatar:
      'img/profile_images/yzDVUVKY_400x400.jpg',
    content: (
      <>
        We just updated the Create React App docs to Docusaurus v2. Now with
        dark mode! 😎
        <br />
        <br />
        Thanks to the @docusaurus team for their help! ❤️
        <br />
        <br />
        https://create-react-app.dev
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/mweststrate/status/1181276252293853186',
    handle: 'mweststrate',
    name: 'Michel Weststrate',
    date: 'Oct 8, 2019',
    avatar:
      'img/profile_images/NYGFeR-K_400x400.jpg',
    content: (
      <>
        New #mobx docs are online! More modern, fixing many UI issues.
        <br />
        <br />
        👏 @cloverich did the awesome job of migrating from ancient gitbook
        -&gt; @docusaurus! 👏 <br />
        <br />
        No real content updates yet, but contributing and publishing has become
        way easier
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/verdaccio_npm/status/1420187249145118722',
    handle: 'verdaccio_npm',
    name: 'verdaccio',
    date: 'Jul 28, 2021',
    avatar:
      'img/profile_images/4khdTyVZ_400x400.png',
    content: (
      <>
        The new website has landed 🚀 powered by @docusaurus v2 and made by
        @_semoal kudos to him 👏 #verdaccio #nodejs awesome contribution ❤️‍🔥
        (video made with react remotion @JNYBGR ) all Open Source and hosted on
        @Netlify https://verdaccio.org
      </>
    ),
    showOnHomepage: false,
  },

  {
    url: 'https://twitter.com/yangshunz/status/1284536949718478848',
    handle: 'yangshunz',
    name: 'Yangshun Tay',
    date: 'Jul 19, 2020',
    avatar:
      'img/profile_images/3kuZJz5j_400x400.jpg',
    content: (
      <>
        I made a @docusaurus website for answers to the H5BP Front End Interview
        Questions! Hopefully it makes the browsing experience easier -
        https://frontendinterviewhandbook.com
      </>
    ),
    showOnHomepage: false,
  },

  {
    url: 'https://twitter.com/pierregillesl/status/1372839188698001408',
    handle: 'pierregillesl',
    name: 'Pierre-Gilles Leymarie',
    date: 'Mar 19, 2021',
    avatar:
      'img/profile_images/pg5XF8rA_400x400.jpg',
    content: (
      <>
        Just upgraded our website to @docusaurus latest with
        internationalization support 🥳
        <br />
        <br />
        Before that, we had to build 2 separate versions of the website to get
        it in English + French.
        <br />
        <br />
        Now, it&apos;s working out of the box, with proper meta tags for SEO 👌
      </>
    ),
    showOnHomepage: false,
  },
  {
    url: 'https://twitter.com/biantris_/status/1480259279487741953',
    handle: 'biantris_',
    name: 'biazita',
    date: 'Jan 10, 2022',
    avatar:
      'img/profile_images/UCzm0Zye_400x400.jpg',
    content: (
      <>
        Today I tried @docusaurus in a project, I really like the ease and speed
        of developing with it \o/
      </>
    ),
    showOnHomepage: false,
  },
];

export default TWEETS;
