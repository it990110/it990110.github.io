"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36171],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),g=o,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34101:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},assets:function(){return h},toc:function(){return b},default:function(){return y}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&l(e,r,t[r]);return e};const m={title:"DocSearch migration",authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},g=void 0,f={permalink:"/zh-CN/blog/2021/11/21/algolia-docsearch-migration",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",source:"@site/blog/2021-11-21-algolia-docsearch-migration/index.md",title:"DocSearch migration",description:"DocSearch is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials.",date:"2021-11-21T00:00:00.000Z",formattedDate:"2021\u5e7411\u670821\u65e5",tags:[{label:"search",permalink:"/zh-CN/blog/tags/search"}],readingTime:2.69,truncated:!0,authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"DocSearch migration",authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},prevItem:{title:"Docusaurus 2021 Recap",permalink:"/zh-CN/blog/2022/01/24/docusaurus-2021-recap"},nextItem:{title:"Announcing Docusaurus 2 Beta",permalink:"/zh-CN/blog/2021/05/12/announcing-docusaurus-two-beta"}},h={image:r(17170).Z,authorsImageUrls:[void 0,void 0]},b=[],d={toc:b};function y(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},d),l),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"https://docsearch.algolia.com/"}),"DocSearch")," is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials."),(0,n.kt)("p",null,"Docusaurus site owners should upgrade their configuration with ",(0,n.kt)("a",p({parentName:"p"},{href:"#im-using-docusaurus-and-docsearch-can-i-migrate"}),"their new credentials")," ",(0,n.kt)("strong",{parentName:"p"},"by February 1, 2022"),", existing search indexes will be frozen and become read-only after this date."))}y.isMDXComponent=!0},17170:function(e,t,r){t.Z=r.p+"assets/images/social-card-99fd18bd61fee0f631b8c820ef873dd5.png"}}]);