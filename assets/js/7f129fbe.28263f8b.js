"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96122],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),g=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=g(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(r),b=o,f=p["".concat(i,".").concat(b)]||p[b]||c[b]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var g=2;g<l;g++)a[g]=r[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20984:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return b},metadata:function(){return f},assets:function(){return d},toc:function(){return m},default:function(){return O}});var n=r(35318),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))g.call(t,r)&&u(e,r,t[r]);return e};const p={title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},b=void 0,f={permalink:"/tests/blog/2021/10/07/blog-post-mdx-feed-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",source:"@site/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",title:"Blog post MDX Feed tests",description:"Some MDX tests, mostly to test how the RSS feed render those",date:"2021-10-07T00:00:00.000Z",formattedDate:"October 7, 2021",tags:[{label:"paginated-tag",permalink:"/tests/blog/tags/paginated-tag"},{label:"blog",permalink:"/tests/blog/tags/blog"},{label:"docusaurus",permalink:"/tests/blog/tags/docusaurus"},{label:"long-long",permalink:"/tests/blog/tags/long-long"},{label:"long-long-long",permalink:"/tests/blog/tags/long-long-long"},{label:"long-long-long-long",permalink:"/tests/blog/tags/long-long-long-long"}],truncated:!0,authors:[{name:"Sebastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},prevItem:{title:"Post with duplicate title",permalink:"/tests/blog/2021/09/13/dup-title"},nextItem:{title:"Blog post MDX require Feed tests",permalink:"/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"}},d={authorsImageUrls:[void 0]},m=[],y={toc:m};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),u),l(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Some MDX tests, mostly to test how the RSS feed render those"))}O.isMDXComponent=!0}}]);