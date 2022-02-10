"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90058],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68799:function(e,t,n){var r=n(27378),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(27378),a=n(14324),o=n(46294),i=n(38944),s="tabItem_Ocg6",p=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&y(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&y(e,n,t[n]);return e};function h(e){var t,n,a;const{lazy:p,block:u,defaultValue:d,values:m,groupId:y,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:null!=(a=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=g[0])?void 0:n.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,o.UB)(),[T,O]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=y){const e=w[y];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==T&&(x(t),O(r),null!=y&&N(y,r))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},v.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=f({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:S,onClick:S},n),o={className:(0,i.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===e})},l(a,c(o))),null!=t?t:e);var a,o}))),p?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,a.Z)();return r.createElement(h,f({key:String(t)},e))}},40086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return y},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return g},default:function(){return b}});var r=n(35318),a=n(80673),o=n(68799),i=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e};const y={id:"typescript-support",title:"TypeScript Support"},f=void 0,h={unversionedId:"typescript-support",id:"version-2.0.0-beta.15/typescript-support",title:"TypeScript Support",description:"Docusaurus is written in TypeScript and provides first-class TypeScript support.",source:"@site/versioned_docs/version-2.0.0-beta.15/typescript-support.md",sourceDirName:".",slug:"/typescript-support",permalink:"/docs/typescript-support",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/typescript-support.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644456776,formattedLastUpdatedAt:"2/10/2022",frontMatter:{id:"typescript-support",title:"TypeScript Support"},sidebar:"docs",previous:{title:"Playground",permalink:"/docs/playground"},next:{title:"Guides",permalink:"/docs/category/guides"}},g=[{value:"Initialization",id:"initialization",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Typing the config file",id:"typing-config",children:[],level:2},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",children:[],level:2}],v={toc:g};function b(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),d),s(t,p({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Docusaurus is written in TypeScript and provides first-class TypeScript support."),(0,r.kt)("h2",m({},{id:"initialization"}),"Initialization"),(0,r.kt)("p",null,"Docusaurus supports writing and using TypeScript theme components. If the init template provides a Typescript variant, you can directly initialize a site with full TypeScript support by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--typescript")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest my-website classic --typescript\n")),(0,r.kt)("p",null,"Below are some guides on how to migrate an existing project to TypeScript."),(0,r.kt)("h2",m({},{id:"setup"}),"Setup"),(0,r.kt)("p",null,"To start using TypeScript, add ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/module-type-aliases")," and the base TS config to your project:"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn add --dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus\n")))),(0,r.kt)("p",null,"Then add ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to your project root with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "extends": "@tsconfig/docusaurus/tsconfig.json"\n}\n')),(0,r.kt)("p",null,"Docusaurus doesn't use this ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," to type check your code for yourself or on CI."),(0,r.kt)("p",null,"Now you can start writing TypeScript theme components."),(0,r.kt)("h2",m({},{id:"typing-config"}),"Typing the config file"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"not possible")," to use a TypeScript config file in Docusaurus unless you compile it yourself to JavaScript."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",m({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"}),"JSDoc type annotations"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Plugin} */\nfunction MyPlugin(context, options) {\n  return {\n    name: 'my-plugin',\n  };\n}\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  organizationName: 'facebook',\n  projectName: 'docusaurus',\n  plugins: [MyPlugin],\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          path: 'docs',\n          sidebarPath: 'sidebars.js',\n        },\n        blog: {\n          path: 'blog',\n          postsPerPage: 5,\n        },\n      }),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      colorMode: {\n        defaultMode: 'dark',\n      },\n      navbar: {\n        hideOnScroll: true,\n        title: 'Docusaurus',\n        logo: {\n          alt: 'Docusaurus Logo',\n          src: 'img/docusaurus.svg',\n          srcDark: 'img/docusaurus_keytar.svg',\n        },\n      },\n    }),\n};\n\nmodule.exports = config;\n")),(0,r.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Type annotations are very useful and help your IDE understand the type of config objects!"),(0,r.kt)("p",{parentName:"div"},"The best IDEs (VSCode, WebStorm, IntelliJ...) will provide a nice auto-completion experience."))),(0,r.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"By default, the Docusaurus TypeScript config does not type-check JavaScript files."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"// @ts-check")," comment ensures the config file is properly type-checked when running:"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run tsc\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run tsc\n")))))),(0,r.kt)("h2",m({},{id:"swizzling-typescript-theme-components"}),"Swizzling TypeScript theme components"),(0,r.kt)("p",null,"For themes that support TypeScript theme components, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--typescript")," flag to the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command to get TypeScript source code. For example, the following command will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.module.css")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme/Footer"),"."),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer -- --typescript\n")))),(0,r.kt)("p",null,"At this moment, the only official Docusaurus theme that supports TypeScript theme components is ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath"}),"Lifecycle APIs docs"),"."))}b.isMDXComponent=!0}}]);