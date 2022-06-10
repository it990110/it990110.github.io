"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34342],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return k},default:function(){return v}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&l(e,n,t[n]);return e};const p={id:"markdown-features",title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",slug:"/docs-markdown-features"},f=void 0,m={unversionedId:"guides/docs/markdown-features",id:"version-2.0.0-beta.15/guides/docs/markdown-features",title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",source:"@site/versioned_docs/version-2.0.0-beta.15/guides/docs/docs-markdown-features.mdx",sourceDirName:"guides/docs",slug:"/docs-markdown-features",permalink:"/zh-CN/docs/2.0.0-beta.15/docs-markdown-features",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{id:"markdown-features",title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",slug:"/docs-markdown-features"},sidebar:"docs",previous:{title:"Versioning",permalink:"/zh-CN/docs/2.0.0-beta.15/versioning"},next:{title:"Docs Multi-instance",permalink:"/zh-CN/docs/2.0.0-beta.15/docs-multi-instance"}},k=[{value:"Markdown front matter",id:"markdown-front-matter",children:[],level:2},{value:"Referencing other documents",id:"referencing-other-documents",children:[],level:2}],h={toc:k};function v(e){var t,n=e,{components:o}=n,l=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),l),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Docs can use any ",(0,r.kt)("a",u({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/markdown-features"}),"Markdown feature")," and have a few additional docs-specific Markdown features."),(0,r.kt)("h2",u({},{id:"markdown-front-matter"}),"Markdown front matter"),(0,r.kt)("p",null,"Markdown docs have their own ",(0,r.kt)("a",u({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.15/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"}),"Markdown front matter API"),"."),(0,r.kt)("h2",u({},{id:"referencing-other-documents"}),"Referencing other documents"),(0,r.kt)("p",null,"If you want to reference another document file, you could use the relative path of the document you want to link to."),(0,r.kt)("p",null,"Docusaurus will convert the file path to be the final document url path (and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".md")," extension)."),(0,r.kt)("p",null,"For example, if you are in ",(0,r.kt)("inlineCode",{parentName:"p"},"folder/doc1.md")," and you want to reference ",(0,r.kt)("inlineCode",{parentName:"p"},"folder/doc2.md"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"folder/subfolder/doc3.md")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"otherFolder/doc4.md"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-md"}),"I am referencing a [document](doc2.md).\n\nReference to another [document in a subfolder](subfolder/doc3.md).\n\n[Relative document](../otherFolder/doc4.md) referencing works as well.\n")),(0,r.kt)("div",u({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"It is better to use relative file paths links instead of relative links:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"links will keep working on the GitHub interface"),(0,r.kt)("li",{parentName:"ul"},"you can customize the document slugs without having to update all the links"),(0,r.kt)("li",{parentName:"ul"},"a versioned doc will link to another doc of the exact same version"),(0,r.kt)("li",{parentName:"ul"},"relative links are very likely to break if you update the ",(0,r.kt)("a",u({parentName:"li"},{href:"/zh-CN/docs/2.0.0-beta.15/api/docusaurus-config#trailing-slash"}),(0,r.kt)("inlineCode",{parentName:"a"},"trailingSlash")," config"))))))}v.isMDXComponent=!0}}]);