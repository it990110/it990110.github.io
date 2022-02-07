"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37559],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return f},default:function(){return b}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e};const m={sidebar_position:0,id:"themes-overview",title:"Docusaurus themes",sidebar_label:"Themes overview",slug:"/api/themes"},d=void 0,h={unversionedId:"api/themes/themes-overview",id:"version-2.0.0-beta.14/api/themes/themes-overview",title:"Docusaurus themes",description:"We provide official Docusaurus themes.",source:"@site/versioned_docs/version-2.0.0-beta.14/api/themes/overview.md",sourceDirName:"api/themes",slug:"/api/themes",permalink:"/zh-CN/docs/2.0.0-beta.14/api/themes",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.14",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"themes-overview",title:"Docusaurus themes",sidebar_label:"Themes overview",slug:"/api/themes"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/zh-CN/docs/2.0.0-beta.14/api/plugins/@docusaurus/plugin-sitemap"},next:{title:"Configuration",permalink:"/zh-CN/docs/2.0.0-beta.14/api/themes/configuration"}},f=[{value:"Main themes",id:"main-themes",children:[],level:2},{value:"Enhancement themes",id:"enhancement-themes",children:[],level:2}],v={toc:f};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"We provide official Docusaurus themes."),(0,r.kt)("h2",p({},{id:"main-themes"}),"Main themes"),(0,r.kt)("p",null,"The main themes implement the user interface for the ",(0,r.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.14/api/plugins/@docusaurus/plugin-content-docs"}),"docs"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.14/api/plugins/@docusaurus/plugin-content-blog"}),"blog")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.14/api/plugins/@docusaurus/plugin-content-pages"}),"pages")," plugins."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.14/api/themes/@docusaurus/theme-classic"}),"@docusaurus/theme-classic")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea7 other themes are planned")),(0,r.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"The goal is to have all themes share the exact same features, user-experience and configuration."),(0,r.kt)("p",{parentName:"div"},"Only the UI design and underlying styling framework should change, and you should be able to change theme easily."),(0,r.kt)("p",{parentName:"div"},"We are not there yet: only the classic theme is production ready."))),(0,r.kt)("h2",p({},{id:"enhancement-themes"}),"Enhancement themes"),(0,r.kt)("p",null,"These themes will enhance the existing main themes with additional user-interface related features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.14/api/themes/@docusaurus/theme-live-codeblock"}),"@docusaurus/theme-live-codeblock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.14/api/themes/@docusaurus/theme-search-algolia"}),"@docusaurus/theme-search-algolia"))))}b.isMDXComponent=!0}}]);