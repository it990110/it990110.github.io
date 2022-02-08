"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63524],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47887:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return g},default:function(){return y}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={sidebar_position:2},h="Extending infrastructure",m={unversionedId:"api/plugin-methods/extend-infrastructure",id:"version-2.0.0-beta.16/api/plugin-methods/extend-infrastructure",title:"Extending infrastructure",description:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins.",source:"@site/versioned_docs/version-2.0.0-beta.16/api/plugin-methods/extend-infrastructure.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/extend-infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/plugin-methods/extend-infrastructure.md",tags:[],version:"2.0.0-beta.16",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Lifecycle APIs",permalink:"/docs/api/plugin-methods/lifecycle-apis"},next:{title:"I18n lifecycles",permalink:"/docs/api/plugin-methods/i18n-lifecycles"}},g=[{value:"<code>getPathsToWatch()</code>",id:"getPathsToWatch",children:[],level:2},{value:"<code>extendCli(cli)</code>",id:"extendCli",children:[],level:2},{value:"<code>getThemePath()</code>",id:"getThemePath",children:[],level:2},{value:"<code>getTypeScriptThemePath()</code>",id:"getTypeScriptThemePath",children:[],level:2},{value:"<code>getSwizzleComponentList()</code>",id:"getSwizzleComponentList",children:[],level:2}],f={toc:g};function y(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},f),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"extending-infrastructure"}),"Extending infrastructure"),(0,r.kt)("p",null,"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins."),(0,r.kt)("h2",d({},{id:"getPathsToWatch"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getPathsToWatch()")),(0,r.kt)("p",null,"Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," from Node, which you may use to find the necessary directory information about the site."),(0,r.kt)("p",null,"Use this for files that are consumed server-side, because theme files are automatically watched by Webpack dev server."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"const path = require('path');\nmodule.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",d({},{id:"extendCli"}),(0,r.kt)("inlineCode",{parentName:"h2"},"extendCli(cli)")),(0,r.kt)("p",null,"Register an extra command to enhance the CLI of Docusaurus. ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," is a ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/package/commander/v/5.1.0"}),"commander")," object."),(0,r.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"The commander version matters! We use commander v5, and make sure you are referring to the right version documentation for available APIs."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",d({},{id:"getThemePath"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getThemePath()")),(0,r.kt)("p",null,"Returns the path to the directory where the theme components can be found. When your users call ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath")," is called and its returned path is used to find your theme components."),(0,r.kt)("p",null,"For example, your ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath")," can be:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      return path.resolve(__dirname, './theme');\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",d({},{id:"getTypeScriptThemePath"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getTypeScriptThemePath()")),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()"),", it should return the path to the directory where the source code of TypeScript theme components can be found. This path is purely for swizzling TypeScript theme components, and theme components under this path will ",(0,r.kt)("strong",{parentName:"p"},"not")," be resolved by Webpack. Therefore, it is not a replacement for ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()"),". Typically, you can make the path returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getTypeScriptThemePath()")," be your source directory, and make the path returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()")," be the compiled JavaScript output."),(0,r.kt)("div",d({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"For TypeScript theme authors: you are strongly advised to make your compiled output as human-readable as possible. Only strip type annotations and don't transpile any syntaxes, because they will be handled by Webpack's Babel loader based on the targeted browser versions."),(0,r.kt)("p",{parentName:"div"},"You should also format these files with Prettier. Remember\u2014JS files can and will be directly consumed by your users."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return path.join(__dirname, '../lib/theme');\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return path.resolve(__dirname, '../src/theme');\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",d({},{id:"getSwizzleComponentList"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getSwizzleComponentList()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is a static method, not attached to any plugin instance.")),(0,r.kt)("p",null,"Returns a list of stable components that are considered safe for swizzling. These components will be swizzlable without ",(0,r.kt)("inlineCode",{parentName:"p"},"--danger"),". All components are considered unstable by default. If an empty array is returned, all components are considered unstable. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is returned, all components are considered stable."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const swizzleAllowedComponents = [\n  'CodeBlock',\n  'DocSidebar',\n  'Footer',\n  'NotFound',\n  'SearchBar',\n  'hooks/useTheme',\n  'prism-include-languages',\n];\n\nmyTheme.getSwizzleComponentList = () => swizzleAllowedComponents;\n")))}y.isMDXComponent=!0}}]);