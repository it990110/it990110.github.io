"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15524],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81737:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(27378),o="tableOfContentsInline_eBKl",i=n(70986);var r=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return a.createElement("div",{className:o},a.createElement(i.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null}))}},70986:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(27378),o=n(46294),i=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({toc:e,className:t,linkClassName:n,isChild:o}){return e.length?a.createElement("ul",{className:o?void 0:t},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}function p(e){var t=e,{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:p="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:g}=t,f=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const h=(0,o.LU)(),v=null!=m?m:h.tableOfContents.minHeadingLevel,k=null!=g?g:h.tableOfContents.maxHeadingLevel,b=(0,o.DA)({toc:n,minHeadingLevel:v,maxHeadingLevel:k}),N=(0,a.useMemo)((()=>{if(p&&d)return{linkClassName:p,linkActiveClassName:d,minHeadingLevel:v,maxHeadingLevel:k}}),[p,d,v,k]);return(0,o.Si)(N),a.createElement(u,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))l.call(t,n)&&c(e,n,t[n]);return e})({toc:b,className:i,linkClassName:p},f))}},33541:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return h},default:function(){return k}});var a=n(35318),o=n(81737),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"configuration",title:"Configuration"},g=void 0,f={unversionedId:"configuration",id:"version-2.0.0-beta.16/configuration",title:"Configuration",description:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site.",source:"@site/versioned_docs/version-2.0.0-beta.16/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/configuration.md",tags:[],version:"2.0.0-beta.16",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Playground",permalink:"/docs/playground"}},h=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",children:[{value:"Site metadata",id:"site-metadata",children:[],level:3},{value:"Deployment configurations",id:"deployment-configurations",children:[],level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",children:[],level:3},{value:"Custom configurations",id:"custom-configurations",children:[],level:3}],level:2},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",children:[],level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",children:[],level:2}],v={toc:h};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),p),r(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."),(0,a.kt)("p",null,"Keeping a well-maintained ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."),(0,a.kt)("h2",d({},{id:"what-goes-into-a-docusaurusconfigjs"}),"What goes into a ",(0,a.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),(0,a.kt)("p",null,"You should not have to write your ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),(0,a.kt)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),(0,a.kt)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),(0,a.kt)(o.Z,{toc:h[0].children,mdxType:"TOCInline"}),(0,a.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/api/docusaurus-config"}),(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),(0,a.kt)("h3",d({},{id:"site-metadata"}),"Site metadata"),(0,a.kt)("p",null,"Site metadata contains the essential global metadata such as ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,a.kt)("p",null,"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),(0,a.kt)("h3",d({},{id:"deployment-configurations"}),"Deployment configurations"),(0,a.kt)("p",null,"Deployment configurations such as ",(0,a.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"organizationName"),", and optionally ",(0,a.kt)("inlineCode",{parentName:"p"},"deploymentBranch")," are used when you deploy your site with the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,a.kt)("p",null,"It is recommended to check the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/deployment"}),"deployment docs")," for more information."),(0,a.kt)("h3",d({},{id:"theme-plugin-and-preset-configurations"}),"Theme, plugin, and preset configurations"),(0,a.kt)("p",null,"List the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/using-plugins#using-themes"}),"themes"),", ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/using-plugins"}),"plugins"),", and ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/using-plugins#using-presets"}),"presets")," for your site in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,a.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Docusaurus supports ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/using-plugins#module-shorthands"}),(0,a.kt)("strong",{parentName:"a"},"module shorthands")),", allowing you to simplify the above configuration as:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n")))),(0,a.kt)("p",null,"They can also be loaded from local directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),(0,a.kt)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n")),(0,a.kt)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," refers to ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," refers to ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"presets: [['classic', {...}]]")," shorthand works as well."))),(0,a.kt)("p",null,"For further help configuring themes, plugins, and presets, see ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/using-plugins"}),"Using Plugins"),"."),(0,a.kt)("h3",d({},{id:"custom-configurations"}),"Custom configurations"),(0,a.kt)("p",null,"Docusaurus guards ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",(0,a.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),(0,a.kt)("h2",d({},{id:"accessing-configuration-from-components"}),"Accessing configuration from components"),(0,a.kt)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,a.kt)("inlineCode",{parentName:"p"},"siteConfig"),"."),(0,a.kt)("p",null,"Basic example:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),(0,a.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."))),(0,a.kt)("h2",d({},{id:"customizing-babel-configuration"}),"Customizing Babel Configuration"),(0,a.kt)("p",null,"For new Docusaurus projects, we automatically generated a ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),(0,a.kt)("p",null,"Most of the time, this configuration will work just fine. If you want to customize your babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."))}k.isMDXComponent=!0}}]);