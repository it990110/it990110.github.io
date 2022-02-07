"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48077],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81737:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(27378),r="tableOfContentsInline_eBKl",l=a(70986);var i=function({toc:e,minHeadingLevel:t,maxHeadingLevel:a}){return n.createElement("div",{className:r},n.createElement(l.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}},70986:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(27378),r=a(46294),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({toc:e,className:t,linkClassName:a,isChild:r}){return e.length?n.createElement("ul",{className:r?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function p(e){var t=e,{toc:a,className:l="table-of-contents table-of-contents__left-border",linkClassName:p="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:c,maxHeadingLevel:k}=t,h=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const N=(0,r.LU)(),g=null!=c?c:N.tableOfContents.minHeadingLevel,f=null!=k?k:N.tableOfContents.maxHeadingLevel,b=(0,r.DA)({toc:a,minHeadingLevel:g,maxHeadingLevel:f}),v=(0,n.useMemo)((()=>{if(p&&m)return{linkClassName:p,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:f}}),[p,m,g,f]);return(0,r.Si)(v),n.createElement(u,((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&d(e,a,t[a]);return e})({toc:b,className:l,linkClassName:p},h))}},68799:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},80673:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(27378),r=a(14324),l=a(46294),i=a(38944),o="tabItem_Ocg6",s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&k(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&k(e,a,t[a]);return e};function N(e){var t,a,r;const{lazy:s,block:p,defaultValue:m,values:c,groupId:k,className:N}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=c?c:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(r=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.UB)(),[C,O]=(0,n.useState)(v),z=[],{blockElementScrollPositionUntilNextRender:D}=(0,l.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&f.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=z.indexOf(t),n=f[a].value;n!==C&&(D(t),O(n),null!=k&&w(k,n))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=z.indexOf(e.currentTarget)+1;t=z[a]||z[0];break}case"ArrowLeft":{const a=z.indexOf(e.currentTarget)-1;t=z[a]||z[z.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},N)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=h({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>z.push(e),onKeyDown:T,onFocus:x,onClick:x},a),l={className:(0,i.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":C===e})},d(r,u(l))),null!=t?t:e);var r,l}))),s?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function g(e){const t=(0,r.Z)();return n.createElement(N,h({key:String(t)},e))}},71516:function(e,t,a){a.d(t,{ZP:function(){return c}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&u(e,a,t[a]);return e};const m={toc:[]};function c(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},m),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"We discourage swizzling of components during the Docusaurus 2 beta phase. The theme components APIs are likely to evolve and have breaking changes. If possible, stick with the default appearance for now."))))}c.isMDXComponent=!0},70754:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return N},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return b},default:function(){return y}});var n=a(35318),r=a(80673),l=a(68799),i=a(81737),o=a(71516),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&k(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&k(e,a,t[a]);return e};const N={id:"cli"},g="CLI",f={unversionedId:"cli",id:"version-2.0.0-beta.15/cli",title:"CLI",description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.",source:"@site/versioned_docs/version-2.0.0-beta.15/cli.md",sourceDirName:".",slug:"/cli",permalink:"/zh-CN/docs/cli",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",frontMatter:{id:"cli"},sidebar:"api",next:{title:"Client API",permalink:"/zh-CN/docs/docusaurus-core"}},b=[{value:"Index",id:"index",children:[],level:2},{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",children:[{value:"<code>docusaurus start [siteDir]</code>",id:"docusaurus-start-sitedir",children:[{value:"Options",id:"options",children:[],level:4},{value:"Enabling HTTPS",id:"enabling-https",children:[],level:4}],level:3},{value:"<code>docusaurus build [siteDir]</code>",id:"docusaurus-build-sitedir",children:[{value:"Options",id:"options-1",children:[],level:4}],level:3},{value:"<code>docusaurus swizzle [siteDir]</code>",id:"docusaurus-swizzle-sitedir",children:[{value:"Options",id:"options-2",children:[],level:4}],level:3},{value:"<code>docusaurus deploy [siteDir]</code>",id:"docusaurus-deploy-sitedir",children:[{value:"Options",id:"options-3",children:[],level:4}],level:3},{value:"<code>docusaurus serve [siteDir]</code>",id:"docusaurus-serve-sitedir",children:[],level:3},{value:"<code>docusaurus clear [siteDir]</code>",id:"docusaurus-clear-sitedir",children:[],level:3},{value:"<code>docusaurus write-translations [siteDir]</code>",id:"docusaurus-write-translations-sitedir",children:[],level:3},{value:"<code>docusaurus write-heading-ids [siteDir] [files]</code>",id:"docusaurus-write-heading-ids-sitedir",children:[],level:3}],level:2}],v={toc:b};function y(e){var t,a=e,{components:s}=a,k=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),k),d(t,u({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("h1",h({},{id:"cli"}),"CLI"),(0,n.kt)("p",null,"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."),(0,n.kt)("p",null,"Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  // ...\n  "scripts": {\n    "docusaurus": "docusaurus",\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy",\n    "clear": "docusaurus clear",\n    "serve": "docusaurus serve",\n    "write-translations": "docusaurus write-translations",\n    "write-heading-ids": "docusaurus write-heading-ids"\n  }\n}\n')),(0,n.kt)("h2",h({},{id:"index"}),"Index"),(0,n.kt)(i.Z,{toc:b[1].children,mdxType:"TOCInline"}),(0,n.kt)("h2",h({},{id:"docusaurus-cli-commands"}),"Docusaurus CLI commands"),(0,n.kt)("p",null,"Below is a list of Docusaurus CLI commands and their usages:"),(0,n.kt)("h3",h({},{id:"docusaurus-start-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus start [siteDir]")),(0,n.kt)("p",null,"Builds and serves a preview of your site locally with ",(0,n.kt)("a",h({parentName:"p"},{href:"https://webpack.js.org/configuration/dev-server"}),"Webpack Dev Server"),"."),(0,n.kt)("h4",h({},{id:"options"}),"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--port")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"3000")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Specifies the port of the dev server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--host")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"localhost")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,n.kt)("inlineCode",{parentName:"td"},"--host 0.0.0.0"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--hot-only")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information ",(0,n.kt)("a",h({parentName:"td"},{href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly"}),"here"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--no-open")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Do not open automatically the page in the browser.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--config")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Path to docusaurus config file, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--poll [optionalIntervalMs]")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information ",(0,n.kt)("a",h({parentName:"td"},{href:"https://webpack.js.org/configuration/watch/#watchoptionspoll"}),"here"),".")))),(0,n.kt)("div",h({},{className:"admonition admonition-important alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production."))),(0,n.kt)("h4",h({},{id:"enabling-https"}),"Enabling HTTPS"),(0,n.kt)("p",null,"There are multiple ways to obtain a certificate. We will use ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/FiloSottile/mkcert"}),"mkcert")," as an example."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"mkcert localhost")," to generate ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost.pem")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost-key.pem"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"mkcert -install")," to install the cert in your trust store, and restart your browser")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the app with Docusaurus HTTPS env variables:"))),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start\n")),(0,n.kt)("ol",h({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"https://localhost:3000/"))),(0,n.kt)("h3",h({},{id:"docusaurus-build-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus build [siteDir]")),(0,n.kt)("p",null,"Compiles your site for production."),(0,n.kt)("h4",h({},{id:"options-1"}),"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--bundle-analyzer")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Analyze your bundle with the ",(0,n.kt)("a",h({parentName:"td"},{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"}),"webpack bundle analyzer"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--out-dir")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"build")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The full path for the new output directory, relative to the current workspace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--config")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Path to docusaurus config file, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--no-minify")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Build website without minimizing JS/CSS bundles.")))),(0,n.kt)("div",h({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"For advanced minification of CSS bundle, we use the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced"}),"advanced cssnano preset")," (along with additional several PostCSS plugins) and ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/jakubpawlowicz/clean-css#level-2-optimizations"}),"level 2 optimization of clean-css"),". If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable ",(0,n.kt)("inlineCode",{parentName:"p"},"USE_SIMPLE_CSS_MINIFIER=true")," to minify CSS with the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default"}),"default cssnano preset"),". ",(0,n.kt)("strong",{parentName:"p"},"Please ",(0,n.kt)("a",h({parentName:"strong"},{href:"https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md"}),"fill out an issue")," if you experience CSS minification bugs.")))),(0,n.kt)("h3",h({},{id:"docusaurus-swizzle-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus swizzle [siteDir]")),(0,n.kt)(o.ZP,{mdxType:"SwizzleWarning"}),(0,n.kt)("p",null,"Change any Docusaurus theme components to your liking with ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run swizzle"),"."),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nnpm run swizzle @docusaurus/theme-classic DocSidebar\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nyarn run swizzle @docusaurus/theme-classic DocSidebar\n")))),(0,n.kt)("p",null,"Running the command will copy the relevant theme files to your site folder. You may then make any changes to it and Docusaurus will use it instead of the one provided from the theme."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"npm run swizzle")," without ",(0,n.kt)("inlineCode",{parentName:"p"},"themeName")," lists all the themes available for swizzling; similarly, ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run swizzle [themeName]")," without ",(0,n.kt)("inlineCode",{parentName:"p"},"componentName")," lists all the components available for swizzling."),(0,n.kt)("h4",h({},{id:"options-2"}),"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"themeName")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The name of the theme you are using.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"swizzleComponent")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The name of the component to swizzle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--danger")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Allow swizzling of unstable components")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--typescript")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Swizzle TypeScript components")))),(0,n.kt)("p",null,"An example to use ",(0,n.kt)("inlineCode",{parentName:"p"},"--danger")," flag let's consider the below code:"),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Logo -- --danger\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Logo -- --danger\n")))),(0,n.kt)("div",h({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Unstable Components: components that have a higher risk of breaking changes due to internal refactorings."))),(0,n.kt)("p",null,"To unswizzle a component, simply delete the files of the swizzled component."),(0,n.kt)("h3",h({},{id:"docusaurus-deploy-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus deploy [siteDir]")),(0,n.kt)("p",null,"Deploys your site with ",(0,n.kt)("a",h({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages"),". Check out the docs on ",(0,n.kt)("a",h({parentName:"p"},{href:"/zh-CN/docs/deployment#deploying-to-github-pages"}),"deployment")," for more details."),(0,n.kt)("h4",h({},{id:"options-3"}),"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--out-dir")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"build")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The full path for the new output directory, relative to the current workspace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--skip-build")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Deploy website without building it. This may be useful when using a custom deploy script.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--config")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Path to docusaurus config file, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))))),(0,n.kt)("h3",h({},{id:"docusaurus-serve-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus serve [siteDir]")),(0,n.kt)("p",null,"Serve your built website locally."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--port")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"3000")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Use specified port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--dir")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"build")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The full path for the output directory, relative to the current workspace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--build")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Build website before serving")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--config")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Path to docusaurus config file, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--host")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"localhost")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,n.kt)("inlineCode",{parentName:"td"},"--host 0.0.0.0"),".")))),(0,n.kt)("h3",h({},{id:"docusaurus-clear-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus clear [siteDir]")),(0,n.kt)("p",null,"Clear a Docusaurus site's generated assets, caches, build artifacts."),(0,n.kt)("p",null,"We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site."),(0,n.kt)("h3",h({},{id:"docusaurus-write-translations-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus write-translations [siteDir]")),(0,n.kt)("p",null,"Write the JSON translation files that you will have to translate."),(0,n.kt)("p",null,"By default, the files are written in ",(0,n.kt)("inlineCode",{parentName:"p"},"website/i18n/<defaultLocale>/..."),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--locale")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<defaultLocale>")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Define which locale folder you want to write translations the JSON files in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--override")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Override existing translation messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--config")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Path to docusaurus config file, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--messagePrefix")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"''")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Allows adding a prefix to each translation message, to help you highlight untranslated strings")))),(0,n.kt)("h3",h({},{id:"docusaurus-write-heading-ids-sitedir"}),(0,n.kt)("inlineCode",{parentName:"h3"},"docusaurus write-heading-ids [siteDir] [files]")),(0,n.kt)("p",null,"Add ",(0,n.kt)("a",h({parentName:"p"},{href:"/zh-CN/docs/markdown-features/headings#explicit-ids"}),"explicit heading ids")," to the Markdown documents of your site."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"files")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"All MD files used by plugins"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The files that you want heading IDs to be written to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--maintain-case")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Keep the headings' casing, otherwise make all lowercase.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--overwrite")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Overwrite existing heading IDs.")))))}y.isMDXComponent=!0}}]);