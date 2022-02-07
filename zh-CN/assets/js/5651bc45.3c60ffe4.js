"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85118],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80644:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return h},toc:function(){return b},default:function(){return g}});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const f={date:"2019-10-26T20:00"},d="2.0.0-alpha.31",m={permalink:"/zh-CN/changelog/2.0.0-alpha.31",source:"@site/changelog/source/2.0.0-alpha.31.md",title:"2.0.0-alpha.31",description:"- Footer is now sticky/ pinned to the bottom of the viewport in desktop browsers.",date:"2019-10-26T20:00:00.000Z",formattedDate:"2019\u5e7410\u670826\u65e5",tags:[],truncated:!0,authors:[],frontMatter:{date:"2019-10-26T20:00"},prevItem:{title:"2.0.0-alpha.32",permalink:"/zh-CN/changelog/2.0.0-alpha.32"},nextItem:{title:"2.0.0-alpha.30",permalink:"/zh-CN/changelog/2.0.0-alpha.30"},listPageLink:"/zh-CN/changelog/page/3"},h={authorsImageUrls:[]},b=[],y={toc:b};function g(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Footer is now sticky/ pinned to the bottom of the viewport in desktop browsers."),(0,n.kt)("li",{parentName:"ul"},"Footer is now also displayed in docs page for consistency."),(0,n.kt)("li",{parentName:"ul"},"Remove empty doc sidebar container if sidebar for a particular doc page does not exist. Otherwise, it will cause an additional empty space."),(0,n.kt)("li",{parentName:"ul"},"Default PostCSS loader now only polyfills stage 3+ features (previously it was stage 2) like Create React App. Stage 2 CSS is considered relatively unstable and subject to change while Stage 3 features will likely become a standard."),(0,n.kt)("li",{parentName:"ul"},"Fix search bar focus bug. When you put the focus on search input, previously the focus will remain although we have clicked to other area outside of the search input."),(0,n.kt)("li",{parentName:"ul"},"New themeConfig option ",(0,n.kt)("inlineCode",{parentName:"li"},"sidebarCollapsible"),". It is on by default. If explicitly set to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", all doc items in sidebar is expanded. Otherwise, it will still be a collapsible sidebar."),(0,n.kt)("li",{parentName:"ul"},"Disable adding hashes to the generated class names of CSS modules in dev mode. Generating unique identifiers takes some time, which can be saved since including paths to files in class names is enough to avoid collisions."),(0,n.kt)("li",{parentName:"ul"},"Fix showing sidebar category with empty items."),(0,n.kt)("li",{parentName:"ul"},"Update infima from 0.2.0-alpha.2 to 0.2.0-alpha.3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fix pagination nav and right sidebar color contrast ratio"),(0,n.kt)("li",{parentName:"ul"},"Fix sidebar arrow color in dark mode"),(0,n.kt)("li",{parentName:"ul"},"Fix footer mobile issue"),(0,n.kt)("li",{parentName:"ul"},"Increase sidebar width"),(0,n.kt)("li",{parentName:"ul"},"etc")))))}g.isMDXComponent=!0}}]);