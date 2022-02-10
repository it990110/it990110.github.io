"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40151],{35318:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return m}});var n=l(27378);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(l),m=r,p=u["".concat(c,".").concat(m)]||u[m]||v[m]||a;return l?n.createElement(p,o(o({ref:t},d),{},{components:l})):n.createElement(p,o({ref:t},d))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},85461:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return h},default:function(){return O}});var n=l(35318),r=l(95921),a=l(81737),o=l(63968),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,l)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,p=(e,t)=>{for(var l in t||(t={}))v.call(t,l)&&m(e,l,t[l]);if(d)for(var l of d(t))u.call(t,l)&&m(e,l,t[l]);return e};const f={toc_min_heading_level:2,toc_max_heading_level:6},b=void 0,g={unversionedId:"toc/toc-test-good",id:"toc/toc-test-good",title:"toc-test-good",description:"Test the TOC behavior of a real-world md doc with valid headings",source:"@site/_dogfooding/_docs tests/toc/toc-test-good.mdx",sourceDirName:"toc",slug:"/toc/toc-test-good",permalink:"/zh-CN/tests/docs/toc/toc-test-good",tags:[],version:"current",lastUpdatedAt:1644456776,formattedLastUpdatedAt:"2022/2/10",frontMatter:{toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"sidebar",previous:{title:"toc-test-bad",permalink:"/zh-CN/tests/docs/toc/toc-test-bad"}},h=[{value:"lvl 2",id:"lvl-2",children:[{value:"lvl 3",id:"lvl-3",children:[{value:"lvl 4",id:"lvl-4",children:[{value:"lvl 5",id:"lvl-5",children:[{value:"lvl 6",id:"lvl-6",children:[],level:6}],level:5}],level:4}],level:3}],level:2},{value:"lvl 2",id:"lvl-2-1",children:[{value:"lvl 3",id:"lvl-3-1",children:[{value:"lvl 4",id:"lvl-4-1",children:[{value:"lvl 5",id:"lvl-5-1",children:[{value:"lvl 6",id:"lvl-6-1",children:[],level:6}],level:5}],level:4}],level:3}],level:2}],y={toc:h};function O(e){var t,l=e,{components:i}=l,m=((e,t)=>{var l={};for(var n in e)v.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&u.call(e,n)&&(l[n]=e[n]);return l})(l,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Test the TOC behavior of a real-world md doc with valid headings"),(0,n.kt)("hr",null),(0,n.kt)("h2",p({},{id:"lvl-2"}),"lvl 2"),(0,n.kt)("h3",p({},{id:"lvl-3"}),"lvl 3"),(0,n.kt)("h4",p({},{id:"lvl-4"}),"lvl 4"),(0,n.kt)("h5",p({},{id:"lvl-5"}),"lvl 5"),(0,n.kt)("h6",p({},{id:"lvl-6"}),"lvl 6"),(0,n.kt)("h2",p({},{id:"lvl-2-1"}),"lvl 2"),(0,n.kt)("h3",p({},{id:"lvl-3-1"}),"lvl 3"),(0,n.kt)("h4",p({},{id:"lvl-4-1"}),"lvl 4"),(0,n.kt)("h5",p({},{id:"lvl-5-1"}),"lvl 5"),(0,n.kt)("h6",p({},{id:"lvl-6-1"}),"lvl 6"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"INLINE:"),(0,n.kt)(r.Z,{mdxType:"BrowserWindow"},(0,n.kt)(a.Z,{toc:h,minHeadingLevel:2,maxHeadingLevel:6,mdxType:"TOCInline"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"COLLAPSIBLE:"),(0,n.kt)(r.Z,{mdxType:"BrowserWindow"},(0,n.kt)(o.Z,{toc:h,minHeadingLevel:2,maxHeadingLevel:6,mdxType:"TOCCollapsible"})))}O.isMDXComponent=!0},63968:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(27378),r=l(38944),a=l(94157),o=l(46294),i="tocCollapsible_fIYe",c="tocCollapsibleButton_TQR1",s="tocCollapsibleContent_vaau",d="tocCollapsibleExpanded_ka6A",v=l(70986);function u({toc:e,className:t,minHeadingLevel:l,maxHeadingLevel:u}){const{collapsed:m,toggleCollapsed:p}=(0,o.uR)({initialState:!0});return n.createElement("div",{className:(0,r.Z)(i,{[d]:!m},t)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",c),onClick:p},n.createElement(a.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(o.zF,{lazy:!0,className:s,collapsed:m},n.createElement(v.Z,{toc:e,minHeadingLevel:l,maxHeadingLevel:u})))}},81737:function(e,t,l){l.d(t,{Z:function(){return o}});var n=l(27378),r="tableOfContentsInline_eBKl",a=l(70986);var o=function({toc:e,minHeadingLevel:t,maxHeadingLevel:l}){return n.createElement("div",{className:r},n.createElement(a.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},70986:function(e,t,l){l.d(t,{Z:function(){return v}});var n=l(27378),r=l(46294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;function d({toc:e,className:t,linkClassName:l,isChild:r}){return e.length?n.createElement("ul",{className:r?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function v(e){var t=e,{toc:l,className:a="table-of-contents table-of-contents__left-border",linkClassName:v="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:m,maxHeadingLevel:p}=t,f=((e,t)=>{var l={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(l[n]=e[n]);return l})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const b=(0,r.LU)(),g=null!=m?m:b.tableOfContents.minHeadingLevel,h=null!=p?p:b.tableOfContents.maxHeadingLevel,y=(0,r.DA)({toc:l,minHeadingLevel:g,maxHeadingLevel:h}),O=(0,n.useMemo)((()=>{if(v&&u)return{linkClassName:v,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:h}}),[v,u,g,h]);return(0,r.Si)(O),n.createElement(d,((e,t)=>{for(var l in t||(t={}))i.call(t,l)&&s(e,l,t[l]);if(o)for(var l of o(t))c.call(t,l)&&s(e,l,t[l]);return e})({toc:y,className:a,linkClassName:v},f))}},95921:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(27378),r="browserWindow_my1Q",a="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",c="dot_giz1",s="browserWindowMenuIcon_Vhuh",d="bar_rrRL",v="browserWindowBody_Idgs";var u=function({children:e,minHeight:t,url:l="http://localhost:3000"}){return n.createElement("div",{className:r,style:{minHeight:t}},n.createElement("div",{className:a},n.createElement("div",{className:o},n.createElement("span",{className:c,style:{background:"#f25f58"}}),n.createElement("span",{className:c,style:{background:"#fbbe3c"}}),n.createElement("span",{className:c,style:{background:"#58cb42"}})),n.createElement("div",{className:i},l),n.createElement("div",{className:s},n.createElement("div",null,n.createElement("span",{className:d}),n.createElement("span",{className:d}),n.createElement("span",{className:d})))),n.createElement("div",{className:v},e))}}}]);