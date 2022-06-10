"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58836],{87430:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(27378),a=n(2411),i=n(46294),o=n(38944),l="cardContainer_qNfC",s="cardContainerLink_ZCHJ",c="cardTitle_wBbW",d="cardDescription_IDL3",u=n(42038),p=n(94157);function m({href:e,children:t}){const n=(0,o.Z)("card margin-bottom--lg padding--lg",l,e&&s);return e?r.createElement(a.default,{href:e,className:n},t):r.createElement("div",{className:n},t)}function b({href:e,icon:t,title:n,description:a}){return r.createElement(m,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",c),title:n},t," ",n),r.createElement("div",{className:(0,o.Z)("text--truncate",d),title:a},a))}function g({item:e}){const t=(0,i.Wl)(e);return r.createElement(b,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})})}function f({item:e}){var t;const n=(0,u.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(b,{href:e.href,icon:n,title:e.label,description:null==a?void 0:a.description})}function y({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h({items:e}){return r.createElement("div",{className:"row"},e.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6"},r.createElement(y,{item:e})))))}},89389:function(e,t,n){n.d(t,{v:function(){return p}});var r=n(70124),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};function p(e,t){return(0,r.v)(e,(n=u({},t),a={transforms:u({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)},i(n,o(a))));var n,a}},28316:function(e,t,n){n.r(t);var r=n(27378),a=n(14324);t.default=function({children:e,fallback:t}){return(0,a.Z)()?r.createElement(r.Fragment,null,e()):t||null}},42519:function(e,t,n){n.d(t,{Z:function(){return ve}});var r={};n.r(r),n.d(r,{ButtonExample:function(){return L}});var a=n(27378),i=n(40935),o=n(38944),l=n(94157),s=n(64324),c=n(28316),d=n(46294),u="playgroundContainer_6Ior",p="playgroundHeader_Tvsk",m="playgroundEditor_TySg",b="playgroundPreview_mApW",g=n(14324),f=Object.defineProperty,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function w({children:e}){return a.createElement("div",{className:(0,o.Z)(p)},e)}function j(){return a.createElement("div",null,"Loading...")}function E(){return a.createElement(a.Fragment,null,a.createElement(w,null,a.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:b},a.createElement(c.default,{fallback:a.createElement(j,null)},(()=>a.createElement(a.Fragment,null,a.createElement(i.i5,null),a.createElement(i.IF,null))))))}function N(){const e=(0,g.Z)();return a.createElement(i.uz,{key:String(e),className:m})}function O(){return a.createElement(a.Fragment,null,a.createElement(w,null,a.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(N,null))}function C(e){var t=e,{children:n,transformCode:r}=t,o=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&y)for(var r of y(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(t,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,s.default)(),{liveCodeBlock:{playgroundPosition:c}}=l,p=(0,d.pJ)();return a.createElement("div",{className:u},a.createElement(i.nu,((e,t)=>{for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&v(e,n,t[n]);return e})({code:n.replace(/\n$/,""),transformCode:r||(e=>`${e};`),theme:p},o),"top"===c?a.createElement(a.Fragment,null,a.createElement(E,null),a.createElement(O,null)):a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement(E,null))))}var x=Object.defineProperty,P=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&D(e,n,t[n]);if(I)for(var n of I(t))Z.call(t,n)&&D(e,n,t[n]);return e};function L(e){return a.createElement("button",(t=B({type:"button"},e),n={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},P(t,S(n))));var t,n}var _=Object.defineProperty,A=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&G(e,n,t[n]);if(A)for(var n of A(t))F.call(t,n)&&G(e,n,t[n]);return e};var U=M(M({React:a},a),r),R=n(55620),J=n(39348),W="codeBlockContainer_RIuc",$="codeBlockContent_DOR6",H="codeBlockTitle_fLmC",q="codeBlock_SvlJ",V="codeBlockStandalone_K_5i",X="copyButton_veCs",K="codeBlockLines_kiFP",Y=Object.defineProperty,Q=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,ae=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&ae(e,n,t[n]);if(te)for(var n of te(t))re.call(t,n)&&ae(e,n,t[n]);return e},oe=(e,t)=>Q(e,ee(t));var le=Object.defineProperty,se=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&ue(e,n,t[n]);if(se)for(var n of se(t))de.call(t,n)&&ue(e,n,t[n]);return e};var me,be=(me=function({children:e,className:t="",metastring:n,title:r,language:i}){var s;const{prism:c}=(0,d.LU)(),[u,p]=(0,a.useState)(!1),[m,b]=(0,a.useState)(!1);(0,a.useEffect)((()=>{b(!0)}),[]);const g=(0,d.bc)(n)||r,f=(0,d.pJ)();if(a.Children.toArray(e).some((e=>(0,a.isValidElement)(e))))return a.createElement(R.ZP,oe(ie({},R.lG),{key:String(m),theme:f,code:"",language:"text"}),(({className:n,style:r})=>a.createElement("pre",{tabIndex:0,className:(0,o.Z)(n,V,"thin-scrollbar",W,t,d.kM.common.codeBlock),style:r},a.createElement("code",{className:K},e))));const y=Array.isArray(e)?e.join(""):e,h=null!=(s=null!=i?i:(0,d.Vo)(t))?s:c.defaultLanguage,{highlightLines:k,code:v}=(0,d.nZ)(y,n,h),w=()=>{(0,J.Z)(v),p(!0),setTimeout((()=>p(!1)),2e3)};return a.createElement(R.ZP,oe(ie({},R.lG),{key:String(m),theme:f,code:v,language:null!=h?h:"text"}),(({className:e,style:n,tokens:r,getLineProps:i,getTokenProps:s})=>a.createElement("div",{className:(0,o.Z)(W,t,{[`language-${h}`]:h&&!t.includes(`language-${h}`)},d.kM.common.codeBlock)},g&&a.createElement("div",{style:n,className:H},g),a.createElement("div",{className:(0,o.Z)($,h)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(e,q,"thin-scrollbar"),style:n},a.createElement("code",{className:K},r.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",ie({key:t},n),e.map(((e,t)=>a.createElement("span",ie({key:t},s({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(X,"clean-btn"),onClick:w},u?a.createElement(l.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(l.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},function(e){return e.live?a.createElement(C,pe({scope:U},e)):a.createElement(me,pe({},e))}),ge=Object.defineProperty,fe=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,ke=(e,t,n)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ve(e){return a.createElement(be,((e,t)=>{for(var n in t||(t={}))ye.call(t,n)&&ke(e,n,t[n]);if(fe)for(var n of fe(t))he.call(t,n)&&ke(e,n,t[n]);return e})({},e))}},62237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return y},toc:function(){return h},default:function(){return v}});var r=n(35318),a=n(87430),i=n(46294),o=n(42519),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e};const g={slug:"/sidebar"},f="Sidebar",y={unversionedId:"guides/docs/sidebar/index",id:"version-2.0.0-beta.16/guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/versioned_docs/version-2.0.0-beta.16/guides/docs/sidebar/index.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/zh-CN/docs/sidebar",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/zh-CN/docs/create-doc"},next:{title:"items",permalink:"/zh-CN/docs/sidebar/items"}},h=[{value:"Default sidebar",id:"default-sidebar",children:[],level:2},{value:"Sidebar object",id:"sidebar-object",children:[],level:2},{value:"Theme configuration",id:"theme-configuration",children:[{value:"Hideable sidebar",id:"hideable-sidebar",children:[],level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",children:[],level:3}],level:2},{value:"Passing custom props",id:"passing-custom-props",children:[],level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",children:[],level:2}],k={toc:h};function v(e){var t,l=e,{components:m}=l,g=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(l,["components"]);return(0,r.kt)("wrapper",(t=b(b({},k),g),s(t,c({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("h1",b({},{id:"sidebar"}),"Sidebar"),(0,r.kt)("p",null,"Creating a sidebar is useful to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group multiple ",(0,r.kt)("strong",{parentName:"li"},"related documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display a sidebar")," on each of those documents"),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"paginated navigation"),", with next/previous button")),(0,r.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define a file that exports a dictionary of ",(0,r.kt)("a",b({parentName:"li"},{href:"#sidebar-object"}),"sidebar objects"),"."),(0,r.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"),(0,r.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",b({},{id:"default-sidebar"}),"Default sidebar"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarPath")," is unspecified, Docusaurus ",(0,r.kt)("a",b({parentName:"p"},{href:"/zh-CN/docs/sidebar/autogenerated"}),"automatically generates a sidebar")," for you, by using the filesystem structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"You can also define your sidebars explicitly."),(0,r.kt)("h2",b({},{id:"sidebar-object"}),"Sidebar object"),(0,r.kt)("p",null,"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"This is a sidebars file that exports one sidebar, called ",(0,r.kt)("inlineCode",{parentName:"p"},"mySidebar"),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."),(0,r.kt)("p",null,"A sidebars file can contain ",(0,r.kt)("a",b({parentName:"p"},{href:"/zh-CN/docs/sidebar/multiple-sidebars"}),(0,r.kt)("strong",{parentName:"a"},"multiple sidebar objects")),", identified by their object keys."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n")),(0,r.kt)("h2",b({},{id:"theme-configuration"}),"Theme configuration"),(0,r.kt)("h3",b({},{id:"hideable-sidebar"}),"Hideable sidebar"),(0,r.kt)("p",null,"By enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.hideableSidebar")," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // highlight-start\n    hideableSidebar: true,\n    // highlight-end\n  },\n};\n")),(0,r.kt)("h3",b({},{id:"auto-collapse-sidebar-categories"}),"Auto-collapse sidebar categories"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.autoCollapseSidebarCategories")," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // highlight-next-line\n    autoCollapseSidebarCategories: true,\n  },\n};\n")),(0,r.kt)("h2",b({},{id:"passing-custom-props"}),"Passing custom props"),(0,r.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-js"}),"{\n  type: 'doc',\n  id: 'doc1',\n  customProps: {\n    /* props */\n  },\n};\n")),(0,r.kt)("h2",b({},{id:"complex-sidebars-example"}),"Complex sidebars example"),(0,r.kt)("p",null,"A real-world example from the Docusaurus site:"),(0,r.kt)(o.Z,{className:"language-js",title:"sidebars.js",mdxType:"CodeBlock"},n(58073).Z.split("\n").map((e=>!["//","/*","*"].some((t=>e.trim().startsWith(t)))&&e)).filter(Boolean).join("\n")))}v.isMDXComponent=!0},58073:function(e,t){t.Z='/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// @ts-check\n\n/** @type {import(\'@docusaurus/plugin-content-docs\').SidebarsConfig} */\nconst sidebars = {\n  docs: [\n    \'github-page\',\n    \'deploy-auto\',\n    \'config-website\',\n    \'config-homepage\',\n    \'add-files\',\n    \'adapt-logo\',\n    \'update-version\',\n    \'add-items\',\n    "introduction",\n    {\n      "type": "category",\n      "label": "Getting Started",\n      "link": {\n        "type": "generated-index"\n      },\n      "collapsed": false,\n      "items": [\n        "installation",\n        "configuration",\n        "playground",\n        "typescript-support"\n      ]\n    },\n    {\n      "type": "category",\n      "label": "Guides",\n      "link": {\n        "type": "generated-index",\n        "title": "Docusaurus Guides",\n        "description": "Let\'s learn about the most important Docusaurus concepts!",\n        "keywords": [\n          "guides"\n        ],\n        "image": "/img/docusaurus.png"\n      },\n      "items": [\n        "guides/creating-pages",\n        {\n          "type": "category",\n          "label": "Docs",\n          "link": {\n            "type": "doc",\n            "id": "guides/docs/introduction"\n          },\n          "items": [\n            "guides/docs/create-doc",\n            {\n              "type": "category",\n              "label": "Sidebar",\n              "link": {\n                "type": "doc",\n                "id": "guides/docs/sidebar/index"\n              },\n              "items": [\n                "guides/docs/sidebar/items",\n                "guides/docs/sidebar/autogenerated",\n                "guides/docs/sidebar/multiple-sidebars"\n              ]\n            },\n            "guides/docs/versioning",\n            "guides/docs/markdown-features",\n            "guides/docs/multi-instance"\n          ]\n        },\n        "blog",\n        {\n          "type": "category",\n          "label": "Markdown Features",\n          "link": {\n            "type": "doc",\n            "id": "guides/markdown-features/introduction"\n          },\n          "items": [\n            "guides/markdown-features/react",\n            "guides/markdown-features/tabs",\n            "guides/markdown-features/code-blocks",\n            "guides/markdown-features/admonitions",\n            "guides/markdown-features/headings",\n            "guides/markdown-features/inline-toc",\n            "guides/markdown-features/assets",\n            "guides/markdown-features/plugins",\n            "guides/markdown-features/math-equations",\n            "guides/markdown-features/head-metadata"\n          ]\n        },\n        "styling-layout",\n        "static-assets",\n        "search",\n        "browser-support",\n        "seo",\n        "using-plugins",\n        "deployment",\n        {\n          "type": "category",\n          "label": "Internationalization",\n          "link": {\n            "type": "doc",\n            "id": "i18n/introduction"\n          },\n          "items": [\n            {\n              "type": "doc",\n              "id": "i18n/tutorial",\n              "label": "Tutorial"\n            },\n            {\n              "type": "doc",\n              "id": "i18n/git",\n              "label": "Using Git"\n            },\n            {\n              "type": "doc",\n              "id": "i18n/crowdin",\n              "label": "Using Crowdin"\n            }\n          ]\n        },\n        "guides/whats-next"\n      ]\n    },\n    {\n      "type": "category",\n      "label": "Advanced Guides",\n      "link": {\n        "type": "doc",\n        "id": "advanced/index"\n      },\n      "items": [\n        "advanced/architecture",\n        "advanced/plugins",\n        "advanced/routing",\n        "advanced/swizzling",\n        "advanced/ssg"\n      ]\n    },\n    {\n      "type": "category",\n      "label": "Migrating from v1 to v2",\n      "items": [\n        "migration/migration-overview",\n        "migration/migration-automated",\n        "migration/migration-manual",\n        "migration/migration-versioned-sites",\n        "migration/migration-translated-sites"\n      ]\n    }\n  ],\n  api: [\n    \'cli\',\n    \'docusaurus-core\',\n    {\n      type: \'autogenerated\',\n      dirName: \'api\',\n    },\n  ],\n  tls: [\n    "tls/hash-function",\n    "tls/public-key-cryptography",\n    "tls/ssl-tls-overview",\n    "tls/symmetric-cryptography",\n    "tls/asymmetric-cryptography",\n    "tls/tls-handshake",\n     {\n      type: \'category\',\n      label: \'TLS Labs\',\n      collapsed: false,\n      items: [\n        \'tls/create-certificates\',\n        \'tls/openssl-labs\',\n        \'tls/openssl-server\',\n        \'tls/browser-authentication\',\n        \'tls/mutual-authentication\',\n        \'tls/grpc-auth-labs\',\n        \'tls/node-mutual-auth\',\n      ],\n    },\n  ],\n};\n\nmodule.exports = sidebars;\n'}}]);