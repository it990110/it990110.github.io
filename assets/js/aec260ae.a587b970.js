"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35043],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(a),h=r,f=s["".concat(o,".").concat(h)]||s[h]||m[h]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},49106:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return f},assets:function(){return g},toc:function(){return k},default:function(){return b}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&p(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&p(e,a,t[a]);return e};const s={date:"2020-04-02T20:00",authors:["cangencer","iWun","lex111","SamChou19815","yangshun"]},h="2.0.0-alpha.50",f={permalink:"/changelog/2.0.0-alpha.50",source:"@site/changelog/source/2.0.0-alpha.50.md",title:"2.0.0-alpha.50",description:"HOTFIX for 2.0.0-alpha.49.",date:"2020-04-02T20:00:00.000Z",formattedDate:"April 2, 2020",tags:[],truncated:!0,authors:[{name:"Can Gencer",alias:"cangencer",url:"https://github.com/cangencer",imageURL:"https://github.com/cangencer.png",key:"cangencer"},{name:"Richard Chan",alias:"iWun",url:"https://github.com/iWun",imageURL:"https://github.com/iWun.png",key:"iWun"},{name:"Alexey Pyltsyn",alias:"lex111",url:"https://github.com/lex111",imageURL:"https://github.com/lex111.png",key:"lex111"},{name:"Sam Zhou",alias:"SamChou19815",url:"https://github.com/SamChou19815",imageURL:"https://github.com/SamChou19815.png",key:"SamChou19815"},{name:"Yangshun Tay",alias:"yangshun",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{date:"2020-04-02T20:00",authors:["cangencer","iWun","lex111","SamChou19815","yangshun"]},prevItem:{title:"2.0.0-alpha.51",permalink:"/changelog/2.0.0-alpha.51"},nextItem:{title:"2.0.0-alpha.49",permalink:"/changelog/2.0.0-alpha.49"},listPageLink:"/changelog/page/3"},g={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},k=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",children:[],level:2},{value:"\ud83d\udc85 Polish",id:"-polish",children:[],level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",children:[],level:2},{value:"\ud83c\udfe0 Internal",id:"-internal",children:[],level:2},{value:"Committers: 5",id:"committers-5",children:[],level:2}],d={toc:k};function b(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},d),p),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HOTFIX for 2.0.0-alpha.49"),"."),(0,n.kt)("h2",m({},{id:"-bug-fix"}),"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-live-codeblock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2509"}),"#2509")," fix(v2): synchronize code block components changes (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2498"}),"#2498")," fix(v2): blog item styling (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yangshun"}),"@yangshun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2489"}),"#2489")," fix(v2): fix HTML issues nav dropdown and highlight docs item (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2496"}),"#2496")," fix(v2): do not force terminate building when running deploy command (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-utils"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2497"}),"#2497")," fix(v2): unbreak blog-only mode routing by deplicating starting forward slashes (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/SamChou19815"}),"@SamChou19815"),")")))),(0,n.kt)("h2",m({},{id:"-polish"}),"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2505"}),"#2505")," fix(v2): tweak colors for announcement bar (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yangshun"}),"@yangshun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2504"}),"#2504")," refactor(v2): improve announcement bar (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2495"}),"#2495")," refactor(v2): update HTML markup of pagination for better a11y (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-live-codeblock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2502"}),"#2502")," fix(v2): make code block nicer (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yangshun"}),"@yangshun"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2490"}),"#2490")," fix(v2): use lodash instead of array-map-polyfill (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")")))),(0,n.kt)("h2",m({},{id:"-documentation"}),"\ud83d\udcdd Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2500"}),"#2500")," docs(v2): misc docs updates (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yangshun"}),"@yangshun"),")")))),(0,n.kt)("h2",m({},{id:"-internal"}),"\ud83c\udfe0 Internal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/2486"}),"#2486")," misc: add instructions about test release (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")")),(0,n.kt)("h2",m({},{id:"committers-5"}),"Committers: 5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alexey Pyltsyn (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"),(0,n.kt)("li",{parentName:"ul"},"Can Gencer (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/cangencer"}),"@cangencer"),")"),(0,n.kt)("li",{parentName:"ul"},"Richard Chan (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/iWun"}),"@iWun"),")"),(0,n.kt)("li",{parentName:"ul"},"Sam Zhou (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/SamChou19815"}),"@SamChou19815"),")"),(0,n.kt)("li",{parentName:"ul"},"Yangshun Tay (",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yangshun"}),"@yangshun"),")")))}b.isMDXComponent=!0}}]);