"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96664],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68799:function(e,t,a){var r=a(27378),n=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},80673:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(27378),n=a(14324),o=a(46294),l=a(38944),i="tabItem_Ocg6",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&h(e,a,t[a]);return e};function f(e){var t,a,n;const{lazy:s,block:p,defaultValue:m,values:d,groupId:h,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,o.lx)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===m?m:null!=(n=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,o.UB)(),[N,j]=(0,r.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),r=y[a].value;r!==N&&(T(t),j(r),null!=h&&k(h,r))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},y.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=b({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>P.push(e),onKeyDown:x,onFocus:E,onClick:E},a),o={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":N===e})},c(n,u(o))),null!=t?t:e);var n,o}))),s?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function v(e){const t=(0,n.Z)();return r.createElement(f,b({key:String(t)},e))}},48414:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return f},toc:function(){return v},default:function(){return g}});var r=a(35318),n=a(80673),o=a(68799),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={sidebar_position:4,id:"theme-search-algolia",title:"\ud83d\udce6 theme-search-algolia",slug:"/api/themes/@docusaurus/theme-search-algolia"},b=void 0,f={unversionedId:"api/themes/theme-search-algolia",id:"version-2.0.0-beta.15/api/themes/theme-search-algolia",title:"\ud83d\udce6 theme-search-algolia",description:"This theme provides a @theme/SearchBar component that integrates with Algolia DocSearch easily. Combined with @docusaurus/theme-classic, it provides a very easy search integration. You can read more on search documentation.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/themes/theme-search-algolia.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-search-algolia.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"theme-search-algolia",title:"\ud83d\udce6 theme-search-algolia",slug:"/api/themes/@docusaurus/theme-search-algolia"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"}},v=[],y={toc:v};function g(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This theme provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/SearchBar")," component that integrates with Algolia DocSearch easily. Combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),", it provides a very easy search integration. You can read more on ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/search"}),"search")," documentation."),(0,r.kt)(n.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-search-algolia\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-search-algolia\n")))),(0,r.kt)("p",null,"This theme also adds search page available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/search")," (as swizzlable ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchPage")," component) path with OpenSearch support."),(0,r.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"If you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency."))))}g.isMDXComponent=!0}}]);