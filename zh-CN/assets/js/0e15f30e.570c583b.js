"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71324],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68799:function(e,t,n){var a=n(27378),i=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&l(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(27378),i=n(14324),o=n(46294),r=n(38944),s="tabItem_Ocg6",l=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&h(e,n,t[n]);return e};function g(e){var t,n,i;const{lazy:l,block:d,defaultValue:p,values:m,groupId:h,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.lx)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:null!=(i=null!=p?p:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,o.UB)(),[O,j]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=h){const e=N[h];null!=e&&e!==O&&f.some((t=>t.value===e))&&j(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==O&&(C(t),j(a),null!=h&&w(h,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]||T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},f.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:x,onClick:x},n),o={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})},u(i,c(o))),null!=t?t:e);var i,o}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,i.Z)();return a.createElement(g,v({key:String(t)},e))}},27055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var a=n(35318),i=n(80673),o=n(68799),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&p(e,n,t[n]);return e};const h={id:"multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},v=void 0,g={unversionedId:"guides/docs/multi-instance",id:"version-2.0.0-beta.15/guides/docs/multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/docs/docs-multi-instance.mdx",sourceDirName:"guides/docs",slug:"/docs-multi-instance",permalink:"/zh-CN/docs/2.0.0-beta.15/docs-multi-instance",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644458553,formattedLastUpdatedAt:"2022/2/10",frontMatter:{id:"multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},sidebar:"docs",previous:{title:"Docs Markdown Features",permalink:"/zh-CN/docs/2.0.0-beta.15/docs-markdown-features"},next:{title:"Blog",permalink:"/zh-CN/docs/2.0.0-beta.15/blog"}},b=[{value:"Use-cases",id:"use-cases",children:[{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",children:[],level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",children:[],level:3}],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Versioned paths",id:"versioned-paths",children:[],level:2},{value:"Tagging new versions",id:"tagging-new-versions",children:[],level:2},{value:"Docs navbar items",id:"docs-navbar-items",children:[],level:2}],f={toc:b};function k(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},f),p),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," plugin can support ",(0,a.kt)("a",m({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/using-plugins#multi-instance-plugins-and-plugin-ids"}),"multi-instance"),"."),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This feature is only useful for ",(0,a.kt)("a",m({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/versioning"}),"versioned documentation"),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,a.kt)("a",m({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/sidebar/multiple-sidebars"}),"multiple sidebars"),", you can do so within one plugin."))),(0,a.kt)("h2",m({},{id:"use-cases"}),"Use-cases"),(0,a.kt)("p",null,"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."),(0,a.kt)("p",null,"These documentations may even have different versioning/release lifecycles."),(0,a.kt)("h3",m({},{id:"mobile-sdks-documentation"}),"Mobile SDKs documentation"),(0,a.kt)("p",null,"If you build a cross-platform mobile SDK, you may have 2 documentations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android SDK documentation (",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.1"),")"),(0,a.kt)("li",{parentName:"ul"},"iOS SDK documentation (",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v2.0"),")")),(0,a.kt)("p",null,"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."),(0,a.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."),(0,a.kt)("p",{parentName:"div"},"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"))),(0,a.kt)("h3",m({},{id:"versioned-and-unversioned-doc"}),"Versioned and unversioned doc"),(0,a.kt)("p",null,'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'),(0,a.kt)("p",null,"We use this pattern on the Docusaurus website itself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",m({parentName:"li"},{href:"/docs"}),"/docs/","*")," section is versioned"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",m({parentName:"li"},{href:"/community/support"}),"/community/","*")," section is unversioned")),(0,a.kt)("h2",m({},{id:"setup"}),"Setup"),(0,a.kt)("p",null,"Suppose you have 2 documentations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Product: some versioned doc about your product"),(0,a.kt)("li",{parentName:"ul"},"Community: some unversioned doc about the community around your product")),(0,a.kt)("p",null,"In this case, you should use the same plugin twice in your site configuration."),(0,a.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," already includes a docs plugin instance for you!"))),(0,a.kt)("p",null,"When using the preset:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: require.resolve('./sidebarsProduct.js'),\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"When not using the preset:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: require.resolve('./sidebarsProduct.js'),\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"Don't forget to assign a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute to plugin instances."),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"We consider that the ",(0,a.kt)("inlineCode",{parentName:"p"},"product"),' instance is the most important one, and make it the "default" instance by not assigning any id.'))),(0,a.kt)("h2",m({},{id:"versioned-paths"}),"Versioned paths"),(0,a.kt)("p",null,"Each plugin instance will store versioned docs in a distinct folder."),(0,a.kt)("p",null,"The default plugin instance will use these paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versions.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versioned_docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versioned_sidebars"))),(0,a.kt)("p",null,"The other plugin instances (with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute) will use these paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versions.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versioned_docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versioned_sidebars"))),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"You can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute (defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),") for one of the docs plugin instances."),(0,a.kt)("p",{parentName:"div"},"The instance paths will be simpler, and retro-compatible with a single-instance setup."))),(0,a.kt)("h2",m({},{id:"tagging-new-versions"}),"Tagging new versions"),(0,a.kt)("p",null,"Each plugin instance will have its own cli command to tag a new version. They will be displayed if you run:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus -- --help\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus -- --help\n")))),(0,a.kt)("p",null,"To version the product/default docs plugin instance:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus docs:version 1.0.0\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus docs:version 1.0.0\n")))),(0,a.kt)("p",null,"To version the non-default/community docs plugin instance:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus docs:version:community 1.0.0\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus docs:version:community 1.0.0\n")))),(0,a.kt)("h2",m({},{id:"docs-navbar-items"}),"Docs navbar items"),(0,a.kt)("p",null,"Each docs-related ",(0,a.kt)("a",m({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/api/themes/configuration#navbar"}),"theme navbar items")," take an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"docsPluginId")," attribute."),(0,a.kt)("p",null,"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n")))}k.isMDXComponent=!0}}]);