"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31438],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10008:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return b},assets:function(){return y},toc:function(){return d},default:function(){return h}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={date:"2019-10-22T20:00"},m="2.0.0-alpha.30",b={permalink:"/changelog/2.0.0-alpha.30",source:"@site/changelog/source/2.0.0-alpha.30.md",title:"2.0.0-alpha.30",description:"- Fix babel transpilation include/exclude logic to be more efficient. This also fix a very weird bug TypeError: Cannot assign to read only property 'exports' of object '#'.(#1868)",date:"2019-10-22T20:00:00.000Z",formattedDate:"October 22, 2019",tags:[],truncated:!0,authors:[],frontMatter:{date:"2019-10-22T20:00"},prevItem:{title:"2.0.0-alpha.31",permalink:"/changelog/2.0.0-alpha.31"},nextItem:{title:"2.0.0-alpha.29",permalink:"/changelog/2.0.0-alpha.29"},listPageLink:"/changelog/page/3"},y={authorsImageUrls:[]},d=[],g={toc:d};function h(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix babel transpilation include/exclude logic to be more efficient. This also fix a very weird bug ",(0,n.kt)("inlineCode",{parentName:"li"},"TypeError: Cannot assign to read only property 'exports' of object '#<Object>'"),".(",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1868"}),"#1868"),")")),(0,n.kt)("p",null,"If you are still encountering the error. Please check whether you use ",(0,n.kt)("inlineCode",{parentName:"p"},"module.exports")," for your ",(0,n.kt)("inlineCode",{parentName:"p"},".js")," file instead of doing ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," (mixing CJS and ES). See ",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/webpack/webpack/issues/4039#issuecomment-477779322"}),"https://github.com/webpack/webpack/issues/4039#issuecomment-477779322")," and ",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/webpack/webpack/issues/4039#issuecomment-273804003"}),"https://github.com/webpack/webpack/issues/4039#issuecomment-273804003")," for more context."))}h.isMDXComponent=!0}}]);