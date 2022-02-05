"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80767],{35318:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return h}});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(m,i(i({ref:a},u),{},{components:t})):n.createElement(m,i({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68799:function(e,a,t){var n=t(27378),r=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;a.Z=function({children:e,hidden:a,className:t}){return n.createElement("div",((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&l(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&l(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},80673:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(27378),r=t(14324),o=t(46294),i=t(38944),s="tabItem_Ocg6",l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&m(e,t,a[t]);if(p)for(var t of p(a))h.call(a,t)&&m(e,t,a[t]);return e};function f(e){var a,t,r;const{lazy:l,block:p,defaultValue:d,values:h,groupId:m,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=h?h:v.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),y=(0,o.lx)(k,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(r=null!=d?d:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?r:null==(t=v[0])?void 0:t.props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,o.UB)(),[x,S]=(0,n.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=m){const e=b[m];null!=e&&e!==x&&k.some((a=>a.value===e))&&S(e)}const D=e=>{const a=e.currentTarget,t=O.indexOf(a),n=k[t].value;n!==x&&(C(a),S(n),null!=m&&w(m,n))},T=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]||O[O.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((({value:e,label:a,attributes:t})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:D,onClick:D},t),o={className:(0,i.Z)("tabs__item",s,null==t?void 0:t.className,{"tabs__item--active":x===e})},c(r,u(o))),null!=a?a:e);var r,o}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function v(e){const a=(0,r.Z)();return n.createElement(f,g({key:String(a)},e))}},33341:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return v},default:function(){return y}});var n=t(35318),r=t(80673),o=t(68799),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))u.call(a,t)&&d(e,t,a[t]);if(c)for(var t of c(a))p.call(a,t)&&d(e,t,a[t]);return e};const m={id:"search",title:"Search",keywords:["algolia","search"]},g=void 0,f={unversionedId:"search",id:"version-2.0.0-beta.15/search",title:"Search",description:"There are a few options you can use to add search to your website:",source:"@site/versioned_docs/version-2.0.0-beta.15/search.md",sourceDirName:".",slug:"/search",permalink:"/docs/search",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/search.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644055961,formattedLastUpdatedAt:"2/5/2022",frontMatter:{id:"search",title:"Search",keywords:["algolia","search"]},sidebar:"docs",previous:{title:"Static Assets",permalink:"/docs/static-assets"},next:{title:"Browser support",permalink:"/docs/browser-support"}},v=[{value:"\ud83e\udd47 Using Algolia DocSearch",id:"using-algolia-docsearch",children:[{value:"Index Configuration",id:"algolia-index-configuration",children:[],level:3},{value:"Connecting Algolia",id:"connecting-algolia",children:[],level:3},{value:"Contextual search",id:"contextual-search",children:[],level:3},{value:"Styling your Algolia search",id:"styling-your-algolia-search",children:[],level:3},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",children:[],level:3},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",children:[],level:3},{value:"Support",id:"algolia-support",children:[],level:3}],level:2},{value:"\ud83d\udc65 Using Typesense DocSearch",id:"using-typesense-docsearch",children:[],level:2},{value:"\ud83d\udc65 Using Local Search",id:"using-local-search",children:[],level:2},{value:"\ud83d\udc65 Using your own search",id:"using-your-own-search",children:[],level:2}],k={toc:v};function y(e){var a,t=e,{components:i}=t,d=((e,a)=>{var t={};for(var n in e)u.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))a.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=h(h({},k),d),s(a,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"There are a few options you can use to add search to your website:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd47 ",(0,n.kt)("a",h({parentName:"li"},{href:"#using-algolia-docsearch"}),"Algolia DocSearch")," (",(0,n.kt)("strong",{parentName:"li"},"official"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,n.kt)("a",h({parentName:"li"},{href:"#using-typesense-docsearch"}),"Typesense DocSearch")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,n.kt)("a",h({parentName:"li"},{href:"#using-local-search"}),"Local Search")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,n.kt)("a",h({parentName:"li"},{href:"#using-your-own-search"}),"Your own ",(0,n.kt)("inlineCode",{parentName:"a"},"SearchBar")," component"))),(0,n.kt)("div",h({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"\ud83e\udd47 Docusaurus provides ",(0,n.kt)("strong",{parentName:"p"},"first-class support")," for ",(0,n.kt)("a",h({parentName:"p"},{href:"#using-algolia-docsearch"}),"Algolia DocSearch"),"."),(0,n.kt)("p",{parentName:"div"},"\ud83d\udc65 Other options are ",(0,n.kt)("strong",{parentName:"p"},"maintained by the community"),": please report bugs to their respective repositories."))),(0,n.kt)("h2",h({},{id:"using-algolia-docsearch"}),"\ud83e\udd47 Using Algolia DocSearch"),(0,n.kt)("p",null,"Docusaurus has ",(0,n.kt)("strong",{parentName:"p"},"official support")," for ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com"}),"Algolia DocSearch"),"."),(0,n.kt)("p",null,"The service is ",(0,n.kt)("strong",{parentName:"p"},"free")," for any open-source project: just make sure to read the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/docs/who-can-apply/"}),"checklist")," and ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/apply"}),"apply to the DocSearch program"),"."),(0,n.kt)("p",null,"DocSearch crawls your website once a week (the schedule is configurable from the web interface) and aggregates all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API."),(0,n.kt)("p",null,"If your website is ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/docs/who-can-apply"}),"not eligible")," for the free, hosted version of DocSearch, or if your website sits behind a firewall and is not public, then you can ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/docs/run-your-own/"}),"run your own")," DocSearch crawler."),(0,n.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"By default, the Docusaurus preset generates a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docusaurus.io/sitemap.xml"}),"sitemap.xml")," that the Algolia crawler can use."))),(0,n.kt)("div",h({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"From the old docsearch?")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"You can read more about migration from the legacy DocSearch infra in ",(0,n.kt)("a",h({parentName:"p"},{href:"/blog/2021/11/21/algolia-docsearch-migration"}),"our blog post")," or ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/docs/migrating-from-legacy"}),"the DocSearch migration docs"),"."))),(0,n.kt)("h3",h({},{id:"algolia-index-configuration"}),"Index Configuration"),(0,n.kt)("p",null,"After your application has been approved and deployed, you will receive an email with all the details for you to add DocSearch to your project. Editing and managing your crawls can be done via ",(0,n.kt)("a",h({parentName:"p"},{href:"https://crawler.algolia.com/"}),"the web interface"),". Indices are readily available after deployment, so manual configuration usually isn't necessary."),(0,n.kt)("div",h({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"It is highly recommended to use a config similar to the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template"}),(0,n.kt)("strong",{parentName:"a"},"Docusaurus 2 website config")),"."))),(0,n.kt)("h3",h({},{id:"connecting-algolia"}),"Connecting Algolia"),(0,n.kt)("p",null,"Docusaurus' own ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," supports Algolia DocSearch integration. If you use the classic preset, no additional installation is needed."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Installation steps when not using ",(0,n.kt)("code",null,"@docusaurus/preset-classic")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the package:")),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-search-algolia\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-search-algolia\n")))),(0,n.kt)("ol",h({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Register the theme in ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'My site',\n  // ...\n  themes: ['@docusaurus/theme-search-algolia'],\n  themeConfig: {\n    // ...\n  },\n};\n"))),(0,n.kt)("p",null,"Then, add an ",(0,n.kt)("inlineCode",{parentName:"p"},"algolia")," field in your ",(0,n.kt)("inlineCode",{parentName:"p"},"themeConfig"),". ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",h({parentName:"strong"},{href:"https://docsearch.algolia.com/apply/"}),"Apply for DocSearch"))," to get your Algolia index and API key."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.\n      externalUrlRegex: 'external\\\\.com|domain\\\\.com',\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n")),(0,n.kt)("div",h({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"searchParameters")," option used to be named ",(0,n.kt)("inlineCode",{parentName:"p"},"algoliaOptions")," in Docusaurus v1."))),(0,n.kt)("div",h({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The search feature will not work reliably until Algolia crawls your site with the ",(0,n.kt)("strong",{parentName:"p"},"search plugin enabled"),"."),(0,n.kt)("p",{parentName:"div"},"If you are installing the Algolia plugin for the first time and want to ensure the search feature works before deploying it to production, you can ask the DocSearch team to trigger a crawl on a staging environment url or deploy preview."))),(0,n.kt)("h3",h({},{id:"contextual-search"}),"Contextual search"),(0,n.kt)("p",null,"Contextual search is ",(0,n.kt)("strong",{parentName:"p"},"enabled by default"),"."),(0,n.kt)("p",null,"It ensures that search results are ",(0,n.kt)("strong",{parentName:"p"},"relevant to the current language and version"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: true,\n    },\n    // highlight-end\n  },\n};\n")),(0,n.kt)("p",null,"Let's consider you have 2 docs versions (",(0,n.kt)("strong",{parentName:"p"},"v1")," and ",(0,n.kt)("strong",{parentName:"p"},"v2"),") and 2 languages (",(0,n.kt)("inlineCode",{parentName:"p"},"en")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"fr"),")."),(0,n.kt)("p",null,"When browsing v2 docs, it would be odd to return search results for the v1 documentation. Sometimes v1 and v2 docs are quite similar, and you would end up with duplicate search results for the same query (one result per version)."),(0,n.kt)("p",null,"Similarly, when browsing the French site, it would be odd to return search results for the English docs."),(0,n.kt)("p",null,"To solve this problem, the contextual search feature understands that you are browsing a specific docs version and language, and will create the search query filters dynamically."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"on ",(0,n.kt)("inlineCode",{parentName:"li"},"/en/docs/v1/myDoc"),", search results will only include ",(0,n.kt)("strong",{parentName:"li"},"English")," results for the ",(0,n.kt)("strong",{parentName:"li"},"v1")," docs (+ other unversioned pages)"),(0,n.kt)("li",{parentName:"ul"},"on ",(0,n.kt)("inlineCode",{parentName:"li"},"/fr/docs/v2/myDoc"),", search results will only include ",(0,n.kt)("strong",{parentName:"li"},"French")," results for the ",(0,n.kt)("strong",{parentName:"li"},"v2")," docs (+ other unversioned pages)")),(0,n.kt)("div",h({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"When using ",(0,n.kt)("inlineCode",{parentName:"p"},"contextualSearch: true")," (default), the contextual facet filters will be merged with the ones provided with ",(0,n.kt)("inlineCode",{parentName:"p"},"algolia.searchParameters.facetFilters")," ."),(0,n.kt)("p",{parentName:"div"},"For specific needs, you can disable ",(0,n.kt)("inlineCode",{parentName:"p"},"contextualSearch")," and define your own ",(0,n.kt)("inlineCode",{parentName:"p"},"facetFilters"),":"),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: false,\n      facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],\n    },\n    // highlight-end\n  },\n};\n")),(0,n.kt)("p",{parentName:"div"},"Refer to the relevant ",(0,n.kt)("a",h({parentName:"p"},{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/"}),"Algolia faceting documentation"),"."))),(0,n.kt)("h3",h({},{id:"styling-your-algolia-search"}),"Styling your Algolia search"),(0,n.kt)("p",null,"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."),(0,n.kt)("p",null,"Still, you can reuse the ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/styling-layout#styling-your-site-with-infima"}),"Infima CSS variables")," from Docusaurus to style DocSearch by editing the ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'}),"html[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\nhtml[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n")),(0,n.kt)("h3",h({},{id:"customizing-the-algolia-search-behavior"}),"Customizing the Algolia search behavior"),(0,n.kt)("p",null,"Algolia DocSearch supports a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://autocomplete-experimental.netlify.app/docs/DocSearchModal#reference"}),"list of options")," that you can pass to the ",(0,n.kt)("inlineCode",{parentName:"p"},"algolia")," field in the ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n")),(0,n.kt)("h3",h({},{id:"editing-the-algolia-search-component"}),"Editing the Algolia search component"),(0,n.kt)("p",null,"If you prefer to edit the Algolia search React component, swizzle the ",(0,n.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-search-algolia"),":"),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-search-algolia SearchBar\n")))),(0,n.kt)("h3",h({},{id:"algolia-support"}),"Support"),(0,n.kt)("p",null,"The Algolia DocSearch team can help you figure out search problems on your site."),(0,n.kt)("p",null,"You can contact them by ",(0,n.kt)("a",h({parentName:"p"},{href:"mailto:documentationsearch@algolia.com"}),"email")," or on ",(0,n.kt)("a",h({parentName:"p"},{href:"https://discord.gg/tXdr5mP"}),"Discord"),"."),(0,n.kt)("p",null,"Docusaurus also has an ",(0,n.kt)("inlineCode",{parentName:"p"},"#algolia")," channel on ",(0,n.kt)("a",h({parentName:"p"},{href:"https://discordapp.com/invite/docusaurus"}),"Discord"),"."),(0,n.kt)("h2",h({},{id:"using-typesense-docsearch"}),"\ud83d\udc65 Using Typesense DocSearch"),(0,n.kt)("p",null,(0,n.kt)("a",h({parentName:"p"},{href:"https://typesense.org"}),"Typesense")," DocSearch works similar to Algolia DocSearch, except that your website is indexed into a Typesense search cluster."),(0,n.kt)("p",null,"Typesense is an ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/typesense/typesense"}),"open source")," instant-search engine that you can either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"https://typesense.org/docs/latest/guide/install-typesense.html#option-2-local-machine-self-hosting"}),"Self-Host")," on your own servers or"),(0,n.kt)("li",{parentName:"ul"},"Use the Managed ",(0,n.kt)("a",h({parentName:"li"},{href:"https://cloud.typesense.org"}),"Typesense Cloud")," service.")),(0,n.kt)("p",null,"Similar to Algolia DocSearch, there are two components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"https://github.com/typesense/typesense-docsearch-scraper"}),"typesense-docsearch-scraper")," - which scrapes your website and indexes the data in your Typesense cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"https://github.com/typesense/docusaurus-theme-search-typesense"}),"docusaurus-theme-search-typesense")," - a search bar UI component to add to your website.")),(0,n.kt)("p",null,"Read a step-by-step walk-through of how to ",(0,n.kt)("a",h({parentName:"p"},{href:"https://typesense.org/docs/latest/guide/docsearch.html#step-1-set-up-docsearch-scraper"}),"run typesense-docsearch-scraper here")," and how to ",(0,n.kt)("a",h({parentName:"p"},{href:"https://typesense.org/docs/latest/guide/docsearch.html#option-a-docusaurus-powered-sites"}),"install the Search Bar in your Docusaurus Site here"),"."),(0,n.kt)("h2",h({},{id:"using-local-search"}),"\ud83d\udc65 Using Local Search"),(0,n.kt)("p",null,"You can use a local search plugin for websites where the search index is small and can be downloaded to your users' browsers when they visit your website."),(0,n.kt)("p",null,"You'll find a list of community-supported ",(0,n.kt)("a",h({parentName:"p"},{href:"https://docusaurus.io/community/resources#search"}),"local search plugins listed here"),"."),(0,n.kt)("h2",h({},{id:"using-your-own-search"}),"\ud83d\udc65 Using your own search"),(0,n.kt)("p",null,"To use your own search, swizzle the ",(0,n.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic SearchBar\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic SearchBar\n")))),(0,n.kt)("p",null,"This will create an ",(0,n.kt)("inlineCode",{parentName:"p"},"src/themes/SearchBar")," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",(0,n.kt)("inlineCode",{parentName:"p"},"SearchBar")," component now."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes"),": You can alternatively ",(0,n.kt)("a",h({parentName:"p"},{href:"#editing-the-algolia-search-component"}),"swizzle from Algolia SearchBar")," and create your own search component from there."))}y.isMDXComponent=!0}}]);