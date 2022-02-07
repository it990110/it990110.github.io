"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1746],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68799:function(e,t,n){var o=n(27378),a=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return o.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(27378),a=n(14324),i=n(46294),r=n(38944),l="tabItem_Ocg6",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&h(e,n,t[n]);return e};function g(e){var t,n,a;const{lazy:s,block:m,defaultValue:u,values:d,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.lx)(w,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:null!=(a=null!=u?u:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.UB)(),[z,C]=(0,o.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,i.o5)();if(null!=h){const e=b[h];null!=e&&e!==z&&w.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),o=w[n].value;o!==z&&(j(t),C(o),null!=h&&N(h,o))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},w.map((({value:e,label:t,attributes:n})=>{return o.createElement("li",(a=k({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:x,onClick:x},n),i={className:(0,r.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":z===e})},p(a,c(i))),null!=t?t:e);var a,i}))),s?(0,o.cloneElement)(f.filter((e=>e.props.value===z))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function f(e){const t=(0,a.Z)();return o.createElement(g,k({key:String(t)},e))}},71516:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(35318),a=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={toc:[]};function d(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},u),c),i(t,r({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"We discourage swizzling of components during the Docusaurus 2 beta phase. The theme components APIs are likely to evolve and have breaking changes. If possible, stick with the default appearance for now."))))}d.isMDXComponent=!0},59595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return w},default:function(){return v}});var o=n(35318),a=n(80673),i=n(68799),r=n(71516),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const k={description:"Customize your site's appearance through creating your own theme components"},g="Swizzling",f={unversionedId:"advanced/swizzling",id:"version-2.0.0-beta.15/advanced/swizzling",title:"Swizzling",description:"Customize your site's appearance through creating your own theme components",source:"@site/versioned_docs/version-2.0.0-beta.15/advanced/swizzling.md",sourceDirName:"advanced",slug:"/advanced/swizzling",permalink:"/zh-CN/docs/advanced/swizzling",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",frontMatter:{description:"Customize your site's appearance through creating your own theme components"},sidebar:"docs",previous:{title:"Routing",permalink:"/zh-CN/docs/advanced/routing"},next:{title:"Static site generation",permalink:"/zh-CN/docs/advanced/ssg"}},w=[{value:"Swizzling",id:"swizzling-1",children:[{value:"Ejecting theme components",id:"ejecting-theme-components",children:[],level:3},{value:"Wrapping theme components",id:"wrapping-theme-components",children:[],level:3}],level:2},{value:"Which component should I swizzle?",id:"which-component-should-i-swizzle",children:[{value:"Wrapping your site with <code>&lt;Root&gt;</code>",id:"wrapper-your-site-with-root",children:[],level:3}],level:2},{value:"Do I need to swizzle?",id:"do-i-need-to-swizzle",children:[],level:2},{value:"Theme aliases",id:"theme-aliases",children:[],level:2}],y={toc:w};function v(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=h(h({},y),d),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("h1",h({},{id:"swizzling"}),"Swizzling"),(0,o.kt)("p",null,"In this section, we will introduce how customization of layout is done in Docusaurus."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"D\xe9ja vu...?")),(0,o.kt)("p",null,"This section is similar to ",(0,o.kt)("a",h({parentName:"p"},{href:"/zh-CN/docs/styling-layout"}),"Styling and Layout"),", but this time, we are going to write more code and go deeper into the internals instead of playing with stylesheets. We will talk about a central concept in Docusaurus customization: ",(0,o.kt)("strong",{parentName:"p"},"swizzling"),", from how to swizzle, to how it works under the hood."),(0,o.kt)("p",null,'We know you are busy, so we will start with the "how" before going into the "why".'),(0,o.kt)("h2",h({},{id:"swizzling-1"}),"Swizzling"),(0,o.kt)(r.ZP,{mdxType:"SwizzleWarning"}),(0,o.kt)("p",null,'Docusaurus Themes\' components are designed to be replaceable. The replacing is called "swizzle". In Objective C, method swizzling is the process of changing the implementation of an existing selector (method). ',(0,o.kt)("strong",{parentName:"p"},"In the context of a website, component swizzling means providing an alternative component that takes precedence over the component provided by the theme.")," (To gain a deeper understanding of this, you have to understand ",(0,o.kt)("a",h({parentName:"p"},{href:"#theme-aliases"}),"how theme components are resolved"),"). To help you get started, we created a command called ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus swizzle"),"."),(0,o.kt)("h3",h({},{id:"ejecting-theme-components"}),"Ejecting theme components"),(0,o.kt)("p",null,"To eject a component provided by the theme, run the following command in your doc site:"),(0,o.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle [theme name] [component name]\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle [theme name] [component name]\n")))),(0,o.kt)("p",null,"As an example, to swizzle the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Footer />")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," for your site, run:"),(0,o.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer\n")))),(0,o.kt)("p",null,"This will copy the current ",(0,o.kt)("inlineCode",{parentName:"p"},"<Footer />")," component used by Docusaurus to an ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/Footer")," directory under the root of your site, which is where Docusaurus will look for swizzled components. Docusaurus will then use the swizzled component in place of the original one from the theme."),(0,o.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,o.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"You need to restart your webpack dev server in order for Docusaurus to know about the new component."))),(0,o.kt)("p",null,"If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"swizzle")," without ",(0,o.kt)("inlineCode",{parentName:"p"},"component name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"theme name"),", the command will give you a list to choose from. To only list available components, run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--list")," option:"),(0,o.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic --list\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic --list\n")))),(0,o.kt)("p",null,'"Swizzle" is a central concept in Docusaurus, and is a natural product of our ',(0,o.kt)("a",h({parentName:"p"},{href:"#theme-aliases"}),"layered theme architecture"),". Note that the command ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus swizzle")," is only an automated way to help you swizzle the component: you can still do it manually by creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/Footer.js")," file, and Docusaurus will pick that one up when resolving theme components. There's no internal magic behind this command!"),(0,o.kt)("h3",h({},{id:"wrapping-theme-components"}),"Wrapping theme components"),(0,o.kt)("p",null,"Ejecting a component is risky. It means you have to maintain an almost duplicate copy of the original theme component. Also, it's likely that we will change internal implementations in future versions and break your component, even if you never touched that part of the code."),(0,o.kt)("p",null,"Very often, you don't need to re-implement a component from scratch, but only to render additional items before or after it, or conditionally call some other logic. In this case, you are still going to swizzle the component\u2014but not making a self-sustained one. Instead, you can delegate most of the logic and layout to the original theme component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original")," alias allows you to import the original theme component and wrap it as a higher-order component."),(0,o.kt)("p",null,"Here is an example to display some text just above the footer, with minimal code duplication."),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="src/theme/Footer.js"',title:'"src/theme/Footer.js"'}),"import OriginalFooter from '@theme-original/Footer';\nimport React from 'react';\n\nexport default function Footer(props) {\n  return (\n    <>\n      <div>Before footer</div>\n      <OriginalFooter {...props} />\n    </>\n  );\n}\n")),(0,o.kt)("p",null,"Should you be wondering why we have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"'@theme-original/Footer'")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"'@theme/Footer'"),", a short explanation is that once you have the swizzled component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"'@theme/Footer'")," alias will now point to your swizzled component, and thus cause a self-import. For a more in-depth explanation, see ",(0,o.kt)("a",h({parentName:"p"},{href:"#theme-aliases"}),"theme aliases"),"."),(0,o.kt)("h2",h({},{id:"which-component-should-i-swizzle"}),"Which component should I swizzle?"),(0,o.kt)("p",null,"Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"theme-classic")," has about 100 components",(0,o.kt)("sup",h({parentName:"p"},{id:"fnref-source"}),(0,o.kt)("a",h({parentName:"sup"},{href:"#fn-source",className:"footnote-ref"}),"source")),"! If you want to customize a part of your site's layout, which component should you choose?"),(0,o.kt)("p",null,"You can follow the following steps to locate the component to swizzle:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Search.")," Our components are semantically named, so you should be able to infer its function from the name. The swizzle CLI allows you to enter part of a component name to narrow down the available choices. For example, if you run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn swizzle @docusaurus/theme-classic"),", and enter ",(0,o.kt)("inlineCode",{parentName:"li"},"Doc"),", only the docs-related components will be listed."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start with a higher-level component.")," Components form a tree with some components importing others. Every route will be associated with one top-level component that the route will render (most of them listed in ",(0,o.kt)("a",h({parentName:"li"},{href:"/zh-CN/docs/advanced/routing#routing-in-content-plugins"}),"Routing in content plugins"),"). For example, all blog post pages have ",(0,o.kt)("inlineCode",{parentName:"li"},"@theme/BlogPostPage")," as the topmost component. You can start with swizzling this component, and then go down the component tree to locate the component that renders just what you are targeting. Don't forget to unswizzle the rest by deleting the files after you've found the correct one, so you don't maintain too many components."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Read the source code and use search wisely.")," Topmost components are registered by the plugin with ",(0,o.kt)("inlineCode",{parentName:"li"},"addRoute"),", so you can search for ",(0,o.kt)("inlineCode",{parentName:"li"},"addRoute")," and see which component the plugin references. Afterwards, read the code of all components that this component references."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ask.")," If you still have no idea which component to swizzle to achieve the desired effect, you can reach out for help in one of our ",(0,o.kt)("a",h({parentName:"li"},{href:"/community/support"}),"support channels"),".")),(0,o.kt)("h3",h({},{id:"wrapper-your-site-with-root"}),"Wrapping your site with ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Root>")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Root>")," component is one that you probably won't spot. Every component provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"theme-classic")," is ultimately only rendered on certain routes, and will be unmounted during route transition; however, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Root>")," theme component is rendered at the very top of the Docusaurus SPA, above the router and the theme ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout>"),", and will ",(0,o.kt)("strong",{parentName:"p"},"never unmount"),", allowing you to wrap your site with additional logic like global state. You can swizzle it by creating a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/Root.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="website/src/theme/Root.js"',title:'"website/src/theme/Root.js"'}),"import React from 'react';\n\n// Default implementation, that you can customize\nfunction Root({children}) {\n  return <>{children}</>;\n}\n\nexport default Root;\n")),(0,o.kt)("div",h({},{className:"admonition admonition-tip alert alert--success"}),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,o.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},"Use this component to render React Context providers and global stateful logic."))),(0,o.kt)("h2",h({},{id:"do-i-need-to-swizzle"}),"Do I need to swizzle?"),(0,o.kt)("p",null,"Swizzling ultimately means you have to maintain part of the code directly used to build your site, and you have to interact with Docusaurus internal APIs. If you can, think about the following alternatives when customizing your site:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use CSS.")," CSS rules and selectors can often help you achieve a decent degree of customization. Refer to ",(0,o.kt)("a",h({parentName:"li"},{href:"/zh-CN/docs/styling-layout"}),"styling and layout")," for more details."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use translations.")," It may sound surprising, but translations are ultimately just a way to customize the text labels. For example, if your site's default language is ",(0,o.kt)("inlineCode",{parentName:"li"},"en"),", you can still run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn write-translations -l en")," and edit the ",(0,o.kt)("inlineCode",{parentName:"li"},"code.json")," emitted. Refer to ",(0,o.kt)("a",h({parentName:"li"},{href:"/zh-CN/docs/i18n/tutorial"}),"i18n tutorial")," for more details."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The smaller, the better.")," If swizzling is inevitable, prefer to swizzle only the relevant part and maintain as little code on your own as possible. Swizzling a small component often means less risk of breaking during upgrade. ",(0,o.kt)("a",h({parentName:"li"},{href:"#wrapping-theme-components"}),"Wrapping")," is also a far safer alternative to ",(0,o.kt)("a",h({parentName:"li"},{href:"#ejecting-theme-components"}),"ejecting"),".")),(0,o.kt)("h2",h({},{id:"theme-aliases"}),"Theme aliases"),(0,o.kt)("p",null,"A theme works by exporting a set of components, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Navbar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer"),", to render the data passed down from plugins. Docusaurus and users use these components by importing them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import Navbar from '@theme/Navbar';\n")),(0,o.kt)("p",null,"The alias ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A user's ",(0,o.kt)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),(0,o.kt)("li",{parentName:"ol"},"A Docusaurus theme package's ",(0,o.kt)("inlineCode",{parentName:"li"},"theme")," directory."),(0,o.kt)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),(0,o.kt)("p",null,"This is called a ",(0,o.kt)("em",{parentName:"p"},"layered architecture"),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{}),"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is pointing to!"),(0,o.kt)("p",null,'We already talked about how the "userland theme" in ',(0,o.kt)("inlineCode",{parentName:"p"},"src/theme")," can re-use a theme component through the ",(0,o.kt)("a",h({parentName:"p"},{href:"#wrapping-theme-components"}),(0,o.kt)("inlineCode",{parentName:"a"},"@theme-original"))," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init")," import."),(0,o.kt)("p",null,"Here's an example of using this feature to enhance the default theme ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeBlock")," component with a ",(0,o.kt)("inlineCode",{parentName:"p"},"react-live")," playground feature."),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import InitialCodeBlock from '@theme-init/CodeBlock';\nimport React from 'react';\n\nexport default function CodeBlock(props) {\n  return props.live ? (\n    <ReactLivePlayground {...props} />\n  ) : (\n    <InitialCodeBlock {...props} />\n  );\n}\n")),(0,o.kt)("p",null,"Check the code of ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," for details."),(0,o.kt)("div",h({},{className:"admonition admonition-caution alert alert--warning"}),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,o.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,o.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,o.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,o.kt)("p",{parentName:"div"},'Unless you want to publish a re-usable "theme enhancer" (like ',(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock"),"), you likely don't need ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init"),"."))),(0,o.kt)("p",null,'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-text"}),"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n")),(0,o.kt)("p",null,'The components in this "stack" are pushed in the order of ',(0,o.kt)("inlineCode",{parentName:"p"},"preset plugins > preset themes > plugins > themes > site"),", so the swizzled component in ",(0,o.kt)("inlineCode",{parentName:"p"},"website/src/theme")," always comes out on top because it's loaded last."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme/*")," always points to the topmost component\u2014when ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeBlock")," is swizzled, all other components requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," receive the swizzled version."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/*")," always points to the topmost non-swizzled component. That's why you can import ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/*")," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,o.kt)("em",{parentName:"p"},"topmost")," instead of the ",(0,o.kt)("em",{parentName:"p"},"bottommost")," component. It's also possible that the ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),", i.e. when it's provided by more than one theme. We don't waste aliases!"),(0,o.kt)("div",h({},{className:"footnotes"}),(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",h({parentName:"ol"},{id:"fn-source"}),(0,o.kt)("a",h({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme"}),"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme"),(0,o.kt)("a",h({parentName:"li"},{href:"#fnref-source",className:"footnote-backref"}),"\u21a9")))))}v.isMDXComponent=!0}}]);