"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27101],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68799:function(e,t,r){var n=r(27378),o=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;t.Z=function({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},80673:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(27378),o=r(14324),a=r(46294),l=r(38944),i="tabItem_Ocg6",c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&b(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&b(e,r,t[r]);return e};function v(e){var t,r,o;const{lazy:c,block:p,defaultValue:d,values:m,groupId:b,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),g=(0,a.lx)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===d?d:null!=(o=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(r=h[0])?void 0:r.props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,a.UB)(),[j,P]=(0,n.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,a.o5)();if(null!=b){const e=k[b];null!=e&&e!==j&&y.some((t=>t.value===e))&&P(e)}const N=e=>{const t=e.currentTarget,r=T.indexOf(t),n=y[r].value;n!==j&&(E(t),P(n),null!=b&&w(b,n))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},y.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(o=f({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:N,onClick:N},r),a={className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":j===e})},u(o,s(a))),null!=t?t:e);var o,a}))),c?(0,n.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function h(e){const t=(0,o.Z)();return n.createElement(v,f({key:String(t)},e))}},13470:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return b},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var n=r(35318),o=r(80673),a=r(68799),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&d(e,r,t[r]);return e};const b={sidebar_position:3,id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},f=void 0,v={unversionedId:"api/themes/theme-live-codeblock",id:"version-2.0.0-beta.15/api/themes/theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/zh-CN/docs/api/themes/@docusaurus/theme-live-codeblock",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-classic",permalink:"/zh-CN/docs/api/themes/@docusaurus/theme-classic"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/zh-CN/docs/api/themes/@docusaurus/theme-search-algolia"}},h=[{value:"Configuration",id:"configuration",children:[],level:3}],y={toc:h};function g(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),d),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This theme provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,n.kt)("a",m({parentName:"p"},{href:"/zh-CN/docs/markdown-features/code-blocks#interactive-code-editor"}),"interactive code editor")," documentation."),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,n.kt)(a.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-live-codeblock\n")))),(0,n.kt)("h3",m({},{id:"configuration"}),"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n")))}g.isMDXComponent=!0}}]);