"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42276],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77033:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return h},default:function(){return b}});var a=t(35318),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&p(e,t,n[t]);return e};const d={sidebar_position:3},m="I18n lifecycles",f={unversionedId:"api/plugin-methods/i18n-lifecycles",id:"version-2.0.0-beta.15/api/plugin-methods/i18n-lifecycles",title:"I18n lifecycles",description:"Plugins use these lifecycles to load i18n-related data.",source:"@site/versioned_docs/version-2.0.0-beta.15/api/plugin-methods/i18n-lifecycles.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/i18n-lifecycles",permalink:"/docs/2.0.0-beta.15/api/plugin-methods/i18n-lifecycles",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/api/plugin-methods/i18n-lifecycles.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644458553,formattedLastUpdatedAt:"2/10/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Extending infrastructure",permalink:"/docs/2.0.0-beta.15/api/plugin-methods/extend-infrastructure"},next:{title:"Static methods",permalink:"/docs/2.0.0-beta.15/api/plugin-methods/static-methods"}},h=[{value:"<code>getTranslationFiles({content})</code>",id:"getTranslationFiles",children:[],level:2},{value:"<code>translateContent({content,translationFiles})</code>",id:"translateContent",children:[],level:2},{value:"<code>translateThemeConfig({themeConfig,translationFiles})</code>",id:"translateThemeConfig",children:[],level:2},{value:"<code>async getDefaultCodeTranslationMessages()</code>",id:"getDefaultCodeTranslationMessages",children:[],level:2}],g={toc:h};function b(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},g),p),r(n,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"i18n-lifecycles"}),"I18n lifecycles"),(0,a.kt)("p",null,"Plugins use these lifecycles to load i18n-related data."),(0,a.kt)("h2",u({},{id:"getTranslationFiles"}),(0,a.kt)("inlineCode",{parentName:"h2"},"getTranslationFiles({content})")),(0,a.kt)("p",null,"Plugins declare the JSON translation files they want to use."),(0,a.kt)("p",null,"Returns translation files ",(0,a.kt)("inlineCode",{parentName:"p"},"{path: string, content: ChromeI18nJSON}"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": relative to the plugin localized folder ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n/[locale]/[pluginName]"),". Extension ",(0,a.kt)("inlineCode",{parentName:"li"},".json")," should be omitted to remain generic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content"),": using the Chrome i18n JSON format.")),(0,a.kt)("p",null,"These files will be written by the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/2.0.0-beta.15/cli#docusaurus-write-translations-sitedir"}),(0,a.kt)("inlineCode",{parentName:"a"},"write-translations")," CLI")," to the plugin i18n subfolder, and will be read in the appropriate locale before calling ",(0,a.kt)("a",u({parentName:"p"},{href:"#translateContent"}),(0,a.kt)("inlineCode",{parentName:"a"},"translateContent()"))," and ",(0,a.kt)("a",u({parentName:"p"},{href:"#translateThemeConfig"}),(0,a.kt)("inlineCode",{parentName:"a"},"translateThemeConfig()"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    async getTranslationFiles({content}) {\n      return [\n        {\n          path: 'sidebar-labels',\n          content: {\n            someSidebarLabel: {\n              message: 'Some Sidebar Label',\n              description: 'A label used in my plugin in the sidebar',\n            },\n            someLabelFromContent: content.myLabel,\n          },\n        },\n      ];\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",u({},{id:"translateContent"}),(0,a.kt)("inlineCode",{parentName:"h2"},"translateContent({content,translationFiles})")),(0,a.kt)("p",null,"Translate the plugin content, using the localized translation files."),(0,a.kt)("p",null,"Returns the localized plugin content."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"contentLoaded()")," lifecycle will be called with the localized plugin content returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"translateContent()"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    translateContent({content, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...content,\n        someContentLabel: myTranslationFile.someContentLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",u({},{id:"translateThemeConfig"}),(0,a.kt)("inlineCode",{parentName:"h2"},"translateThemeConfig({themeConfig,translationFiles})")),(0,a.kt)("p",null,"Translate the site ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," labels, using the localized translation files."),(0,a.kt)("p",null,"Returns the localized ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    translateThemeConfig({themeConfig, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...themeConfig,\n        someThemeConfigLabel: myTranslationFile.someThemeConfigLabel.message,\n      };\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",u({},{id:"getDefaultCodeTranslationMessages"}),(0,a.kt)("inlineCode",{parentName:"h2"},"async getDefaultCodeTranslationMessages()")),(0,a.kt)("p",null,"Themes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Translate>")," API can provide default code translation messages."),(0,a.kt)("p",null,"It should return messages in ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),", where keys are translation ids and values are messages (without the description) localized using the site's current locale."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    async getDefaultCodeTranslationMessages() {\n      return readJsonFile(`${context.i18n.currentLocale}.json`);\n    },\n    // highlight-end\n  };\n};\n")))}b.isMDXComponent=!0}}]);