"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22968],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68799:function(e,t,n){var a=n(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(27378),r=n(14324),l=n(46294),i=n(38944),o="tabItem_Ocg6",u=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&g(e,n,t[n]);return e};function b(e){var t,n,r;const{lazy:u,block:d,defaultValue:m,values:c,groupId:g,className:b}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=c?c:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(r=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=k[0])?void 0:n.props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.UB)(),[O,C]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,l.o5)();if(null!=g){const e=y[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(j(t),C(a),null!=g&&w(g,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:P,onFocus:E,onClick:E},n),l={className:(0,i.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":O===e})},p(r,s(l))),null!=t?t:e);var r,l}))),u?(0,a.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function k(e){const t=(0,r.Z)();return a.createElement(b,f({key:String(t)},e))}},80677:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(27378),r=n(35331),l="apiTable_e8hp";const i=(0,a.forwardRef)((({name:e,children:t},n)=>{const l=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(t),i=e?`${e}-${l}`:l,o=`#${i}`,u=(0,r.k6)();return a.createElement("tr",{id:i,tabIndex:0,ref:u.location.hash===o?n:void 0,onClick:()=>{u.push(o)},onKeyDown:e=>{"Enter"===e.key&&u.push(o)}},t.props.children)}));function o({children:e,name:t}){const[n,r]=a.Children.toArray(e.props.children),o=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null==(e=o.current)||e.focus()}),[o]);const u=a.Children.map(r.props.children,(e=>a.createElement(i,{name:t,ref:o},e)));return a.createElement("table",{className:l},n,a.createElement("tbody",null,u))}},26616:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return k},toc:function(){return h},default:function(){return N}});var a=n(35318),r=n(80673),l=n(68799),i=n(80677),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&c(e,n,t[n]);return e};const f={sidebar_position:8,id:"plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",slug:"/api/plugins/@docusaurus/plugin-ideal-image"},b=void 0,k={unversionedId:"api/plugins/plugin-ideal-image",id:"api/plugins/plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",description:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).",source:"@site/docs/api/plugins/plugin-ideal-image.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-ideal-image",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-ideal-image",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2022/2/8",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",slug:"/api/plugins/@docusaurus/plugin-ideal-image"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-google-gtag"},next:{title:"\ud83d\udce6 plugin-pwa",permalink:"/zh-CN/docs/next/api/plugins/@docusaurus/plugin-pwa"}},h=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Example configuration",id:"ex-config",children:[],level:3}],level:2}],v={toc:h};function N(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},v),c),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."),(0,a.kt)("div",g({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"By default, the plugin is ",(0,a.kt)("strong",{parentName:"p"},"inactive in development")," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,a.kt)("a",g({parentName:"p"},{href:"#disableInDev"}),(0,a.kt)("inlineCode",{parentName:"a"},"disableInDev"))," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,a.kt)("h2",g({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-ideal-image\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-ideal-image\n")))),(0,a.kt)("h2",g({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"This plugin supports the PNG and JPG formats only."),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n")),(0,a.kt)("h2",g({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Accepted fields:"),(0,a.kt)(i.Z,{mdxType:"APITable"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Option"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",g({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ideal-img/[name].[hash:hex:7].[width].[ext]")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Filename template for output files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sizes")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"original size")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"original size")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"min")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"As an alternative to manually specifying ",(0,a.kt)("inlineCode",{parentName:"td"},"sizes"),", you can specify ",(0,a.kt)("inlineCode",{parentName:"td"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"max")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"steps"),", and the sizes will be generated for you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"max")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"See ",(0,a.kt)("inlineCode",{parentName:"td"},"min")," above")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"steps")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Configure the number of images generated between ",(0,a.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"max")," (inclusive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"quality")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"85")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"JPEG compression quality")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"disableInDev")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"You can test ideal image behavior in dev mode by setting this to ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),". ",(0,a.kt)("strong",{parentName:"td"},"Tip"),": use ",(0,a.kt)("a",g({parentName:"td"},{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome"}),"network throttling")," in your browser to simulate slow networks."))))),(0,a.kt)("h3",g({},{id:"ex-config"}),"Example configuration"),(0,a.kt)("p",null,"Here's an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}N.isMDXComponent=!0}}]);