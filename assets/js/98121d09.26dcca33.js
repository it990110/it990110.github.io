"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85670],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return f}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"static-assets",title:"Static Assets"},m=void 0,h={unversionedId:"static-assets",id:"version-2.0.0-beta.15/static-assets",title:"Static Assets",description:"Every website needs assets: images, stylesheets, favicons, etc. By default, you are suggested to put these assets in the static folder.",source:"@site/versioned_docs/version-2.0.0-beta.15/static-assets.md",sourceDirName:".",slug:"/static-assets",permalink:"/docs/static-assets",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/static-assets.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644278779,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"static-assets",title:"Static Assets"},sidebar:"docs",previous:{title:"Styling and Layout",permalink:"/docs/styling-layout"},next:{title:"Search",permalink:"/docs/search"}},g=[{value:"Referencing your static asset",id:"referencing-your-static-asset",children:[{value:"In JSX",id:"in-jsx",children:[],level:3},{value:"In Markdown",id:"in-markdown",children:[],level:3},{value:"In CSS",id:"in-css",children:[],level:3}],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],k={toc:g};function f(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},k),p),r(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Every website needs assets: images, stylesheets, favicons, etc. By default, you are suggested to put these assets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," folder."),(0,a.kt)("p",null,"Every file you put into ",(0,a.kt)("strong",{parentName:"p"},"that directory will be copied")," into the root of the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it will be copied to ",(0,a.kt)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),(0,a.kt)("p",null,"This means that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for site ",(0,a.kt)("inlineCode",{parentName:"li"},"baseUrl: '/'"),", the image ",(0,a.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,a.kt)("inlineCode",{parentName:"li"},"/img/docusaurus.png"),"."),(0,a.kt)("li",{parentName:"ul"},"for site ",(0,a.kt)("inlineCode",{parentName:"li"},"baseUrl: '/subpath/'"),", the image ",(0,a.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,a.kt)("inlineCode",{parentName:"li"},"/subpath/img/docusaurus.png"),".")),(0,a.kt)("p",null,"You can customize the static directory sources in ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". For example, we can add ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," as another possible path:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'My site',\n  staticDirectories: ['public', 'static'],\n  // ...\n};\n")),(0,a.kt)("p",null,"Now, all files in ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," will be copied to the build output."),(0,a.kt)("h2",c({},{id:"referencing-your-static-asset"}),"Referencing your static asset"),(0,a.kt)("h3",c({},{id:"in-jsx"}),"In JSX"),(0,a.kt)("p",null,"In JSX, you can reference assets from the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," folder in your code using absolute URLs, but this is not ideal because changing the site ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," will ",(0,a.kt)("strong",{parentName:"p"},"break those links"),". For the image ",(0,a.kt)("inlineCode",{parentName:"p"},'<img src="/img/docusaurus.png" />')," served at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/test"),", the browser will try to resolve it from the URL root, i.e. as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/img/docusaurus.png"),", which will fail because it's actually served at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/test/img/docusaurus.png"),"."),(0,a.kt)("p",null,"You can ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," the static asset (recommended), or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function: both prepend the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import DocusaurusImageUrl from '@site/static/img/docusaurus.png';\n\n<img src={DocusaurusImageUrl} />;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"<img src={require('@site/static/img/docusaurus.png').default} />\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img src={useBaseUrl('/img/docusaurus.png')} />;\n")),(0,a.kt)("p",null,"You can also import SVG files: they will be transformed into React components."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),'import DocusaurusLogoWithKeytar from \'@site/static/img/docusaurus_keytar.svg\';\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n')),(0,a.kt)("h3",c({},{id:"in-markdown"}),"In Markdown"),(0,a.kt)("p",null,"In Markdown, you can stick to using absolute paths when writing links or images ",(0,a.kt)("strong",{parentName:"p"},"in Markdown syntax")," because Docusaurus handles them as ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," calls instead of URLs when parsing the Markdown. See ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/markdown-features/assets"}),"Markdown static assets"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-md"}),"You write a link like this: [Download this document](/files/note.docx)\n\nDocusaurus changes that to: <a href={require('static/files/note.docx')}>Download this document</a>\n")),(0,a.kt)("div",c({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"use markdown syntax")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Docusaurus will only parse links that are in Markdown syntax. If your asset references are using the JSX tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>"),", nothing will be done."))),(0,a.kt)("h3",c({},{id:"in-css"}),"In CSS"),(0,a.kt)("p",null,"In CSS, the ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," function is commonly used to reference assets like fonts and images. To reference a static asset, use absolute paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-css"}),"@font-face {\n  font-family: 'Caroline';\n  src: url('/font/Caroline.otf');\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"static/font/Caroline.otf")," asset will be loaded by the bundler."),(0,a.kt)("div",c({},{className:"admonition admonition-warning alert alert--danger"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"important takeaway")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"One important takeaway: ",(0,a.kt)("strong",{parentName:"p"},"never hardcode your base URL!")," The base URL is considered an implementation detail and should be easily changeable. All paths, even when they look like URL slugs, are actually file paths."),(0,a.kt)("p",{parentName:"div"},"If you find the URL slug mental model more understandable, here's a rule of thumb:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Pretend you have a base URL like ",(0,a.kt)("inlineCode",{parentName:"li"},"/test/")," when writing JSX so you don't use an absolute URL path like ",(0,a.kt)("inlineCode",{parentName:"li"},'src="/img/thumbnail.png"')," but instead ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," the asset."),(0,a.kt)("li",{parentName:"ul"},"Pretend it's ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," when writing Markdown or CSS so you always use absolute paths without the base URL.")))),(0,a.kt)("h2",c({},{id:"caveats"}),"Caveats"),(0,a.kt)("p",null,"Keep in mind that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, none of the files in the ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," folder will be post-processed, hashed, or minified.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"However, as we've demonstrated above, we are usually able to convert them to ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," calls for you so they do get processed. This is good for aggressive caching and better user experience."))),(0,a.kt)("li",{parentName:"ul"},"Missing files referenced via hard-coded absolute paths will not be detected at compilation time and will result in a 404 error."),(0,a.kt)("li",{parentName:"ul"},"By default, GitHub Pages runs published files through ",(0,a.kt)("a",c({parentName:"li"},{href:"https://jekyllrb.com/"}),"Jekyll"),". Since Jekyll will discard any files that begin with ",(0,a.kt)("inlineCode",{parentName:"li"},"_"),", it is recommended that you disable Jekyll by adding an empty file named ",(0,a.kt)("inlineCode",{parentName:"li"},".nojekyll")," file to your ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," directory if you are using GitHub pages for hosting.")))}f.isMDXComponent=!0}}]);