"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16787],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=o,g=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53321:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return g},assets:function(){return m},toc:function(){return d},default:function(){return O}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const f={title:"Blog TOC FrontMatter tests",authors:["slorber"],toc_min_heading_level:2,toc_max_heading_level:4,tags:["paginated-tag"]},b=void 0,g={permalink:"/zh-CN/tests/blog/2021/08/21/blog-post-toc-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-08-21-blog-post-toc-tests.mdx",source:"@site/_dogfooding/_blog tests/2021-08-21-blog-post-toc-tests.mdx",title:"Blog TOC FrontMatter tests",description:"toc as ContentToc,",date:"2021-08-21T00:00:00.000Z",formattedDate:"2021\u5e748\u670821\u65e5",tags:[{label:"paginated-tag",permalink:"/zh-CN/tests/blog/tags/paginated-tag"}],readingTime:3.8,truncated:!0,authors:[{name:"Sebastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Blog TOC FrontMatter tests",authors:["slorber"],toc_min_heading_level:2,toc_max_heading_level:4,tags:["paginated-tag"]},prevItem:{title:"Using twice the blog plugin",permalink:"/zh-CN/tests/blog/2020/08/03/demo/second-blog-intro"},nextItem:{title:"Hmmm!",permalink:"/zh-CN/tests/blog/2021/08/22/no-author"}},m={authorsImageUrls:[void 0]},d=[],y={toc:d};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),a(t,i({components:o,mdxType:"MDXLayout"}))))}O.isMDXComponent=!0}}]);