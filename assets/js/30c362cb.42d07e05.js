"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63811],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return k}});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={},m="Plugins",h={unversionedId:"advanced/plugins",id:"version-2.0.0-beta.16/advanced/plugins",title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets.",source:"@site/versioned_docs/version-2.0.0-beta.16/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docs/advanced/plugins",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/advanced/plugins.md",tags:[],version:"2.0.0-beta.16",frontMatter:{},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/advanced/architecture"},next:{title:"Routing",permalink:"/docs/advanced/routing"}},g=[{value:"Creating plugins",id:"creating-plugins",children:[{value:"Function definition",id:"function-definition",children:[],level:3},{value:"Module definition",id:"module-definition",children:[],level:3}],level:2},{value:"Plugin design",id:"plugin-design",children:[{value:"Theme design",id:"theme-design",children:[],level:3}],level:2}],f={toc:g};function k(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},f),c),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"plugins"}),"Plugins"),(0,a.kt)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets."),(0,a.kt)("h2",p({},{id:"creating-plugins"}),"Creating plugins"),(0,a.kt)("p",null,"A plugin is a function that takes two parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),". It returns a plugin instance object (or a promise). You can create plugins as functions or modules. For more information, refer to the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/api/plugin-methods/"}),"plugin method references section"),"."),(0,a.kt)("h3",p({},{id:"function-definition"}),"Function definition"),(0,a.kt)("p",null,"You can use a plugin as a function directly included in the Docusaurus config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    // highlight-start\n    async function myPlugin(context, options) {\n      // ...\n      return {\n        name: 'my-plugin',\n        async loadContent() {\n          // ...\n        },\n        async contentLoaded({content, actions}) {\n          // ...\n        },\n        /* other lifecycle API */\n      };\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("h3",p({},{id:"module-definition"}),"Module definition"),(0,a.kt)("p",null,"You can use a plugin as a module path referencing a separate file or NPM package:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    // without options:\n    './my-plugin',\n    // or with options:\n    ['./my-plugin', options],\n  ],\n};\n")),(0,a.kt)("p",null,"Then in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"my-plugin"),", you can create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," such as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="my-plugin.js"',title:'"my-plugin.js"'}),"module.exports = async function myPlugin(context, options) {\n  // ...\n  return {\n    name: 'my-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can view all plugins installed in your site using the ",(0,a.kt)("a",p({parentName:"p"},{href:"/__docusaurus/debug/metadata"}),"debug plugin's metadata panel"),"."),(0,a.kt)("p",null,"Plugins come as several types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package"),": an external package you installed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project"),": a plugin you created in your project, given to Docusaurus as a local file path"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"local"),": a plugin created using the function definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"synthetic"),": a \"fake plugin\" Docusaurus created internally, so we take advantage of our modular architecture and don't let the core do much special work. You won't see this in the metadata because it's an implementation detail.")),(0,a.kt)("p",null,"You can access them on the client side with ",(0,a.kt)("inlineCode",{parentName:"p"},"useDocusaurusContext().siteMetadata.pluginVersions"),"."),(0,a.kt)("h2",p({},{id:"plugin-design"}),"Plugin design"),(0,a.kt)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but is not limited to) extending the webpack config, modifying the data loaded, and creating new components to be used in a page."),(0,a.kt)("h3",p({},{id:"theme-design"}),"Theme design"),(0,a.kt)("p",null,"When plugins have loaded their content, the data is made available to the client side through actions like ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute"}),(0,a.kt)("inlineCode",{parentName:"a"},"createData")," + ",(0,a.kt)("inlineCode",{parentName:"a"},"addRoute"))," or ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/api/plugin-methods/lifecycle-apis#setGlobalData"}),(0,a.kt)("inlineCode",{parentName:"a"},"setGlobalData")),". This data has to be ",(0,a.kt)("em",{parentName:"p"},"serialized")," to plain strings, because ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/advanced/architecture"}),"plugins and themes run in different environments"),". Once the data arrives on the client side, the rest becomes familiar to React developers: data is passed along components, components are bundled with Webpack, and rendered to the window through ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Themes provide the set of UI components to render the content.")," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, which makes swapping designs easy."),(0,a.kt)("p",null,"For example, a Docusaurus blog may consist of a blog plugin and a blog theme."),(0,a.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"This is a contrived example: in practice, ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," provides the theme for docs, blog, and layouts."))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // highlight-next-line\n  themes: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n};\n")),(0,a.kt)("p",null,"And if you want to use Bootstrap styling, you can swap out the theme with ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-blog-bootstrap")," (another fictitious non-existing theme):"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // highlight-next-line\n  themes: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n};\n")),(0,a.kt)("p",null,"Now, although the theme receives the same data from the plugin, how the theme chooses to ",(0,a.kt)("em",{parentName:"p"},"render")," the data as UI can be drastically different."),(0,a.kt)("p",null,"While themes share the exact same lifecycle methods with plugins, themes' implementations can look very different from those of plugins based on themes' designed objectives."),(0,a.kt)("p",null,"Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. A theme still acts like a plugin and exposes some lifecycle methods, but most likely they would not use ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/api/plugin-methods/lifecycle-apis#loadContent"}),(0,a.kt)("inlineCode",{parentName:"a"},"loadContent")),", since they only receive data from plugins, but don't generate data themselves; themes are typically also accompanied by an ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," directory full of components, which are made known to the core through the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/api/plugin-methods/extend-infrastructure#getThemePath"}),(0,a.kt)("inlineCode",{parentName:"a"},"getThemePath"))," lifecycle."),(0,a.kt)("p",null,"To summarize:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Themes share the same lifecycle methods with Plugins"),(0,a.kt)("li",{parentName:"ul"},"Themes are run after all existing Plugins"),(0,a.kt)("li",{parentName:"ul"},"Themes add component aliases by providing ",(0,a.kt)("inlineCode",{parentName:"li"},"getThemePath"),".")))}k.isMDXComponent=!0}}]);