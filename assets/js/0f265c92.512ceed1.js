"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1564],{74851:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(27378),i=n(46294),a=n(23406);n(72481);function o({children:e}){const{isDarkTheme:t}=(0,i.If)();return r.createElement(a.Z,{overlayBgColorEnd:t?"rgba(0, 0, 0, 0.95)":"rgba(255, 255, 255, 0.95)"},e)}},81445:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return g},default:function(){return k}});var r=n(35318),i=n(74851),a=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&d(e,n,t[n]);return e};const h={description:"How Docusaurus works to build your app"},m="Architecture",f={unversionedId:"advanced/architecture",id:"advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/docs/advanced/architecture.md",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docs/next/advanced/architecture",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/advanced/architecture.md",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2/8/2022",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docs/next/advanced/"},next:{title:"Plugins",permalink:"/docs/next/advanced/plugins"}},g=[],b={toc:g};function k(e){var t,a=e,{components:d}=a,h=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),h),o(t,u({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"architecture"}),"Architecture"),(0,r.kt)(i.Z,{mdxType:"Zoom"},(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Architecture overview",src:n(97151).Z,width:"2228",height:"2007"}))),(0,r.kt)("p",null,"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."),(0,r.kt)("p",null,"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as CommonJS that can be ",(0,r.kt)("inlineCode",{parentName:"li"},"require"),"'d."),(0,r.kt)("li",{parentName:"ul"},"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions.")),(0,r.kt)("p",null,"Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"addRoute"),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", which itself is run in Node (hence you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," and pass callbacks as plugin options)."),(0,r.kt)("p",null,"During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," through ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/next/docusaurus-core#useDocusaurusContext"}),(0,r.kt)("inlineCode",{parentName:"a"},"useDocusaurusContext()")),". However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"siteConfig")," object only contains ",(0,r.kt)("strong",{parentName:"p"},"serializable values")," (values that are preserved after ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"). Functions, regexes, etc. would be lost on the client side. The ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," is designed to be entirely serializable."))}k.isMDXComponent=!0},97151:function(e,t,n){t.Z=n.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);