"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8394],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return g},default:function(){return f}});var a=n(35318),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(r)for(var n of r(t))u.call(t,n)&&d(e,n,t[n]);return e};const p={sidebar_position:0,id:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},m="docusaurus.config.js",k={unversionedId:"api/docusaurus.config.js",id:"version-2.0.0-beta.15/api/docusaurus.config.js",title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/docusaurus.config.js.md",sourceDirName:"api",slug:"/api/docusaurus-config",permalink:"/docs/api/docusaurus-config",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/docusaurus.config.js.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644456776,formattedLastUpdatedAt:"2/10/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},sidebar:"api",previous:{title:"Client API",permalink:"/docs/docusaurus-core"},next:{title:"Plugin Method References",permalink:"/docs/api/plugin-methods/"}},g=[{value:"Overview",id:"overview",children:[],level:2},{value:"Required fields",id:"required-fields",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>url</code>",id:"url",children:[],level:3},{value:"<code>baseUrl</code>",id:"baseurl",children:[],level:3}],level:2},{value:"Optional fields",id:"optional-fields",children:[{value:"<code>favicon</code>",id:"favicon",children:[],level:3},{value:"<code>trailingSlash</code>",id:"trailing-slash",children:[],level:3},{value:"<code>i18n</code>",id:"i18n",children:[],level:3},{value:"<code>noIndex</code>",id:"noindex",children:[],level:3},{value:"<code>onBrokenLinks</code>",id:"onbrokenlinks",children:[],level:3},{value:"<code>onBrokenMarkdownLinks</code>",id:"onbrokenmarkdownlinks",children:[],level:3},{value:"<code>onDuplicateRoutes</code>",id:"onduplicateroutes",children:[],level:3},{value:"<code>tagline</code>",id:"tagline",children:[],level:3},{value:"<code>organizationName</code>",id:"organizationname",children:[],level:3},{value:"<code>projectName</code>",id:"projectname",children:[],level:3},{value:"<code>deploymentBranch</code>",id:"deploymentbranch",children:[],level:3},{value:"<code>githubHost</code>",id:"githubhost",children:[],level:3},{value:"<code>githubPort</code>",id:"githubPort",children:[],level:3},{value:"<code>themeConfig</code>",id:"themeconfig",children:[],level:3},{value:"<code>plugins</code>",id:"plugins",children:[],level:3},{value:"<code>themes</code>",id:"themes",children:[],level:3},{value:"<code>presets</code>",id:"presets",children:[],level:3},{value:"<code>customFields</code>",id:"customfields",children:[],level:3},{value:"<code>staticDirectories</code>",id:"staticdirectories",children:[],level:3},{value:"<code>scripts</code>",id:"scripts",children:[],level:3},{value:"<code>clientModules</code>",id:"clientmodules",children:[],level:3},{value:"<code>ssrTemplate</code>",id:"ssrtemplate",children:[],level:3},{value:"<code>stylesheets</code>",id:"stylesheets",children:[],level:3},{value:"<code>titleDelimiter</code>",id:"titledelimiter",children:[],level:3},{value:"<code>baseUrlIssueBanner</code>",id:"baseurlissuebanner",children:[],level:3}],level:2}],h={toc:g};function f(e){var t,i=e,{components:d}=i,p=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(i,["components"]);return(0,a.kt)("wrapper",(t=c(c({},h),p),l(t,o({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"docusaurusconfigjs"}),(0,a.kt)("inlineCode",{parentName:"h1"},"docusaurus.config.js")),(0,a.kt)("h2",c({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," contains configurations for your site and is placed in the root directory of your site."),(0,a.kt)("p",null,"It usually exports a site configuration object:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // site config...\n};\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Config files also support config creator functions and async code."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = function configCreator() {\n  return {\n    // site config...\n  };\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = async function configCreatorAsync() {\n  return {\n    // site config...\n  };\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = Promise.resolve({\n  // site config...\n});\n"))),(0,a.kt)("h2",c({},{id:"required-fields"}),"Required fields"),(0,a.kt)("h3",c({},{id:"title"}),(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Title for your website."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'Docusaurus',\n};\n")),(0,a.kt)("h3",c({},{id:"url"}),(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"URL for your website. This can also be considered the top-level hostname. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://facebook.github.io")," is the URL of ",(0,a.kt)("a",c({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"https://facebook.github.io/metro/"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://docusaurus.io")," is the URL for ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docusaurus.io."}),"https://docusaurus.io.")," This field is related to the ",(0,a.kt)("a",c({parentName:"p"},{href:"#baseurl"}),"baseUrl")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  url: 'https://docusaurus.io',\n};\n")),(0,a.kt)("h3",c({},{id:"baseurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"baseUrl")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Base URL for your site. This can also be considered the path after the host. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/metro/")," is the base URL of ",(0,a.kt)("a",c({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"https://facebook.github.io/metro/"),". For URLs that have no path, the baseUrl should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". This field is related to the ",(0,a.kt)("a",c({parentName:"p"},{href:"#url"}),"url")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  baseUrl: '/',\n};\n")),(0,a.kt)("h2",c({},{id:"optional-fields"}),"Optional fields"),(0,a.kt)("h3",c({},{id:"favicon"}),(0,a.kt)("inlineCode",{parentName:"h3"},"favicon")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | undefined"))),(0,a.kt)("p",null,"Path to your site favicon. For example, if your favicon is in ",(0,a.kt)("inlineCode",{parentName:"p"},"static/img/favicon.ico"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  favicon: '/img/favicon.ico',\n};\n")),(0,a.kt)("h3",c({},{id:"trailing-slash"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trailingSlash")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | undefined"))),(0,a.kt)("p",null,"Allow to customize the presence/absence of a trailing slash at the end of URLs/links, and how static HTML files are generated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," (default): keeps URLs untouched, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc/index.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": add trailing slashes to URLs/links, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc/index.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),": remove trailing slashes from URLs/links, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md"))),(0,a.kt)("div",c({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Each static hosting provider serves static files differently (this behavior may even change over time)."),(0,a.kt)("p",{parentName:"div"},"Refer to the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/deployment"}),"deployment guide")," and ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/slorber/trailing-slash-guide"}),"slorber/trailing-slash-guide")," to choose the appropriate setting."))),(0,a.kt)("h3",c({},{id:"i18n"}),(0,a.kt)("inlineCode",{parentName:"h3"},"i18n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("p",null,"The i18n configuration object to ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/i18n/introduction"}),"localize your site"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n    localeConfigs: {\n      en: {\n        label: 'English',\n        direction: 'ltr',\n        htmlLang: 'en-US',\n      },\n      fr: {\n        label: 'Fran\xe7ais',\n        direction: 'ltr',\n        htmlLang: 'fr-FR',\n      },\n    },\n  },\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": the label to use for this locale"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"ltr")," (default) or ",(0,a.kt)("inlineCode",{parentName:"li"},"rtl")," (for ",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/rtl"}),"right-to-left languages")," like Arabic, Hebrew, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"htmlLang"),": BCP 47 language tag to use in ",(0,a.kt)("inlineCode",{parentName:"li"},'<html lang="...">')," and in ",(0,a.kt)("inlineCode",{parentName:"li"},'<link ... hreflang="...">'))),(0,a.kt)("h3",c({},{id:"noindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"noIndex")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("p",null,"This option adds ",(0,a.kt)("inlineCode",{parentName:"p"},'<meta name="robots" content="noindex, nofollow">')," in pages, to tell search engines to avoid indexing your site (more information ",(0,a.kt)("a",c({parentName:"p"},{href:"https://moz.com/learn/seo/robots-meta-directives"}),"here"),")."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  noIndex: true, // Defaults to `false`\n};\n")),(0,a.kt)("h3",c({},{id:"onbrokenlinks"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onBrokenLinks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus, when it detects any broken link."),(0,a.kt)("p",null,"By default, it throws an error, to ensure you never ship any broken link, but you can lower this security if needed."),(0,a.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The broken links detection is only available for a production build (",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus build"),")."))),(0,a.kt)("h3",c({},{id:"onbrokenmarkdownlinks"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onBrokenMarkdownLinks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus, when it detects any broken markdown link."),(0,a.kt)("p",null,"By default, it prints a warning, to let you know about your broken markdown link, but you can change this security if needed."),(0,a.kt)("h3",c({},{id:"onduplicateroutes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDuplicateRoutes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus when it detects any ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/creating-pages#duplicate-routes"}),"duplicate routes"),"."),(0,a.kt)("p",null,"By default, it displays a warning after you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,a.kt)("h3",c({},{id:"tagline"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tagline")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The tagline for your website."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  tagline:\n    'Docusaurus makes it easy to maintain Open Source documentation websites.',\n};\n")),(0,a.kt)("h3",c({},{id:"organizationname"}),(0,a.kt)("inlineCode",{parentName:"h3"},"organizationName")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The GitHub user or organization that owns the repository. Used by the deployment command."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // Docusaurus' organization is facebook\n  organizationName: 'facebook',\n};\n")),(0,a.kt)("h3",c({},{id:"projectname"}),(0,a.kt)("inlineCode",{parentName:"h3"},"projectName")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The name of the GitHub repository. Used by the deployment command."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  projectName: 'docusaurus',\n};\n")),(0,a.kt)("h3",c({},{id:"deploymentbranch"}),(0,a.kt)("inlineCode",{parentName:"h3"},"deploymentBranch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The name of the branch to deploy the static files to. Used by the deployment command."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  deploymentBranch: 'gh-pages',\n};\n")),(0,a.kt)("h3",c({},{id:"githubhost"}),(0,a.kt)("inlineCode",{parentName:"h3"},"githubHost")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The hostname of your server. Useful if you are using GitHub Enterprise."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  githubHost: 'github.com',\n};\n")),(0,a.kt)("h3",c({},{id:"githubPort"}),(0,a.kt)("inlineCode",{parentName:"h3"},"githubPort")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The port of your server. Useful if you are using GitHub Enterprise."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  githubPort: '22',\n};\n")),(0,a.kt)("h3",c({},{id:"themeconfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/api/themes/configuration"}),"theme configuration")," object, to customize your site UI like navbar, footer."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    hideableSidebar: false,\n    autoCollapseSidebarCategories: false,\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n      switchConfig: {\n        darkIcon: '\ud83c\udf19',\n        lightIcon: '\\u2600',\n        // React inline style object\n        // see https://reactjs.org/docs/dom-elements.html#style\n        darkIconStyle: {\n          marginLeft: '2px',\n        },\n        lightIconStyle: {\n          marginLeft: '1px',\n        },\n      },\n    },\n    navbar: {\n      title: 'Site Title',\n      logo: {\n        alt: 'Site Logo',\n        src: 'img/logo.svg',\n        width: 32,\n        height: 32,\n      },\n      items: [\n        {\n          to: 'docs/docusaurus.config.js',\n          activeBasePath: 'docs',\n          label: 'docusaurus.config.js',\n          position: 'left',\n        },\n        // ... other links\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Docs',\n              to: 'docs/doc1',\n            },\n          ],\n        },\n        // ... other links\n      ],\n      logo: {\n        alt: 'Facebook Open Source Logo',\n        src: 'https://docusaurus.io/img/oss_logo.png',\n        width: 160,\n        height: 51,\n      },\n      copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here\n    },\n  },\n};\n")),(0,a.kt)("h3",c({},{id:"plugins"}),(0,a.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"type PluginConfig = string | [string, any] | PluginModule | [PluginModule, any];\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/api/plugin-methods/"}),"plugin method references")," for the shape of a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    'docusaurus-plugin-awesome',\n    ['docusuarus-plugin-confetti', {fancy: false}],\n    () => ({\n      postBuild() {\n        console.log('Build finished');\n      },\n    }),\n  ],\n};\n")),(0,a.kt)("h3",c({},{id:"themes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"themes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,a.kt)("h3",c({},{id:"presets"}),(0,a.kt)("inlineCode",{parentName:"h3"},"presets")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PresetConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"type PresetConfig = string | [string, any];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [],\n};\n")),(0,a.kt)("h3",c({},{id:"customfields"}),(0,a.kt)("inlineCode",{parentName:"h3"},"customFields")),(0,a.kt)("p",null,"Docusaurus guards ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add a custom field, define it on ",(0,a.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  customFields: {\n    admin: 'endi',\n    superman: 'lol',\n  },\n};\n")),(0,a.kt)("p",null,"Attempting to add unknown fields in the config will lead to errors during build time:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"Error: The field(s) 'foo', 'bar' are not recognized in docusaurus.config.js\n")),(0,a.kt)("h3",c({},{id:"staticdirectories"}),(0,a.kt)("inlineCode",{parentName:"h3"},"staticDirectories")),(0,a.kt)("p",null,"An array of paths, relative to the site's directory or absolute. Files under these paths will be copied to the build output as-is."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  staticDirectories: ['static'],\n};\n")),(0,a.kt)("h3",c({},{id:"scripts"}),(0,a.kt)("inlineCode",{parentName:"h3"},"scripts")),(0,a.kt)("p",null,"An array of scripts to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags will be inserted in the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>"),"."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," added here are render-blocking so you might want to add ",(0,a.kt)("inlineCode",{parentName:"p"},"async: true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"defer: true")," to the objects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  scripts: [\n    // String format.\n    'https://docusaurus.io/script.js',\n    // Object format.\n    {\n      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',\n      async: true,\n    },\n  ],\n};\n")),(0,a.kt)("h3",c({},{id:"clientmodules"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clientModules")),(0,a.kt)("p",null,"An array of client modules to load globally on your site:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  clientModules: [\n    require.resolve('./mySiteGlobalJs.js'),\n    require.resolve('./mySiteGlobalCss.css'),\n  ],\n};\n")),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/api/plugin-methods/lifecycle-apis#getClientModules"}),(0,a.kt)("inlineCode",{parentName:"a"},"getClientModules()")),"."),(0,a.kt)("h3",c({},{id:"ssrtemplate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ssrTemplate")),(0,a.kt)("p",null,"An HTML template written in ",(0,a.kt)("a",c({parentName:"p"},{href:"https://eta.js.org/docs/syntax#syntax-overview"}),"Eta's syntax")," that will be used to render your application. This can be used to set custom attributes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," tags, additional ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," tags, customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewport"),", etc. Please note that Docusaurus will rely on the template to be correctly structured in order to function properly, once you do customize it, you will have to make sure that your template is compliant with the requirements from ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),'module.exports = {\n  ssrTemplate: `<!DOCTYPE html>\n<html <%~ it.htmlAttributes %>>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="generator" content="Docusaurus v<%= it.version %>">\n    <% if (it.noIndex) { %>\n      <meta name="robots" content="noindex, nofollow" />\n    <% } %>\n    <%~ it.headTags %>\n    <% it.metaAttributes.forEach((metaAttribute) => { %>\n      <%~ metaAttribute %>\n    <% }); %>\n    <% it.stylesheets.forEach((stylesheet) => { %>\n      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />\n    <% }); %>\n    <% it.scripts.forEach((script) => { %>\n      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">\n    <% }); %>\n  </head>\n  <body <%~ it.bodyAttributes %>>\n    <%~ it.preBodyTags %>\n    <div id="__docusaurus">\n      <%~ it.appHtml %>\n    </div>\n    <% it.scripts.forEach((script) => { %>\n      <script src="<%= it.baseUrl %><%= script %>"><\/script>\n    <% }); %>\n    <%~ it.postBodyTags %>\n  </body>\n</html>`,\n};\n')),(0,a.kt)("h3",c({},{id:"stylesheets"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stylesheets")),(0,a.kt)("p",null,"An array of CSS sources to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," tags will be inserted in the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  stylesheets: [\n    // String format.\n    'https://docusaurus.io/style.css',\n    // Object format.\n    {\n      href: 'http://mydomain.com/style.css',\n    },\n  ],\n};\n")),(0,a.kt)("h3",c({},{id:"titledelimiter"}),(0,a.kt)("inlineCode",{parentName:"h3"},"titleDelimiter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"A string that will be used as title delimiter in the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"<title>")," tag."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  titleDelimiter: '\ud83e\udd96', // Defaults to `|`\n};\n")),(0,a.kt)("h3",c({},{id:"baseurlissuebanner"}),(0,a.kt)("inlineCode",{parentName:"h3"},"baseUrlIssueBanner")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("p",null,"When enabled, will show a banner in case your site can't load its CSS or JavaScript files, which is a very common issue, often related to a wrong ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," in site config."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  baseUrlIssueBanner: true, // Defaults to `true`\n};\n")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"baseUrlIssueBanner",src:n(47098).Z,width:"1864",height:"1384"})),(0,a.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This banner needs to inline CSS / JS in case all asset loading fails due to wrong base URL."),(0,a.kt)("p",{parentName:"div"},"If you have a strict ",(0,a.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}),"Content Security Policy"),", you should rather disable it."))))}f.isMDXComponent=!0},47098:function(e,t,n){t.Z=n.p+"assets/images/baseUrlIssueBanner-3292a9164bf77c06a723e8d3ddfe66c0.png"}}]);