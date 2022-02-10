"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59793],{35318:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?a.createElement(y,o(o({ref:t},h),{},{components:r})):a.createElement(y,o({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87168:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return y},toc:function(){return m},default:function(){return w}});var a=r(35318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&h(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&h(e,r,t[r]);return e};const u={id:"ssl-tls-overview",title:"TLS Overview",description:"Overview of SSL/TLS and its cryptographic system"},d=void 0,y={unversionedId:"tls/ssl-tls-overview",id:"tls/ssl-tls-overview",title:"TLS Overview",description:"Overview of SSL/TLS and its cryptographic system",source:"@site/docs/tls/ssl-tls-overview.md",sourceDirName:"tls",slug:"/tls/ssl-tls-overview",permalink:"/zh-CN/docs/next/tls/ssl-tls-overview",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644458553,formattedLastUpdatedAt:"2022/2/10",frontMatter:{id:"ssl-tls-overview",title:"TLS Overview",description:"Overview of SSL/TLS and its cryptographic system"},sidebar:"tls",next:{title:"Symmetric Cryptography",permalink:"/zh-CN/docs/next/tls/symmetric-cryptography"}},m=[{value:"What is SSL/TLS?",id:"what-is-ssltls",children:[],level:2},{value:"The history of SSL/TLS",id:"the-history-of-ssltls",children:[],level:2},{value:"Where is TLS being used?",id:"where-is-tls-being-used",children:[],level:2},{value:"Why do we need TLS?",id:"why-do-we-need-tls",children:[],level:2},{value:"How does TLS work?",id:"how-does-tls-work",children:[],level:2},{value:"Why TLS uses both symmetric and asymmetric cryptography?",id:"why-tls-uses-both-symmetric-and-asymmetric-cryptography",children:[],level:2}],f={toc:m};function w(e){var t,n=e,{components:h}=n,u=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},f),u),i(t,o({components:h,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"}),"TECHSCHOOL"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"tls-overview",src:r(33539).Z,width:"1000",height:"420"}),"\nI guess many of you know about HTTPS and some of you may have setup SSL/TLS for your web server. But how many of you understand deeply how SSL/TLS works? Do you know:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What really happens during a TLS handshake?"),(0,a.kt)("li",{parentName:"ul"},"What cryptographic algorithms are used by TLS to protect the data?"),(0,a.kt)("li",{parentName:"ul"},"How do client and server exchange secret keys?"),(0,a.kt)("li",{parentName:"ul"},"How Diffie-Hellman Ephemeral key exchange works?"),(0,a.kt)("li",{parentName:"ul"},"Why do we need a digital certificate?"),(0,a.kt)("li",{parentName:"ul"},"Why does it need to be signed by a certificate authority?"),(0,a.kt)("li",{parentName:"ul"},"What is a digital signature? How is it signed and verified?"),(0,a.kt)("li",{parentName:"ul"},"What perfect forward secrecy means?"),(0,a.kt)("li",{parentName:"ul"},"How AEAD, MAC, HKDF, 0-RTT works?"),(0,a.kt)("li",{parentName:"ul"},"What is Elliptic-Curve cryptography?"),(0,a.kt)("li",{parentName:"ul"},"What's new in TLS 1.3 compared to TLS 1.2?")),(0,a.kt)("p",null,"There are a lot of questions, and I don't want to just scratch the surface. So this is gonna be a very thorough article to tell you everything about SSL/TLS, an extremely important building block of the security over the internet."),(0,a.kt)("h2",p({},{id:"what-is-ssltls"}),"What is SSL/TLS?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"what-is-TLS",src:r(45669).Z,width:"880",height:"495"}),"\nSSL stands for Secure Socket Layer. It is the predecessor of TLS.TLS the short form of Transport Layer Security, which is a cryptographic protocol that provides secure communication over a computer network."),(0,a.kt)("h2",p({},{id:"the-history-of-ssltls"}),"The history of SSL/TLS"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"tls-history",src:r(95032).Z,width:"880",height:"495"}),"\nHere's a bit of the history of SSL and TLS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SSL was originally developed by Netscape, and it was first published in 1995 with version 2.0"),(0,a.kt)("li",{parentName:"ol"},"SSL version 1.0 was never publicly released because of some serious security flaws."),(0,a.kt)("li",{parentName:"ol"},"In 1996, the SSL version 3.0 was published as a complete redesign of the protocol."),(0,a.kt)("li",{parentName:"ol"},"Then 3 years later, TLS 1.0 was first defined in RFC 2246 by IETF as an upgrade of SSL Version 3.0"),(0,a.kt)("li",{parentName:"ol"},"It took 7 years to upgrade it to TLS 1.1 in 2006"),(0,a.kt)("li",{parentName:"ol"},"TLS 1.2 came right after that in 2008."),(0,a.kt)("li",{parentName:"ol"},"Then finally after 10 years in the making, we got TLS 1.3 with a huge improvements in 2018.")),(0,a.kt)("p",null,"So at the moment which SSL/TLS version still exist?\nThe SSL 2.0 was deprecated in 2011\nSSL 3.0 was deprecated in 2015\nAnd recently, in March 2020, TLS 1.0 and TLS 1.1 was also gone. That means only TLS 1.2 and 1.3 are still active."),(0,a.kt)("h2",p({},{id:"where-is-tls-being-used"}),"Where is TLS being used?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"where-used",src:r(18688).Z,width:"880",height:"495"}),"\nFirst, it is widely used on the web. All websites that you visit with HTTPS are secured by TLS, or we often say HTTP over TLS.\nSimilarly, email with SMTPS protocol is in fact SMTP and TLS.\nThen FTPS for secure file transfer protocol is also FTP plus TLS.\nAnd there are many other applications of TLS that I don\u2019t have enough time to mention."),(0,a.kt)("h2",p({},{id:"why-do-we-need-tls"}),"Why do we need TLS?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"why-required",src:r(63272).Z,width:"880",height:"495"}),"\nBecause TLS gives us 3 things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentication",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TLS verifies the identity of the communicating parties, which normally be clients and servers. "),(0,a.kt)("li",{parentName:"ul"},"With the help of asymmetric cryptography, TLS makes sure that we will go to the authentic website, and not a fake one."))),(0,a.kt)("li",{parentName:"ul"},"Confidentiality",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TLS protects the exchanged data from unauthorized access by encrypting it with symmetric encryption algorithms."))),(0,a.kt)("li",{parentName:"ul"},"Integrity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TLS recognizes any alteration of data during transmission by checking the message authentication code, which we will learn about in a moment.")))),(0,a.kt)("h2",p({},{id:"how-does-tls-work"}),"How does TLS work?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"how-it-works",src:r(29929).Z,width:"880",height:"495"}),"\nBasically, TLS consists of 2 phases, or 2 protocols:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handshake protocol. In this phase, the client and server will:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Negotiate the protocol version"),(0,a.kt)("li",{parentName:"ul"},"Select cryptographic algorithm (or cipher suites)"),(0,a.kt)("li",{parentName:"ul"},"Authenticate each other by asymmetric cryptography"),(0,a.kt)("li",{parentName:"ul"},"Establish a shared secret key that will be used for symmetric encryption in the next phase.\nSo the main purpose of the handshake is for authentication and key exchange."))),(0,a.kt)("li",{parentName:"ul"},"Record protocol. In this phase:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All outgoing messages will be encrypted with the shared secret key established in the handshake."),(0,a.kt)("li",{parentName:"ul"},"Then the encrypted messages are transmited to the other side."),(0,a.kt)("li",{parentName:"ul"},"They will be verified to see if there\u2019s any modification during transmission or not."),(0,a.kt)("li",{parentName:"ul"},"If not, the messages will be decrypted with the same symmetric secret key.\nSo we will achieve both confidentiality and integrity in this record protocol. And because the amount of encrypted data in this phase is large, this is often called bulk encryption.")))),(0,a.kt)("h2",p({},{id:"why-tls-uses-both-symmetric-and-asymmetric-cryptography"}),"Why TLS uses both symmetric and asymmetric cryptography?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"sym and asym",src:r(76266).Z,width:"880",height:"495"}),"\nWhy not just use one for all purposes?\nWell, it\u2019s easy to see that symmetric cryptography can\u2019t provide authentication. Since there\u2019s only 1 secret key for both client and server, they know nothing about each other to verify. Not to mention that how they come up with the same key without leaking it to the public is hard.\nHow about asymmetric cryptography? Sounds like a good candidate. Unfortunately, it\u2019s much slower than symmetric cryptography. And by \u201cmuch\u201d, I mean from 100 times to even 10000 times slower. So it\u2019s clearly not suitable for bulk encryption."))}w.isMDXComponent=!0},29929:function(e,t,r){t.Z=r.p+"assets/images/how-it-works-9d78b0f6846ac577410d9dcd98136757.png"},76266:function(e,t,r){t.Z=r.p+"assets/images/sym-asym-97c4b21e900461a33378e48e742df3b0.png"},95032:function(e,t,r){t.Z=r.p+"assets/images/tls-history-8ffeafacf14fe0b848e7a0143a98600b.png"},33539:function(e,t,r){t.Z=r.p+"assets/images/tls-overview-467d2ab845731258061e6b3316d91104.webp"},45669:function(e,t,r){t.Z=r.p+"assets/images/what-is-tls-74d570f3a97bdfa083926bd7bafa65a8.png"},18688:function(e,t,r){t.Z=r.p+"assets/images/where-used-0f7a70f6c8dd42c14fccb794fc78820d.png"},63272:function(e,t,r){t.Z=r.p+"assets/images/why-required-50845727e993919c5dbb9aebe14dd6f5.png"}}]);