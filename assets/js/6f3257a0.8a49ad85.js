"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9099],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,m=f["".concat(u,".").concat(g)]||f[g]||c[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63018:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return m},assets:function(){return d},toc:function(){return b},default:function(){return y}});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e};const f={title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},g=void 0,m={permalink:"/blog/2021/03/09/releasing-docusaurus-i18n",editUrl:"https://github.com/it990110/it990110.github.io/edit/main/website/blog/2021-03-09-releasing-docusaurus-i18n.md",source:"@site/blog/2021-03-09-releasing-docusaurus-i18n.md",title:"Releasing Docusaurus i18n",description:"Today, we officially release Docusaurus 2 i18n (internationalization), as part of 2.0.0-alpha.71.",date:"2021-03-09T00:00:00.000Z",formattedDate:"March 9, 2021",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"i18n",permalink:"/blog/tags/i-18-n"}],readingTime:3.32,truncated:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},prevItem:{title:"Announcing Docusaurus 2 Beta",permalink:"/blog/2021/05/12/announcing-docusaurus-two-beta"},nextItem:{title:"Docusaurus 2020 Recap",permalink:"/blog/2021/01/19/docusaurus-2020-recap"}},d={authorsImageUrls:[void 0]},b=[],h={toc:b};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},h),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Today, we officially release ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",c({parentName:"strong"},{href:"https://docusaurus.io/docs/i18n/introduction"}),"Docusaurus 2 i18n"))," (",(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"}),"internationalization"),"), as part of ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.71"}),"2.0.0-alpha.71"),"."),(0,n.kt)("p",null,"Docusaurus 2 has now reached ",(0,n.kt)("strong",{parentName:"p"},"full feature parity with Docusaurus 1"),". \ud83c\udf89 And soon, after a few additional infrastructure updates and a bit more testing, the ",(0,n.kt)("strong",{parentName:"p"},"first Docusaurus 2 beta")," will be released."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We went the extra mile"),", and the new i18n support is ",(0,n.kt)("strong",{parentName:"p"},"even better than in Docusaurus 1"),"."),(0,n.kt)("p",null,"In this post, we will present you the ",(0,n.kt)("strong",{parentName:"p"},"translation workflow"),", explain some ",(0,n.kt)("strong",{parentName:"p"},"design decisions")," and ",(0,n.kt)("strong",{parentName:"p"},"showcase early adopter sites")," that just went live: ",(0,n.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/"}),"Jest"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"https://learn.redwoodjs.com/"}),"Redwood"),", and ",(0,n.kt)("a",c({parentName:"p"},{href:"https://datagit.ir/"}),"Datagit"),"."),(0,n.kt)("p",null,"We also ",(0,n.kt)("strong",{parentName:"p"},"dogfood")," the i18n support on the ",(0,n.kt)("strong",{parentName:"p"},"Docusaurus 2 site itself"),", and this post is already available in ",(0,n.kt)("a",c({parentName:"p"},{href:"https://docusaurus.io/blog/2021/03/09/releasing-docusaurus-i18n"}),"English")," and ",(0,n.kt)("a",c({parentName:"p"},{href:"https://docusaurus.io/fr/blog/2021/03/09/releasing-docusaurus-i18n"}),"French"),"!"))}y.isMDXComponent=!0}}]);