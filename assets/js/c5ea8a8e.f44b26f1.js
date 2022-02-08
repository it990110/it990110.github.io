"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54057],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return v},default:function(){return f}});var i=n(35318),a=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e};const m={sidebar_position:4},u="Static methods",h={unversionedId:"api/plugin-methods/static-methods",id:"version-2.0.0-beta.15/api/plugin-methods/static-methods",title:"Static methods",description:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/plugin-methods/static-methods.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/static-methods",permalink:"/docs/2.0.0-beta.15/api/plugin-methods/static-methods",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/plugin-methods/static-methods.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644315946,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"I18n lifecycles",permalink:"/docs/2.0.0-beta.15/api/plugin-methods/i18n-lifecycles"},next:{title:"Plugins overview",permalink:"/docs/2.0.0-beta.15/api/plugins"}},v=[{value:"<code>validateOptions({options, validate})</code>",id:"validateOptions",children:[{value:"<code>options</code>",id:"options",children:[],level:3},{value:"<code>validate</code>",id:"validate",children:[],level:3}],level:2},{value:"<code>validateThemeConfig({themeConfig, validate})</code>",id:"validateThemeConfig",children:[{value:"<code>themeConfig</code>",id:"themeConfig",children:[],level:3},{value:"<code>validate</code>",id:"validate-1",children:[],level:3}],level:2}],g={toc:v};function f(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=c(c({},g),p),o(t,r({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("h1",c({},{id:"static-methods"}),"Static methods"),(0,i.kt)("p",null,"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance."),(0,i.kt)("h2",c({},{id:"validateOptions"}),(0,i.kt)("inlineCode",{parentName:"h2"},"validateOptions({options, validate})")),(0,i.kt)("p",null,"Returns validated and normalized options for the plugin. This method is called before the plugin is initialized. You must return the options since they will be passed to the plugin during initialization."),(0,i.kt)("h3",c({},{id:"options"}),(0,i.kt)("inlineCode",{parentName:"h3"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," passed to plugin for validation and normalization."),(0,i.kt)("h3",c({},{id:"validate"}),(0,i.kt)("inlineCode",{parentName:"h3"},"validate")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," schema and options as the arguments, returns validated and normalized options. ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,i.kt)("div",c({},{className:"admonition admonition-tip alert alert--success"}),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/joi"}),"Joi")," is recommended for validation and normalization of options."),(0,i.kt)("p",{parentName:"div"},"To avoid mixing Joi versions, use ",(0,i.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")')))),(0,i.kt)("p",null,"If you don't use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options and return options in case of success."),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="my-plugin/src/index.js"',title:'"my-plugin/src/index.js"'}),"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n// highlight-end\n\nmodule.exports = myPlugin;\n")),(0,i.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-ts",metastring:'title="my-plugin/src/index.ts"',title:'"my-plugin/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n}\n// highlight-end\n")),(0,i.kt)("h2",c({},{id:"validateThemeConfig"}),(0,i.kt)("inlineCode",{parentName:"h2"},"validateThemeConfig({themeConfig, validate})")),(0,i.kt)("p",null,"Return validated and normalized configuration for the theme."),(0,i.kt)("h3",c({},{id:"themeConfig"}),(0,i.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," provided in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," for validation and normalization."),(0,i.kt)("h3",c({},{id:"validate-1"}),(0,i.kt)("inlineCode",{parentName:"h3"},"validate")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," schema and ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," as the arguments, returns validated and normalized options. ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,i.kt)("div",c({},{className:"admonition admonition-tip alert alert--success"}),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,i.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/joi"}),"Joi")," is recommended for validation and normalization of theme config."),(0,i.kt)("p",{parentName:"div"},"To avoid mixing Joi versions, use ",(0,i.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")')))),(0,i.kt)("p",null,"If you don't use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options."),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n// highlight-end\n\nmodule.exports = validateThemeConfig;\n")),(0,i.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-ts",metastring:'title="my-theme/src/index.ts"',title:'"my-theme/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n// highlight-end\n")))}f.isMDXComponent=!0}}]);