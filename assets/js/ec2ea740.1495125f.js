"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90631],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36594:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return m},default:function(){return y}});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e};const d={},f="What's next?",h={unversionedId:"guides/whats-next",id:"version-2.0.0-beta.15/guides/whats-next",title:"What's next?",description:"Congratulations! You have understood most core features of Docusaurus now. You have:",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/whats-next.md",sourceDirName:"guides",slug:"/guides/whats-next",permalink:"/docs/guides/whats-next",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/whats-next.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2/8/2022",frontMatter:{},sidebar:"docs",previous:{title:"i18n - Using Crowdin",permalink:"/docs/i18n/crowdin"},next:{title:"Advanced Tutorials",permalink:"/docs/advanced/"}},m=[],g={toc:m};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"whats-next"}),"What's next?"),(0,n.kt)("p",null,"Congratulations! You have understood most core features of Docusaurus now. You have:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/creating-pages"}),"Used the pages plugin")," to create a standalone React / Markdown page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/docs-introduction"}),"Used the docs plugin")," to create documentation pages. This includes ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/sidebar"}),"configuring the sidebar"),", and even ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/versioning"}),"versioning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/blog"}),"Used the blog plugin")," to create a fully featured blog"),(0,n.kt)("li",{parentName:"ul"},"Tried your hands on ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/markdown-features"}),"a range of Markdown features"),", which are useful for all content plugins"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/styling-layout"}),"Used stylesheets")," to customize your site's appearance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/static-assets"}),"Put images and other assets")," in your pages"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/search"}),"Added search")," to your site"),(0,n.kt)("li",{parentName:"ul"},"Understood how ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/browser-support"}),"browser support")," and ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/seo"}),"SEO")," are done through standard Docusaurus APIs"),(0,n.kt)("li",{parentName:"ul"},"Learned about how ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/using-plugins"}),"individual plugins")," are installed and configured"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/deployment"}),"Deployed")," your site to a content host"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/docs/i18n/tutorial"}),"Internationalized")," your site to include multiple languages")),(0,n.kt)("p",null,"At this point, you probably have a big ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," already\ud83d\ude04 However, you haven't written much code yet! Most of the features are implemented through calling encapsulated Docusaurus APIs. As you continue your journey, you can take three paths:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn more advanced Docusaurus concepts. This will help you gain a deeper understand of what the APIs do."),(0,n.kt)("li",{parentName:"ul"},"Read about ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/docusaurus-core"}),"all existing APIs"),". Many of them have not been covered in the Guides!"),(0,n.kt)("li",{parentName:"ul"},"Learn to ",(0,n.kt)("a",p({parentName:"li"},{href:"/docs/api/plugin-methods/"}),"develop a plugin")," to extend the functionality of your site.")))}y.isMDXComponent=!0}}]);