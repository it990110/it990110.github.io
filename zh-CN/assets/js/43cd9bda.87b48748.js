"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65333],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,k=c["".concat(u,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74651:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return k},assets:function(){return d},toc:function(){return b},default:function(){return f}});var r=a(35318),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e};const c={date:"2021-06-24T20:00",authors:["eshantri","felipecrs","Josh-Cena","jsamr","lex111","loozhengyuan","manuelmeurer","ramiy","slorber","teikjun","tomekpapiernik"]},h="2.0.0-beta.2",k={permalink:"/zh-CN/changelog/2.0.0-beta.2",source:"@site/changelog/source/2.0.0-beta.2.md",title:"2.0.0-beta.2",description:"New Feature",date:"2021-06-24T20:00:00.000Z",formattedDate:"2021\u5e746\u670824\u65e5",tags:[],truncated:!0,authors:[{name:"Eshan Tripathi",alias:"eshantri",url:"https://github.com/eshantri",imageURL:"https://github.com/eshantri.png",key:"eshantri"},{name:"Felipe Santos",alias:"felipecrs",url:"https://github.com/felipecrs",imageURL:"https://github.com/felipecrs.png",key:"felipecrs"},{name:"Joshua Chen",alias:"Josh-Cena",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"Josh-Cena"},{name:"Jules Sam. Randolph",alias:"jsamr",url:"https://github.com/jsamr",imageURL:"https://github.com/jsamr.png",key:"jsamr"},{name:"Alexey Pyltsyn",alias:"lex111",url:"https://github.com/lex111",imageURL:"https://github.com/lex111.png",key:"lex111"},{name:"ZhengYuan Loo",alias:"loozhengyuan",url:"https://github.com/loozhengyuan",imageURL:"https://github.com/loozhengyuan.png",key:"loozhengyuan"},{name:"Manuel Meurer",alias:"manuelmeurer",url:"https://github.com/manuelmeurer",imageURL:"https://github.com/manuelmeurer.png",key:"manuelmeurer"},{name:"Rami Yushuvaev",alias:"ramiy",url:"https://github.com/ramiy",imageURL:"https://github.com/ramiy.png",key:"ramiy"},{name:"S\xe9bastien Lorber",alias:"slorber",url:"https://github.com/slorber",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Teik Jun",alias:"teikjun",url:"https://github.com/teikjun",imageURL:"https://github.com/teikjun.png",key:"teikjun"},{name:"Tomasz Papiernik",alias:"tomekpapiernik",url:"https://github.com/tomekpapiernik",imageURL:"https://github.com/tomekpapiernik.png",key:"tomekpapiernik"}],frontMatter:{date:"2021-06-24T20:00",authors:["eshantri","felipecrs","Josh-Cena","jsamr","lex111","loozhengyuan","manuelmeurer","ramiy","slorber","teikjun","tomekpapiernik"]},prevItem:{title:"2.0.0-beta.3",permalink:"/zh-CN/changelog/2.0.0-beta.3"},nextItem:{title:"2.0.0-beta.1",permalink:"/zh-CN/changelog/2.0.0-beta.1"},listPageLink:"/zh-CN/changelog/"},d={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0]},b=[{value:"\ud83d\ude80 New Feature",id:"-new-feature",children:[],level:2},{value:"\ud83d\udca5 Breaking Change",id:"-breaking-change",children:[],level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",children:[],level:2},{value:"\ud83d\udc85 Polish",id:"-polish",children:[],level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",children:[],level:2},{value:"\ud83c\udfe0 Internal",id:"-internal",children:[],level:2},{value:"Committers: 11",id:"committers-11",children:[],level:2}],g={toc:b};function f(e){var t,a=e,{components:n}=a,p=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),p),i(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"-new-feature"}),"\ud83d\ude80 New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5052"}),"#5052")," feat(v2): docs version banner configuration option (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-blog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-types"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5037"}),"#5037")," feat(v2): plugins injectHtmlTags + configureWebpack should receive content loaded (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")")))),(0,r.kt)("h2",m({},{id:"-breaking-change"}),"\ud83d\udca5 Breaking Change"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5053"}),"#5053")," refactor(v2): remove deprecated docs option excludeNextVersionDocs (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5052"}),"#5052")," feat(v2): docs version banner configuration option (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")")))),(0,r.kt)("h2",m({},{id:"-bug-fix"}),"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-blog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-types"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5054"}),"#5054")," fix(v2): allow undefined favicon (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5048"}),"#5048")," fix(v2): read last update from inner git repositories (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/felipecrs"}),"@felipecrs"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5050"}),"#5050")," fix(v2): add shadow to skip link on focus only (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5035"}),"#5035")," fix(v2): fix some docs container/sidebar layout issues (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-mdx-loader"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-blog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-pages"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-ideal-image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-pwa"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-types"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-utils"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5047"}),"#5047")," fix(v2): Fix Webpack persistent caching (evict on swizzle/alias/config change) (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-common"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5040"}),"#5040")," fix(v2): Fix announcementBar layout shifts (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5034"}),"#5034")," fix(v2): dev css modules classnames should include filename (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5016"}),"#5016")," fix(v2): add missing quote in build command output (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/manuelmeurer"}),"@manuelmeurer"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-module-type-aliases"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-common"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5023"}),"#5023")," fix(v2): ignore hash changes in useChangeRoute hook (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-blog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-utils-validation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5032"}),"#5032")," fix(v2): less strict blog/docs uri frontmatter validation (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")")))),(0,r.kt)("h2",m({},{id:"-polish"}),"\ud83d\udc85 Polish"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5053"}),"#5053")," refactor(v2): remove deprecated docs option excludeNextVersionDocs (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-ideal-image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-bootstrap"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-classic"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-theme-common"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-utils-common"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-utils-validation"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus-utils"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/4993"}),"#4993")," style(v2): reduce number of ESLint warnings (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/Josh-Cena"}),"@Josh-Cena"),")"))),(0,r.kt)("li",{parentName:"ul"},"Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5017"}),"#5017")," chore(v2): remove badge for v1 tests (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/loozhengyuan"}),"@loozhengyuan"),")")))),(0,r.kt)("h2",m({},{id:"-documentation"}),"\ud83d\udcdd Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5049"}),"#5049")," docs(v2): Fix Gatsby theme name for docs site - Docz (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/ramiy"}),"@ramiy"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5030"}),"#5030")," docs(v2): typo in deployment.mdx (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/eshantri"}),"@eshantri"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5022"}),"#5022")," docs(v2): Add React Native Render HTML site to showcase page (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/jsamr"}),"@jsamr"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5027"}),"#5027")," docs(v2): Add Buddy to deployment doc (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/tomekpapiernik"}),"@tomekpapiernik"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5021"}),"#5021")," docs(v2): fix incorrect anchor links in website (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/teikjun"}),"@teikjun"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5007"}),"#5007")," docs(v2): wrap mdx usage in mdx-code-block (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5033"}),"#5033")," docs(v2): GH pages: recommend using trailingSlash (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")")))),(0,r.kt)("h2",m({},{id:"-internal"}),"\ud83c\udfe0 Internal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/5005"}),"#5005")," chore: add archived versions system + archive alpha.73-75 (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")")),(0,r.kt)("h2",m({},{id:"committers-11"}),"Committers: 11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alexey Pyltsyn (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lex111"}),"@lex111"),")"),(0,r.kt)("li",{parentName:"ul"},"Eshan Tripathi (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/eshantri"}),"@eshantri"),")"),(0,r.kt)("li",{parentName:"ul"},"Felipe Santos (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/felipecrs"}),"@felipecrs"),")"),(0,r.kt)("li",{parentName:"ul"},"Joshua Chen (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/Josh-Cena"}),"@Josh-Cena"),")"),(0,r.kt)("li",{parentName:"ul"},"Jules Sam. Randolph (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/jsamr"}),"@jsamr"),")"),(0,r.kt)("li",{parentName:"ul"},"Manuel Meurer (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/manuelmeurer"}),"@manuelmeurer"),")"),(0,r.kt)("li",{parentName:"ul"},"Rami Yushuvaev (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/ramiy"}),"@ramiy"),")"),(0,r.kt)("li",{parentName:"ul"},"S\xe9bastien Lorber (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/slorber"}),"@slorber"),")"),(0,r.kt)("li",{parentName:"ul"},"Teik Jun (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/teikjun"}),"@teikjun"),")"),(0,r.kt)("li",{parentName:"ul"},"Tomasz Papiernik (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/tomekpapiernik"}),"@tomekpapiernik"),")"),(0,r.kt)("li",{parentName:"ul"},"ZhengYuan Loo (",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/loozhengyuan"}),"@loozhengyuan"),")")))}f.isMDXComponent=!0}}]);