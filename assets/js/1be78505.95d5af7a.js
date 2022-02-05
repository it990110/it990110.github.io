"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29514,56789],{49375:function(e,t,r){r.r(t),r.d(t,{default:function(){return ve}});var n=r(27378),a=r(35318),l=r(40623),o=r(93549),c=r(38944),i=r(46294),s=r(86868),d=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=function(e){return n.createElement("svg",((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&b(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&b(e,r,t[r]);return e})({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},v=r(94157),y=r(2411),h=r(42038),E=r(13896),g="menuLinkText_UCnZ",O="hasHref_E5cH",k="menuHtmlItem_XI63",P=r(14324),C=Object.defineProperty,_=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&w(e,r,t[r]);if(_)for(var r of _(t))S.call(t,r)&&w(e,r,t[r]);return e},I=(e,t)=>{var r={};for(var n in e)j.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&_)for(var n of _(e))t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n]);return r};function Z(e){var t=e,{item:r}=t,a=I(t,["item"]);switch(r.type){case"category":return n.createElement(T,N({item:r},a));case"html":return n.createElement(x,N({item:r},a));default:return n.createElement(M,N({item:r},a))}}function T(e){var t=e,{item:r,onItemClick:a,activePath:l,level:o,index:s}=t,d=I(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:p,className:b,href:f}=r,h=function(e){const t=(0,P.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(r),E=(0,i._F)(r,l),k=(0,i.Mg)(f,l),{collapsed:C,setCollapsed:_}=(0,i.uR)({initialState:()=>!!p&&(!E&&r.collapsed)});!function({isActive:e,collapsed:t,setCollapsed:r}){const a=(0,i.D9)(e);(0,n.useEffect)((()=>{e&&!a&&t&&r(!1)}),[e,a,t,r])}({isActive:E,collapsed:C,setCollapsed:_});const{expandedItem:j,setExpandedItem:S}=(0,i.fP)();function w(e=!C){S(e?null:s),_(e)}const{autoCollapseSidebarCategories:Z}=(0,i.LU)();return(0,n.useEffect)((()=>{p&&j&&j!==s&&Z&&_(!0)}),[p,j,s,_,Z]),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},b)},n.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(y.default,N({className:(0,c.Z)("menu__link",{"menu__link--sublist":p&&!f,"menu__link--active":E,[g]:!p,[O]:!!h}),onClick:p?e=>{null==a||a(r),f?w(!1):(e.preventDefault(),w())}:()=>{null==a||a(r)},"aria-current":k?"page":void 0,href:p?null!=h?h:"#":h},d),m),f&&p&&n.createElement("button",{"aria-label":(0,v.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),w()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(H,{items:u,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:o+1})))}function x({item:e,level:t,index:r}){const{value:a,defaultStyle:l,className:o}=e;return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(t),l&&`${k} menu__list-item`,o),key:r,dangerouslySetInnerHTML:{__html:a}})}function M(e){var t=e,{item:r,onItemClick:a,activePath:l,level:o,index:s}=t,d=I(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:p}=r,b=(0,i._F)(r,l);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",p),key:m},n.createElement(y.default,N(N({className:(0,c.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:u},(0,h.Z)(u)&&{onClick:a?()=>a(r):void 0}),d),(0,h.Z)(u)?m:n.createElement("span",null,m,n.createElement(E.Z,null))))}var L=Object.defineProperty,B=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var H=(0,n.memo)((function(e){var t=e,{items:r}=t,a=((e,t)=>{var r={};for(var n in e)A.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&B)for(var n of B(e))t.indexOf(n)<0&&F.call(e,n)&&(r[n]=e[n]);return r})(t,["items"]);return n.createElement(i.D_,null,r.map(((e,t)=>n.createElement(Z,((e,t)=>{for(var r in t||(t={}))A.call(t,r)&&D(e,r,t[r]);if(B)for(var r of B(t))F.call(t,r)&&D(e,r,t[r]);return e})({key:t,item:e,index:t},a)))))})),R="sidebar_DFkW",W="sidebarWithHideableNavbar_LzGe",z="sidebarHidden_UMEZ",U="sidebarLogo_YYZ2",$="menu_Np7P",J="menuWithAnnouncementBar_fHtM",V="collapseSidebarButton_NWHj",Y="collapseSidebarButtonIcon_azzv",q=Object.defineProperty,G=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&Q(e,r,t[r]);if(G)for(var r of G(t))X.call(t,r)&&Q(e,r,t[r]);return e};function te({onClick:e}){return n.createElement("button",{type:"button",title:(0,v.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,v.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",V),onClick:e},n.createElement(f,{className:Y}))}const re=({toggleSidebar:e,sidebar:t,path:r})=>n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:t,activePath:r,onItemClick:t=>{"category"===t.type&&t.href&&e(),"link"===t.type&&e()},level:1}));const ne=n.memo((function({path:e,sidebar:t,onCollapse:r,isHidden:a}){const l=function(){const{isActive:e}=(0,i.nT)(),[t,r]=(0,n.useState)(e);return(0,i.RF)((({scrollY:t})=>{e&&r(0===t)}),[e]),e&&t}(),{navbar:{hideOnScroll:o},hideableSidebar:d}=(0,i.LU)();return n.createElement("div",{className:(0,c.Z)(R,{[W]:o,[z]:a})},o&&n.createElement(s.Z,{tabIndex:-1,className:U}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",$,{[J]:l})},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:t,activePath:e,level:1}))),d&&n.createElement(te,{onClick:r}))})),ae=n.memo((function(e){return n.createElement(i.Cv,{component:re,props:e})}));function le(e){const t=(0,i.iP)(),r="desktop"===t||"ssr"===t,a="mobile"===t;return n.createElement(n.Fragment,null,r&&n.createElement(ne,ee({},e)),a&&n.createElement(ae,ee({},e)))}var oe=r(31590),ce=r(56789),ie="backToTopButton_niX8",se="backToTopButtonShow_C0Iz";function de(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const r=document.documentElement.scrollTop;r>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*r)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>{var t;return null==(t=e.current)?void 0:t.call(e)}}}var ue=function(){const[e,t]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{smoothScrollTop:a,cancelScrollToTop:l}=de();return(0,i.RF)((({scrollY:e},n)=>{const a=null==n?void 0:n.scrollY;if(!a)return;if(r.current)return void(r.current=!1);const o=e<a;if(o||l(),e<300)t(!1);else if(o){const r=document.documentElement.scrollHeight;e+window.innerHeight<r&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(r.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,v.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ie,{[se]:e}),type:"button",onClick:()=>a()})},me=r(35331),pe={docPage:"docPage_f3Tp",docMainContainer:"docMainContainer_KNC3",docSidebarContainer:"docSidebarContainer_b9v0",docMainContainerEnhanced:"docMainContainerEnhanced_o6gk",docSidebarContainerHidden:"docSidebarContainerHidden_aCe0",collapsedDocSidebar:"collapsedDocSidebar_FpBj",expandSidebarButtonIcon:"expandSidebarButtonIcon_Jr11",docItemWrapperEnhanced:"docItemWrapperEnhanced_VfBr"},be=r(40757);function fe({currentDocRoute:e,versionMetadata:t,children:r,sidebarName:l}){const s=(0,i.Vq)(),{pluginId:d,version:u}=t,[m,p]=(0,n.useState)(!1),[b,y]=(0,n.useState)(!1),h=(0,n.useCallback)((()=>{b&&y(!1),p((e=>!e))}),[b]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:u,tag:(0,i.os)(d,u)}},n.createElement("div",{className:pe.docPage},n.createElement(ue,null),s&&n.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,pe.docSidebarContainer,{[pe.docSidebarContainerHidden]:m}),onTransitionEnd:e=>{e.currentTarget.classList.contains(pe.docSidebarContainer)&&m&&y(!0)}},n.createElement(le,{key:l,sidebar:s,path:e.path,onCollapse:h,isHidden:b}),b&&n.createElement("div",{className:pe.collapsedDocSidebar,title:(0,v.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,v.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:h,onClick:h},n.createElement(f,{className:pe.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(pe.docMainContainer,{[pe.docMainContainerEnhanced]:m||!s})},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,{[pe.docItemWrapperEnhanced]:m})},n.createElement(a.Zo,{components:oe.Z},r)))))}var ve=function(e){const{route:{routes:t},versionMetadata:r,location:a}=e,o=t.find((e=>(0,me.LX)(a.pathname,e)));if(!o)return n.createElement(ce.default,null);const c=o.sidebar,s=c?r.docsSidebars[c]:null;return n.createElement(n.Fragment,null,n.createElement(be.default,null,n.createElement("html",{className:r.className})),n.createElement(i.qu,{version:r},n.createElement(i.bT,{sidebar:s},n.createElement(fe,{currentDocRoute:o,versionMetadata:r,sidebarName:c},(0,l.Z)(t,{versionMetadata:r})))))}},7553:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(27378),a=r(38944),l=r(94157),o=r(46294),c="anchorWithStickyNavbar_yJdI",i="anchorWithHideOnScrollNavbar_tWSU",s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&f(e,r,t[r]);return e},y=(e,t)=>d(e,u(t)),h=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r};function E(e){var t=e,{as:r,id:s}=t,d=h(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,o.LU)();return s?n.createElement(r,y(v({},d),{className:(0,a.Z)("anchor",{[i]:u,[c]:!u}),id:s}),d.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(r,v({},d))}function g(e){var t=e,{as:r}=t,a=h(t,["as"]);return"h1"===r?n.createElement("h1",y(v({},a),{id:void 0}),a.children):n.createElement(E,v({as:r},a))}},31590:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(27378),a=r(40757),l=r(2411),o=r(42519),c=r(7553),i=r(38944),s=r(46294),d="details_IApO",u=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function h(e){var t,r,a=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&b)for(var n of b(e))t.indexOf(n)<0&&v.call(e,n)&&(r[n]=e[n]);return r})(e,[]);return n.createElement(s.PO,(t=((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e})({},a),r={className:(0,i.Z)("alert alert--info",d,a.className)},m(t,p(r))))}var E=Object.defineProperty,g=Object.defineProperties,O=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&_(e,r,t[r]);if(k)for(var r of k(t))C.call(t,r)&&_(e,r,t[r]);return e};function S(e){var t,r;if((null==(t=null==e?void 0:e.props)?void 0:t.mdxType)&&(null==(r=null==e?void 0:e.props)?void 0:r.originalType)){const t=e.props,{mdxType:r,originalType:a}=t,l=((e,t)=>{var r={};for(var n in e)P.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&C.call(e,n)&&(r[n]=e[n]);return r})(t,["mdxType","originalType"]);return n.createElement(e.props.originalType,l)}return e}var w={head:e=>{const t=n.Children.map(e.children,(e=>S(e)));return n.createElement(a.default,j({},e),t)},code:e=>n.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?n.createElement("code",j({},e)):n.createElement(o.Z,j({},e)),a:e=>n.createElement(l.default,j({},e)),pre:e=>{var t;return n.createElement(o.Z,j({},(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:j({},e)))},details:e=>{const t=n.Children.toArray(e.children),r=t.find((e=>{var t;return"summary"===(null==(t=null==e?void 0:e.props)?void 0:t.mdxType)})),a=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return n.createElement(h,(l=j({},e),g(l,O({summary:r}))),a);var l},h1:e=>n.createElement(c.Z,j({as:"h1"},e)),h2:e=>n.createElement(c.Z,j({as:"h2"},e)),h3:e=>n.createElement(c.Z,j({as:"h3"},e)),h4:e=>n.createElement(c.Z,j({as:"h4"},e)),h5:e=>n.createElement(c.Z,j({as:"h5"},e)),h6:e=>n.createElement(c.Z,j({as:"h6"},e))}},56789:function(e,t,r){r.r(t);var n=r(27378),a=r(93549),l=r(94157);t.default=function(){return n.createElement(a.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},89389:function(e,t,r){r.d(t,{v:function(){return m}});var n=r(70124),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&d(e,r,t[r]);return e};function m(e,t){return(0,n.v)(e,(r=u({},t),a={transforms:u({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)},l(r,o(a))));var r,a}},28316:function(e,t,r){r.r(t);var n=r(27378),a=r(14324);t.default=function({children:e,fallback:t}){return(0,a.Z)()?n.createElement(n.Fragment,null,e()):t||null}},42519:function(e,t,r){r.d(t,{Z:function(){return ge}});var n={};r.r(n),r.d(n,{ButtonExample:function(){return L}});var a=r(27378),l=r(40935),o=r(38944),c=r(94157),i=r(64324),s=r(28316),d=r(46294),u="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",p="playgroundEditor_TySg",b="playgroundPreview_mApW",f=r(14324),v=Object.defineProperty,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function O({children:e}){return a.createElement("div",{className:(0,o.Z)(m)},e)}function k(){return a.createElement("div",null,"Loading...")}function P(){return a.createElement(a.Fragment,null,a.createElement(O,null,a.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:b},a.createElement(s.default,{fallback:a.createElement(k,null)},(()=>a.createElement(a.Fragment,null,a.createElement(l.i5,null),a.createElement(l.IF,null))))))}function C(){const e=(0,f.Z)();return a.createElement(l.uz,{key:String(e),className:p})}function _(){return a.createElement(a.Fragment,null,a.createElement(O,null,a.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(C,null))}function j(e){var t=e,{children:r,transformCode:n}=t,o=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))t.indexOf(n)<0&&E.call(e,n)&&(r[n]=e[n]);return r})(t,["children","transformCode"]);const{siteConfig:{themeConfig:c}}=(0,i.default)(),{liveCodeBlock:{playgroundPosition:s}}=c,m=(0,d.pJ)();return a.createElement("div",{className:u},a.createElement(l.nu,((e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(y)for(var r of y(t))E.call(t,r)&&g(e,r,t[r]);return e})({code:r.replace(/\n$/,""),transformCode:n||(e=>`${e};`),theme:m},o),"top"===s?a.createElement(a.Fragment,null,a.createElement(P,null),a.createElement(_,null)):a.createElement(a.Fragment,null,a.createElement(_,null),a.createElement(P,null))))}var S=Object.defineProperty,w=Object.defineProperties,N=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&x(e,r,t[r]);if(I)for(var r of I(t))T.call(t,r)&&x(e,r,t[r]);return e};function L(e){return a.createElement("button",(t=M({type:"button"},e),r={style:M({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},w(t,N(r))));var t,r}var B=Object.defineProperty,A=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&H(e,r,t[r]);if(A)for(var r of A(t))D.call(t,r)&&H(e,r,t[r]);return e};var W=R(R({React:a},a),n),z=r(55620),U=r(39348),$="codeBlockContainer_RIuc",J="codeBlockContent_DOR6",V="codeBlockTitle_fLmC",Y="codeBlock_SvlJ",q="codeBlockStandalone_K_5i",G="copyButton_veCs",K="codeBlockLines_kiFP",X=Object.defineProperty,Q=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,ae=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,le=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&ae(e,r,t[r]);if(te)for(var r of te(t))ne.call(t,r)&&ae(e,r,t[r]);return e},oe=(e,t)=>Q(e,ee(t));var ce=Object.defineProperty,ie=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,me=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&ue(e,r,t[r]);if(ie)for(var r of ie(t))de.call(t,r)&&ue(e,r,t[r]);return e};var pe,be=(pe=function({children:e,className:t="",metastring:r,title:n,language:l}){var i;const{prism:s}=(0,d.LU)(),[u,m]=(0,a.useState)(!1),[p,b]=(0,a.useState)(!1);(0,a.useEffect)((()=>{b(!0)}),[]);const f=(0,d.bc)(r)||n,v=(0,d.pJ)();if(a.Children.toArray(e).some((e=>(0,a.isValidElement)(e))))return a.createElement(z.ZP,oe(le({},z.lG),{key:String(p),theme:v,code:"",language:"text"}),(({className:r,style:n})=>a.createElement("pre",{tabIndex:0,className:(0,o.Z)(r,q,"thin-scrollbar",$,t,d.kM.common.codeBlock),style:n},a.createElement("code",{className:K},e))));const y=Array.isArray(e)?e.join(""):e,h=null!=(i=null!=l?l:(0,d.Vo)(t))?i:s.defaultLanguage,{highlightLines:E,code:g}=(0,d.nZ)(y,r,h),O=()=>{(0,U.Z)(g),m(!0),setTimeout((()=>m(!1)),2e3)};return a.createElement(z.ZP,oe(le({},z.lG),{key:String(p),theme:v,code:g,language:null!=h?h:"text"}),(({className:e,style:r,tokens:n,getLineProps:l,getTokenProps:i})=>a.createElement("div",{className:(0,o.Z)($,t,{[`language-${h}`]:h&&!t.includes(`language-${h}`)},d.kM.common.codeBlock)},f&&a.createElement("div",{style:r,className:V},f),a.createElement("div",{className:(0,o.Z)(J,h)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(e,Y,"thin-scrollbar"),style:r},a.createElement("code",{className:K},n.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const r=l({line:e,key:t});return E.includes(t)&&(r.className+=" docusaurus-highlight-code-line"),a.createElement("span",le({key:t},r),e.map(((e,t)=>a.createElement("span",le({key:t},i({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(G,"clean-btn"),onClick:O},u?a.createElement(c.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(c.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))},function(e){return e.live?a.createElement(j,me({scope:W},e)):a.createElement(pe,me({},e))}),fe=Object.defineProperty,ve=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,Ee=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function ge(e){return a.createElement(be,((e,t)=>{for(var r in t||(t={}))ye.call(t,r)&&Ee(e,r,t[r]);if(ve)for(var r of ve(t))he.call(t,r)&&Ee(e,r,t[r]);return e})({},e))}}}]);