"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28608],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68799:function(e,t,n){var r=n(27378),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&l(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(27378),a=n(14324),o=n(46294),i=n(38944),s="tabItem_Ocg6",l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&h(e,n,t[n]);return e};function v(e){var t,n,a;const{lazy:l,block:d,defaultValue:p,values:m,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,o.lx)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:null!=(a=null!=p?p:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=g[0])?void 0:n.props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,o.UB)(),[O,x]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=k[h];null!=e&&e!==O&&b.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=S.indexOf(t),r=b[n].value;r!==O&&(T(t),x(r),null!=h&&N(h,r))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]||S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]||S[S.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},b.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>S.push(e),onKeyDown:C,onFocus:E,onClick:E},n),o={className:(0,i.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})},c(a,u(o))),null!=t?t:e);var a,o}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,a.Z)();return r.createElement(v,f({key:String(t)},e))}},47502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return g},default:function(){return w}});var r=n(35318),a=n(80673),o=n(68799),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&p(e,n,t[n]);return e};const h={sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},f="Static site generation (SSG)",v={unversionedId:"advanced/ssg",id:"advanced/ssg",title:"Static site generation (SSG)",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO.",source:"@site/docs/advanced/ssg.md",sourceDirName:"advanced",slug:"/advanced/ssg",permalink:"/docs/next/advanced/ssg",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/advanced/ssg.md",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2/8/2022",frontMatter:{sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},sidebar:"docs",previous:{title:"Swizzling",permalink:"/docs/next/advanced/swizzling"},next:{title:"Migration overview",permalink:"/docs/next/migration"}},g=[{value:"Understanding SSR",id:"understanding-ssr",children:[],level:2},{value:"Escape hatches",id:"escape-hatches",children:[{value:"<code>&lt;BrowserOnly&gt;</code>",id:"browseronly",children:[],level:3},{value:"<code>useIsBrowser</code>",id:"useisbrowser",children:[],level:3},{value:"<code>useEffect</code>",id:"useeffect",children:[],level:3},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",children:[],level:3}],level:2}],b={toc:g};function w(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),p),s(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"static-site-generation-ssg"}),"Static site generation (SSG)"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/advanced/architecture"}),"architecture"),", we mentioned that the theme is run in Webpack. But beware: that doesn't mean it always has access to browser globals! The theme is built twice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("strong",{parentName:"li"},"server-side rendering"),", the theme is compiled in a sandbox called ",(0,r.kt)("a",m({parentName:"li"},{href:"https://reactjs.org/docs/react-dom-server.html"}),"React DOM Server"),'. You can see this as a "headless browser", where there is no ',(0,r.kt)("inlineCode",{parentName:"li"},"window")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"document"),", only React. SSR produces static HTML pages."),(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("strong",{parentName:"li"},"client-side rendering"),", the theme is compiled with standard React DOM, and has access to browser variables. CSR produces dynamic JavaScript.")),(0,r.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"SSR or SSG?")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Server-side rendering")," and ",(0,r.kt)("em",{parentName:"p"},"static site generation")," can be different concepts, but we use them interchangeably."))),(0,r.kt)("p",null,"Therefore, while you probably know not to access Node globals like ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," (",(0,r.kt)("a",m({parentName:"p"},{href:"#node-env"}),"or can we?"),") or the ",(0,r.kt)("inlineCode",{parentName:"p"},"'fs'")," module, you can't freely access browser globals either."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nexport default function WhereAmI() {\n  return <span>{window.location.href}</span>;\n}\n")),(0,r.kt)("p",null,"This looks like idiomatic React, but if you run ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus build"),", you will get an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"ReferenceError: window is not defined\n")),(0,r.kt)("p",null,"This is because during server-side rendering, the Docusaurus app isn't actually run in browser, and it doesn't know what ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," is."),(0,r.kt)("details",{id:"node-env"},(0,r.kt)("summary",null,"What about ",(0,r.kt)("code",null,"process.env.NODE_ENV"),"?"),(0,r.kt)("p",null,'One exception to the "no Node globals" rule is ',(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". In fact, you can use it in React, because Webpack injects this variable as a global:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nexport default function expensiveComp() {\n  if (process.env.NODE_ENV === 'development') {\n    return <>This component is not shown in development</>;\n  }\n  const res = someExpensiveOperationThatLastsALongTime();\n  return <>{res}</>;\n}\n")),(0,r.kt)("p",null,"During Webpack build, the ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," will be replaced with the value, either ",(0,r.kt)("inlineCode",{parentName:"p"},"'development'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'production'"),". You will then get different build results after dead code elimination:"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Development",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n  if ('development' === 'development') {\n+   return <>This component is not shown in development</>;\n  }\n- const res = someExpensiveOperationThatLastsALongTime();\n- return <>{res}</>;\n}\n"))),(0,r.kt)(o.Z,{value:"Production",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n- if ('production' === 'development') {\n-   return <>This component is not shown in development</>;\n- }\n+ const res = someExpensiveOperationThatLastsALongTime();\n+ return <>{res}</>;\n}\n"))))),(0,r.kt)("h2",m({},{id:"understanding-ssr"}),"Understanding SSR"),(0,r.kt)("p",null,"React is not just a dynamic UI runtime\u2014it's also a templating engine. Because Docusaurus sites mostly contain static contents, it should be able to work without any JavaScript (which React runs in), but only plain HTML/CSS. And that's what server-side rendering offers: statically rendering your React code into HTML, without any dynamic content. An HTML file has no concept of client state (it's purely markup), hence it shouldn't rely on browser APIs."),(0,r.kt)("p",null,"These HTML files are the first to arrive at the user's browser screen when a URL is visited (see ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/advanced/routing"}),"routing"),'). Afterwards, the browser fetches and runs other JS code to provide the "dynamic" parts of your site\u2014anything implemented with JavaScript. However, before that, the main content of your page is already visible, allowing faster loading.'),(0,r.kt)("p",null,'In CSR-only apps, all DOM elements are generated on client side with React, and the HTML file only ever contains one root element for React to mount DOM to; in SSR, React is already facing a fully built HTML page, and it only needs to correlate the DOM elements with the virtual DOM in its model. This step is called "hydration". After React has hydrated the static markup, the app starts to work as any normal React app.'),(0,r.kt)("h2",m({},{id:"escape-hatches"}),"Escape hatches"),(0,r.kt)("p",null,"If you want to render any dynamic content on your screen that relies on the browser API to be functional at all, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our ",(0,r.kt)("a",m({parentName:"li"},{href:"/docs/next/markdown-features/code-blocks#interactive-code-editor"}),"live codeblock"),", which runs in the browser's JS runtime"),(0,r.kt)("li",{parentName:"ul"},"Our ",(0,r.kt)("a",m({parentName:"li"},{href:"/docs/next/markdown-features/assets#themed-images"}),"themed image")," that detects the user's color scheme to display different images"),(0,r.kt)("li",{parentName:"ul"},"The JSON viewer of our debug panel which uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"window")," global for styling")),(0,r.kt)("p",null,"You may need to escape from SSR since static HTML can't display anything useful without knowing the client state."),(0,r.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"It is important for the first client-side render to produce the exact same DOM structure as server-side rendering, otherwise, React will correlate virtual DOM with the wrong DOM elements."),(0,r.kt)("p",{parentName:"div"},"Therefore, the na\xefve attempt of ",(0,r.kt)("inlineCode",{parentName:"p"},"if (typeof window !== 'undefined) {/* render something */}")," won't work appropriately as a browser vs. server detection, because the first client render would instantly render different markup from the server-generated one."),(0,r.kt)("p",{parentName:"div"},"You can read more about this pitfall in ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/"}),"The Perils of Rehydration"),"."))),(0,r.kt)("p",null,"We provide several more reliable ways to escape SSR."),(0,r.kt)("h3",m({},{id:"browseronly"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<BrowserOnly>")),(0,r.kt)("p",null,"If you need to render some component in browser only (for example, because the component relies on browser specifics to be functional at all), one common approach is to wrap your component with ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/docusaurus-core#browseronly"}),(0,r.kt)("inlineCode",{parentName:"a"},"<BrowserOnly>"))," to make sure it's invisible during SSR and only rendered in CSR."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent(props) {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require('some-lib-that-accesses-window').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n}\n")),(0,r.kt)("p",null,"It's important to realize that the children of ",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserOnly>")," is not a JSX element, but a function that ",(0,r.kt)("em",{parentName:"p"},"returns")," an element. This is a design decision. Consider this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent() {\n  return (\n    <BrowserOnly>\n      {/* highlight-start */}\n      {/* DON'T DO THIS - doesn't actually work */}\n      <span>page url = {window.location.href}</span>\n      {/* highlight-end */}\n    </BrowserOnly>\n  );\n}\n")),(0,r.kt)("p",null,"While you may expect that ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserOnly")," hides away the children during server-side rendering, it actually can't. When the React renderer tries to render this JSX tree, it does see the ",(0,r.kt)("inlineCode",{parentName:"p"},"{window.location.href}")," variable as a node of this tree and tries to render it, although it's actually not used! Using a function ensures that we only let the renderer see the browser-only component when it's needed."),(0,r.kt)("h3",m({},{id:"useisbrowser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useIsBrowser")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsBrowser()")," hook to test if the component is currently in a browser environment. It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in SSR and ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," is CSR, after first client render. Use this hook if you only need to perform certain conditional operations on client-side, but not render an entirely different UI."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import useIsBrowser from '@docusaurus/useIsBrowser';\n\nfunction MyComponent() {\n  const isBrowser = useIsBrowser();\n  const location = isBrowser ? window.location.href : 'fetching location...';\n  return <span>{location}</span>;\n}\n")),(0,r.kt)("h3",m({},{id:"useeffect"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useEffect")),(0,r.kt)("p",null,"Lastly, you can put your logic in ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect()")," to delay its execution until after first CSR. This is most appropriate if you are only performing side-effects but don't ",(0,r.kt)("em",{parentName:"p"},"get")," data from the client state."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'function MyComponent() {\n  useEffect(() => {\n    // Only logged in the browser console; nothing is logged during server-side rendering\n    console.log("I\'m now in the browser");\n  }, []);\n  return <span>Some content...</span>;\n}\n')),(0,r.kt)("h3",m({},{id:"executionenvironment"}),(0,r.kt)("inlineCode",{parentName:"h3"},"ExecutionEnvironment")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/docusaurus-core#executionenvironment"}),(0,r.kt)("inlineCode",{parentName:"a"},"ExecutionEnvironment"))," namespace contains several values, and ",(0,r.kt)("inlineCode",{parentName:"p"},"canUseDOM")," is an effective way to detect browser environment."),(0,r.kt)("p",null,"Beware that it essentially checked ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof window !== 'undefined'")," under the hood, so you should not use it for rendering-related logic, but only imperative code, like reacting to user input by sending web requests, or dynamically importing libraries, where DOM isn't updated at all."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="a-client-module.js"',title:'"a-client-module.js"'}),"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  document.title = \"I'm loaded!\";\n}\n")))}w.isMDXComponent=!0}}]);