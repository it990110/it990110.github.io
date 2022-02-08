"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92093],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e};const u={slug:"/sidebar/multiple-sidebars"},m="Using multiple sidebars",g={unversionedId:"guides/docs/sidebar/multiple-sidebars",id:"guides/docs/sidebar/multiple-sidebars",title:"Using multiple sidebars",description:"You can create a sidebar for each set of Markdown files that you want to group together.",source:"@site/docs/guides/docs/sidebar/multiple-sidebars.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/multiple-sidebars",permalink:"/docs/next/sidebar/multiple-sidebars",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/docs/sidebar/multiple-sidebars.md",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644313915,formattedLastUpdatedAt:"2/8/2022",frontMatter:{slug:"/sidebar/multiple-sidebars"},sidebar:"docs",previous:{title:"Autogenerated",permalink:"/docs/next/sidebar/autogenerated"},next:{title:"Versioning",permalink:"/docs/next/versioning"}},b=[{value:"Understanding sidebar association",id:"sidebar-association",children:[],level:2},{value:"Generating pagination",id:"generating-pagination",children:[],level:2},{value:"The <code>ref</code> item",id:"sidebar-item-ref",children:[],level:2}],h={toc:b};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},h),p),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"using-multiple-sidebars"}),"Using multiple sidebars"),(0,a.kt)("p",null,"You can create a sidebar for each ",(0,a.kt)("strong",{parentName:"p"},"set of Markdown files")," that you want to ",(0,a.kt)("strong",{parentName:"p"},"group together"),"."),(0,a.kt)("div",c({},{className:"admonition admonition-tip alert alert--success"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The Docusaurus site is a good example of using multiple sidebars:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/next/"}),"Docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/next/cli"}),"API"))))),(0,a.kt)("p",null,"Consider this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n")),(0,a.kt)("p",null,"When browsing ",(0,a.kt)("inlineCode",{parentName:"p"},"doc1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"doc2"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," will be displayed; when browsing ",(0,a.kt)("inlineCode",{parentName:"p"},"doc3")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"doc4"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiSidebar")," will be displayed."),(0,a.kt)("h2",c({},{id:"sidebar-association"}),"Understanding sidebar association"),(0,a.kt)("p",null,"Following the example above, if a ",(0,a.kt)("inlineCode",{parentName:"p"},"commonDoc")," is included in both sidebars:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2', 'commonDoc'],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n")),(0,a.kt)("p",null,"How does Docusaurus know which sidebar to display when browsing ",(0,a.kt)("inlineCode",{parentName:"p"},"commonDoc"),"? Answer: it doesn't, and we don't guarantee which sidebar it will pick."),(0,a.kt)("p",null,"When you add doc Y to sidebar X, it creates a two-way binding: sidebar X contains a link to doc Y, and when browsing doc Y, sidebar X will be displayed. But sometimes, we want to break either implicit binding:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"How do I generate a link to doc Y in sidebar X without making sidebar X displayed on Y?")," For example, when I include doc Y in multiple sidebars as in the example above, and I want to explicitly tell Docusaurus to display one sidebar?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"How do I make sidebar X displayed when browsing doc Y, but sidebar X shouldn't contain the link to Y?"),' For example, when Y is a "doc home page" and the sidebar is purely used for navigation?')),(0,a.kt)("p",null,"Front matter option ",(0,a.kt)("inlineCode",{parentName:"p"},"displayed_sidebar")," will forcibly set the sidebar association. For the same example, you can still use doc shorthands without any special configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n")),(0,a.kt)("p",null,"And then add a front matter:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-md",metastring:'title="commonDoc.md"',title:'"commonDoc.md"'}),"---\ndisplayed_sidebar: apiSidebar\n---\n")),(0,a.kt)("p",null,"Which explicitly tells Docusaurus to display ",(0,a.kt)("inlineCode",{parentName:"p"},"apiSidebar")," when browsing ",(0,a.kt)("inlineCode",{parentName:"p"},"commonDoc"),". Using the same method, you can make sidebar X which doesn't contain doc Y appear on doc Y:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-md",metastring:'title="home.md"',title:'"home.md"'}),"---\ndisplayed_sidebar: tutorialSidebar\n---\n")),(0,a.kt)("p",null,"Even when ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," doesn't contain a link to ",(0,a.kt)("inlineCode",{parentName:"p"},"home"),", it will still be displayed when viewing ",(0,a.kt)("inlineCode",{parentName:"p"},"home"),"."),(0,a.kt)("p",null,"If you set ",(0,a.kt)("inlineCode",{parentName:"p"},"displayed_sidebar: null"),", no sidebar will be displayed whatsoever on this page, and subsequently, no pagination either."),(0,a.kt)("h2",c({},{id:"generating-pagination"}),"Generating pagination"),(0,a.kt)("p",null,'Docusaurus uses the sidebar to generate the "next" and "previous" pagination links at the bottom of each doc page. It strictly uses the sidebar that is displayed: if no sidebar is associated, it doesn\'t generate pagination either. However, the docs linked as "next" and "previous" are not guaranteed to display the same sidebar: they are included in this sidebar, but in their front matter, they may have a different ',(0,a.kt)("inlineCode",{parentName:"p"},"displayed_sidebar"),"."),(0,a.kt)("p",null,"If a sidebar is displayed by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"displayed_sidebar")," front matter, and this sidebar doesn't contain the doc itself, no pagination is displayed."),(0,a.kt)("p",null,"You can customize pagination with front matter ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination_next")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination_prev"),". Consider this sidebar:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  tutorial: [\n    'introduction',\n    {\n      installation: ['windows', 'linux', 'macos'],\n    },\n    'getting-started',\n  ],\n};\n")),(0,a.kt)("p",null,'The pagination next link on "windows" points to "linux", but that doesn\'t make sense: you would want readers to proceed to "getting started" after installation. In this case, you can set the pagination manually:'),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-md",metastring:'title="windows.md"',title:'"windows.md"'}),"---\n# highlight-next-line\npagination_next: getting-started\n---\n\n# Installation on Windows\n")),(0,a.kt)("p",null,"You can also disable displaying a pagination link with ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination_next: null")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination_prev: null"),"."),(0,a.kt)("p",null,"The pagination label by default is the sidebar label. You can use the front matter ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination_label")," to customize how this doc appears in the pagination."),(0,a.kt)("h2",c({},{id:"sidebar-item-ref"}),"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"ref")," item"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," type is identical to the ",(0,a.kt)("a",c({parentName:"p"},{href:"#sidebar-item-doc"}),(0,a.kt)("inlineCode",{parentName:"a"},"doc")," type")," in every way, except that it doesn't participate in generating navigation metadata. It only registers itself as a link. When ",(0,a.kt)("a",c({parentName:"p"},{href:"#generating-pagination"}),"generating pagination")," and ",(0,a.kt)("a",c({parentName:"p"},{href:"#sidebar-association"}),"displaying sidebar"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," items are completely ignored."),(0,a.kt)("p",null,"Consider this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  tutorialSidebar: {\n    'Category A': [\n      'doc1',\n      'doc2',\n      // highlight-next-line\n      {type: 'ref', id: 'commonDoc'},\n      'doc5',\n    ],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n}\n")),(0,a.kt)("p",null,"You can think of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," type as the equivalent to doing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setting ",(0,a.kt)("inlineCode",{parentName:"li"},"displayed_sidebar: tutorialSidebar")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"commonDoc")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ref")," is ignored in sidebar association)"),(0,a.kt)("li",{parentName:"ul"},"Setting ",(0,a.kt)("inlineCode",{parentName:"li"},"pagination_next: doc5")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"doc2")," and setting ",(0,a.kt)("inlineCode",{parentName:"li"},"pagination_prev: doc2")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"doc5")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ref")," is ignored in pagination generation)")))}k.isMDXComponent=!0}}]);