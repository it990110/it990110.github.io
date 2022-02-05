"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49428],{35318:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(27378);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=l,b=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?a.createElement(b,r(r({ref:n},m),{},{components:t})):a.createElement(b,r({ref:n},m))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81737:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(27378),l="tableOfContentsInline_eBKl",i=t(70986);var r=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return a.createElement("div",{className:l},a.createElement(i.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null}))}},70986:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(27378),l=t(46294),i=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function m({toc:e,className:n,linkClassName:t,isChild:l}){return e.length?a.createElement("ul",{className:l?void 0:n},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))))):null}function u(e){var n=e,{toc:t,className:i="table-of-contents table-of-contents__left-border",linkClassName:u="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:b}=n,f=((e,n)=>{var t={};for(var a in e)o.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&r)for(var a of r(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t})(n,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const v=(0,l.LU)(),k=null!=p?p:v.tableOfContents.minHeadingLevel,h=null!=b?b:v.tableOfContents.maxHeadingLevel,g=(0,l.DA)({toc:t,minHeadingLevel:k,maxHeadingLevel:h}),x=(0,a.useMemo)((()=>{if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:k,maxHeadingLevel:h}}),[u,d,k,h]);return(0,l.Si)(x),a.createElement(m,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(r)for(var t of r(n))s.call(n,t)&&c(e,t,n[t]);return e})({toc:g,className:i,linkClassName:u},f))}},95921:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(27378),l="browserWindow_my1Q",i="browserWindowHeader_jXSR",r="buttons_uHc7",o="browserWindowAddressBar_Pd8y",s="dot_giz1",c="browserWindowMenuIcon_Vhuh",m="bar_rrRL",u="browserWindowBody_Idgs";var d=function({children:e,minHeight:n,url:t="http://localhost:3000"}){return a.createElement("div",{className:l,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:r},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}})),a.createElement("div",{className:o},t),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:u},e))}},74965:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return b},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return k},default:function(){return g}});var a=t(35318),l=t(95921),i=t(81737),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))u.call(n,t)&&d(e,t,n[t]);return e};const b={id:"inline-toc",title:"Inline TOC",description:"Using inline table-of-contents inside Docusaurus Markdown",slug:"/markdown-features/inline-toc"},f=void 0,v={unversionedId:"guides/markdown-features/inline-toc",id:"version-2.0.0-beta.15/guides/markdown-features/inline-toc",title:"Inline TOC",description:"Using inline table-of-contents inside Docusaurus Markdown",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/markdown-features/markdown-features-inline-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/inline-toc",permalink:"/docs/markdown-features/inline-toc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-inline-toc.mdx",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",frontMatter:{id:"inline-toc",title:"Inline TOC",description:"Using inline table-of-contents inside Docusaurus Markdown",slug:"/markdown-features/inline-toc"},sidebar:"docs",previous:{title:"Headings",permalink:"/docs/markdown-features/headings"},next:{title:"Assets",permalink:"/docs/markdown-features/assets"}},k=[{value:"Full table of contents",id:"full-table-of-contents",children:[],level:2},{value:"Custom table of contents",id:"custom-table-of-contents",children:[],level:2},{value:"Example Section 1",id:"example-section-1",children:[{value:"Example Subsection 1 a",id:"example-subsection-1-a",children:[],level:3},{value:"Example Subsection 1 b",id:"example-subsection-1-b",children:[],level:3},{value:"Example Subsection 1 c",id:"example-subsection-1-c",children:[],level:3}],level:2},{value:"Example Section 2",id:"example-section-2",children:[{value:"Example Subsection 2 a",id:"example-subsection-2-a",children:[],level:3},{value:"Example Subsection 2 b",id:"example-subsection-2-b",children:[],level:3},{value:"Example Subsection 2 c",id:"example-subsection-2-c",children:[],level:3}],level:2},{value:"Example Section 3",id:"example-section-3",children:[{value:"Example Subsection 3 a",id:"example-subsection-3-a",children:[],level:3},{value:"Example Subsection 3 b",id:"example-subsection-3-b",children:[],level:3},{value:"Example Subsection 3 c",id:"example-subsection-3-c",children:[],level:3}],level:2}],h={toc:k};function g(e){var n,t=e,{components:r}=t,d=((e,n)=>{var t={};for(var a in e)m.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=p(p({},h),d),o(n,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Each Markdown document displays a tab of content on the top-right corner."),(0,a.kt)("p",null,"But it is also possible to display an inline table of contents directly inside a markdown document, thanks to MDX."),(0,a.kt)("h2",p({},{id:"full-table-of-contents"}),"Full table of contents"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," variable is available in any MDX document and contains all the headings of an MDX document."),(0,a.kt)("p",null,"By default, only ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"minHeadingLevel")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"maxHeadingLevel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n")),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)(i.Z,{toc:k,mdxType:"TOCInline"})),(0,a.kt)("h2",p({},{id:"custom-table-of-contents"}),"Custom table of contents"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," props is just a list of table of contents items:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"type TOCItem = {\n  value: string;\n  id: string;\n  children: TOCItem[];\n  level: number;\n};\n")),(0,a.kt)("p",null,"You can create this TOC tree manually, or derive a new TOC tree from the ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  toc={\n    // Only show 3th and 5th top-level heading\n    [toc[2], toc[4]]\n  }\n/>;\n")),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)(i.Z,{toc:[k[2],k[4]],mdxType:"TOCInline"})),(0,a.kt)("hr",null),(0,a.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Below is just some dummy content to have more table of contents items available on the current page."))),(0,a.kt)("h2",p({},{id:"example-section-1"}),"Example Section 1"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-1-a"}),"Example Subsection 1 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-1-b"}),"Example Subsection 1 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-1-c"}),"Example Subsection 1 c"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h2",p({},{id:"example-section-2"}),"Example Section 2"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-2-a"}),"Example Subsection 2 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-2-b"}),"Example Subsection 2 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-2-c"}),"Example Subsection 2 c"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h2",p({},{id:"example-section-3"}),"Example Section 3"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-3-a"}),"Example Subsection 3 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-3-b"}),"Example Subsection 3 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",p({},{id:"example-subsection-3-c"}),"Example Subsection 3 c"),(0,a.kt)("p",null,"Lorem ipsum"))}g.isMDXComponent=!0}}]);