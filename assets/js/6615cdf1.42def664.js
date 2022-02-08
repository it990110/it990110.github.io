"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52863],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95921:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(27378),a="browserWindow_my1Q",o="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",l="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",u="browserWindowBody_Idgs";var p=function({children:e,minHeight:t,url:n="http://localhost:3000"}){return r.createElement("div",{className:a,style:{minHeight:t}},r.createElement("div",{className:o},r.createElement("div",{className:i},r.createElement("span",{className:l,style:{background:"#f25f58"}}),r.createElement("span",{className:l,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l,style:{background:"#58cb42"}})),r.createElement("div",{className:s},n),r.createElement("div",{className:c},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:u},e))}},70478:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return g},default:function(){return w}});var r=n(35318),a=n(95921),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},h=void 0,f={unversionedId:"guides/docs/create-doc",id:"version-2.0.0-beta.16/guides/docs/create-doc",title:"Create a doc",description:"Create a Markdown Document",source:"@site/versioned_docs/version-2.0.0-beta.16/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/docs/create-doc",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/docs/docs-create-doc.mdx",tags:[],version:"2.0.0-beta.16",frontMatter:{id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/docs-introduction"},next:{title:"Sidebar",permalink:"/docs/sidebar"}},g=[{value:"Doc tags",id:"doc-tags",children:[],level:2}],y={toc:g};function w(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),u),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Create a Markdown file, ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("p",null,"At the top of the file, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,r.kt)("p",null,"This will render in the browser as follows:"),(0,r.kt)(a.Z,{mdxType:"BrowserWindow"},(0,r.kt)("h2",null,"Hello from Docusaurus"),(0,r.kt)("p",null,"Are you ready to create the documentation site for your open source project?"),(0,r.kt)("h3",null,"Headers"),(0,r.kt)("p",null,"will show up on the table of contents on the upper right"),(0,r.kt)("p",null,"So that your users will know what this page is all about without scrolling down or even without reading too much."),(0,r.kt)("h3",null,"Only h2 and h3 will be in the TOC by default."),(0,r.kt)("p",null,"You can configure the TOC heading levels either per document or in the theme configuration."),(0,r.kt)("p",null,"The headers are well-spaced so that the hierarchy is clear."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lists will help you"),(0,r.kt)("li",{parentName:"ul"},"present the key points"),(0,r.kt)("li",{parentName:"ul"},"that you want your users to remember",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"and you may nest them",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"multiple times")))))),(0,r.kt)("h3",{id:"custom-id"},"Custom id headers"),(0,r.kt)("p",null,"With ",(0,r.kt)("code",null,"{#custom-id}")," syntax you can set your own header id.")),(0,r.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"All files prefixed with an underscore (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),") under the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs"),' directory are treated as "partial" pages and will be ignored by default.'),(0,r.kt)("p",{parentName:"div"},"Read more about ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/markdown-features/react#importing-markdown"}),"importing partial pages"),"."))),(0,r.kt)("h2",p({},{id:"doc-tags"}),"Doc tags"),(0,r.kt)("p",null,"Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/sidebar"}),"docs sidebar"),". Tags are passed in the front matter as a list of labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md",metastring:'"your-doc-page.md"','"your-doc-page.md"':!0}),"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n")),(0,r.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Tags can also be declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"tags: [Demo, Getting started]"),"."),(0,r.kt)("p",{parentName:"div"},"Read more about all the possible ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.w3schools.io/file/yaml-arrays/"}),"Yaml array syntaxes"),"."))))}w.isMDXComponent=!0}}]);