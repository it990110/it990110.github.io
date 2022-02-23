"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10733],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11021:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return g},toc:function(){return h},default:function(){return k}});var n=a(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&c(e,a,t[a]);return e};const m={id:"creating-pages",title:"Creating Pages",slug:"/creating-pages",sidebar_label:"Pages"},u=void 0,g={unversionedId:"guides/creating-pages",id:"version-2.0.0-beta.15/guides/creating-pages",title:"Creating Pages",description:"In this section, we will learn about creating pages in Docusaurus.",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/creating-pages.md",sourceDirName:"guides",slug:"/creating-pages",permalink:"/docs/2.0.0-beta.15/creating-pages",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/creating-pages.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"creating-pages",title:"Creating Pages",slug:"/creating-pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/2.0.0-beta.15/category/guides"},next:{title:"Introduction",permalink:"/docs/2.0.0-beta.15/docs-introduction"}},h=[{value:"Add a React page",id:"add-a-react-page",children:[],level:2},{value:"Add a Markdown page",id:"add-a-markdown-page",children:[],level:2},{value:"Routing",id:"routing",children:[{value:"Duplicate Routes",id:"duplicate-routes",children:[],level:3}],level:2}],v={toc:h};function k(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),c),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In this section, we will learn about creating pages in Docusaurus."),(0,n.kt)("p",null,"This is useful for creating ",(0,n.kt)("strong",{parentName:"p"},"one-off standalone pages")," like a showcase page, playground page, or support page."),(0,n.kt)("p",null,"The functionality of pages is powered by ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-pages"),"."),(0,n.kt)("p",null,"You can use React components, or Markdown."),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Pages do not have sidebars, only ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/2.0.0-beta.15/docs-introduction"}),"docs")," do."))),(0,n.kt)("div",d({},{className:"admonition admonition-info alert alert--info"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Check the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-content-pages"}),"Pages Plugin API Reference documentation")," for an exhaustive list of options."))),(0,n.kt)("h2",d({},{id:"add-a-react-page"}),"Add a React page"),(0,n.kt)("p",null,"React is used as the UI library to create pages. Every page component should export a React component, and you can leverage the expressiveness of React to build rich and interactive content."),(0,n.kt)("p",null,"Create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/helloReact.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/pages/helloReact.js"',title:'"/src/pages/helloReact.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nfunction Hello() {\n  return (\n    <Layout title=\"Hello\">\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '50vh',\n          fontSize: '20px',\n        }}>\n        <p>\n          Edit <code>pages/helloReact.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n\nexport default Hello;\n")),(0,n.kt)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/helloReact")," and you will see the new page you just created."),(0,n.kt)("p",null,"Each page doesn't come with any styling. You will need to import the ",(0,n.kt)("inlineCode",{parentName:"p"},"Layout")," component from ",(0,n.kt)("inlineCode",{parentName:"p"},"@theme/Layout")," and wrap your contents within that component if you want the navbar and/or footer to appear."),(0,n.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"You can also create TypeScript pages with the ",(0,n.kt)("inlineCode",{parentName:"p"},".tsx")," extension (",(0,n.kt)("inlineCode",{parentName:"p"},"helloReact.tsx"),")."))),(0,n.kt)("h2",d({},{id:"add-a-markdown-page"}),"Add a Markdown page"),(0,n.kt)("p",null,"Create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/helloMarkdown.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-mdx",metastring:'title="/src/pages/helloMarkdown.md"',title:'"/src/pages/helloMarkdown.md"'}),"---\ntitle: my hello page title\ndescription: my hello page description\nhide_table_of_contents: true\n---\n\n# Hello\n\nHow are you?\n")),(0,n.kt)("p",null,"In the same way, a page will be created at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/helloMarkdown"),"."),(0,n.kt)("p",null,"Markdown pages are less flexible than React pages because it always uses the theme layout."),(0,n.kt)("p",null,"Here's an ",(0,n.kt)("a",d({parentName:"p"},{href:"/examples/markdownPageExample"}),"example Markdown page"),"."),(0,n.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"You can use the full power of React in Markdown pages too, refer to the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX")," documentation."))),(0,n.kt)("h2",d({},{id:"routing"}),"Routing"),(0,n.kt)("p",null,"If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/")," directory will be automatically converted to a website page, following the ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/")," directory hierarchy. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo/test.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo/test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo/"))),(0,n.kt)("p",null,'In this component-based development era, it is encouraged to co-locate your styling, markup, and behavior together into components. Each page is a component, and if you need to customize your page design with your own styles, we recommend co-locating your styles with the page component in its own directory. For example, to create a "Support" page, you could do one of the following:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/support.js")," file"),(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/support/")," directory and a ",(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/support/index.js")," file.")),(0,n.kt)("p",null,"The latter is preferred as it has the benefits of letting you put files related to the page within that directory. For example, a CSS module file (",(0,n.kt)("inlineCode",{parentName:"p"},"styles.module.css"),') with styles meant to only be used on the "Support" page.'),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This is merely a recommended directory structure, and you will still need to manually import the CSS module file within your component module (",(0,n.kt)("inlineCode",{parentName:"p"},"support/index.js"),")."))),(0,n.kt)("p",null,"By default, any Markdown or Javascript file starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"_")," will be ignored and no routes will be created for that file (see the ",(0,n.kt)("inlineCode",{parentName:"p"},"exclude")," option)."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"my-website\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u251c\u2500\u2500 index.js\n\u2502       \u251c\u2500\u2500 _ignored.js\n\u2502       \u251c\u2500\u2500 _ignored-folder\n\u2502       \u2502   \u251c\u2500\u2500 Component1.js\n\u2502       \u2502   \u2514\u2500\u2500 Component2.js\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n.\n")),(0,n.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"All JavaScript/TypeScript files within the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/")," directory will have corresponding website paths generated for them. If you want to create reusable components into that directory, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"exclude")," option (by default, files prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"_"),", test files(",(0,n.kt)("inlineCode",{parentName:"p"},".test.js"),"), and files in ",(0,n.kt)("inlineCode",{parentName:"p"},"__tests__")," directory are not turned into pages)."))),(0,n.kt)("h3",d({},{id:"duplicate-routes"}),"Duplicate Routes"),(0,n.kt)("p",null,"You may accidentally create multiple pages that are meant to be accessed on the same route. When this happens, Docusaurus will warn you about duplicate routes when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build"),", but the site will still be built successfully. The page that was created last will be accessible, but it will override other conflicting pages. To resolve this issue, you should modify or remove any conflicting routes."))}k.isMDXComponent=!0}}]);