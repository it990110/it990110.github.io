"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75811],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||y[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e};const h={id:"public-key-cryptography",title:"Public Key Cryptography",description:"Overview of hash functionPublic Key Cryptography"},u=void 0,m={unversionedId:"tls/public-key-cryptography",id:"tls/public-key-cryptography",title:"Public Key Cryptography",description:"Overview of hash functionPublic Key Cryptography",source:"@site/docs/tls/public-key-cryptography.md",sourceDirName:"tls",slug:"/tls/public-key-cryptography",permalink:"/zh-CN/docs/next/tls/public-key-cryptography",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{id:"public-key-cryptography",title:"Public Key Cryptography",description:"Overview of hash functionPublic Key Cryptography"},sidebar:"tls",previous:{title:"Hash Function",permalink:"/zh-CN/docs/next/tls/hash-function"},next:{title:"TLS Overview",permalink:"/zh-CN/docs/next/tls/ssl-tls-overview"}},d=[{value:"Key Generation",id:"key-generation",children:[],level:2},{value:"Asymmetric Key Encryption",id:"asymmetric-key-encryption",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Key Exchange",id:"key-exchange",children:[],level:2}],f={toc:d};function g(e){var t,a=e,{components:p}=a,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=y(y({},f),h),i(t,o({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys. Each pair consists of a public key (which may be known to others) and a private key (which may not be known by anyone except the owner). The generation of such key pairs depends on cryptographic algorithms which are based on mathematical problems termed one-way functions. ash function are called hash values, hash codes, digests, or simply hashes. "),(0,r.kt)("h2",y({},{id:"key-generation"}),"Key Generation"),(0,r.kt)("p",null,"An unpredictable (typically large and random) number is used to begin generation of an acceptable pair of keys suitable for use by an asymmetric key algorithm."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"key-generation",src:n(38788).Z,width:"800",height:"800"})),(0,r.kt)("h2",y({},{id:"asymmetric-key-encryption"}),"Asymmetric Key Encryption"),(0,r.kt)("p",null,"In an asymmetric key encryption scheme, anyone can encrypt messages using a public key, but only the holder of the paired private key can decrypt such a message. The security of the system depends on the secrecy of the private key, which must not become known to any other."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"encryption",src:n(13223).Z,width:"800",height:"782"})),(0,r.kt)("h2",y({},{id:"authentication"}),"Authentication"),(0,r.kt)("p",null,"With public-key cryptography, robust authentication is also possible. A sender can combine a message with a private key to create a short digital signature on the message. Anyone with the sender's corresponding public key can combine that message with a claimed digital signature; if the signature matches the message, the origin of the message is verified"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"authentication",src:n(16264).Z,width:"800",height:"782"})),(0,r.kt)("h2",y({},{id:"key-exchange"}),"Key Exchange"),(0,r.kt)("div",y({},{className:"admonition admonition-tip alert alert--success"}),(0,r.kt)("div",y({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",y({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",y({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,r.kt)("path",y({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,r.kt)("div",y({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Why key exchange required?")),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"The performance of encryption with public key is much less than with symmetric key."),(0,r.kt)("li",{parentName:"ol"},"The symetric key will be leaked when it send out from Internet."),(0,r.kt)("li",{parentName:"ol"},"The algorithm or protocol is required to obtain the symetric key safely.")))),(0,r.kt)("p",null,"In the Diffie\u2013Hellman key exchange scheme, each party generates a public/private key pair and distributes the public key of the pair. After obtaining an authentic (n.b., this is critical) copy of each other's public keys, Alice and Bob can compute a shared secret offline. The shared secret can be used, for instance, as the key for a symmetric cipher which will be, in essentially all cases, much faster."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"key exchange",src:n(54893).Z,width:"800",height:"895"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reference 1: ",(0,r.kt)("a",y({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Public-key_cryptography"}),"Cryptographic Hash Functions"),".")))}g.isMDXComponent=!0},16264:function(e,t,n){t.Z=n.p+"assets/images/authentication-c82ba4248fe7d68e852b01b517d92cbc.png"},13223:function(e,t,n){t.Z=n.p+"assets/images/encryption-feb95871788984b989f7e523683830e9.png"},54893:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-simple-80fe5c937517ebac763a242ab4432eaf.png"},38788:function(e,t,n){t.Z=n.p+"assets/images/key-generation-e98d72e59a1fa04d04276af6ccd9b4a0.png"}}]);