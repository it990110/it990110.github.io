"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74476],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68799:function(e,t,n){var r=n(27378),a=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(27378),a=n(14324),i=n(46294),l=n(38944),o="tabItem_Ocg6",s=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e};function v(e){var t,n,a;const{lazy:s,block:p,defaultValue:d,values:m,groupId:g,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:null!=(a=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=b[0])?void 0:n.props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.UB)(),[O,x]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==O&&(j(t),x(r),null!=g&&w(g,r))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]||E[E.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>E.push(e),onKeyDown:T,onFocus:P,onClick:P},n),i={className:(0,l.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":O===e})},u(a,c(i))),null!=t?t:e);var a,i}))),s?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,a.Z)();return r.createElement(v,f({key:String(t)},e))}},80677:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(27378),a=n(35331),i="apiTable_e8hp";const l=(0,r.forwardRef)((({name:e,children:t},n)=>{const i=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(t),l=e?`${e}-${i}`:i,o=`#${l}`,s=(0,a.k6)();return r.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===o?n:void 0,onClick:()=>{s.push(o)},onKeyDown:e=>{"Enter"===e.key&&s.push(o)}},t.props.children)}));function o({children:e,name:t}){const[n,a]=r.Children.toArray(e.props.children),o=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null==(e=o.current)||e.focus()}),[o]);const s=r.Children.map(a.props.children,(e=>r.createElement(l,{name:t,ref:o},e)));return r.createElement("table",{className:i},n,r.createElement("tbody",null,s))}},29651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return b},toc:function(){return h},default:function(){return k}});var r=n(35318),a=n(80673),i=n(68799),l=n(80677),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const f={sidebar_position:4,id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},v=void 0,b={unversionedId:"api/plugins/plugin-client-redirects",id:"version-2.0.0-beta.16/api/plugins/plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/versioned_docs/version-2.0.0-beta.16/api/plugins/plugin-client-redirects.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects",editUrl:"https://github.com/it990110/it990110.github.io/edit/main/website/docs/api/plugins/plugin-client-redirects.md",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"}},h=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Example configuration",id:"ex-config",children:[],level:3}],level:2}],y={toc:h};function k(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),m),s(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Docusaurus Plugin to generate ",(0,r.kt)("strong",{parentName:"p"},"client-side redirects"),"."),(0,r.kt)("p",null,"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."),(0,r.kt)("div",g({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"production only")),(0,r.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"This plugin is always inactive in development and ",(0,r.kt)("strong",{parentName:"p"},"only active in production")," because it works on the build output."))),(0,r.kt)("div",g({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"It is better to use server-side redirects whenever possible."),(0,r.kt)("p",{parentName:"div"},"Before using this plugin, you should look if your hosting provider doesn't offer this feature."))),(0,r.kt)("h2",g({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-client-redirects\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-client-redirects\n")))),(0,r.kt)("h2",g({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Option"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fromExtensions")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The extensions to be removed from the route after redirecting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"toExtensions")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The extensions to be appended to the route after redirecting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"redirects")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"RedirectRule[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The list of redirect rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"createRedirects")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CreateRedirectsFn")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"A callback to create a redirect rule."))))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n")),(0,r.kt)("h3",g({},{id:"ex-config"}),"Example configuration"),(0,r.kt)("p",null,"Here's an example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}k.isMDXComponent=!0}}]);