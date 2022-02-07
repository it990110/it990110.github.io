"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46151],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,g=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return u},default:function(){return b}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&c(e,n,t[n]);return e};const m={toc_max_heading_level:4,slug:"/sidebar/items"},h="Sidebar items",g={unversionedId:"guides/docs/sidebar/items",id:"version-2.0.0-beta.15/guides/docs/sidebar/items",title:"Sidebar items",description:"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/docs/sidebar/items.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/items",permalink:"/docs/sidebar/items",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/docs/sidebar/items.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644226051,formattedLastUpdatedAt:"2/7/2022",frontMatter:{toc_max_heading_level:4,slug:"/sidebar/items"},sidebar:"docs",previous:{title:"Sidebar",permalink:"/docs/sidebar"},next:{title:"Autogenerated",permalink:"/docs/sidebar/autogenerated"}},u=[{value:"Doc: link to a doc",id:"sidebar-item-doc",children:[],level:2},{value:"Link: link to any page",id:"sidebar-item-link",children:[],level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",children:[{value:"Category links",id:"category-link",children:[{value:"Doc link",id:"category-doc-link",children:[],level:4},{value:"Generated index page",id:"generated-index-page",children:[],level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",children:[],level:4}],level:3},{value:"Collapsible categories",id:"collapsible-categories",children:[],level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",children:[],level:3}],level:2},{value:"Using shorthands",id:"using-shorthands",children:[{value:"Doc shorthand",id:"doc-shorthand",children:[],level:3},{value:"Category shorthand",id:"category-shorthand",children:[],level:3}],level:2}],k={toc:u};function b(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),c),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"sidebar-items"}),"Sidebar items"),(0,a.kt)("p",null,"We have introduced three types of item types in the example in the previous section: ",(0,a.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"category"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"link"),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,a.kt)("inlineCode",{parentName:"p"},"autogenerated"),", which we will explain in detail later."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#sidebar-item-doc"}),"Doc")),": link to a doc page, associating it with the sidebar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#sidebar-item-link"}),"Link")),": link to any internal or external page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#sidebar-item-category"}),"Category")),": creates a dropdown of sidebar items"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"/docs/sidebar/autogenerated"}),"Autogenerated")),": generate a sidebar slice automatically"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"/docs/sidebar/multiple-sidebars#sidebar-item-ref"}),"*","Ref")),": link to a doc page, without making the item take part in navigation generation")),(0,a.kt)("h2",p({},{id:"sidebar-item-doc"}),"Doc: link to a doc"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," type to link to a doc page and assign that doc to a sidebar:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document id\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document id\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("p",null,"If you use the doc shorthand or ",(0,a.kt)("a",p({parentName:"p"},{href:"#sidebar-item-autogenerated"}),"autogenerated")," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_label")," markdown front matter within that doc, which has higher precedence over the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," key in the sidebar item."),(0,a.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," item sets an ",(0,a.kt)("a",p({parentName:"p"},{href:"#sidebar-association"}),"implicit sidebar association"),". Don't assign the same doc to multiple sidebars: change the type to ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," instead."))),(0,a.kt)("h2",p({},{id:"sidebar-item-link"}),"Link: link to any page"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," type to link to any page (internal or external) that is not a doc."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("h2",p({},{id:"sidebar-item-category"}),"Category: create a hierarchy"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," type to create a hierarchy of sidebar items."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use the ",(0,a.kt)("a",p({parentName:"p"},{href:"#category-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"shorthand syntax"))," when you don't need customizations:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n")))),(0,a.kt)("h3",p({},{id:"category-link"}),"Category links"),(0,a.kt)("p",null,"With category links, clicking on a category can navigate you to another page."),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use category links to introduce a category of documents."))),(0,a.kt)("h4",p({},{id:"category-doc-link"}),"Doc link"),(0,a.kt)("p",null,"A category can link to an existing document."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"See it in action on the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/i18n/introduction"}),"i18n introduction page"),"."),(0,a.kt)("h4",p({},{id:"generated-index-page"}),"Generated index page"),(0,a.kt)("p",null,"You can auto-generate an index page that displays all the direct children of this category. The ",(0,a.kt)("inlineCode",{parentName:"p"},"slug")," allows you to customize the generated page's route, which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"/category/[categoryName]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"See it in action on the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/category/guides"}),"Docusaurus Guides page"),"."),(0,a.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"generated-index")," links as a quick way to get an introductory document."))),(0,a.kt)("h4",p({},{id:"embedding-generated-index-in-doc-page"}),"Embedding generated index in doc page"),(0,a.kt)("p",null,"You can embed the generated cards list in a normal doc page as well, as long as the doc is used as a category index page. To do so, you need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"DocCardList")," component, paired with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCurrentSidebarCategory")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:'title="a-category-index-page.md"',title:'"a-category-index-page.md"'}),"import DocCardList from '@theme/DocCardList';\nimport {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\nIn this section, we will introduce the following concepts:\n\n<DocCardList items={useCurrentSidebarCategory().items}/>\n")),(0,a.kt)("p",null,"See this in action on the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/sidebar"}),"sidebar guides page"),"."),(0,a.kt)("h3",p({},{id:"collapsible-categories"}),"Collapsible categories"),(0,a.kt)("p",null,"We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible: false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"To make all categories non-collapsible by default, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-content-docs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The option in ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," globally."))),(0,a.kt)("h3",p({},{id:"expanded-categories-by-default"}),"Expanded categories by default"),(0,a.kt)("p",null,"Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible"),", you can also set the global configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"options.sidebarCollapsed")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Individual ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed")," options in ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," will still take precedence over this configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("div",p({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"When a category has ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed: true")," but ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible: false")," (either through ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."))),(0,a.kt)("h2",p({},{id:"using-shorthands"}),"Using shorthands"),(0,a.kt)("p",null,"You can express typical sidebar items without much customization more concisely with ",(0,a.kt)("strong",{parentName:"p"},"shorthand syntaxes"),". There are two parts to this: ",(0,a.kt)("a",p({parentName:"p"},{href:"#doc-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"doc shorthand"))," and ",(0,a.kt)("a",p({parentName:"p"},{href:"#category-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"category shorthand")),"."),(0,a.kt)("h3",p({},{id:"doc-shorthand"}),"Doc shorthand"),(0,a.kt)("p",null,"An item with type ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," can be simply a string representing its ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"// =================\n// This item:\n// =================\n{\n  type: 'doc',\n  id: 'myDoc',\n};\n// =================\n// Is equivalent to:\n// =================\n'myDoc';\n")),(0,a.kt)("p",null,"So it's possible to simplify the example above to:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("h3",p({},{id:"category-shorthand"}),"Category shorthand"),(0,a.kt)("p",null,"A category item can be represented by an object whose key is its label, and the value is an array of subitems."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"// ===================\n// This item:\n// ===================\n{\n  type: 'category',\n  label: 'Getting started',\n  items: ['doc1', 'doc2'],\n};\n// ===================\n// Is equivalent to:\n// ===================\n{\n  'Getting started': ['doc1', 'doc2'],\n};\n")),(0,a.kt)("p",null,"This permits us to simplify that example to:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,a.kt)("strong",{parentName:"p"},"sidebar slice"),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,a.kt)("a",p({parentName:"p"},{href:"/docs/sidebar/autogenerated"}),"autogenerated sidebars"),"."))}b.isMDXComponent=!0}}]);