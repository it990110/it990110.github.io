"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80387],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return v},default:function(){return k}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&p(e,n,t[n]);return e};const u={id:"migration-translated-sites",title:"Translated sites",slug:"/migration/translated-sites"},m=void 0,h={unversionedId:"migration/migration-translated-sites",id:"version-2.0.0-beta.15/migration/migration-translated-sites",title:"Translated sites",description:"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2.",source:"@site/versioned_docs/version-2.0.0-beta.15/migration/migration-translated-sites.md",sourceDirName:"migration",slug:"/migration/translated-sites",permalink:"/zh-CN/docs/2.0.0-beta.15/migration/translated-sites",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2022/2/23",frontMatter:{id:"migration-translated-sites",title:"Translated sites",slug:"/migration/translated-sites"},sidebar:"docs",previous:{title:"Versioned sites",permalink:"/zh-CN/docs/2.0.0-beta.15/migration/versioned-sites"}},v=[{value:"i18n differences",id:"i18n-differences",children:[{value:"Different filesystem paths",id:"different-filesystem-paths",children:[],level:3},{value:"Updated translation APIs",id:"updated-translation-apis",children:[],level:3},{value:"Stricter Markdown parser",id:"stricter-markdown-parser",children:[],level:3}],level:2},{value:"Migration strategies",id:"migration-strategies",children:[{value:"Create a new Crowdin project",id:"create-a-new-crowdin-project",children:[],level:3},{value:"Use the existing Crowdin project",id:"use-the-existing-crowdin-project",children:[],level:3},{value:"Use Git instead of Crowdin",id:"use-git-instead-of-crowdin",children:[],level:3}],level:2}],g={toc:v};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},g),p),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2."),(0,a.kt)("h2",c({},{id:"i18n-differences"}),"i18n differences"),(0,a.kt)("p",null,"Docusaurus v2 i18n is conceptually quite similar to Docusaurus v1 i18n with a few differences."),(0,a.kt)("p",null,"It is not tightly coupled to Crowdin, and you can use Git or another SaaS instead."),(0,a.kt)("h3",c({},{id:"different-filesystem-paths"}),"Different filesystem paths"),(0,a.kt)("p",null,"On Docusaurus v2, localized content is generally found at ",(0,a.kt)("inlineCode",{parentName:"p"},"website/i18n/[locale]"),"."),(0,a.kt)("p",null,"Docusaurus v2 is modular based on a plugin system, and each plugin is responsible to manage its own translations."),(0,a.kt)("p",null,"Each plugin has its own i18n subfolder, like: ",(0,a.kt)("inlineCode",{parentName:"p"},"website/i18n/fr/docusaurus-plugin-content-blog")),(0,a.kt)("h3",c({},{id:"updated-translation-apis"}),"Updated translation APIs"),(0,a.kt)("p",null,"With Docusaurus v1, you translate your pages with ",(0,a.kt)("inlineCode",{parentName:"p"},"<translate>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"const translate = require('../../server/translate.js').translate;\n\n<h2>\n  <translate desc=\"the header description\">\n    This header will be translated\n  </translate>\n</h2>;\n")),(0,a.kt)("p",null,"On Docusaurus v2, you translate your pages with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Translate>")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),'import Translate from \'@docusaurus/Translate\';\n\n<h2>\n  <Translate id="header.translation.id" description="the header description">\n    This header will be translated\n  </Translate>\n</h2>;\n')),(0,a.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"write-translations")," CLI still works to extract translations from your code."),(0,a.kt)("p",{parentName:"div"},"The code translations are now added to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/[locale]/code.json")," using Chrome i18n JSON format."))),(0,a.kt)("h3",c({},{id:"stricter-markdown-parser"}),"Stricter Markdown parser"),(0,a.kt)("p",null,"Docusaurus v2 is using ",(0,a.kt)("a",c({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX")," to parse Markdown files."),(0,a.kt)("p",null,"MDX compiles Markdown files to React components, is stricter than the Docusaurus v1 parser, and will make your build fail on error instead of rendering some bad content."),(0,a.kt)("p",null,"Also, the HTML elements must be replaced by JSX elements."),(0,a.kt)("p",null,"This is particularly important for i18n because if your translations are not good on Crowdin and use invalid Markup, your v2 translated site might fail to build: you may need to do some translation cleanup to fix the errors."),(0,a.kt)("h2",c({},{id:"migration-strategies"}),"Migration strategies"),(0,a.kt)("p",null,"This section will help you figure out how to ",(0,a.kt)("strong",{parentName:"p"},"keep your existing v1 translations after you migrate to v2"),"."),(0,a.kt)("p",null,"There are ",(0,a.kt)("strong",{parentName:"p"},"multiple possible strategies")," to migrate a Docusaurus v1 site using Crowdin, with different tradeoffs."),(0,a.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This documentation is a best-effort to help you migrate, please help us improve it if you find a better way!"))),(0,a.kt)("p",null,"Before all, we recommend to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Migrate your v1 Docusaurus site to v2 without the translations"),(0,a.kt)("li",{parentName:"ul"},"Get familiar with the ",(0,a.kt)("a",c({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.15/i18n/introduction"}),"new i18n system of Docusaurus v2")," an"),(0,a.kt)("li",{parentName:"ul"},"Make Crowdin work for your v2 site, using a new and untranslated Crowdin project and the ",(0,a.kt)("a",c({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.15/i18n/crowdin"}),"Crowdin tutorial"))),(0,a.kt)("div",c({},{className:"admonition admonition-danger alert alert--danger"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Don't try to migrate without understanding both Crowdin and Docusaurus v2 i18n."))),(0,a.kt)("h3",c({},{id:"create-a-new-crowdin-project"}),"Create a new Crowdin project"),(0,a.kt)("p",null,"To avoid any ",(0,a.kt)("strong",{parentName:"p"},"risk of breaking your v1 site in production"),", one possible strategy is to duplicate the original v1 Crowdin project."),(0,a.kt)("div",c({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This strategy was used to ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/blog/2021/03/09/jest-website-upgrade"}),"upgrade the Jest website"),"."))),(0,a.kt)("p",null,'Unfortunately, Crowdin does not have any "Duplicate/clone Project" feature, which makes things complicated.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the translation memory of your original project in ",(0,a.kt)("inlineCode",{parentName:"li"},".tmx")," format (",(0,a.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<ORIGINAL_PROJECT>/settings#tm")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"View Records"),")"),(0,a.kt)("li",{parentName:"ul"},"Upload the translation memory to your new project (",(0,a.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<NEW_PROJECT>/settings#tm")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"View Records"),")"),(0,a.kt)("li",{parentName:"ul"},"Reconfigure ",(0,a.kt)("inlineCode",{parentName:"li"},"crowdin.yml")," for Docusaurus v2 according to the i18n docs"),(0,a.kt)("li",{parentName:"ul"},"Upload the Docusaurus v2 source files with the Crowdin CLI to the new project"),(0,a.kt)("li",{parentName:"ul"},"Mark sensitive strings like ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"slug"),' as "hidden string" on Crowdin'),(0,a.kt)("li",{parentName:"ul"},'On the "Translations" tab, click on "Pre-Translation > via TM" (',(0,a.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<NEW_PROJECT>/settings#translations"),")"),(0,a.kt)("li",{parentName:"ul"},'Try first with "100% match" (more content will be translated than "Perfect"), and pre-translate your sources'),(0,a.kt)("li",{parentName:"ul"},"Download the Crowdin translations locally"),(0,a.kt)("li",{parentName:"ul"},"Try to run/build your site and see if there are any errors")),(0,a.kt)("p",null,"You will likely have errors on your first-try: the pre-translation might try to translate things that it should not be translated (front matter, admonition, code blocks...), and the translated md files might be invalid for the MDX parser."),(0,a.kt)("p",null,"You will have to fix all the errors until your site builds. You can do that by modifying the translated md files locally, and fix your site for one locale at a time using ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus build --locale fr"),"."),(0,a.kt)("p",null,"There is no ultimate guide we could write to fix these errors, but common errors are due to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Not marking enough strings as "hidden strings" in Crowdin, leading to pre-translation trying to translate these strings.'),(0,a.kt)("li",{parentName:"ul"},"Having bad v1 translations, leading to invalid markup in v2: bad html elements inside translations and unclosed tags"),(0,a.kt)("li",{parentName:"ul"},"Anything rejected by the MDX parser, like using HTML elements instead of JSX elements (use the ",(0,a.kt)("a",c({parentName:"li"},{href:"https://mdxjs.com/playground/"}),"MDX playground")," for debugging)")),(0,a.kt)("p",null,'You might want to repeat this pre-translation process, eventually trying the "Perfect" option and limiting pre-translation only some languages/files.'),(0,a.kt)("div",c({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use ",(0,a.kt)("a",c({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/i18n/crowdin#mdx-solutions"}),(0,a.kt)("inlineCode",{parentName:"a"},"mdx-code-block"))," around problematic markdown elements: Crowdin is less likely mess things up with code blocks."))),(0,a.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"You will likely notice that some things were translated on your old project, but are now untranslated in your new project."),(0,a.kt)("p",{parentName:"div"},"The Crowdin Markdown parser is evolving other time and each Crowdin project has a different parser version, which can lead to pre-translation not being able to pre-translate all the strings."),(0,a.kt)("p",{parentName:"div"},"This parser version is undocumented, and you will have to ask the Crowdin support to know your project's parser version and fix one specific version."),(0,a.kt)("p",{parentName:"div"},"Using the same cli version and parser version across the 2 Crowdin projects might give better results."))),(0,a.kt)("div",c({},{className:"admonition admonition-danger alert alert--danger"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},'Crowdin has an "upload translations" feature, but in our experience it does not give very good results for Markdown'))),(0,a.kt)("h3",c({},{id:"use-the-existing-crowdin-project"}),"Use the existing Crowdin project"),(0,a.kt)("p",null,"If you don't mind modifying your existing Crowdin project and risking to mess things up, it may be possible to use the Crowdin branch system."),(0,a.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This workflow has not been tested in practice, please report us how good it is."))),(0,a.kt)("p",null,"This way, you wouldn't need to create a new Crowdin project, transfer the translation memory, apply pre-translations, and try to fix the pre-translations errors."),(0,a.kt)("p",null,"You could create a Crowdin branch for Docusaurus v2, where you upload the v2 sources, and merge the Crowdin branch to main once ready."),(0,a.kt)("h3",c({},{id:"use-git-instead-of-crowdin"}),"Use Git instead of Crowdin"),(0,a.kt)("p",null,"It is possible to migrate away of Crowdin, and add the translation files to Git instead."),(0,a.kt)("p",null,"Use the Crowdin CLI to download the v1 translated files, and put these translated files at the correct Docusaurus v2 filesystem location."))}k.isMDXComponent=!0}}]);