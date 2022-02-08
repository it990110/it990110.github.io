"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17930],{35318:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15136:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return f},default:function(){return k}});var n=a(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(d)for(var a of d(t))c.call(t,a)&&l(e,a,t[a]);return e};const p={id:"head-metadata",title:"Head Metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},u="Head Metadata",h={unversionedId:"guides/markdown-features/head-metadata",id:"guides/markdown-features/head-metadata",title:"Head Metadata",description:"Declaring page-specific head metadata through MDX",source:"@site/docs/guides/markdown-features/markdown-features-head-metadata.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/head-metadata",permalink:"/docs/next/markdown-features/head-metadata",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644278779,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"head-metadata",title:"Head Metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},sidebar:"docs",previous:{title:"Math Equations",permalink:"/docs/next/markdown-features/math-equations"},next:{title:"Styling and Layout",permalink:"/docs/next/styling-layout"}},f=[],g={toc:f};function k(e){var t,a=e,{components:r}=a,l=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),l),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"head-metadata"}),"Head Metadata"),(0,n.kt)("p",null,"Docusaurus automatically sets useful page metadata in ",(0,n.kt)("inlineCode",{parentName:"p"},"<html>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<body>")," for you."),(0,n.kt)("p",null,"It is possible to add extra metadata (or override existing ones) by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," tag in Markdown files:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',title:'"markdown-features-head-metadata.mdx"'}),'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# Head Metadata\n\nMy text\n')),(0,n.kt)("head",null,(0,n.kt)("html",{className:"some-extra-html-class"}),(0,n.kt)("body",{className:"other-extra-body-class"}),(0,n.kt)("title",null,"Head Metadata customized title!"),(0,n.kt)("meta",{charSet:"utf-8"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary"}),(0,n.kt)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})),(0,n.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," declaration has been added to the current Markdown doc, as a demo."),(0,n.kt)("p",{parentName:"div"},"Open your browser DevTools and check how this page's metadata has been affected."))),(0,n.kt)("div",m({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"You don't always need this for typical SEO needs.")," Content plugins (e.g. docs and blog) provide front matter options like ",(0,n.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keywords"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),", which will be automatically applied to both ",(0,n.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"og:description"),", while you would have to manually declare two metadata tags when using the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," tag."))),(0,n.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This feature is built on top of the Docusaurus ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/next/docusaurus-core#head"}),(0,n.kt)("inlineCode",{parentName:"a"},"<Head>"))," component."),(0,n.kt)("p",{parentName:"div"},"Refer to ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/nfl/react-helmet"}),"react-helmet")," for exhaustive documentation."))))}k.isMDXComponent=!0}}]);