"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14993],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68799:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&l(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},80673:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(27378),r=n(14324),i=n(46294),o=n(38944),s="tabItem_Ocg6",l=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&g(e,n,t[n]);return e};function f(e){var t,n,r;const{lazy:l,block:u,defaultValue:m,values:p,groupId:g,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=p?p:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,i.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(r=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.UB)(),[x,C]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==x&&(O(t),C(a),null!=g&&w(g,a))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:T,onClick:T},n),i={className:(0,o.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":x===e})},d(r,c(i))),null!=t?t:e);var r,i}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,r.Z)();return a.createElement(f,h({key:String(t)},e))}},53474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return b},default:function(){return k}});var a=n(35318),r=n(80673),i=n(68799),o=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&m(e,n,t[n]);return e};const g={slug:"/sidebar/autogenerated"},h="Autogenerated",f={unversionedId:"guides/docs/sidebar/autogenerated",id:"version-2.0.0-beta.16/guides/docs/sidebar/autogenerated",title:"Autogenerated",description:"Docusaurus can create a sidebar automatically from your filesystem structure: each folder creates a sidebar category, and each file creates a doc link.",source:"@site/versioned_docs/version-2.0.0-beta.16/guides/docs/sidebar/autogenerated.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/autogenerated",permalink:"/docs/sidebar/autogenerated",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/docs/sidebar/autogenerated.md",tags:[],version:"2.0.0-beta.16",frontMatter:{slug:"/sidebar/autogenerated"},sidebar:"docs",previous:{title:"items",permalink:"/docs/sidebar/items"},next:{title:"Using multiple sidebars",permalink:"/docs/sidebar/multiple-sidebars"}},b=[{value:"Category index convention",id:"category-index-convention",children:[],level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",children:[],level:2},{value:"Using number prefixes",id:"using-number-prefixes",children:[],level:2},{value:"Customize the sidebar items generator",id:"customize-the-sidebar-items-generator",children:[],level:2}],v={toc:b};function k(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},v),m),s(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"autogenerated"}),"Autogenerated"),(0,a.kt)("p",null,"Docusaurus can ",(0,a.kt)("strong",{parentName:"p"},"create a sidebar automatically")," from your ",(0,a.kt)("strong",{parentName:"p"},"filesystem structure"),": each folder creates a sidebar category, and each file creates a doc link."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"type SidebarItemAutogenerated = {\n  type: 'autogenerated';\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n")),(0,a.kt)("p",null,"Docusaurus can generate a full sidebar from your docs folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: '.', // '.' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"autogenerated")," item is converted by Docusaurus to a ",(0,a.kt)("strong",{parentName:"p"},"sidebar slice")," (also discussed in ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/sidebar/items#category-shorthand"}),"category shorthands"),"): a list of items of type ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"category"),", so you can splice ",(0,a.kt)("strong",{parentName:"p"},"multiple ",(0,a.kt)("inlineCode",{parentName:"strong"},"autogenerated")," items")," from multiple directories, interleaving them with regular sidebar items, in one sidebar level."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"A real-world example"),"Consider this file structure:",(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docs\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251c\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251c\u2500\u2500 advanced\n    \u2502   \u251c\u2500\u2500 advanced1.md\n    \u2502   \u251c\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251c\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251c\u2500\u2500 easy\n    \u2502   \u251c\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251c\u2500\u2500 tutorial-end.md\n    \u251c\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n")),(0,a.kt)("p",null,"And assume every doc's ID is just its file name. If you define an autogenerated sidebar like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/hard\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: 'api', // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"It would be resolved as:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        'easy1',\n        'easy2',\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        // Two files and a folder in docs/tutorials/hard\n        'advanced1',\n        'advanced2',\n        {\n          type: 'category',\n          label: 'read-more',\n          items: ['resource1', 'resource2'],\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: 'category',\n      label: 'product1-api',\n      items: ['api'],\n    },\n    {\n      type: 'category',\n      label: 'product2-api',\n      items: ['basic-api', 'pro-api'],\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,'Note how the autogenerate source directories themselves don\'t become categories: only the items they contain do. This is what we mean by "sidebar slice".')),(0,a.kt)("h2",p({},{id:"category-index-convention"}),"Category index convention"),(0,a.kt)("p",null,"Docusaurus can automatically link a category to its index document."),(0,a.kt)("p",null,"A category index document is a document following one of those filename conventions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Named as ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," (case-insensitive): ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/Guides/index.md")),(0,a.kt)("li",{parentName:"ul"},"Named as ",(0,a.kt)("inlineCode",{parentName:"li"},"README")," (case-insensitive): ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/Guides/README.mdx")),(0,a.kt)("li",{parentName:"ul"},"Same name as parent folder: ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/Guides/Guides.md"))),(0,a.kt)("p",null,"This is equivalent to using a category with a ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/sidebar/items#category-doc-link"}),"doc link"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {type: 'doc', id: 'Guides/index'},\n      items: [],\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Naming your introductory document ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," makes it show up when browsing the folder using the GitHub interface, while using ",(0,a.kt)("inlineCode",{parentName:"p"},"index.md")," makes the behavior more in line with how HTML files are served."))),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If a folder only has one index page, it will be turned into a link instead of a category. This is useful for ",(0,a.kt)("strong",{parentName:"p"},"asset collocation"),":"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",p({parentName:"pre"},{}),"some-doc\n\u251c\u2500\u2500 index.md\n\u251c\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Customizing category index matching"),(0,a.kt)("p",null,"It is possible to opt out any of the category index conventions, or define even more conventions. You can inject your own ",(0,a.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher through the ",(0,a.kt)("a",p({parentName:"p"},{href:"#customize-the-sidebar-items-generator"}),(0,a.kt)("inlineCode",{parentName:"a"},"sidebarItemsGenerator"))," callback. For example, you can also pick ",(0,a.kt)("inlineCode",{parentName:"p"},"intro")," as another file name eligible for automatically becoming the category index."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex(doc) {\n              return (\n                // Also pick intro.md in addition to the default ones\n                doc.fileName.toLowerCase() === 'intro' ||\n                defaultCategoryIndexMatcher(doc)\n              );\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"Or choose to not have any category index convention."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex() {\n              // No doc will be automatically picked as category index\n              return false;\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher will be provided with three fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fileName"),", the file's name without extension and with casing preserved"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"directories"),", the list of directory names ",(0,a.kt)("em",{parentName:"li"},"from the lowest level to the highest level"),", relative to the docs root directory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"extension"),", the file's extension, with a leading dot.")),(0,a.kt)("p",null,"For example, for a doc file at ",(0,a.kt)("inlineCode",{parentName:"p"},"guides/sidebar/autogenerated.md"),", the props the matcher receives are"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const props = {\n  fileName: 'autogenerated',\n  directories: ['sidebar', 'guides'],\n  extension: '.md',\n};\n")),(0,a.kt)("p",null,"The default implementation is:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"function isCategoryIndex({fileName, directories}) {\n  const eligibleDocIndexNames = [\n    'index',\n    'readme',\n    directories[0].toLowerCase(),\n  ];\n  return eligibleDocIndexNames.includes(fileName.toLowerCase());\n}\n"))),(0,a.kt)("h2",p({},{id:"autogenerated-sidebar-metadata"}),"Autogenerated sidebar metadata"),(0,a.kt)("p",null,"For hand-written sidebar definitions, you would provide metadata to sidebar items through ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js"),"; for autogenerated, Docusaurus would read them from the item's respective file. In addition, you may want to adjust the relative position of each item, because, by default, items within a sidebar slice will be generated in ",(0,a.kt)("strong",{parentName:"p"},"alphabetical order")," (using files and folders names)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For docs"),": use additional front matter. The ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," attributes now become ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_label")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_class_name"),", while there's an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_position")," front matter."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-md",metastring:'title="docs/tutorials/tutorial-easy.md"',title:'"docs/tutorials/tutorial-easy.md"'}),"---\n# highlight-start\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n# highlight-end\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For categories"),": add a ",(0,a.kt)("inlineCode",{parentName:"p"},"_category_.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"_category_.yml")," file in the respective folder. You can specify any category metadata and also the ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," metadata."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:'title="docs/tutorials/_category_.json"',title:'"docs/tutorials/_category_.json"'}),'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"YAML",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-yml",metastring:'title="docs/tutorials/_category_.yml"',title:'"docs/tutorials/_category_.yml"'}),"position: 2.5 # float position is supported\nlabel: 'Tutorial'\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\n")))),(0,a.kt)("div",p({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," is explicitly specified, Docusaurus will not apply any ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/sidebar/items#category-index-convention"}),"default conventions"),"."),(0,a.kt)("p",{parentName:"div"},"The doc links can be specified relatively, e.g. if the category is generated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"guides")," directory, ",(0,a.kt)("inlineCode",{parentName:"p"},'"link": {"type": "doc", "id": "intro"}')," will be resolved to the ID ",(0,a.kt)("inlineCode",{parentName:"p"},"guides/intro"),", only falling back to ",(0,a.kt)("inlineCode",{parentName:"p"},"intro")," if a doc with the former ID doesn't exist."),(0,a.kt)("p",{parentName:"div"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"link: null")," to opt out of default conventions and not generate any category index page."))),(0,a.kt)("div",p({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The position metadata is only used ",(0,a.kt)("strong",{parentName:"p"},"within a sidebar slice"),": Docusaurus does not re-order other items of your sidebar."))),(0,a.kt)("h2",p({},{id:"using-number-prefixes"}),"Using number prefixes"),(0,a.kt)("p",null,"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes, which also makes them appear in the file system in the same order when sorted by file name:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docs\n\u251c\u2500\u2500 01-Intro.md\n\u251c\u2500\u2500 02-Tutorial Easy\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u2514\u2500\u2500 03-End.md\n\u251c\u2500\u2500 03-Tutorial Hard\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u251c\u2500\u2500 03-Third Part.md\n\u2502   \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n")),(0,a.kt)("p",null,"To make it ",(0,a.kt)("strong",{parentName:"p"},"easier to adopt"),", Docusaurus supports ",(0,a.kt)("strong",{parentName:"p"},"multiple number prefix patterns"),"."),(0,a.kt)("p",null,"By default, Docusaurus will ",(0,a.kt)("strong",{parentName:"p"},"remove the number prefix")," from the doc id, title, label, and URL paths."),(0,a.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Prefer using ",(0,a.kt)("a",p({parentName:"strong"},{href:"#autogenerated-sidebar-metadata"}),"additional metadata")),"."),(0,a.kt)("p",{parentName:"div"},"Updating a number prefix can be annoying, as it can require ",(0,a.kt)("strong",{parentName:"p"},"updating multiple existing markdown links"),":"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",p({parentName:"pre"},{className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',title:'"docs/02-Tutorial',"Easy/01-First":!0,'Part.md"':!0}),"- Check the [Tutorial End](../04-End.md);\n+ Check the [Tutorial End](../05-End.md);\n")))),(0,a.kt)("h2",p({},{id:"customize-the-sidebar-items-generator"}),"Customize the sidebar items generator"),(0,a.kt)("p",null,"You can provide a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarItemsGenerator")," function in the docs plugin (or preset) config:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n          categoriesMetadata,\n          isCategoryIndex,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            {type: 'doc', id: 'doc1'},\n            {type: 'doc', id: 'doc2'},\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Re-use and enhance the default generator")," instead of writing a generator from scratch: ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts"}),"the default generator we provide")," is 250 lines long."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Add, update, filter, re-order")," the sidebar items according to your use case:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === 'category') {\n      return {...item, items: reverseSidebarItems(item.items)};\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nmodule.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")))))}k.isMDXComponent=!0}}]);