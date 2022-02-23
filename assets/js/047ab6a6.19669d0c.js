"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12110],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40435:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return m},default:function(){return y}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e};const d={},f="What's next?",h={unversionedId:"guides/whats-next",id:"guides/whats-next",title:"What's next?",description:"Congratulations! You have understood most core features of Docusaurus now. You have:",source:"@site/docs/guides/whats-next.md",sourceDirName:"guides",slug:"/guides/whats-next",permalink:"/docs/next/guides/whats-next",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/whats-next.md",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{},sidebar:"docs",previous:{title:"i18n - Using Crowdin",permalink:"/docs/next/i18n/crowdin"},next:{title:"Advanced Tutorials",permalink:"/docs/next/advanced/"}},m=[],g={toc:m};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"whats-next"}),"What's next?"),(0,r.kt)("p",null,"Congratulations! You have understood most core features of Docusaurus now. You have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/creating-pages"}),"Used the pages plugin")," to create a standalone React / Markdown page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/docs-introduction"}),"Used the docs plugin")," to create documentation pages. This includes ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/sidebar"}),"configuring the sidebar"),", and even ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/versioning"}),"versioning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/blog"}),"Used the blog plugin")," to create a fully featured blog"),(0,r.kt)("li",{parentName:"ul"},"Tried your hands on ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/markdown-features"}),"a range of Markdown features"),", which are useful for all content plugins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/styling-layout"}),"Used stylesheets")," to customize your site's appearance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/static-assets"}),"Put images and other assets")," in your pages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/search"}),"Added search")," to your site"),(0,r.kt)("li",{parentName:"ul"},"Understood how ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/browser-support"}),"browser support")," and ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/seo"}),"SEO")," are done through standard Docusaurus APIs"),(0,r.kt)("li",{parentName:"ul"},"Learned about how ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/using-plugins"}),"individual plugins")," are installed and configured"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/deployment"}),"Deployed")," your site to a content host"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/i18n/tutorial"}),"Internationalized")," your site to include multiple languages")),(0,r.kt)("p",null,"At this point, you probably have a big ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," already\ud83d\ude04 However, you haven't written much code yet! Most of the features are implemented through calling encapsulated Docusaurus APIs. As you continue your journey, you can take three paths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more advanced Docusaurus concepts. This will help you gain a deeper understand of what the APIs do."),(0,r.kt)("li",{parentName:"ul"},"Read about ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/docusaurus-core"}),"all existing APIs"),". Many of them have not been covered in the Guides!"),(0,r.kt)("li",{parentName:"ul"},"Learn to ",(0,r.kt)("a",p({parentName:"li"},{href:"/docs/next/api/plugin-methods/"}),"develop a plugin")," to extend the functionality of your site.")))}y.isMDXComponent=!0}}]);