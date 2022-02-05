"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71046],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20456:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return w}});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={id:"browser-support",title:"Browser support"},m=void 0,f={unversionedId:"browser-support",id:"version-2.0.0-beta.14/browser-support",title:"Browser support",description:"Docusaurus allows sites to define the list of supported browsers through a browserslist configuration.",source:"@site/versioned_docs/version-2.0.0-beta.14/browser-support.md",sourceDirName:".",slug:"/browser-support",permalink:"/docs/2.0.0-beta.14/browser-support",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/browser-support.md",tags:[],version:"2.0.0-beta.14",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",frontMatter:{id:"browser-support",title:"Browser support"},sidebar:"docs",previous:{title:"Search",permalink:"/docs/2.0.0-beta.14/search"},next:{title:"SEO",permalink:"/docs/2.0.0-beta.14/seo"}},b=[{value:"Purpose",id:"purpose",children:[],level:2},{value:"Default values",id:"default-values",children:[],level:2},{value:"Read more",id:"read-more",children:[],level:2}],h={toc:b};function w(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},h),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Docusaurus allows sites to define the list of supported browsers through a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),"browserslist configuration"),"."),(0,n.kt)("h2",c({},{id:"purpose"}),"Purpose"),(0,n.kt)("p",null,"Websites need to balance between backward compatibility and bundle size. As old browsers do not support modern APIs or syntax, more code is needed to implement the same functionality, penalizing all other users with increased site load time. As a tradeoff, the Docusaurus bundler only supports browser versions defined in the browser list."),(0,n.kt)("p",null,"The browser list by default is provided through the ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file as a root ",(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," field."),(0,n.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"On old browsers, the compiled output will use unsupported (too recent) JS syntax, causing React to fail to initialize and ending up with a static website with only HTML/CSS and no JS."))),(0,n.kt)("h2",c({},{id:"default-values"}),"Default values"),(0,n.kt)("p",null,"Websites initialized with the default classic template has the following in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'{4-11} title="package.json"',"{4-11}":!0,title:'"package.json"'}),'{\n  "name": "docusaurus",\n  // ...\n  "browserslist": {\n    "production": [">0.5%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n  // ...\n}\n')),(0,n.kt)("p",null,"Explained in natural language, the browsers supported in production are those:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With more than 0.5% of market share; ",(0,n.kt)("em",{parentName:"li"},"and")),(0,n.kt)("li",{parentName:"ul"},'Has official support or updates in the past 24 months (the opposite of "dead"); ',(0,n.kt)("em",{parentName:"li"},"and")),(0,n.kt)("li",{parentName:"ul"},"Is not Opera Mini.")),(0,n.kt)("p",null,"And browsers used in development are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The latest version of Chrome ",(0,n.kt)("em",{parentName:"li"},"or")," Firefox ",(0,n.kt)("em",{parentName:"li"},"or")," Safari.")),(0,n.kt)("p",null,'You can "evaluate" any config with the ',(0,n.kt)("inlineCode",{parentName:"p"},"browserlist")," cli to obtain the actual list:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'npx browserslist --env="production"\n')),(0,n.kt)("p",null,"The output are all browsers supported in production. Below is the output in May, 2021:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-text"}),"and_chr 89\nand_uc 12.12\nchrome 89\nchrome 88\nchrome 87\nedge 89\nedge 88\nfirefox 86\nie 11\nios_saf 14.0-14.5\nios_saf 13.4-13.7\nsafari 14\nsafari 13.1\nsamsung 13.0\n")),(0,n.kt)("h2",c({},{id:"read-more"}),"Read more"),(0,n.kt)("p",null,"You may wish to visit the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md"}),"browserslist documentation")," for more specifications, especially the accepted ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md#queries"}),"query values")," and ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md#best-practices"}),"best practices"),"."))}w.isMDXComponent=!0}}]);