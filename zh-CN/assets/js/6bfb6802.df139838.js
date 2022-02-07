"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86798],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96721:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return h}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const f={},d="Markdown tests",m={type:"mdx",permalink:"/zh-CN/tests/pages/markdown-tests",source:"@site/_dogfooding/_pages tests/markdown-tests.md",title:"Markdown tests",description:"This is a test page to see if Docusaurus markdown features are working properly",frontMatter:{}},k=[{value:"Linking to assets",id:"linking-to-assets",children:[],level:2},{value:"Linking to non-SPA page hosted within website",id:"linking-to-non-spa-page-hosted-within-website",children:[],level:2},{value:"Linking to JSON",id:"linking-to-json",children:[],level:2}],g={toc:k};function h(e){var t,r=e,{components:c}=r,f=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),f),o(t,i({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"markdown-tests"}),"Markdown tests"),(0,a.kt)("p",null,"This is a test page to see if Docusaurus markdown features are working properly"),(0,a.kt)("h2",u({},{id:"linking-to-assets"}),"Linking to assets"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3337"}),"#3337")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(2939).Z},"/someFile.pdf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(29592).Z},"/someFile.xyz"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(2939).Z},"@site/_dogfooding/_asset-tests/someFile.pdf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(29592).Z},"@site/_dogfooding/_asset-tests/someFile.xyz")))),(0,a.kt)("h2",u({},{id:"linking-to-non-spa-page-hosted-within-website"}),"Linking to non-SPA page hosted within website"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3309"}),"#3309")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",u({parentName:"p"},{href:"pathname:///dogfooding/javadoc"}),"pathname:///dogfooding/javadoc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",u({parentName:"p"},{href:"pathname:///dogfooding/javadoc/index.html"}),"pathname:///dogfooding/javadoc/index.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",u({parentName:"p"},{href:"pathname://../dogfooding/javadoc"}),"pathname://../dogfooding/javadoc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",u({parentName:"p"},{href:"pathname://../dogfooding/javadoc/index.html"}),"pathname://../dogfooding/javadoc/index.html")))),(0,a.kt)("h2",u({},{id:"linking-to-json"}),"Linking to JSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(80963).Z},"./script.js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{target:"_blank",href:n(3613).Z},"./data.json")))))}h.isMDXComponent=!0},2939:function(e,t,n){t.Z=n.p+"assets/files/someFile-aef54daa5b1fe3359942dac7ade1daae.pdf"},29592:function(e,t,n){t.Z=n.p+"assets/files/someFile-aef54daa5b1fe3359942dac7ade1daae.xyz"},80963:function(e,t,n){t.Z=n.p+"assets/files/_script-505c7abc900c36ef533a0383a80d96a4.js"},3613:function(e,t,n){t.Z=n.p+"assets/files/data-4e0ce03654809ab2cf0049cf88b37a04.json"}}]);