"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31910],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15849:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(27378),i=n(38944);const o={note:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},r={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function s({children:e,type:t,title:n=t,icon:s=o[t]}){return a.createElement("div",{className:(0,i.Z)("admonition",`admonition-${t}`,"alert",`alert--${r[t]}`)},a.createElement("div",{className:"admonition-heading"},a.createElement("h5",null,a.createElement("span",{className:"admonition-icon"},s),n)),a.createElement("div",{className:"admonition-content"},e))}},68799:function(e,t,n){var a=n(27378),i=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&l(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(27378),i=n(14324),o=n(46294),r=n(38944),s="tabItem_Ocg6",l=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&h(e,n,t[n]);return e};function k(e){var t,n,i;const{lazy:l,block:d,defaultValue:p,values:u,groupId:h,className:k}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=u?u:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,o.lx)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===p?p:null!=(i=null!=p?p:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(n=w[0])?void 0:n.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.UB)(),[x,O]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,o.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==x&&(E(t),O(a),null!=h&&y(h,a))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},k)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=v({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>C.push(e),onKeyDown:j,onFocus:T,onClick:T},n),o={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":x===e})},m(i,c(o))),null!=t?t:e);var i,o}))),l?(0,a.cloneElement)(w.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function w(e){const t=(0,i.Z)();return a.createElement(k,v({key:String(t)},e))}},95921:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(27378),i="browserWindow_my1Q",o="browserWindowHeader_jXSR",r="buttons_uHc7",s="browserWindowAddressBar_Pd8y",l="dot_giz1",m="browserWindowMenuIcon_Vhuh",c="bar_rrRL",d="browserWindowBody_Idgs";var p=function({children:e,minHeight:t,url:n="http://localhost:3000"}){return a.createElement("div",{className:i,style:{minHeight:t}},a.createElement("div",{className:o},a.createElement("div",{className:r},a.createElement("span",{className:l,style:{background:"#f25f58"}}),a.createElement("span",{className:l,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l,style:{background:"#58cb42"}})),a.createElement("div",{className:s},n),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:d},e))}},15203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return w},metadata:function(){return g},toc:function(){return f},default:function(){return b}});var a=n(35318),i=n(95921),o=n(80673),r=n(68799),s=n(15849),l=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&h(e,n,t[n]);return e};const k={id:"admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},w=void 0,g={unversionedId:"guides/markdown-features/admonitions",id:"version-2.0.0-beta.15/guides/markdown-features/admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/markdown-features/markdown-features-admonitions.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/admonitions",permalink:"/zh-CN/docs/markdown-features/admonitions",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",frontMatter:{id:"admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},sidebar:"docs",previous:{title:"Code blocks",permalink:"/zh-CN/docs/markdown-features/code-blocks"},next:{title:"Headings",permalink:"/zh-CN/docs/markdown-features/headings"}},f=[{value:"Usage with Prettier",id:"usage-with-prettier",children:[],level:2},{value:"Specifying title",id:"specifying-title",children:[],level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",children:[],level:2},{value:"Usage in JSX",id:"usage-in-jsx",children:[],level:2}],N={toc:f};function b(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},N),h),m(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In addition to the basic Markdown syntax, we use ",(0,a.kt)("a",v({parentName:"p"},{href:"https://github.com/elviswolcott/remark-admonitions"}),"remark-admonitions")," alongside MDX to add support for admonitions. Admonitions are wrapped by a set of 3 colons."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-md"}),":::note\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",v({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",v({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,a.kt)("div",v({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",v({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,a.kt)("div",v({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",v({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,a.kt)("div",v({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",v({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,a.kt)("div",v({},{className:"admonition admonition-danger alert alert--danger"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",v({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),".")))),(0,a.kt)("h2",v({},{id:"usage-with-prettier"}),"Usage with Prettier"),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",v({parentName:"p"},{href:"https://prettier.io"}),"Prettier")," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-md"}),"\x3c!-- Prettier doesn't change this --\x3e\n::: note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n::: note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n")),(0,a.kt)("h2",v({},{id:"specifying-title"}),"Specifying title"),(0,a.kt)("p",null,"You may also specify an optional title"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-md"}),":::note Your Title\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n")),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",v({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Your Title")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),".")))),(0,a.kt)("h2",v({},{id:"admonitions-with-mdx"}),"Admonitions with MDX"),(0,a.kt)("p",null,"You can use MDX inside admonitions too!"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip Use tabs in admonitions\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n')),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",v({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use tabs in admonitions")),(0,a.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,a.kt)(r.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,a.kt)(r.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))))),(0,a.kt)("h2",v({},{id:"usage-in-jsx"}),"Usage in JSX"),(0,a.kt)("p",null,"Outside of Markdown, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Admonition")," component to get the same output."),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx",metastring:'title="MyReactPage.jsx"',title:'"MyReactPage.jsx"'}),"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"The types that are accepted are the same as above: ",(0,a.kt)("inlineCode",{parentName:"p"},"note"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"danger"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"caution"),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx",metastring:'title="MyReactPage.jsx"',title:'"MyReactPage.jsx"'}),'<Admonition type="tip" icon="\ud83d\udca1" title="Did you know...">\n  <p>\n    Use plugins to introduce shorter syntax for the most commonly used JSX\n    elements in your project.\n  </p>\n</Admonition>\n')),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)(s.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",mdxType:"Admonition"},(0,a.kt)("p",null,"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project."))))}b.isMDXComponent=!0}}]);