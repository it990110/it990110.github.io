(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7126],{35318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},32103:function(e,t,r){"use strict";var n=r(27378),a=r(58413),o=r(94157),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&p(e,r,t[r]);return e},g=(e,t)=>s(e,l(t));const b=(e,t)=>{switch(e){case"noicon":case"loaded":return null;case"loading":return(0,o.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:r}=e,n=r?` (${(e=>{const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const r=Math.floor(Math.log(e)/Math.log(1024));return 0===r?`${e} ${t[r]}`:`${(e/1024**r).toFixed(1)} ${t[r]}`})(r)})`:"";return(0,o.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:n})}case"offline":return(0,o.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,o.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,o.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}};t.Z=function(e){const{alt:t,className:r,img:o}=e;return"string"==typeof o||"default"in o?n.createElement("img",m({src:"string"==typeof o?o:o.default,className:r,alt:t},e)):n.createElement(a.Z,g(m({},e),{alt:t,className:r,height:o.src.height||100,width:o.src.width||100,placeholder:{lqip:o.preSrc},src:o.src.src,srcSet:o.src.images.map((e=>g(m({},e),{src:e.path}))),getMessage:b}))}},62502:function(e,t,r){"use strict";r.d(t,{P:function(){return b}});var n=r(27378),a=r(94157),o=r(2411),i=r(32103),s=r(38944),l=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const m=[{name:"\ud83d\udce6 CodeSandbox",image:r(43376),url:"https://docusaurus.new/codesandbox",description:n.createElement(a.Z,{id:"playground.codesandbox.description"},"CodeSandbox is a popular playground solution. Runs Docusaurus in a remote Docker container.")},{name:"\u26a1 StackBlitz \ud83c\udd95",image:r(14046),url:"https://docusaurus.new/stackblitz",description:n.createElement(a.Z,{id:"playground.stackblitz.description",values:{webContainersLink:n.createElement(o.default,{href:"https://blog.stackblitz.com/posts/introducing-webcontainers/"},"WebContainers")}},"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.")}];function g({name:e,image:t,url:r,description:l}){return n.createElement("div",{className:"col col--6 margin-bottom--lg"},n.createElement("div",{className:(0,s.Z)("card")},n.createElement("div",{className:(0,s.Z)("card__image")},n.createElement(o.default,{to:r},n.createElement(i.Z,{img:t,alt:`${e}'s image`}))),n.createElement("div",{className:"card__body"},n.createElement("h3",null,e),n.createElement("p",null,l)),n.createElement("div",{className:"card__footer"},n.createElement("div",{className:"button-group button-group--block"},n.createElement(o.default,{className:"button button--secondary",to:r},n.createElement(a.Z,{id:"playground.tryItButton"},"Try it now!"))))))}function b(){return n.createElement("div",{className:"row"},m.map((e=>n.createElement(g,((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&p(e,r,t[r]);return e})({key:e.name},e)))))}},20176:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return f},default:function(){return h}});var n=r(35318),a=r(62502),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&d(e,r,t[r]);return e};const m={},g="Playground",b={unversionedId:"playground",id:"version-2.0.0-beta.14/playground",title:"Playground",description:"Playgrounds allow you to run Docusaurus in your browser, without installing anything!",source:"@site/versioned_docs/version-2.0.0-beta.14/playground.mdx",sourceDirName:".",slug:"/playground",permalink:"/docs/2.0.0-beta.14/playground",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/playground.mdx",tags:[],version:"2.0.0-beta.14",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/2.0.0-beta.14/configuration"},next:{title:"TypeScript Support",permalink:"/docs/2.0.0-beta.14/typescript-support"}},f=[],y={toc:f};function h(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"playground"}),"Playground"),(0,n.kt)("p",null,"Playgrounds allow you to run Docusaurus ",(0,n.kt)("strong",{parentName:"p"},"in your browser, without installing anything"),"!"),(0,n.kt)("p",null,"They are mostly useful for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Testing Docusaurus"),(0,n.kt)("li",{parentName:"ul"},"Reporting bugs")),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",p({parentName:"p"},{href:"https://docusaurus.new"}),"docusaurus.new")," as an easy-to-remember shortcut."),(0,n.kt)("p",null,"Choose one of the available options below."),(0,n.kt)(a.P,{mdxType:"PlaygroundCardsRow"}),(0,n.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"For convenience, we'll remember your choice next time you visit ",(0,n.kt)("a",p({parentName:"p"},{href:"https://docusaurus.new"}),"docusaurus.new"),"."))))}h.isMDXComponent=!0},43376:function(e,t,r){e.exports={src:{srcSet:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png 640w,"+r.p+"assets/ideal-img/codesandbox.dea65d6.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png",width:640,height:355},{path:r.p+"assets/ideal-img/codesandbox.dea65d6.1030.png",width:1030,height:571}],src:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png",toString:function(){return r.p+"assets/ideal-img/codesandbox.16b17cd.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAqklEQVQImTXOsQ2CQABAURZQQYW7g4PDiByGyhoHYAPdzMaEgo5VhJaSNSg0+UaNf4H/HGstuT2SHXLy3LLPDigVst5sCYRESUmUnXCkVMQqRAmBEALP9ajOFbf7jbZt6bqOpmlwRBBgdMwu1pgkwl0uuF4vPJ8v5nnmn+P7PiYx7I0hMyneyqWuax59Tz8MTNPEOI6ftSRNNDqMvrZQSbSO+NktZVlSFAVvkYFdfbS2yD0AAAAASUVORK5CYII=",palette:null}},14046:function(e,t,r){e.exports={src:{srcSet:r.p+"assets/ideal-img/stackblitz.da95b77.640.png 640w,"+r.p+"assets/ideal-img/stackblitz.ab6e191.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/stackblitz.da95b77.640.png",width:640,height:356},{path:r.p+"assets/ideal-img/stackblitz.ab6e191.1030.png",width:1030,height:572}],src:r.p+"assets/ideal-img/stackblitz.da95b77.640.png",toString:function(){return r.p+"assets/ideal-img/stackblitz.da95b77.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAsUlEQVQImTXNS2rCQACA4blCxUeciWFemZpUpTdx4aollt5abbGbEElWBkIbs/oFod8FPpGGjGz1ig852gYW2mP8ku1ux1uxp9h/8l58IKLYoUzGRDpmyvE0Vlj/QlVf6PuefyJSFmnXRMkSGVvGkcaGDV+nb8qypG1buq5DqCTFpCsS84xMAqPJAuNzzucfmqbhbxj4HW6IeWyRsWMmDdO5ftTa5RyOJ6rqQl03XK8td+CsbYe8OUkaAAAAAElFTkSuQmCC",palette:null}}}]);