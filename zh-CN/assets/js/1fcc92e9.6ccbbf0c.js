"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80717],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return f},default:function(){return k}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(d)for(var n of d(t))s.call(t,n)&&c(e,n,t[n]);return e};const u={id:"headings",title:"Headings",description:"Using Markdown headings",slug:"/markdown-features/headings"},m=void 0,g={unversionedId:"guides/markdown-features/headings",id:"version-2.0.0-beta.16/guides/markdown-features/headings",title:"Headings",description:"Using Markdown headings",source:"@site/versioned_docs/version-2.0.0-beta.16/guides/markdown-features/markdown-features-headings.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/headings",permalink:"/zh-CN/docs/markdown-features/headings",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{id:"headings",title:"Headings",description:"Using Markdown headings",slug:"/markdown-features/headings"},sidebar:"docs",previous:{title:"Admonitions",permalink:"/zh-CN/docs/markdown-features/admonitions"},next:{title:"Inline TOC",permalink:"/zh-CN/docs/markdown-features/inline-toc"}},f=[{value:"Markdown headings",id:"markdown-headings",children:[],level:2},{value:"Heading ids",id:"heading-ids",children:[{value:"Generated ids",id:"generated-ids",children:[],level:3},{value:"Explicit ids",id:"explicit-ids",children:[],level:3}],level:2}],h={toc:f};function k(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",p({},{id:"markdown-headings"}),"Markdown headings"),(0,r.kt)("p",null,"You can use regular Markdown headings."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n")),(0,r.kt)("p",null,"Markdown headings appear as a table of contents entry."),(0,r.kt)("h2",p({},{id:"heading-ids"}),"Heading ids"),(0,r.kt)("p",null,"Each heading has an id that can be automatically generated or explicitly specified."),(0,r.kt)("p",null,"Heading ids allow you to link to a specific document heading in Markdown or JSX:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"[link](#heading-id)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Link to="#heading-id">link</Link>\n')),(0,r.kt)("h3",p({},{id:"generated-ids"}),"Generated ids"),(0,r.kt)("p",null,"By default, Docusaurus will generate heading ids for you, based on the heading text. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"### Hello World")," will have id ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world"),"."),(0,r.kt)("p",null,"Generated ids have ",(0,r.kt)("strong",{parentName:"p"},"some limits"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The id might not look good"),(0,r.kt)("li",{parentName:"ul"},"You might want to ",(0,r.kt)("strong",{parentName:"li"},"change or translate")," the text without updating the existing id")),(0,r.kt)("h3",p({},{id:"explicit-ids"}),"Explicit ids"),(0,r.kt)("p",null,"A special Markdown syntax lets you set an ",(0,r.kt)("strong",{parentName:"p"},"explicit heading id"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"### Hello World {#my-explicit-id}\n")),(0,r.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",p({parentName:"strong"},{href:"/zh-CN/docs/cli#docusaurus-write-heading-ids-sitedir"}),"write-heading-ids"))," CLI command to add explicit ids to all your Markdown documents."))))}k.isMDXComponent=!0}}]);