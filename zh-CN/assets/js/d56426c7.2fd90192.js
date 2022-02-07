"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20121],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45660:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var r=t(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))d.call(n,t)&&c(e,t,n[t]);return e};const u={id:"migration-versioned-sites",title:"Versioned sites",slug:"/migration/versioned-sites"},m=void 0,v={unversionedId:"migration/migration-versioned-sites",id:"version-2.0.0-beta.14/migration/migration-versioned-sites",title:"Versioned sites",description:"Read up https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning first for problems in v1's approach.",source:"@site/versioned_docs/version-2.0.0-beta.14/migration/migration-versioned-sites.md",sourceDirName:"migration",slug:"/migration/versioned-sites",permalink:"/zh-CN/docs/2.0.0-beta.14/migration/versioned-sites",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.14",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",frontMatter:{id:"migration-versioned-sites",title:"Versioned sites",slug:"/migration/versioned-sites"},sidebar:"docs",previous:{title:"Manual migration",permalink:"/zh-CN/docs/2.0.0-beta.14/migration/manual"},next:{title:"Translated sites",permalink:"/zh-CN/docs/2.0.0-beta.14/migration/translated-sites"}},f=[{value:"Migrate your <code>versioned_docs</code> front matter",id:"migrate-your-versioned_docs-front-matter",children:[],level:2},{value:"Migrate your <code>versioned_sidebars</code>",id:"migrate-your-versioned_sidebars",children:[],level:2},{value:"Populate your <code>versioned_sidebars</code> and <code>versioned_docs</code>",id:"populate-your-versioned_sidebars-and-versioned_docs",children:[],level:2},{value:"Convert style attributes to style objects in MDX",id:"convert-style-attributes-to-style-objects-in-mdx",children:[],level:2}],h={toc:f};function g(e){var n,t=e,{components:o}=t,c=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},h),c),i(n,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Read up ",(0,r.kt)("a",p({parentName:"p"},{href:"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning"}),"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning")," first for problems in v1's approach."),(0,r.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"The versioned docs should normally be migrated correctly by the ",(0,r.kt)("a",p({parentName:"p"},{href:"/zh-CN/docs/2.0.0-beta.14/migration/automated"}),"migration CLI")))),(0,r.kt)("h2",p({},{id:"migrate-your-versioned_docs-front-matter"}),"Migrate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_docs")," front matter"),(0,r.kt)("p",null,"Unlike v1, The markdown header for each versioned doc is no longer altered by using ",(0,r.kt)("inlineCode",{parentName:"p"},"version-${version}-${original_id}")," as the value for the actual id field. See scenario below for better explanation."),(0,r.kt)("p",null,"For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"When you cut a new version 1.0.0, in Docusaurus v1, ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"In comparison, Docusaurus 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")," looks like this (exactly same as original)"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"Since we're going for snapshot and allow people to move (and edit) docs easily inside version. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," frontmatter is no longer altered and will remain the same. Internally, it is set as ",(0,r.kt)("inlineCode",{parentName:"p"},"version-${version}/${id}"),"."),(0,r.kt)("p",null,"Essentially, here are the necessary changes in each versioned_docs file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff",metastring:"{2-3,5}","{2-3,5}":!0}),"---\n- id: version-1.0.0-hello\n+ id: hello\ntitle: Hello, World !\n- original_id: hello\n---\nHi, Endilie here :)\n")),(0,r.kt)("h2",p({},{id:"migrate-your-versioned_sidebars"}),"Migrate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_sidebars")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refer to ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs")," id as ",(0,r.kt)("inlineCode",{parentName:"li"},"version-${version}/${id}")," (v2) instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"version-${version}-${original_id}")," (v1).")),(0,r.kt)("p",null,"Because in v1 there is a good chance someone created a new file with front matter id ",(0,r.kt)("inlineCode",{parentName:"p"},'"version-${version}-${id}"')," that can conflict with ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs")," id."),(0,r.kt)("p",null,"For example, Docusaurus 1 can't differentiate ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/xxx.md")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\n---\n\nAnother content\n")),(0,r.kt)("p",null,"vs ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"Since we don't allow ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," in v1 & v2 for frontmatter, conflicts are less likely to occur."),(0,r.kt)("p",null,"So v1 users need to migrate their versioned_sidebars file"),(0,r.kt)("p",null,"Example ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars/version-1.0.0-sidebars.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff",metastring:'{2-3,5-6,9-10}  title="versioned_sidebars/version-1.0.0-sidebars.json"',"{2-3,5-6,9-10}":!0,"":!0,title:'"versioned_sidebars/version-1.0.0-sidebars.json"'}),'{\n+ "version-1.0.0/docs": {\n- "version-1.0.0-docs": {\n    "Test": [\n+    "version-1.0.0/foo/bar",\n-    "version-1.0.0-foo/bar",\n    ],\n    "Guides": [\n+    "version-1.0.0/hello",\n-    "version-1.0.0-hello"\n    ]\n  }\n}\n')),(0,r.kt)("h2",p({},{id:"populate-your-versioned_sidebars-and-versioned_docs"}),"Populate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_sidebars")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_docs")),(0,r.kt)("p",null,"In v2, we use snapshot approach for documentation versioning. ",(0,r.kt)("strong",{parentName:"p"},"Every versioned docs does not depends on other version"),". It is possible to have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.md")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"version-1.0.0")," but it doesn't exist in ",(0,r.kt)("inlineCode",{parentName:"p"},"version-1.2.0"),". This is not possible in previous version due to Docusaurus v1 fallback functionality (",(0,r.kt)("a",p({parentName:"p"},{href:"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality"}),"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality"),")."),(0,r.kt)("p",null,"For example, if your ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," looks like this in v1"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json",metastring:'title="versions.json"',title:'"versions.json"'}),'["1.1.0", "1.0.0"]\n')),(0,r.kt)("p",null,"Docusaurus v1 creates versioned docs ",(0,r.kt)("strong",{parentName:"p"},"if and only if the doc content is different"),". Your docs structure might look like this if the only doc changed from v1.0.0 to v1.1.0 is ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"website\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n")),(0,r.kt)("p",null,"In v2, you have to populate the missing ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")," (with the right frontmatter and id reference too)."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-shell",metastring:"{3-5,12}","{3-5,12}":!0}),"website\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n")),(0,r.kt)("h2",p({},{id:"convert-style-attributes-to-style-objects-in-mdx"}),"Convert style attributes to style objects in MDX"),(0,r.kt)("p",null,"Docusaurus 2 uses JSX for doc files. If you have any style attributes in your Docusaurus 1 docs, convert them to style objects, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"---\nid: demo\ntitle: Demo\n---\n\n## Section\n\nhello world\n\n- pre style=\"background: black\">zzz</pre>\n+ pre style={{background: 'black'}}>zzz</pre>\n")))}g.isMDXComponent=!0}}]);