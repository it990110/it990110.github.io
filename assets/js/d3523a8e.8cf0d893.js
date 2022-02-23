"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16525],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68799:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(27378),r=n(14324),i=n(46294),o=n(38944),l="tabItem_Ocg6",s=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&h(e,n,t[n]);return e};function g(e){var t,n,r;const{lazy:s,block:p,defaultValue:d,values:m,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:null!=(r=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=k[0])?void 0:n.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.UB)(),[O,T]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=h){const e=N[h];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==O&&(x(t),T(a),null!=h&&w(h,a))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:C,onClick:C},n),i={className:(0,o.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":O===e})},u(r,c(i))),null!=t?t:e);var r,i}))),s?(0,a.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function k(e){const t=(0,r.Z)();return a.createElement(g,f({key:String(t)},e))}},83751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return k},default:function(){return b}});var a=n(35318),r=n(80673),i=n(68799),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const h={id:"git",title:"i18n - Using git",slug:"/i18n/git"},f=void 0,g={unversionedId:"i18n/git",id:"i18n/git",title:"i18n - Using git",description:"A possible translation strategy is to version control the translation files with Git (or any other VCS).",source:"@site/docs/i18n/i18n-git.md",sourceDirName:"i18n",slug:"/i18n/git",permalink:"/docs/next/i18n/git",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/i18n/i18n-git.md",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"git",title:"i18n - Using git",slug:"/i18n/git"},sidebar:"docs",previous:{title:"i18n - Tutorial",permalink:"/docs/next/i18n/tutorial"},next:{title:"i18n - Using Crowdin",permalink:"/docs/next/i18n/crowdin"}},k=[{value:"Tradeoffs",id:"tradeoffs",children:[],level:2},{value:"Initialization",id:"initialization",children:[{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",children:[],level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",children:[],level:3},{value:"Translate the files",id:"translate-the-files",children:[],level:3},{value:"Repeat",id:"repeat",children:[],level:3}],level:2},{value:"Maintenance",id:"maintenance",children:[{value:"Markdown translations",id:"markdown-translations",children:[],level:3},{value:"JSON translations",id:"json-translations",children:[],level:3},{value:"Localize edit URLs",id:"localize-edit-urls",children:[],level:3}],level:2}],v={toc:k};function b(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),d),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"possible translation strategy")," is to ",(0,a.kt)("strong",{parentName:"p"},"version control the translation files")," with Git (or any other ",(0,a.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Version_control"}),"VCS"),")."),(0,a.kt)("h2",m({},{id:"tradeoffs"}),"Tradeoffs"),(0,a.kt)("p",null,"This strategy has advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to get started"),": just commit the ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n")," folder to Git"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy for developers"),": Git, GitHub and pull requests are mainstream developer tools"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Free")," (or without any additional cost, assuming you already use Git)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Low friction"),": does not require signing up to an external tool"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rewarding"),": contributors are happy to have a nice contribution history")),(0,a.kt)("p",null,"Using Git also present some shortcomings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard for non-developers"),": they do not master Git and pull-requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard for professional translators"),": they are used to SaaS translation softwares and advanced features"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard to maintain"),": you have to keep the translated files ",(0,a.kt)("strong",{parentName:"li"},"in sync")," with the untranslated files")),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"large-scale technical projects")," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."),(0,a.kt)("p",{parentName:"div"},"Refer to the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3317"}),"Docusaurus i18n RFC")," for our notes and links studying these systems."))),(0,a.kt)("h2",m({},{id:"initialization"}),"Initialization"),(0,a.kt)("p",null,"This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/next/i18n/tutorial"}),"i18n tutorial"),"."),(0,a.kt)("h3",m({},{id:"prepare-the-docusaurus-site"}),"Prepare the Docusaurus site"),(0,a.kt)("p",null,"Initialize a new Docusaurus site:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest website classic\n")),(0,a.kt)("p",null,"Add the site configuration for the French language:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n")),(0,a.kt)("p",null,"Translate the homepage:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'}),"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n")),(0,a.kt)("h3",m({},{id:"initialize-the-i18n-folder"}),"Initialize the ",(0,a.kt)("inlineCode",{parentName:"h3"},"i18n")," folder"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/next/cli#docusaurus-write-translations-sitedir"}),"write-translations")," CLI command to initialize the JSON translation files for the French locale:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n")))),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--messagePrefix '(fr) '")," option to make the untranslated strings stand out."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"Hello")," will appear as ",(0,a.kt)("inlineCode",{parentName:"p"},"(fr) Hello")," and makes it clear a translation is missing."))),(0,a.kt)("p",null,"Copy your untranslated Markdown files to the French folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n")),(0,a.kt)("p",null,"Add all these files to Git."),(0,a.kt)("h3",m({},{id:"translate-the-files"}),"Translate the files"),(0,a.kt)("p",null,"Translate the Markdown and JSON files in ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr")," and commit the translation."),(0,a.kt)("p",null,"You should now be able to start your site in French and see the translations:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run start -- --locale fr\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run start -- --locale fr\n")))),(0,a.kt)("p",null,"You can also build the site locally or on your CI:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run build\n# or\nnpm run build -- --locale fr\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run build\n# or\nyarn run build -- --locale fr\n")))),(0,a.kt)("h3",m({},{id:"repeat"}),"Repeat"),(0,a.kt)("p",null,"Follow the same process for each locale you need to support."),(0,a.kt)("h2",m({},{id:"maintenance"}),"Maintenance"),(0,a.kt)("p",null,"Keeping translated files ",(0,a.kt)("strong",{parentName:"p"},"consistent")," with the originals ",(0,a.kt)("strong",{parentName:"p"},"can be challenging"),", in particular for Markdown documents."),(0,a.kt)("h3",m({},{id:"markdown-translations"}),"Markdown translations"),(0,a.kt)("p",null,"When an untranslated Markdown document is edited, it is ",(0,a.kt)("strong",{parentName:"p"},"your responsibility to maintain the respective translated files"),", and we unfortunately don't have a good way to help you do so."),(0,a.kt)("p",null,"To keep your translated sites consistent, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md")," doc is edited, you need ",(0,a.kt)("strong",{parentName:"p"},"backport these edits")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."),(0,a.kt)("h3",m({},{id:"json-translations"}),"JSON translations"),(0,a.kt)("p",null,"To help you maintain the JSON translation files, it is possible to run again the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/next/cli#docusaurus-write-translations-sitedir"}),"write-translations")," CLI command:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run write-translations -- --locale fr\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run write-translations -- --locale fr\n")))),(0,a.kt)("p",null,"New translations will be appended, and existing ones will not be overridden."),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Reset your translations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--override")," option."))),(0,a.kt)("h3",m({},{id:"localize-edit-urls"}),"Localize edit URLs"),(0,a.kt)("p",null,"When the user is browsing a page at ",(0,a.kt)("inlineCode",{parentName:"p"},"/fr/doc1"),", the edit button will link by default to the unlocalized doc at ",(0,a.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md"),"."),(0,a.kt)("p",null,"Your translations are on Git, and you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"editLocalizedFiles: true")," option of the docs and blog plugins."),(0,a.kt)("p",null,"The edit button will link to the localized doc at ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."))}b.isMDXComponent=!0}}]);