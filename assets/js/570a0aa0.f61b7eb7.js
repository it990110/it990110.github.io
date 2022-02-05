"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53003],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,f=g["".concat(l,".").concat(d)]||g[d]||c[d]||u;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,a=new Array(u);a[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<u;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return b}});var r=n(35318),i=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const g={sidebar_position:0,id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},d=void 0,f={unversionedId:"api/plugins/plugins-overview",id:"api/plugins/plugins-overview",title:"Docusaurus plugins",description:"We provide official Docusaurus plugins.",source:"@site/docs/api/plugins/overview.md",sourceDirName:"api/plugins",slug:"/api/plugins",permalink:"/docs/next/api/plugins",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/overview.md",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},sidebar:"api",previous:{title:"Static methods",permalink:"/docs/next/api/plugin-methods/static-methods"},next:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/docs/next/api/plugins/@docusaurus/plugin-content-docs"}},m=[{value:"Content plugins",id:"content-plugins",children:[],level:2},{value:"Behavior plugins",id:"behavior-plugins",children:[],level:2}],v={toc:m};function b(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),p),u(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"We provide official Docusaurus plugins."),(0,r.kt)("h2",c({},{id:"content-plugins"}),"Content plugins"),(0,r.kt)("p",null,"These plugins are responsible for loading your site's content, and creating pages for your theme to render."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-content-docs"}),"@docusaurus/plugin-content-docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-content-blog"}),"@docusaurus/plugin-content-blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-content-pages"}),"@docusaurus/plugin-content-pages"))),(0,r.kt)("h2",c({},{id:"behavior-plugins"}),"Behavior plugins"),(0,r.kt)("p",null,"These plugins will add a useful behavior to your Docusaurus site."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-debug"}),"@docusaurus/plugin-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-sitemap"}),"@docusaurus/plugin-sitemap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-pwa"}),"@docusaurus/plugin-pwa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-client-redirects"}),"@docusaurus/plugin-client-redirects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-ideal-image"}),"@docusaurus/plugin-ideal-image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-google-analytics"}),"@docusaurus/plugin-google-analytics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/docs/next/api/plugins/@docusaurus/plugin-google-gtag"}),"@docusaurus/plugin-google-gtag"))))}b.isMDXComponent=!0}}]);