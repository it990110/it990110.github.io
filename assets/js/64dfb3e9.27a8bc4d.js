"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44027],{68799:function(e,t,n){var a=n(27378),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(27378),r=n(14324),o=n(46294),l=n(38944),i="tabItem_Ocg6",s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n,r;const{lazy:s,block:p,defaultValue:m,values:u,groupId:k,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=u?u:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(r=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,o.UB)(),[x,O]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=k){const e=w[k];null!=e&&e!==x&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==x&&(T(t),O(a),null!=k&&N(k,a))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:M,onFocus:E,onClick:E},n),o={className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":x===e})},c(r,d(o))),null!=t?t:e);var r,o}))),s?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,r.Z)();return a.createElement(g,h({key:String(t)},e))}},89389:function(e,t,n){n.d(t,{v:function(){return m}});var a=n(70124),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e};function m(e,t){return(0,a.v)(e,(n=p({},t),r={transforms:p({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)},o(n,l(r))));var n,r}},28316:function(e,t,n){n.r(t);var a=n(27378),r=n(14324);t.default=function({children:e,fallback:t}){return(0,r.Z)()?a.createElement(a.Fragment,null,e()):t||null}},95921:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(27378),r="browserWindow_my1Q",o="browserWindowHeader_jXSR",l="buttons_uHc7",i="browserWindowAddressBar_Pd8y",s="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";var m=function({children:e,minHeight:t,url:n="http://localhost:3000"}){return a.createElement("div",{className:r,style:{minHeight:t}},a.createElement("div",{className:o},a.createElement("div",{className:l},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}})),a.createElement("div",{className:i},n),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:p},e))}},42519:function(e,t,n){n.d(t,{Z:function(){return ye}});var a={};n.r(a),n.d(a,{ButtonExample:function(){return Z}});var r=n(27378),o=n(40935),l=n(38944),i=n(94157),s=n(64324),c=n(28316),d=n(46294),p="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",u="playgroundEditor_TySg",k="playgroundPreview_mApW",h=n(14324),g=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function w({children:e}){return r.createElement("div",{className:(0,l.Z)(m)},e)}function N(){return r.createElement("div",null,"Loading...")}function x(){return r.createElement(r.Fragment,null,r.createElement(w,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:k},r.createElement(c.default,{fallback:r.createElement(N,null)},(()=>r.createElement(r.Fragment,null,r.createElement(o.i5,null),r.createElement(o.IF,null))))))}function O(){const e=(0,h.Z)();return r.createElement(o.uz,{key:String(e),className:u})}function j(){return r.createElement(r.Fragment,null,r.createElement(w,null,r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(O,null))}function T(e){var t=e,{children:n,transformCode:a}=t,l=((e,t)=>{var n={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&v.call(e,a)&&(n[a]=e[a]);return n})(t,["children","transformCode"]);const{siteConfig:{themeConfig:i}}=(0,s.default)(),{liveCodeBlock:{playgroundPosition:c}}=i,m=(0,d.pJ)();return r.createElement("div",{className:p},r.createElement(o.nu,((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e})({code:n.replace(/\n$/,""),transformCode:a||(e=>`${e};`),theme:m},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(x,null),r.createElement(j,null)):r.createElement(r.Fragment,null,r.createElement(j,null),r.createElement(x,null))))}var E=Object.defineProperty,M=Object.defineProperties,C=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&S(e,n,t[n]);if(B)for(var n of B(t))P.call(t,n)&&S(e,n,t[n]);return e};function Z(e){return r.createElement("button",(t=D({type:"button"},e),n={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},M(t,C(n))));var t,n}var X=Object.defineProperty,_=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&W(e,n,t[n]);if(_)for(var n of _(t))R.call(t,n)&&W(e,n,t[n]);return e};var z=J(J({React:r},r),a),U=n(55620),L=n(39348),A="codeBlockContainer_RIuc",F="codeBlockContent_DOR6",V="codeBlockTitle_fLmC",$="codeBlock_SvlJ",Y="codeBlockStandalone_K_5i",G="copyButton_veCs",q="codeBlockLines_kiFP",K=Object.defineProperty,Q=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&re(e,n,t[n]);if(te)for(var n of te(t))ae.call(t,n)&&re(e,n,t[n]);return e},le=(e,t)=>Q(e,ee(t));var ie=Object.defineProperty,se=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,pe=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,me=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&pe(e,n,t[n]);if(se)for(var n of se(t))de.call(t,n)&&pe(e,n,t[n]);return e};var ue,ke=(ue=function({children:e,className:t="",metastring:n,title:a,language:o}){var s;const{prism:c}=(0,d.LU)(),[p,m]=(0,r.useState)(!1),[u,k]=(0,r.useState)(!1);(0,r.useEffect)((()=>{k(!0)}),[]);const h=(0,d.bc)(n)||a,g=(0,d.pJ)();if(r.Children.toArray(e).some((e=>(0,r.isValidElement)(e))))return r.createElement(U.ZP,le(oe({},U.lG),{key:String(u),theme:g,code:"",language:"text"}),(({className:n,style:a})=>r.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,Y,"thin-scrollbar",A,t,d.kM.common.codeBlock),style:a},r.createElement("code",{className:q},e))));const f=Array.isArray(e)?e.join(""):e,b=null!=(s=null!=o?o:(0,d.Vo)(t))?s:c.defaultLanguage,{highlightLines:v,code:y}=(0,d.nZ)(f,n,b),w=()=>{(0,L.Z)(y),m(!0),setTimeout((()=>m(!1)),2e3)};return r.createElement(U.ZP,le(oe({},U.lG),{key:String(u),theme:g,code:y,language:null!=b?b:"text"}),(({className:e,style:n,tokens:a,getLineProps:o,getTokenProps:s})=>r.createElement("div",{className:(0,l.Z)(A,t,{[`language-${b}`]:b&&!t.includes(`language-${b}`)},d.kM.common.codeBlock)},h&&r.createElement("div",{style:n,className:V},h),r.createElement("div",{className:(0,l.Z)(F,b)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(e,$,"thin-scrollbar"),style:n},r.createElement("code",{className:q},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=o({line:e,key:t});return v.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",oe({key:t},n),e.map(((e,t)=>r.createElement("span",oe({key:t},s({token:e,key:t}))))),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(G,"clean-btn"),onClick:w},p?r.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},function(e){return e.live?r.createElement(T,me({scope:z},e)):r.createElement(ue,me({},e))}),he=Object.defineProperty,ge=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ye(e){return r.createElement(ke,((e,t)=>{for(var n in t||(t={}))fe.call(t,n)&&ve(e,n,t[n]);if(ge)for(var n of ge(t))be.call(t,n)&&ve(e,n,t[n]);return e})({},e))}},32523:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return I},contentTitle:function(){return C},default:function(){return D},frontMatter:function(){return M},metadata:function(){return B},toc:function(){return P}});var a=n(35318),r=n(95921),o=n(80673),l=n(68799),i="wrappingBlock_S4U4",s=n(42519),c=n(97408),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&g(e,n,t[n]);return e};const b={toc:[]};function v(e){var t,n=e,{components:r}=n,o=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},b),o),p(t,m({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("span",null,"Hello ",o.name),(0,a.kt)("p",null,"This is text some content from ",(0,a.kt)("inlineCode",{parentName:"p"},"_markdown-partial-example.md"),"."))}v.isMDXComponent=!0;var y=Object.defineProperty,w=Object.defineProperties,N=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&T(e,n,t[n]);if(x)for(var n of x(t))j.call(t,n)&&T(e,n,t[n]);return e};const M={id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},C="MDX and React",B={unversionedId:"guides/markdown-features/react",id:"guides/markdown-features/react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/docs/guides/markdown-features/markdown-features-react.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/react",permalink:"/docs/next/markdown-features/react",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/markdown-features/markdown-features-react.mdx",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644313915,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/markdown-features"},next:{title:"Tabs",permalink:"/docs/next/markdown-features/tabs"}},I=({children:e,color:t})=>(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),P=[{value:"Using JSX in Markdown",id:"using-jsx-in-markdown",children:[{value:"Importing components",id:"importing-components",children:[],level:3},{value:"Markdown and JSX interoperability",id:"markdown-and-jsx-interoperability",children:[],level:3}],level:2},{value:"Importing code snippets",id:"importing-code-snippets",children:[],level:2},{value:"Importing Markdown",id:"importing-markdown",children:[],level:2},{value:"Available exports",id:"available-exports",children:[],level:2}],S={Highlight:I,toc:P};function D(e){var t,n=e,{components:d}=n,p=((e,t)=>{var n={};for(var a in e)O.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&x)for(var a of x(e))t.indexOf(a)<0&&j.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=E(E({},S),p),w(t,N({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",E({},{id:"mdx-and-react"}),"MDX and React"),(0,a.kt)("h2",E({},{id:"using-jsx-in-markdown"}),"Using JSX in Markdown"),(0,a.kt)("p",null,"Docusaurus has built-in support for ",(0,a.kt)("a",E({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX v1"),", which allows you to write JSX within your Markdown files and render them as React components."),(0,a.kt)("div",E({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"While Docusaurus parses both ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx")," files using MDX, some of the syntaxes are treated slightly differently by third-party tools. For the most accurate parsing and better editor support, we recommend using the ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx")," extension for files containing MDX syntax."))),(0,a.kt)("p",null,"To define any custom component within an MDX file, you have to export it."),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),(0,a.kt)("p",null,"Notice how it renders both the markup from your React component and the Markdown syntax:"),(0,a.kt)(r.Z,{minHeight:240,mdxType:"BrowserWindow"},(0,a.kt)(I,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," ","and ",(0,a.kt)(I,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,a.kt)("p",null,"I can write ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,a.kt)("em",{parentName:"p"},"JSX"),"!")),(0,a.kt)("div",E({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"MDX is JSX")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n")),(0,a.kt)("p",{parentName:"div"},"This behavior is different from Docusaurus 1. See also ",(0,a.kt)("a",E({parentName:"p"},{href:"/docs/next/migration/manual#convert-style-attributes-to-style-objects-in-mdx"}),"Migrating from v1 to v2"),"."),(0,a.kt)("p",{parentName:"div"},"In addition, MDX is not ",(0,a.kt)("a",E({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3018"}),"100% compatible with CommonMark"),". Use the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",E({parentName:"strong"},{href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"}),"MDX playground"))," to ensure that your syntax is valid MDX."))),(0,a.kt)("h3",E({},{id:"importing-components"}),"Importing components"),(0,a.kt)("p",null,"You can also import your own components defined in other files or third-party components installed via npm."),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-md"}),"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n")),(0,a.kt)("div",E({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@site")," alias points to your website's directory, usually where the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file is. Using an alias instead of relative paths (",(0,a.kt)("inlineCode",{parentName:"p"},"'../../src/components/BrowserWindow'"),") saves you from updating import paths when moving files around, or when ",(0,a.kt)("a",E({parentName:"p"},{href:"/docs/next/versioning"}),"versioning docs")," and ",(0,a.kt)("a",E({parentName:"p"},{href:"/docs/next/i18n/tutorial"}),"translating"),"."))),(0,a.kt)("p",null,"While declaring components within Markdown is very convenient for simple cases, it becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability. Use a separate ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," file when your component involves complex JS logic:"),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx",metastring:'title="src/components/Highlight.js"',title:'"src/components/Highlight.js"'}),"export default function Highlight({children, color}) {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: '2px',\n        color: '#fff',\n        padding: '0.2rem',\n      }}>\n      {children}\n    </span>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-md",metastring:'title="markdown-file.mdx"',title:'"markdown-file.mdx"'}),"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",E({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX docs")," to see what other fancy stuff you can do with MDX."),(0,a.kt)("h3",E({},{id:"markdown-and-jsx-interoperability"}),"Markdown and JSX interoperability"),(0,a.kt)("p",null,"Docusaurus v2 is using MDX v1, which has a lot of known cases where the content fails to be correctly parsed as Markdown. Use the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",E({parentName:"strong"},{href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"}),"MDX playground"))," to ensure that your syntax is valid MDX."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Samples of parsing failures"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A paragraph starting with a JSX tag will be seen entirely as a JSX string:")),(0,a.kt)(o.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Problem",mdxType:"TabItem"},(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<span style={{color: 'red'}}>Highlighted text</span> but afterwards _Markdown_ **doesn't work**\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("span",{style:{color:"red"}},"Highlighted text")," but afterwards _Markdown_ **doesn't work**"))),(0,a.kt)(l.Z,{value:"Workaround",mdxType:"TabItem"},(0,a.kt)("p",null,"Use JSX for the rest of the line, or prefix the line with some plain text:"),(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<span style={{color: 'red'}}>Use JSX for the paragraph</span> to stop <i>worrying about</i> <b>Markdown</b>\n\n&#8203;<span style={{color: 'red'}}>\u2190 This is a zero-width space</span> and afterwards <i>Markdown</i> <b>works</b>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("span",{style:{color:"red"}},"Use JSX for the paragraph")," to stop ",(0,a.kt)("i",null,"worrying about")," ",(0,a.kt)("b",null,"Markdown"),(0,a.kt)("p",null,"\u200b",(0,a.kt)("span",{style:{color:"red"}},"\u2190 This is a zero-width space")," and afterwards ",(0,a.kt)("i",null,"Markdown")," ",(0,a.kt)("b",null,"works")))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markdown within a JSX tag never works:")),(0,a.kt)(o.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Problem",mdxType:"TabItem"},(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<span style={{color: 'red'}}>**Bold doesn't work**</span>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("span",{style:{color:"red"}},"**Bold doesn't work**")))),(0,a.kt)(l.Z,{value:"Workaround",mdxType:"TabItem"},(0,a.kt)("p",null,"Use JSX within JSX tag, or move the Markdown to the outer layer:"),(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<span style={{color: 'red'}}><b>Bold now works</b></span>\n\n**<span style={{color: 'red'}}>Bold now works</span>**\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("span",{style:{color:"red"}},(0,a.kt)("b",null,"Bold now works")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("span",{style:{color:"red"}},"Bold now works"))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Text immediately below a JSX tag will be seen as JSX text:")),(0,a.kt)(o.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Problem",mdxType:"TabItem"},(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<div style={{color: 'red'}}>\n**Bold still doesn't work**\n</div>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{style:{color:"red"}},"**Bold still doesn't work**")))),(0,a.kt)(l.Z,{value:"Workaround",mdxType:"TabItem"},(0,a.kt)("p",null,"Add an empty new line:"),(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<div style={{color: 'red'}}>\n\n**Bold now works**\n\n</div>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{style:{color:"red"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bold now works"))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markdown text indented by four spaces will be seen as a code block:")),(0,a.kt)(o.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Problem",mdxType:"TabItem"},(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<div style={{color: 'red'}}>\n\n    You may think I'm just some text...\n\n</div>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{style:{color:"red"}},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{}),"You may think I'm just some text...\n")))))),(0,a.kt)(l.Z,{value:"Workaround",mdxType:"TabItem"},(0,a.kt)("p",null,"Don't indent:"),(0,a.kt)("div",{className:i},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"<div style={{color: 'red'}}>\n\nNow I'm actually just text\n\n</div>\n"))),(0,a.kt)("div",{className:i},(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{style:{color:"red"}},(0,a.kt)("p",null,"Now I'm actually just text"))))))),(0,a.kt)("h2",E({},{id:"importing-code-snippets"}),"Importing code snippets"),(0,a.kt)("p",null,"You can not only import a file containing a component definition, but also import any code file as raw text, and then insert it in a code block, thanks to ",(0,a.kt)("a",E({parentName:"p"},{href:"https://webpack.js.org/loaders/raw-loader/"}),"Webpack raw-loader"),". In order to use ",(0,a.kt)("inlineCode",{parentName:"p"},"raw-loader"),", you first need to install it in your project:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-bash"}),"npm install --save raw-loader\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-bash"}),"yarn add raw-loader\n")))),(0,a.kt)("p",null,"Now you can import code snippets from another file as it is:"),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx",metastring:'title="myMarkdownFile.mdx"',title:'"myMarkdownFile.mdx"'}),"import CodeBlock from '@theme/CodeBlock';\nimport MyComponentSource from '!!raw-loader!./myComponent';\n\n<CodeBlock className=\"language-jsx\">{MyComponentSource}</CodeBlock>\n")),(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)(s.Z,{className:"language-jsx",mdxType:"CodeBlock"},c.Z)),(0,a.kt)("br",null),(0,a.kt)("p",null,"See ",(0,a.kt)("a",E({parentName:"p"},{href:"/docs/next/markdown-features/code-blocks#usage-in-jsx"}),"using code blocks in JSX")," for more details of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," component."),(0,a.kt)("div",E({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"You have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," rather than the Markdown triple-backtick ",(0,a.kt)("inlineCode",{parentName:"p"},"```"),", because the latter will ship out any of its content as-is, but you want to interpolate the imported text here."))),(0,a.kt)("div",E({},{className:"admonition admonition-warning alert alert--danger"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This feature is experimental and might be subject to breaking API changes in the future."))),(0,a.kt)("h2",E({},{id:"importing-markdown"}),"Importing Markdown"),(0,a.kt)("p",null,"You can use Markdown files as components and import them elsewhere, either in Markdown files or in React pages."),(0,a.kt)("p",null,"By convention, using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_")," filename prefix")," will not create any doc page and means the markdown file is a ",(0,a.kt)("strong",{parentName:"p"},'"partial"'),", to be imported by other files."),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-md",metastring:'title="_markdown-partial-example.mdx"',title:'"_markdown-partial-example.mdx"'}),"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx",metastring:'title="someOtherDoc.mdx"',title:'"someOtherDoc.mdx"'}),"import PartialExample from './_markdown-partial-example.mdx';\n\n<PartialExample name=\"Sebastien\" />;\n")),(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)(v,{name:"Sebastien",mdxType:"PartialExample"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This way, you can reuse content among multiple pages and avoid duplicating materials."),(0,a.kt)("div",E({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",E({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",E({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",E({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",E({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The table of contents does not currently contain the imported Markdown headings. This is a technical limitation that we are trying to solve (",(0,a.kt)("a",E({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3915"}),"issue"),")."))),(0,a.kt)("h2",E({},{id:"available-exports"}),"Available exports"),(0,a.kt)("p",null,"Within the MDX page, the following variables are available as globals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"frontMatter"),": the front matter as a record of string keys and values;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toc"),": the table of contents, as a tree of headings. See also ",(0,a.kt)("a",E({parentName:"li"},{href:"/docs/next/markdown-features/inline-toc"}),"Inline TOC")," for a more concrete use-case."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contentTitle"),": the Markdown title, which is the first ",(0,a.kt)("inlineCode",{parentName:"li"},"h1")," heading in the Markdown text. It's ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," if there isn't one (e.g. title specified in the front matter).")),(0,a.kt)("pre",null,(0,a.kt)("code",E({parentName:"pre"},{className:"language-jsx"}),"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">{JSON.stringify(toc, null, 2)}</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}\n</ul>\n\n<p>The title of this page is: <b>{contentTitle}</b></p>\n")),(0,a.kt)(r.Z,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"The table of contents for this page, serialized:"),(0,a.kt)(s.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(P,null,2)),(0,a.kt)("p",null,"The front matter of this page:"),(0,a.kt)("ul",null,Object.entries(M).map((([e,t])=>(0,a.kt)("li",{key:e},(0,a.kt)("b",null,e),": ",t)))),(0,a.kt)("p",null,"The title of this page is: ",(0,a.kt)("b",null,C))))}D.isMDXComponent=!0},97408:function(e,t){t.Z="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}\n"}}]);