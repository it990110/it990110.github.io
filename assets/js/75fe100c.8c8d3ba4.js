"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23687],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68799:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(27378),r=n(14324),i=n(46294),o=n(38944),l="tabItem_Ocg6",u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&g(e,n,t[n]);return e};function h(e){var t,n,r;const{lazy:u,block:c,defaultValue:d,values:m,groupId:g,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:null!=(r=null!=d?d:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.UB)(),[O,j]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==O&&(T(t),j(a),null!=g&&w(g,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:P,onFocus:E,onClick:E},n),i={className:(0,o.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":O===e})},s(r,p(i))),null!=t?t:e);var r,i}))),u?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,r.Z)();return a.createElement(h,v({key:String(t)},e))}},38021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return v},metadata:function(){return h},toc:function(){return f},default:function(){return y}});var a=n(35318),r=n(80673),i=n(68799),o=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const g={sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},v=void 0,h={unversionedId:"api/plugins/plugin-debug",id:"version-2.0.0-beta.15/api/plugins/plugin-debug",title:"\ud83d\udce6 plugin-debug",description:"The debug plugin will display useful debug information at http3000/\\\\docusaurus/debug.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/plugins/plugin-debug.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-debug",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/plugins/plugin-debug.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644458553,formattedLastUpdatedAt:"2/10/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-google-analytics"}},f=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Example configuration",id:"ex-config",children:[],level:3}],level:2}],b={toc:f};function y(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),d),l(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The debug plugin will display useful debug information at ",(0,a.kt)("a",m({parentName:"p"},{href:"http://localhost:3000/__docusaurus/debug"}),"http://localhost:3000/","_","_","docusaurus/debug"),"."),(0,a.kt)("p",null,"It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},".docusaurus")," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,a.kt)("inlineCode",{parentName:"p"},"contentLoaded")," lifecycle."),(0,a.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If you use the plugin via the classic preset, the preset will ",(0,a.kt)("strong",{parentName:"p"},"enable the plugin in development and disable it in production")," by default (",(0,a.kt)("inlineCode",{parentName:"p"},"debug: undefined"),") to avoid exposing potentially sensitive information. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"debug: true")," to always enable it or ",(0,a.kt)("inlineCode",{parentName:"p"},"debug: false")," to always disable it."),(0,a.kt)("p",{parentName:"div"},"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',\n  ].filter(Boolean),\n};\n")))),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."),(0,a.kt)("p",{parentName:"div"},"If you don't have any sensitive information, you can keep it on in production ",(0,a.kt)("a",m({parentName:"p"},{href:"/__docusaurus/debug"}),"like we do"),"."))),(0,a.kt)("h2",m({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-debug\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-debug\n")))),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If you use the preset ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,a.kt)("p",{parentName:"div"},"You can configure this plugin through the preset options."))),(0,a.kt)("h2",m({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"This plugin currently has no options."),(0,a.kt)("h3",m({},{id:"ex-config"}),"Example configuration"),(0,a.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,a.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Most Docusaurus users configure this plugin through the preset options."))),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Preset Options",mdxType:"TabItem"},(0,a.kt)("p",null,"If you use a preset, configure this plugin through the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/2.0.0-beta.15/using-plugins#docusauruspreset-classic"}),"preset options"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n"))),(0,a.kt)(i.Z,{value:"Plugin Options",mdxType:"TabItem"},(0,a.kt)("p",null,"If you are using a standalone plugin, provide options directly to the plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-debug'],\n};\n")))))}y.isMDXComponent=!0}}]);