"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25433],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31887:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return b},toc:function(){return g},default:function(){return h}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const f={title:"Introducing Docusaurus",authors:"JMarcey",tags:["documentation","blog","docusaurus"]},d=void 0,m={permalink:"/zh-CN/blog/2017/12/14/introducing-docusaurus",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",source:"@site/blog/2017-12-14-introducing-docusaurus.md",title:"Introducing Docusaurus",description:"Introducing Slash",date:"2017-12-14T00:00:00.000Z",formattedDate:"2017\u5e7412\u670814\u65e5",tags:[{label:"documentation",permalink:"/zh-CN/blog/tags/documentation"},{label:"blog",permalink:"/zh-CN/blog/tags/blog"},{label:"docusaurus",permalink:"/zh-CN/blog/tags/docusaurus"}],readingTime:8.245,truncated:!0,authors:[{name:"Joel Marcey",title:"Technical Lead & Developer Advocate at Facebook",url:"http://twitter.com/JoelMarcey",twitter:"JoelMarcey",imageURL:"https://github.com/JoelMarcey.png",key:"JMarcey"}],frontMatter:{title:"Introducing Docusaurus",authors:"JMarcey",tags:["documentation","blog","docusaurus"]},prevItem:{title:"How I Converted Profilo to Docusaurus in Under 2 Hours",permalink:"/zh-CN/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus"}},b={authorsImageUrls:[void 0]},g=[],y={toc:g};function h(e){var t,o=e,{components:s}=o,f=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(o,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),f),a(t,u({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Introducing Slash",src:r(25889).Z,width:"760",height:"160"})),(0,n.kt)("p",null,"We are very happy to introduce ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"Docusaurus")," to help you manage one or many open source websites."),(0,n.kt)("p",null,"We created ",(0,n.kt)("a",p({parentName:"p"},{href:"https://docusaurus.io"}),"Docusaurus")," for the following reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To put the focus on writing good documentation instead of worrying about the infrastructure of a website."),(0,n.kt)("li",{parentName:"ol"},"To provide features that many of our open source websites need like blog support, search and versioning."),(0,n.kt)("li",{parentName:"ol"},"To make it easy to push updates, new features, and bug fixes to everyone all at once."),(0,n.kt)("li",{parentName:"ol"},"And, finally, to provide a consistent look and feel across all of our open source projects.")))}h.isMDXComponent=!0},25889:function(e,t,r){t.Z=r.p+"assets/images/slash-introducing-411a16dd05086935b8e9ddae38ae9b45.svg"}}]);