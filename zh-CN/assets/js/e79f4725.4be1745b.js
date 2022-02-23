"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65794],{35318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(27378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=s,h=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68799:function(e,t,a){var n=a(27378),s=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},80673:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(27378),s=a(14324),r=a(46294),i=a(38944),l="tabItem_Ocg6",o=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&h(e,a,t[a]);return e};function g(e){var t,a,s;const{lazy:o,block:u,defaultValue:c,values:d,groupId:h,className:g}=e,N=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:N.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,r.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:null!=(s=null!=c?c:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?s:null==(a=N[0])?void 0:a.props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,r.UB)(),[x,j]=(0,n.useState)(y),M=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,a=M.indexOf(t),n=f[a].value;n!==x&&(C(t),j(n),null!=h&&b(h,n))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=M.indexOf(e.currentTarget)+1;t=M[a]||M[0];break}case"ArrowLeft":{const a=M.indexOf(e.currentTarget)-1;t=M[a]||M[M.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(s=k({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>M.push(e),onKeyDown:T,onFocus:O,onClick:O},a),r={className:(0,i.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(s,m(r))),null!=t?t:e);var s,r}))),o?(0,n.cloneElement)(N.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function N(e){const t=(0,s.Z)();return n.createElement(g,k({key:String(t)},e))}},25478:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return g},toc:function(){return N},default:function(){return v}});var n=a(35318),s=a(80673),r=a(68799),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&c(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&c(e,a,t[a]);return e};const h={id:"plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},k=void 0,g={unversionedId:"guides/markdown-features/plugins",id:"guides/markdown-features/plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/zh-CN/docs/next/markdown-features/plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2022/2/23",frontMatter:{id:"plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Assets",permalink:"/zh-CN/docs/next/markdown-features/assets"},next:{title:"Math Equations",permalink:"/zh-CN/docs/next/markdown-features/math-equations"}},N=[{value:"Default plugins",id:"default-plugins",children:[],level:2},{value:"Installing plugins",id:"installing-plugins",children:[],level:2},{value:"Configuring plugins",id:"configuring-plugins",children:[],level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",children:[],level:2}],f={toc:N};function v(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},f),c),l(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How do I embed youtube videos using the image syntax (",(0,n.kt)("inlineCode",{parentName:"li"},"![](https://youtu.be/yKNxeF4KMsY)"),")?"),(0,n.kt)("li",{parentName:"ul"},"How do I style links that are on their own lines differently, e.g., as a social card?"),(0,n.kt)("li",{parentName:"ul"},"How do I make every page start with a copyright notice?")),(0,n.kt)("p",null,"And the answer is: create an MDX plugin! MDX has a built-in ",(0,n.kt)("a",d({parentName:"p"},{href:"https://mdxjs.com/advanced/plugins/"}),"plugin system")," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using existing ",(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"}),"remark plugins")," or ",(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"}),"rehype plugins"),";"),(0,n.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"),(0,n.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to introduce new syntaxes to MDX.")),(0,n.kt)("p",null,"If you play with the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"}),"MDX playground"),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",d({parentName:"strong"},{href:"https://github.com/remarkjs/remark/"}),"Remark")),": processes the Markdown AST."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",d({parentName:"strong"},{href:"https://github.com/rehypejs/rehype/"}),"Rehype")),": processes the Hypertext AST.")),(0,n.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,n.kt)("a",d({parentName:"p"},{href:"/zh-CN/docs/next/markdown-features/admonitions"}),"admonition")," syntax that we offer is also generated by a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/elviswolcott/remark-admonitions"}),"Remark plugin"),", and you could do the same for your own use case."))),(0,n.kt)("h2",d({},{id:"default-plugins"}),"Default plugins"),(0,n.kt)("p",null,"Docusaurus injects ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark"}),"some default Remark plugins")," during Markdown processing. These plugins would:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate the table of contents;"),(0,n.kt)("li",{parentName:"ul"},"Add anchor links to each heading;"),(0,n.kt)("li",{parentName:"ul"},"Transform images and links to ",(0,n.kt)("inlineCode",{parentName:"li"},"require()")," calls."),(0,n.kt)("li",{parentName:"ul"},"\u2026")),(0,n.kt)("p",null,"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."),(0,n.kt)("h2",d({},{id:"installing-plugins"}),"Installing plugins"),(0,n.kt)("p",null,"An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,n.kt)("a",d({parentName:"p"},{href:"/zh-CN/docs/next/markdown-features/math-equations"}),"math plugins")," as an example."),(0,n.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm install --save remark-math@3 rehype-katex@4\n"))),(0,n.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add remark-math@3 rehype-katex@4\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"There's recently a trend in the Remark/Rehype ecosystem to migrate to ES Modules, a new JavaScript module system, which Docusaurus doesn't support yet. Please make sure your installed plugin version is CommonJS-compatible before we officially support ESM. Alternatively, you can read about using dynamic ",(0,n.kt)("inlineCode",{parentName:"p"},"import()")," as a workaround in the tutorial of installing ",(0,n.kt)("a",d({parentName:"p"},{href:"/zh-CN/docs/next/markdown-features/math-equations#upgrading-rehype-katex-beyond-recommended-version"}),(0,n.kt)("inlineCode",{parentName:"a"},"rehype-katex")),"."))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How are ",(0,n.kt)("code",null,"remark-math")," and ",(0,n.kt)("code",null,"rehype-katex")," different?"),(0,n.kt)("p",null,"In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,n.kt)("inlineCode",{parentName:"p"},"remark-math")," operates on the Markdown AST, where it sees text like ",(0,n.kt)("inlineCode",{parentName:"p"},"$...$"),", and all it does is transform that to the JSX ",(0,n.kt)("inlineCode",{parentName:"p"},'<span class="math math-inline">...</span>')," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,n.kt)("span",d({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",d({parentName:"span"},{className:"katex"}),(0,n.kt)("span",d({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",d({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,n.kt)("annotation",d({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),(0,n.kt)("span",d({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",d({parentName:"span"},{className:"base"}),(0,n.kt)("span",d({parentName:"span"},{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"K"),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-t"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.6833em"}}),(0,n.kt)("span",d({parentName:"span"},{style:{top:"-2.905em"}}),(0,n.kt)("span",d({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"T"),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.4678em"}}),(0,n.kt)("span",d({parentName:"span"},{style:{top:"-2.7845em"}}),(0,n.kt)("span",d({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"E")))),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"X")))))))," out with other math renderers, like MathJax (with ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax"}),(0,n.kt)("inlineCode",{parentName:"a"},"rehype-mathjax")),"), just by replacing the Rehype plugin."),(0,n.kt)("p",null,"Next, the ",(0,n.kt)("inlineCode",{parentName:"p"},"rehype-katex")," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,n.kt)("inlineCode",{parentName:"p"},"math")," class and uses ",(0,n.kt)("span",d({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",d({parentName:"span"},{className:"katex"}),(0,n.kt)("span",d({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",d({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,n.kt)("annotation",d({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),(0,n.kt)("span",d({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",d({parentName:"span"},{className:"base"}),(0,n.kt)("span",d({parentName:"span"},{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"K"),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-t"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.6833em"}}),(0,n.kt)("span",d({parentName:"span"},{style:{top:"-2.905em"}}),(0,n.kt)("span",d({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"T"),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.4678em"}}),(0,n.kt)("span",d({parentName:"span"},{style:{top:"-2.7845em"}}),(0,n.kt)("span",d({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord"}),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"E")))),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",d({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",d({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",d({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),(0,n.kt)("span",d({parentName:"span"},{className:"mord textrm"}),"X")))))))," to parse and render the content to actual HTML.")),(0,n.kt)("p",null,"Next, add them to the plugin options through plugin or preset config in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-start\nconst math = require('remark-math');\nconst katex = require('rehype-katex');\n// highlight-end\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("h2",d({},{id:"configuring-plugins"}),"Configuring plugins"),(0,n.kt)("p",null,"Some plugins can be configured and accept their own options. In that case, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"[plugin, pluginOptions]")," syntax, like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [math],\n          rehypePlugins: [\n            // highlight-next-line\n            [katex, {strict: false}],\n          ],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("p",null,"You should check your plugin's documentation for the options it supports."),(0,n.kt)("h2",d({},{id:"creating-new-rehyperemark-plugins"}),"Creating new rehype/remark plugins"),(0,n.kt)("p",null,"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The writeup below is ",(0,n.kt)("strong",{parentName:"p"},"not")," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"}),"Remark")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"}),"Rehype")," documentation for a more in-depth explanation of how they work."))),(0,n.kt)("p",null,"For example, let's make a plugin that visits every ",(0,n.kt)("inlineCode",{parentName:"p"},"h2")," heading and adds a ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X. ")," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate NPM package and install it like explained above. We would put ours at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/remark/section-prefix.js"),". A remark/rehype plugin is just a function that receives the ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer")," that operates on the AST."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'"src/remark/section-prefix.js"','"src/remark/section-prefix.js"':!0}),"const visit = require('unist-util-visit');\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nmodule.exports = plugin;\n")),(0,n.kt)("p",null,"You can now import your plugin in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and use it just like an installed plugin!"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-next-line\nconst sectionPrefix = require('./src/remark/section-prefix');\n\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer")," has a second parameter ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/vfile/vfile"}),(0,n.kt)("inlineCode",{parentName:"a"},"vfile"))," which is useful if you need to access the current Markdown file's path."),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n")),(0,n.kt)("p",{parentName:"div"},"Our ",(0,n.kt)("inlineCode",{parentName:"p"},"transformImage")," plugin uses this parameter, for example, to transform relative image references to ",(0,n.kt)("inlineCode",{parentName:"p"},"require()")," calls."))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,n.kt)("inlineCode",{parentName:"p"},"require()")," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,n.kt)("inlineCode",{parentName:"p"},"h2")," headings are now prefixed by ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X."),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeDefaultRemarkPlugins")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeDefaultRehypePlugins"),"."),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("p",{parentName:"div"},"This would make the table of contents generated contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X.")," prefix as well."))))}v.isMDXComponent=!0}}]);