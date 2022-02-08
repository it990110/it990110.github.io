"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16165],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64783:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return g},toc:function(){return h},default:function(){return v}});var n=a(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&c(e,a,t[a]);return e};const m={id:"migration-overview",title:"Migration overview",slug:"/migration"},d=void 0,g={unversionedId:"migration/migration-overview",id:"version-2.0.0-beta.15/migration/migration-overview",title:"Migration overview",description:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2.",source:"@site/versioned_docs/version-2.0.0-beta.15/migration/migration-overview.md",sourceDirName:"migration",slug:"/migration",permalink:"/zh-CN/docs/migration",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644313915,formattedLastUpdatedAt:"2022/2/8",frontMatter:{id:"migration-overview",title:"Migration overview",slug:"/migration"},sidebar:"docs",previous:{title:"Static site generation",permalink:"/zh-CN/docs/advanced/ssg"},next:{title:"Automated migration",permalink:"/zh-CN/docs/migration/automated"}},h=[{value:"Main differences",id:"main-differences",children:[],level:2},{value:"Docusaurus 1 structure",id:"docusaurus-1-structure",children:[],level:2},{value:"Docusaurus 2 structure",id:"docusaurus-2-structure",children:[],level:2},{value:"Migration process",id:"migration-process",children:[],level:2},{value:"Automated migration process",id:"automated-migration-process",children:[],level:2},{value:"Manual migration process",id:"manual-migration-process",children:[],level:2},{value:"Support",id:"support",children:[],level:2},{value:"Example migration PRs",id:"example-migration-prs",children:[],level:2}],f={toc:h};function v(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},f),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2."),(0,n.kt)("p",null,"We try to make this as easy as possible, and provide a migration cli."),(0,n.kt)("h2",p({},{id:"main-differences"}),"Main differences"),(0,n.kt)("p",null,"Docusaurus 1 is a pure documentation site generator, using React as a server-side template engine, but not loading React on the browser."),(0,n.kt)("p",null,"Docusaurus 2, rebuilt from the ground up, generates a single-page-application, using the full power of React in the browser. It allows for more customizability but preserved the best parts of Docusaurus 1 - easy to get started, versioned docs, and i18n."),(0,n.kt)("p",null,"Beyond that, Docusaurus 2 is a ",(0,n.kt)("strong",{parentName:"p"},"performant static site generator")," and can be used to create common content-driven websites (e.g. Documentation, Blogs, Product Landing and Marketing Pages, etc) extremely quickly."),(0,n.kt)("p",null,"While our main focus will still be helping you get your documentations right and well, it is possible to build any kind of website using Docusaurus 2 as it is just a React application. ",(0,n.kt)("strong",{parentName:"p"},"Docusaurus can now be used to build any website, not just documentation websites.")),(0,n.kt)("h2",p({},{id:"docusaurus-1-structure"}),"Docusaurus 1 structure"),(0,n.kt)("p",null,"Your Docusaurus 1 site should have the following structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 core\n    \u2502   \u2514\u2500\u2500 Footer.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 pages\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 siteConfig.js\n    \u2514\u2500\u2500 static\n")),(0,n.kt)("h2",p({},{id:"docusaurus-2-structure"}),"Docusaurus 2 structure"),(0,n.kt)("p",null,"After the migration, your Docusaurus 2 site could look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 css\n    \u2502   \u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 static\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 docusaurus.config.js\n")),(0,n.kt)("div",p({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This migration does not change the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder location, but Docusaurus v2 sites generally have the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder inside ",(0,n.kt)("inlineCode",{parentName:"p"},"/website")),(0,n.kt)("p",{parentName:"div"},"You are free to put the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder anywhere you want after having migrated to v2."))),(0,n.kt)("h2",p({},{id:"migration-process"}),"Migration process"),(0,n.kt)("p",null,"There are multiple things to migrate to obtain a fully functional Docusaurus 2 website:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"packages"),(0,n.kt)("li",{parentName:"ul"},"cli commands"),(0,n.kt)("li",{parentName:"ul"},"site configuration"),(0,n.kt)("li",{parentName:"ul"},"markdown files"),(0,n.kt)("li",{parentName:"ul"},"sidebars file"),(0,n.kt)("li",{parentName:"ul"},"pages, components and CSS"),(0,n.kt)("li",{parentName:"ul"},"versioned docs"),(0,n.kt)("li",{parentName:"ul"},"i18n support \ud83d\udea7")),(0,n.kt)("h2",p({},{id:"automated-migration-process"}),"Automated migration process"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/migration/automated"}),"migration cli")," will handle many things of the migration for you."),(0,n.kt)("p",null,"However, some parts can't easily be automated, and you will have to fallback to the manual process."),(0,n.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"We recommend running the migration cli, and complete the missing parts thanks to the manual migration process."))),(0,n.kt)("h2",p({},{id:"manual-migration-process"}),"Manual migration process"),(0,n.kt)("p",null,"Some parts of the migration can't be automated (particularly the pages), and you will have to migrate them manually."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/migration/manual"}),"manual migration guide")," will give you all the manual steps."),(0,n.kt)("h2",p({},{id:"support"}),"Support"),(0,n.kt)("p",null,"For any questions, you can ask in the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://discord.gg/C3P6CxMMxY"}),(0,n.kt)("inlineCode",{parentName:"a"},"#migration-v1-to-v2")," Discord channel"),"."),(0,n.kt)("p",null,"Feel free to tag ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/slorber"}),"@slorber")," in any migration PRs if you would like us to have a look."),(0,n.kt)("p",null,"We also have volunteers willing to ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/1834"}),"help you migrate your v1 site"),"."),(0,n.kt)("h2",p({},{id:"example-migration-prs"}),"Example migration PRs"),(0,n.kt)("p",null,"You might want to refer to our migration PRs for ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/create-react-app/pull/7785"}),"Create React App")," and ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/flux/pull/471"}),"Flux")," as examples of how a migration for a basic Docusaurus v1 site can be done."))}v.isMDXComponent=!0}}]);