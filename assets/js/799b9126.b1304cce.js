"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28109],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return d},assets:function(){return g},toc:function(){return b},default:function(){return k}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={date:"2019-06-07T20:00"},f="2.0.0-alpha.19",d={permalink:"/changelog/2.0.0-alpha.19",source:"@site/changelog/source/2.0.0-alpha.19.md",title:"2.0.0-alpha.19",description:"- Add a sensible default for browserslist config.",date:"2019-06-07T20:00:00.000Z",formattedDate:"June 7, 2019",tags:[],truncated:!0,authors:[],frontMatter:{date:"2019-06-07T20:00"},prevItem:{title:"2.0.0-alpha.20",permalink:"/changelog/2.0.0-alpha.20"},nextItem:{title:"V2 Changelog",permalink:"/changelog/V2 Changelog"},listPageLink:"/changelog/page/4"},g={authorsImageUrls:[]},b=[],h={toc:b};function k(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a sensible default for browserslist config."),(0,r.kt)("li",{parentName:"ul"},"UI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add sun and moon emoji to the dark mode toggle."),(0,r.kt)("li",{parentName:"ul"},"Mobile responsive menu."),(0,r.kt)("li",{parentName:"ul"},"Right table of contents for docs is now sticky."))),(0,r.kt)("li",{parentName:"ul"},"Plugins",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Change plugin definitions from classes to functions. Refer to the new plugin docs."),(0,r.kt)("li",{parentName:"ul"},"Implement Clients module API."),(0,r.kt)("li",{parentName:"ul"},"Change format within ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," to be like presets."))),(0,r.kt)("li",{parentName:"ul"},"Deps",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Infima CSS is now locked down to specific versions and not relying upon the CDN which reads from trunk."),(0,r.kt)("li",{parentName:"ul"},"Update dependencies to latest"))),(0,r.kt)("li",{parentName:"ul"},"Customize/ Override infima CSS variables by passing options into the classic preset.")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"presets: [\n  [\n    '@docusaurus/preset-classic',\n    {\n      theme: {\n        customCss: require.resolve('./css/custom.css'),\n      },\n      ...\n    },\n  ],\n],\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow passing remark and rehype plugins to mdx-loader for docs and blog plugin"),(0,r.kt)("li",{parentName:"ul"},"Move themes component of docs and blog to be part of theme-classic"),(0,r.kt)("li",{parentName:"ul"},"Use composition style for prism syntax highlighting instead of doing it via rehype plugin"),(0,r.kt)("li",{parentName:"ul"},"Pass MDXProvider to docs and blog. To change the provided MDX components, run ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus swizzle @docusaurus/theme-classic MDXComponents")),(0,r.kt)("li",{parentName:"ul"},"Add @docusaurus/theme-livecodeblock plugin"),(0,r.kt)("li",{parentName:"ul"},"Better run-time code generation & webpack splitchunks optimization"),(0,r.kt)("li",{parentName:"ul"},"Minify css for production build"),(0,r.kt)("li",{parentName:"ul"},"Fix weird scrolling problem when navigating to a route with a ",(0,r.kt)("inlineCode",{parentName:"li"},"hash")," location")))}k.isMDXComponent=!0}}]);