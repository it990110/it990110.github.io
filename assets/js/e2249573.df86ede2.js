"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7988],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(v,s(s({ref:t},p),{},{components:a})):n.createElement(v,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79993:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return v},toc:function(){return h},default:function(){return k}});var n=a(35318),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&p(e,a,t[a]);return e};const u={},d="Canary releases",v={unversionedId:"canary",id:"canary",title:"Canary releases",description:"Docusaurus has a canary releases system.",source:"@site/community/4-canary.md",sourceDirName:".",slug:"/canary",permalink:"/community/canary",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/community/4-canary.md",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644226051,formattedLastUpdatedAt:"2/7/2022",sidebarPosition:4,frontMatter:{},sidebar:"community",previous:{title:"Contributing",permalink:"/community/contributing"}},h=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",children:[],level:2},{value:"Using a canary release",id:"using-a-canary-release",children:[],level:2}],y={toc:h};function k(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),p),i(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"canary-releases"}),"Canary releases"),(0,n.kt)("p",null,"Docusaurus has a canary releases system."),(0,n.kt)("p",null,"It permits you to ",(0,n.kt)("strong",{parentName:"p"},"test new unreleased features")," as soon as the pull requests are merged."),(0,n.kt)("p",null,"It is a good way to ",(0,n.kt)("strong",{parentName:"p"},"give feedback to maintainers"),", ensuring the newly implemented feature works as intended."),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Using a canary release in production might seem risky, but in practice, it's not."),(0,n.kt)("p",{parentName:"div"},"A canary release passes all automated tests and is used in production by the Docusaurus site itself."))),(0,n.kt)("h2",m({},{id:"canary-npm-dist-tag"}),"Canary npm dist tag"),(0,n.kt)("p",null,"For any code-related commit on ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),", the continuous integration will publish a canary release under the ",(0,n.kt)("inlineCode",{parentName:"p"},"@canary")," npm dist tag. It generally takes up to 10 minutes."),(0,n.kt)("p",null,"You can see on ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions"}),"npm")," the current dist tags:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"latest"),": stable releases (example: ",(0,n.kt)("inlineCode",{parentName:"li"},"2.0.0-beta.9"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"canary"),": canary releases (example: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0.0-4222"),")")),(0,n.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Make sure to use the latest canary release and check the publication date (sometimes the publish process fails)."))),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Canary versions follow the naming convention ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0.0-commitNumber"),"."))),(0,n.kt)("h2",m({},{id:"using-a-canary-release"}),"Using a canary release"),(0,n.kt)("p",null,"Take the latest version published under the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions"}),"canary npm dist tag")," (for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0.0-4222"),")."),(0,n.kt)("p",null,"Use it for all the ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," dependencies in your ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-diff"}),'-  "@docusaurus/core": "^2.0.0-beta.9",\n-  "@docusaurus/preset-classic": "^2.0.0-beta.9",\n+  "@docusaurus/core": "0.0.0-4222",\n+  "@docusaurus/preset-classic": "0.0.0-4222",\n')),(0,n.kt)("p",null,"Then, install the dependencies again and start your site:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash",metastring:"npm2yarn",npm2yarn:!0}),"npm install\nnpm start\n")),(0,n.kt)("p",null,"You can also upgrade the ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," packages with command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash",metastring:"npm2yarn",npm2yarn:!0}),"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n")),(0,n.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Make sure to include all the ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," packages."),(0,n.kt)("p",{parentName:"div"},"For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,n.kt)("inlineCode",{parentName:"p"},"^")," prefix)."))))}k.isMDXComponent=!0}}]);