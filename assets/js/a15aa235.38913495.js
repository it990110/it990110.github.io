"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14532],{68799:function(e,t,n){var a=n(27378),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))r.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(27378),l=n(14324),i=n(46294),o=n(38944),r="tabItem_Ocg6",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&g(e,n,t[n]);return e};function h(e){var t,n,l;const{lazy:s,block:u,defaultValue:d,values:m,groupId:g,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,i.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(l=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(n=k[0])?void 0:n.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.UB)(),[O,C]=(0,a.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=g){const e=y[g];null!=e&&e!==O&&b.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==O&&(P(t),C(a),null!=g&&N(g,a))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:j,onClick:j},n),i={className:(0,o.Z)("tabs__item",r,null==n?void 0:n.className,{"tabs__item--active":O===e})},p(l,c(i))),null!=t?t:e);var l,i}))),s?(0,a.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function k(e){const t=(0,l.Z)();return a.createElement(h,f({key:String(t)},e))}},89389:function(e,t,n){n.d(t,{v:function(){return d}});var a=n(70124),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))p.call(t,n)&&c(e,n,t[n]);return e};function d(e,t){return(0,a.v)(e,(n=u({},t),l={transforms:u({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)},i(n,o(l))));var n,l}},28316:function(e,t,n){n.r(t);var a=n(27378),l=n(14324);t.default=function({children:e,fallback:t}){return(0,l.Z)()?a.createElement(a.Fragment,null,e()):t||null}},42519:function(e,t,n){n.d(t,{Z:function(){return we}});var a={};n.r(a),n.d(a,{ButtonExample:function(){return M}});var l=n(27378),i=n(40935),o=n(38944),r=n(94157),s=n(64324),p=n(28316),c=n(46294),u="playgroundContainer_6Ior",d="playgroundHeader_Tvsk",m="playgroundEditor_TySg",g="playgroundPreview_mApW",f=n(14324),h=Object.defineProperty,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function y({children:e}){return l.createElement("div",{className:(0,o.Z)(d)},e)}function N(){return l.createElement("div",null,"Loading...")}function O(){return l.createElement(l.Fragment,null,l.createElement(y,null,l.createElement(r.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),l.createElement("div",{className:g},l.createElement(p.default,{fallback:l.createElement(N,null)},(()=>l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null))))))}function C(){const e=(0,f.Z)();return l.createElement(i.uz,{key:String(e),className:m})}function x(){return l.createElement(l.Fragment,null,l.createElement(y,null,l.createElement(r.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),l.createElement(C,null))}function P(e){var t=e,{children:n,transformCode:a}=t,o=((e,t)=>{var n={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&v.call(e,a)&&(n[a]=e[a]);return n})(t,["children","transformCode"]);const{siteConfig:{themeConfig:r}}=(0,s.default)(),{liveCodeBlock:{playgroundPosition:p}}=r,d=(0,c.pJ)();return l.createElement("div",{className:u},l.createElement(i.nu,((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&w(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&w(e,n,t[n]);return e})({code:n.replace(/\n$/,""),transformCode:a||(e=>`${e};`),theme:d},o),"top"===p?l.createElement(l.Fragment,null,l.createElement(O,null),l.createElement(x,null)):l.createElement(l.Fragment,null,l.createElement(x,null),l.createElement(O,null))))}var j=Object.defineProperty,E=Object.defineProperties,T=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&W(e,n,t[n]);if(A)for(var n of A(t))I.call(t,n)&&W(e,n,t[n]);return e};function M(e){return l.createElement("button",(t=D({type:"button"},e),n={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},E(t,T(n))));var t,n}var Z=Object.defineProperty,_=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&B(e,n,t[n]);if(_)for(var n of _(t))R.call(t,n)&&B(e,n,t[n]);return e};var q=L(L({React:l},l),a),H=n(55620),U=n(39348),F="codeBlockContainer_RIuc",V="codeBlockContent_DOR6",$="codeBlockTitle_fLmC",G="codeBlock_SvlJ",J="codeBlockStandalone_K_5i",Y="copyButton_veCs",K="codeBlockLines_kiFP",X=Object.defineProperty,Q=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,le=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&le(e,n,t[n]);if(te)for(var n of te(t))ae.call(t,n)&&le(e,n,t[n]);return e},oe=(e,t)=>Q(e,ee(t));var re=Object.defineProperty,se=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&ue(e,n,t[n]);if(se)for(var n of se(t))ce.call(t,n)&&ue(e,n,t[n]);return e};var me,ge=(me=function({children:e,className:t="",metastring:n,title:a,language:i}){var s;const{prism:p}=(0,c.LU)(),[u,d]=(0,l.useState)(!1),[m,g]=(0,l.useState)(!1);(0,l.useEffect)((()=>{g(!0)}),[]);const f=(0,c.bc)(n)||a,h=(0,c.pJ)();if(l.Children.toArray(e).some((e=>(0,l.isValidElement)(e))))return l.createElement(H.ZP,oe(ie({},H.lG),{key:String(m),theme:h,code:"",language:"text"}),(({className:n,style:a})=>l.createElement("pre",{tabIndex:0,className:(0,o.Z)(n,J,"thin-scrollbar",F,t,c.kM.common.codeBlock),style:a},l.createElement("code",{className:K},e))));const k=Array.isArray(e)?e.join(""):e,b=null!=(s=null!=i?i:(0,c.Vo)(t))?s:p.defaultLanguage,{highlightLines:v,code:w}=(0,c.nZ)(k,n,b),y=()=>{(0,U.Z)(w),d(!0),setTimeout((()=>d(!1)),2e3)};return l.createElement(H.ZP,oe(ie({},H.lG),{key:String(m),theme:h,code:w,language:null!=b?b:"text"}),(({className:e,style:n,tokens:a,getLineProps:i,getTokenProps:s})=>l.createElement("div",{className:(0,o.Z)(F,t,{[`language-${b}`]:b&&!t.includes(`language-${b}`)},c.kM.common.codeBlock)},f&&l.createElement("div",{style:n,className:$},f),l.createElement("div",{className:(0,o.Z)(V,b)},l.createElement("pre",{tabIndex:0,className:(0,o.Z)(e,G,"thin-scrollbar"),style:n},l.createElement("code",{className:K},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return v.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",ie({key:t},n),e.map(((e,t)=>l.createElement("span",ie({key:t},s({token:e,key:t}))))),l.createElement("br",null))})))),l.createElement("button",{type:"button","aria-label":(0,r.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(Y,"clean-btn"),onClick:y},u?l.createElement(r.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(r.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},function(e){return e.live?l.createElement(P,de({scope:q},e)):l.createElement(me,de({},e))}),fe=Object.defineProperty,he=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function we(e){return l.createElement(ge,((e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&ve(e,n,t[n]);if(he)for(var n of he(t))be.call(t,n)&&ve(e,n,t[n]);return e})({},e))}},60119:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return k},toc:function(){return b},default:function(){return w}});var a=n(35318),l=n(80673),i=n(68799),o=n(42519),r=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const f={sidebar_position:9,id:"plugin-pwa",title:"\ud83d\udce6 plugin-pwa",slug:"/api/plugins/@docusaurus/plugin-pwa"},h=void 0,k={unversionedId:"api/plugins/plugin-pwa",id:"version-2.0.0-beta.15/api/plugins/plugin-pwa",title:"\ud83d\udce6 plugin-pwa",description:"Docusaurus Plugin to add PWA support using Workbox. This plugin generates a Service Worker in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/plugins/plugin-pwa.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-pwa",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-pwa",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/plugins/plugin-pwa.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644315946,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"plugin-pwa",title:"\ud83d\udce6 plugin-pwa",slug:"/api/plugins/@docusaurus/plugin-pwa"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-ideal-image"},next:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-sitemap"}},b=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Progressive Web App",id:"progressive-web-app",children:[],level:2},{value:"App installation support",id:"app-installation-support",children:[],level:2},{value:"Offline mode (precaching)",id:"offline-mode-precaching",children:[],level:2},{value:"Options",id:"options",children:[{value:"<code>debug</code>",id:"debug",children:[],level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",children:[],level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",children:[],level:3},{value:"<code>reloadPopup</code>",id:"reloadpopup",children:[],level:3},{value:"<code>pwaHead</code>",id:"pwahead",children:[],level:3},{value:"<code>swCustom</code>",id:"swcustom",children:[],level:3},{value:"<code>swRegister</code>",id:"swregister",children:[],level:3}],level:2},{value:"Manifest example",id:"manifest-example",children:[],level:2}],v={toc:b};function w(e){var t,r=e,{components:m}=r,f=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=g(g({},v),f),s(t,p({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Docusaurus Plugin to add PWA support using ",(0,a.kt)("a",g({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox"}),"Workbox"),". This plugin generates a ",(0,a.kt)("a",g({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers"}),"Service Worker")," in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support."),(0,a.kt)("h2",g({},{id:"installation"}),"Installation"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-pwa\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-pwa\n")))),(0,a.kt)("h2",g({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",g({parentName:"p"},{href:"https://web.dev/add-manifest/"}),"PWA manifest")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"./static/manifest.json"),"."),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," with a minimal PWA config, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        debug: true,\n        offlineModeActivationStrategies: [\n          'appInstalled',\n          'standalone',\n          'queryString',\n        ],\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json', // your PWA manifest\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n        ],\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h2",g({},{id:"progressive-web-app"}),"Progressive Web App"),(0,a.kt)("p",null,"Having a service worker installed is not enough to make your application a PWA. You'll need to at least include a ",(0,a.kt)("a",g({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"}),"Web App Manifest")," and have the correct tags in ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," (",(0,a.kt)("a",g({parentName:"p"},{href:"#pwahead"}),"Options > pwaHead"),")."),(0,a.kt)("p",null,"After deployment, you can use ",(0,a.kt)("a",g({parentName:"p"},{href:"https://developers.google.com/web/tools/lighthouse"}),"Lighthouse")," to run an audit on your site."),(0,a.kt)("p",null,"For a more exhaustive list of what it takes for your site to be a PWA, refer to the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://developers.google.com/web/progressive-web-apps/checklist"}),"PWA Checklist")),(0,a.kt)("h2",g({},{id:"app-installation-support"}),"App installation support"),(0,a.kt)("p",null,"If your browser supports it, you should be able to install a Docusaurus site as an app."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"pwa_install.gif",src:n(87895).Z,width:"640",height:"505"})),(0,a.kt)("div",g({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"App installation requires the https protocol and a valid manifest."))),(0,a.kt)("h2",g({},{id:"offline-mode-precaching"}),"Offline mode (precaching)"),(0,a.kt)("p",null,"We enable users to browse a Docusaurus site offline, by using service-worker precaching."),(0,a.kt)("blockquote",null,(0,a.kt)("h3",g({parentName:"blockquote"},{id:"what-is-precaching"}),(0,a.kt)("a",g({parentName:"h3"},{href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching"}),"What is Precaching?")),(0,a.kt)("p",{parentName:"blockquote"},'One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used.'),(0,a.kt)("p",{parentName:"blockquote"},"The main reason for doing this is that it gives developers control over the cache, meaning they can determine when and how long a file is cached as well as serve it to the browser without going to the network, meaning it can be used to create web apps that work offline."),(0,a.kt)("p",{parentName:"blockquote"},"Workbox takes a lot of the heavy lifting out of precaching by simplifying the API and ensuring assets are downloaded efficiently.")),(0,a.kt)("p",null,"By default, offline mode is enabled when the site is installed as an app. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"offlineModeActivationStrategies")," option for details."),(0,a.kt)("p",null,"After the site has been precached, the service worker will serve cached responses for later visits. When a new build is deployed along with a new service worker, the new one will begin installing and eventually move to a waiting state. During this waiting state, a reload popup will show and ask the user to reload the page for new content. Until the user either clears the application cache or clicks the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," button on the popup, the service worker will continue serving the old content."),(0,a.kt)("div",g({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Offline mode / precaching requires downloading all the static assets of the site ahead of time, and can consume unnecessary bandwidth. It may not be a good idea to activate it for all kind of sites."))),(0,a.kt)("h2",g({},{id:"options"}),"Options"),(0,a.kt)("h3",g({},{id:"debug"}),(0,a.kt)("inlineCode",{parentName:"h3"},"debug")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Turn debug mode on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Workbox logs"),(0,a.kt)("li",{parentName:"ul"},"Additional Docusaurus logs"),(0,a.kt)("li",{parentName:"ul"},"Unoptimized SW file output"),(0,a.kt)("li",{parentName:"ul"},"Source maps")),(0,a.kt)("h3",g({},{id:"offlinemodeactivationstrategies"}),(0,a.kt)("inlineCode",{parentName:"h3"},"offlineModeActivationStrategies")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Array<'appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always'>")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"['appInstalled','queryString','standalone']"))),(0,a.kt)("p",null,"Strategies used to turn the offline mode on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appInstalled"),": activates for users having installed the site as an app (not 100% reliable)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"standalone"),": activates for users running the app as standalone (often the case once a PWA is installed)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryString"),": activates if queryString contains ",(0,a.kt)("inlineCode",{parentName:"li"},"offlineMode=true")," (convenient for PWA debugging)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mobile"),": activates for mobile users (width <= 940px)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"saveData"),": activates for users with ",(0,a.kt)("inlineCode",{parentName:"li"},"navigator.connection.saveData === true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"always"),": activates for all users")),(0,a.kt)("div",g({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use this carefully: some users may not like to be forced to use the offline mode."))),(0,a.kt)("div",g({},{className:"admonition admonition-danger alert alert--danger"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"It is not possible to detect if an as a PWA in a very reliable way."),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"appinstalled")," event has been ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/w3c/manifest/pull/836"}),"removed from the specification"),", and the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://web.dev/get-installed-related-apps/"}),(0,a.kt)("inlineCode",{parentName:"a"},"navigator.getInstalledRelatedApps()"))," API is only supported in recent Chrome versions and require ",(0,a.kt)("inlineCode",{parentName:"p"},"related_applications")," declared in the manifest."),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("a",g({parentName:"p"},{href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/"}),(0,a.kt)("inlineCode",{parentName:"a"},"standalone")," strategy")," is a nice fallback to activate the offline mode (at least when running the installed app)."))),(0,a.kt)("h3",g({},{id:"injectmanifestconfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"injectManifestConfig")),(0,a.kt)("p",null,(0,a.kt)("a",g({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.injectManifest"}),"Workbox options")," to pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"workbox.injectManifest()"),". This gives you control over which assets will be precached, and be available offline."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"InjectManifestOptions")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (html, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ['**/*.{pdf,docx,xlsx}'],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h3",g({},{id:"reloadpopup"}),(0,a.kt)("inlineCode",{parentName:"h3"},"reloadPopup")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | false")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'@theme/PwaReloadPopup'"))),(0,a.kt)("p",null,"Module path to reload popup component. This popup is rendered when a new service worker is waiting to be installed, and we suggest a reload to the user."),(0,a.kt)("p",null,"Passing ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," will disable the popup, but this is not recommended: users won't have a way to get up-to-date content."),(0,a.kt)("p",null,"A custom component can be used, as long as it accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"onReload")," as a prop. The ",(0,a.kt)("inlineCode",{parentName:"p"},"onReload")," callback should be called when the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," button is clicked. This will tell the service worker to install the waiting service worker and reload the page."),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-ts"}),"interface PwaReloadPopupProps {\n  onReload: () => void;\n}\n")),(0,a.kt)("p",null,"The default theme includes an implementation for the reload popup and uses ",(0,a.kt)("a",g({parentName:"p"},{href:"https://infima.dev/docs/components/alert"}),"Infima Alerts"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"pwa_reload.gif",src:n(67461).Z,width:"1000",height:"502"})),(0,a.kt)("h3",g({},{id:"pwahead"}),(0,a.kt)("inlineCode",{parentName:"h3"},"pwaHead")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Array<{ tagName: string } & Record<string,string>>")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"Array of objects containing ",(0,a.kt)("inlineCode",{parentName:"p"},"tagName")," and key-value pairs for attributes to inject into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tag. Technically you can inject any head tag through this, but it's ideally used for tags to make your site PWA compliant. Here's a list of tag to make your app fully compliant:"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json',\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-capable',\n            content: 'yes',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-status-bar-style',\n            content: '#000',\n          },\n          {\n            tagName: 'link',\n            rel: 'apple-touch-icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'mask-icon',\n            href: '/img/docusaurus.svg',\n            color: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileImage',\n            content: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileColor',\n            content: '#000',\n          },\n        ],\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h3",g({},{id:"swcustom"}),(0,a.kt)("inlineCode",{parentName:"h3"},"swCustom")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | undefined")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"Useful for additional Workbox rules. You can do whatever a service worker can do here, and use the full power of workbox libraries. The code is transpiled, so you can use modern ES6+ syntax here."),(0,a.kt)("p",null,"For example, to cache files from external routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js"}),"import {registerRoute} from 'workbox-routing';\nimport {StaleWhileRevalidate} from 'workbox-strategies';\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [\n      /graph\\.facebook\\.com\\/.*\\/picture/,\n      /netlify\\.com\\/img/,\n      /avatars1\\.githubusercontent/,\n    ].some((regex) => context.url.href.match(regex));\n  }, new StaleWhileRevalidate());\n}\n")),(0,a.kt)("p",null,"The module should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," function export, and receives some params."),(0,a.kt)("h3",g({},{id:"swregister"}),(0,a.kt)("inlineCode",{parentName:"h3"},"swRegister")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | false")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'docusaurus-plugin-pwa/src/registerSW.js'"))),(0,a.kt)("p",null,"Adds an entry before the Docusaurus app so that registration can happen before the app runs. The default ",(0,a.kt)("inlineCode",{parentName:"p"},"registerSW.js")," file is enough for simple registration."),(0,a.kt)("p",null,"Passing ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," will disable registration entirely."),(0,a.kt)("h2",g({},{id:"manifest-example"}),"Manifest example"),(0,a.kt)("p",null,"The Docusaurus site manifest can serve as an inspiration:"),(0,a.kt)(o.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(n(8047),null,2)))}w.isMDXComponent=!0},87895:function(e,t,n){t.Z=n.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},67461:function(e,t,n){t.Z=n.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},8047:function(e){e.exports=JSON.parse('{"name":"Docusaurus v2","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);