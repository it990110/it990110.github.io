"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76271],{46298:function(e,t,r){r.d(t,{Z:function(){return E}});var a=r(27378),n=r(38944),l=r(93549),o=r(2411),i="sidebar_dh6q",c="sidebarItemTitle_xlD1",s="sidebarItemList_xukR",m="sidebarItem_IVuy",u="sidebarItemLink_VEMI",p="sidebarItemLinkActive_UyEx",d=r(94157);function b({sidebar:e}){return 0===e.items.length?null:a.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},e.title),a.createElement("ul",{className:s},e.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(o.default,{isNavLink:!0,to:e.permalink,className:u,activeClassName:p},e.title))))))}var f=Object.defineProperty,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=function(e){const t=e,{sidebar:r,toc:o,children:i}=t,c=((e,t)=>{var r={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&h.call(e,a)&&(r[a]=e[a]);return r})(t,["sidebar","toc","children"]),s=r&&r.items.length>0;return a.createElement(l.Z,((e,t)=>{for(var r in t||(t={}))v.call(t,r)&&y(e,r,t[r]);if(g)for(var r of g(t))h.call(t,r)&&y(e,r,t[r]);return e})({},c),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(b,{sidebar:r})),a.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&a.createElement("div",{className:"col col--2"},o))))}},82419:function(e,t,r){var a=r(27378),n=r(94157),l=r(82233);t.Z=function(e){const{metadata:t}=e,{previousPage:r,nextPage:o}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a.createElement("div",{className:"pagination-nav__item"},r&&a.createElement(l.Z,{permalink:r,title:a.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},o&&a.createElement(l.Z,{permalink:o,title:a.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},7553:function(e,t,r){r.d(t,{Z:function(){return E}});var a=r(27378),n=r(38944),l=r(94157),o=r(46294),i="anchorWithStickyNavbar_yJdI",c="anchorWithHideOnScrollNavbar_tWSU",s=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))b.call(t,r)&&f(e,r,t[r]);return e},v=(e,t)=>m(e,u(t)),h=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&b.call(e,a)&&(r[a]=e[a]);return r};function y(e){var t=e,{as:r,id:s}=t,m=h(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,o.LU)();return s?a.createElement(r,v(g({},m),{className:(0,n.Z)("anchor",{[c]:u,[i]:!u}),id:s}),m.children,a.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(r,g({},m))}function E(e){var t=e,{as:r}=t,n=h(t,["as"]);return"h1"===r?a.createElement("h1",v(g({},n),{id:void 0}),n.children):a.createElement(y,g({as:r},n))}},31590:function(e,t,r){r.d(t,{Z:function(){return _}});var a=r(27378),n=r(40757),l=r(2411),o=r(42519),i=r(7553),c=r(38944),s=r(46294),m="details_IApO",u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function h(e){var t,r,n=((e,t)=>{var r={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&b)for(var a of b(e))t.indexOf(a)<0&&g.call(e,a)&&(r[a]=e[a]);return r})(e,[]);return a.createElement(s.PO,(t=((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))g.call(t,r)&&v(e,r,t[r]);return e})({},n),r={className:(0,c.Z)("alert alert--info",m,n.className)},p(t,d(r))))}var y=Object.defineProperty,E=Object.defineProperties,O=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&j(e,r,t[r]);if(w)for(var r of w(t))k.call(t,r)&&j(e,r,t[r]);return e};function Z(e){var t,r;if((null==(t=null==e?void 0:e.props)?void 0:t.mdxType)&&(null==(r=null==e?void 0:e.props)?void 0:r.originalType)){const t=e.props,{mdxType:r,originalType:n}=t,l=((e,t)=>{var r={};for(var a in e)P.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&w)for(var a of w(e))t.indexOf(a)<0&&k.call(e,a)&&(r[a]=e[a]);return r})(t,["mdxType","originalType"]);return a.createElement(e.props.originalType,l)}return e}var _={head:e=>{const t=a.Children.map(e.children,(e=>Z(e)));return a.createElement(n.default,N({},e),t)},code:e=>a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?a.createElement("code",N({},e)):a.createElement(o.Z,N({},e)),a:e=>a.createElement(l.default,N({},e)),pre:e=>{var t;return a.createElement(o.Z,N({},(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:N({},e)))},details:e=>{const t=a.Children.toArray(e.children),r=t.find((e=>{var t;return"summary"===(null==(t=null==e?void 0:e.props)?void 0:t.mdxType)})),n=a.createElement(a.Fragment,null,t.filter((e=>e!==r)));return a.createElement(h,(l=N({},e),E(l,O({summary:r}))),n);var l},h1:e=>a.createElement(i.Z,N({as:"h1"},e)),h2:e=>a.createElement(i.Z,N({as:"h2"},e)),h3:e=>a.createElement(i.Z,N({as:"h3"},e)),h4:e=>a.createElement(i.Z,N({as:"h4"},e)),h5:e=>a.createElement(i.Z,N({as:"h5"},e)),h6:e=>a.createElement(i.Z,N({as:"h6"},e))}},82233:function(e,t,r){var a=r(27378),n=r(2411);t.Z=function(e){const{permalink:t,title:r,subLabel:l}=e;return a.createElement(n.default,{className:"pagination-nav__link",to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},r))}},89389:function(e,t,r){r.d(t,{v:function(){return p}});var a=r(70124),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&m(e,r,t[r]);return e};function p(e,t){return(0,a.v)(e,(r=u({},t),n={transforms:u({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)},l(r,o(n))));var r,n}},28316:function(e,t,r){r.r(t);var a=r(27378),n=r(14324);t.default=function({children:e,fallback:t}){return(0,n.Z)()?a.createElement(a.Fragment,null,e()):t||null}},21013:function(e,t,r){r.d(t,{Z:function(){return B}});var a=r(27378),n=r(38944),l=r(35318),o=r(2411),i=r(35330),c=r(2984),s=r(31590),m="blogPostTitle_PrKK",u="blogPostPageTitle_dsQZ",p="blogPostData_fpy6",d="image_XZWt";var b=function({author:e}){const{name:t,url:r,imageURL:n}=e;return a.createElement("div",{className:"avatar margin-bottom--sm"},n&&a.createElement(o.default,{className:"avatar__photo-link avatar__photo",href:r},a.createElement("img",{className:d,src:n,alt:t,onError:e=>{e.currentTarget.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" stroke="%2325c2a0" stroke-width="30" version="1.1"><circle cx="300" cy="230" r="115"/><path stroke-linecap="butt" d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"/></svg>'}})))},f="imageOnlyAuthorRow_xKgx",g="imageOnlyAuthorCol_I1C9",v="toggleButton_ct6G",h=Object.defineProperty,y=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&w(e,r,t[r]);if(y)for(var r of y(t))O.call(t,r)&&w(e,r,t[r]);return e};var k=function(e){var t=e,{expanded:r}=t,n=((e,t)=>{var r={};for(var a in e)E.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))t.indexOf(a)<0&&O.call(e,a)&&(r[a]=e[a]);return r})(t,["expanded"]);return r?a.createElement("svg",P({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},n),a.createElement("path",{d:"M783.915092 1009.031953l-271.898251-277.615587-271.930737 277.550617a49.214558 49.214558 0 0 1-70.752018 0 51.780862 51.780862 0 0 1 0-72.246322l307.274261-313.706262a49.279528 49.279528 0 0 1 70.784503 0l307.33923 313.706262a51.975771 51.975771 0 0 1 0 72.311292 49.409467 49.409467 0 0 1-70.816988 0z m-307.306745-608.05155L169.269117 87.274141A51.975771 51.975771 0 0 1 169.269117 14.96285a49.409467 49.409467 0 0 1 70.816987 0l271.930737 277.615586L783.850122 14.96285a49.409467 49.409467 0 0 1 70.816988 0 51.975771 51.975771 0 0 1 0 72.311291l-307.33923 313.706262a49.376982 49.376982 0 0 1-70.719533 0z"})):a.createElement("svg",P({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},n),a.createElement("path",{d:"M476.612887 1009.12034L169.240699 695.380437a51.981345 51.981345 0 0 1 0-72.319045 49.382277 49.382277 0 0 1 70.824582 0l271.959897 277.645356 271.862433-277.645356a49.382277 49.382277 0 0 1 70.824582 0 51.981345 51.981345 0 0 1 0 72.319045l-307.307212 313.739903a49.447254 49.447254 0 0 1-70.792094 0z m307.274724-608.116755L511.99269 123.455693l-271.959897 277.645357a49.382277 49.382277 0 0 1-70.824582 0 51.981345 51.981345 0 0 1 0-72.319045L476.580399 15.042102a49.382277 49.382277 0 0 1 70.727117 0l307.372188 313.739903a51.981345 51.981345 0 0 1 0 72.319045 49.414766 49.414766 0 0 1-70.824582 0z"}))},j=Object.defineProperty,N=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&C(e,r,t[r]);if(_)for(var r of _(t))I.call(t,r)&&C(e,r,t[r]);return e};function S({authors:e,assets:t}){const[r,l]=(0,a.useState)(!1);if(0===e.length)return null;const o=e.slice(0,r?e.length:10);return a.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",f)},o.map(((e,r)=>{var n,l,o;return a.createElement("div",{className:g,key:r},a.createElement(b,{author:(l=T({},e),o={imageURL:null!=(n=t.authorsImageUrls[r])?n:e.imageURL},N(l,Z(o)))}))})),e.length>10&&a.createElement("button",{className:(0,n.Z)("clean-btn",v),type:"button",onClick:()=>l((e=>!e)),"aria-label":"expand"},a.createElement(k,{expanded:r})))}var B=function(e){var t;const{withBaseUrl:r}=(0,i.C)(),{children:d,frontMatter:b,assets:f,metadata:g,isBlogPostPage:v=!1}=e,{date:h,formattedDate:y,permalink:E,title:O,authors:w}=g,P=null!=(t=f.image)?t:b.image,k=v?"h1":"h2";return a.createElement("article",{className:v?void 0:"margin-bottom--md",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(k,{className:(0,n.Z)(v?u:m),itemProp:"headline"},v?O:a.createElement(o.default,{itemProp:"url",to:E},O)),a.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},a.createElement("time",{dateTime:h,itemProp:"datePublished"},y)),a.createElement(S,{authors:w,assets:f})),P&&a.createElement("meta",{itemProp:"image",content:r(P,{absolute:!0})}),a.createElement("div",{id:v?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:s.Z},d)))}},33088:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(27378),n=r(46298),l=r(82419),o=r(46294),i=r(2411),c=r(21013),s="rss_FCHp",m="twitter_n4bR";var u=function(e){const{metadata:t,items:r,sidebar:u}=e,{blogDescription:p,blogTitle:d}=t;return a.createElement(n.Z,{title:d,description:p,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:u},a.createElement("header",{className:"margin-bottom--lg"},a.createElement("h1",{style:{fontSize:"3rem"}},d),a.createElement("p",null,"Subscribe through"," ",a.createElement(i.default,{href:"pathname:///changelog/rss.xml",className:s},a.createElement("b",null,"RSS feeds"),a.createElement("svg",{style:{fill:"#f26522",position:"relative",left:4,top:1,marginRight:8},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},a.createElement("path",{d:"M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"})))," ","or follow us on"," ",a.createElement(i.default,{href:"https://twitter.com/docusaurus",className:m},a.createElement("b",null,"Twitter"),a.createElement("svg",{style:{fill:"#1da1f2",position:"relative",left:4,top:1,marginRight:8},width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})))," ","to stay up-to-date with new releases!")),r.map((({content:e})=>a.createElement(c.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:e.metadata.truncated},a.createElement(e,null)))),a.createElement(l.Z,{metadata:t}))}},42519:function(e,t,r){r.d(t,{Z:function(){return Ee}});var a={};r.r(a),r.d(a,{ButtonExample:function(){return L}});var n=r(27378),l=r(40935),o=r(38944),i=r(94157),c=r(64324),s=r(28316),m=r(46294),u="playgroundContainer_6Ior",p="playgroundHeader_Tvsk",d="playgroundEditor_TySg",b="playgroundPreview_mApW",f=r(14324),g=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function O({children:e}){return n.createElement("div",{className:(0,o.Z)(p)},e)}function w(){return n.createElement("div",null,"Loading...")}function P(){return n.createElement(n.Fragment,null,n.createElement(O,null,n.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:b},n.createElement(s.default,{fallback:n.createElement(w,null)},(()=>n.createElement(n.Fragment,null,n.createElement(l.i5,null),n.createElement(l.IF,null))))))}function k(){const e=(0,f.Z)();return n.createElement(l.uz,{key:String(e),className:d})}function j(){return n.createElement(n.Fragment,null,n.createElement(O,null,n.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),n.createElement(k,null))}function N(e){var t=e,{children:r,transformCode:a}=t,o=((e,t)=>{var r={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&v)for(var a of v(e))t.indexOf(a)<0&&y.call(e,a)&&(r[a]=e[a]);return r})(t,["children","transformCode"]);const{siteConfig:{themeConfig:i}}=(0,c.default)(),{liveCodeBlock:{playgroundPosition:s}}=i,p=(0,m.pJ)();return n.createElement("div",{className:u},n.createElement(l.nu,((e,t)=>{for(var r in t||(t={}))h.call(t,r)&&E(e,r,t[r]);if(v)for(var r of v(t))y.call(t,r)&&E(e,r,t[r]);return e})({code:r.replace(/\n$/,""),transformCode:a||(e=>`${e};`),theme:p},o),"top"===s?n.createElement(n.Fragment,null,n.createElement(P,null),n.createElement(j,null)):n.createElement(n.Fragment,null,n.createElement(j,null),n.createElement(P,null))))}var Z=Object.defineProperty,_=Object.defineProperties,x=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&S(e,r,t[r]);if(I)for(var r of I(t))T.call(t,r)&&S(e,r,t[r]);return e};function L(e){return n.createElement("button",(t=B({type:"button"},e),r={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},_(t,x(r))));var t,r}var A=Object.defineProperty,R=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&z(e,r,t[r]);if(R)for(var r of R(t))M.call(t,r)&&z(e,r,t[r]);return e};var U=F(F({React:n},n),a),V=r(55620),W=r(39348),$="codeBlockContainer_RIuc",J="codeBlockContent_DOR6",K="codeBlockTitle_fLmC",G="codeBlock_SvlJ",H="codeBlockStandalone_K_5i",q="copyButton_veCs",Q="codeBlockLines_kiFP",X=Object.defineProperty,Y=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,le=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&ne(e,r,t[r]);if(te)for(var r of te(t))ae.call(t,r)&&ne(e,r,t[r]);return e},oe=(e,t)=>Y(e,ee(t));var ie=Object.defineProperty,ce=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pe=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&ue(e,r,t[r]);if(ce)for(var r of ce(t))me.call(t,r)&&ue(e,r,t[r]);return e};var de,be=(de=function({children:e,className:t="",metastring:r,title:a,language:l}){var c;const{prism:s}=(0,m.LU)(),[u,p]=(0,n.useState)(!1),[d,b]=(0,n.useState)(!1);(0,n.useEffect)((()=>{b(!0)}),[]);const f=(0,m.bc)(r)||a,g=(0,m.pJ)();if(n.Children.toArray(e).some((e=>(0,n.isValidElement)(e))))return n.createElement(V.ZP,oe(le({},V.lG),{key:String(d),theme:g,code:"",language:"text"}),(({className:r,style:a})=>n.createElement("pre",{tabIndex:0,className:(0,o.Z)(r,H,"thin-scrollbar",$,t,m.kM.common.codeBlock),style:a},n.createElement("code",{className:Q},e))));const v=Array.isArray(e)?e.join(""):e,h=null!=(c=null!=l?l:(0,m.Vo)(t))?c:s.defaultLanguage,{highlightLines:y,code:E}=(0,m.nZ)(v,r,h),O=()=>{(0,W.Z)(E),p(!0),setTimeout((()=>p(!1)),2e3)};return n.createElement(V.ZP,oe(le({},V.lG),{key:String(d),theme:g,code:E,language:null!=h?h:"text"}),(({className:e,style:r,tokens:a,getLineProps:l,getTokenProps:c})=>n.createElement("div",{className:(0,o.Z)($,t,{[`language-${h}`]:h&&!t.includes(`language-${h}`)},m.kM.common.codeBlock)},f&&n.createElement("div",{style:r,className:K},f),n.createElement("div",{className:(0,o.Z)(J,h)},n.createElement("pre",{tabIndex:0,className:(0,o.Z)(e,G,"thin-scrollbar"),style:r},n.createElement("code",{className:Q},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const r=l({line:e,key:t});return y.includes(t)&&(r.className+=" docusaurus-highlight-code-line"),n.createElement("span",le({key:t},r),e.map(((e,t)=>n.createElement("span",le({key:t},c({token:e,key:t}))))),n.createElement("br",null))})))),n.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(q,"clean-btn"),onClick:O},u?n.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},function(e){return e.live?n.createElement(N,pe({scope:U},e)):n.createElement(de,pe({},e))}),fe=Object.defineProperty,ge=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Ee(e){return n.createElement(be,((e,t)=>{for(var r in t||(t={}))ve.call(t,r)&&ye(e,r,t[r]);if(ge)for(var r of ge(t))he.call(t,r)&&ye(e,r,t[r]);return e})({},e))}}}]);