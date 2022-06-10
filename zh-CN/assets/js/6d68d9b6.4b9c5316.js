"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88049],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||h[f]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return f},metadata:function(){return d},toc:function(){return y},default:function(){return m}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&u(e,n,t[n]);return e};const p={id:"mutual-authentication",title:"Mutual Authentication",description:"How one-way and two-way(mutual) handshake works"},f=void 0,d={unversionedId:"tls/mutual-authentication",id:"version-2.0.0-beta.16/tls/mutual-authentication",title:"Mutual Authentication",description:"How one-way and two-way(mutual) handshake works",source:"@site/versioned_docs/version-2.0.0-beta.16/tls/mutual-authentication.md",sourceDirName:"tls",slug:"/tls/mutual-authentication",permalink:"/zh-CN/docs/tls/mutual-authentication",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{id:"mutual-authentication",title:"Mutual Authentication",description:"How one-way and two-way(mutual) handshake works"},sidebar:"tls",previous:{title:"Browser Authentication",permalink:"/zh-CN/docs/tls/browser-authentication"},next:{title:"gRPC Auth Labs",permalink:"/zh-CN/docs/tls/grpc-auth-labs"}},y=[{value:"one-way authentication",id:"one-way-authentication",children:[],level:2},{value:"two-way authentication",id:"two-way-authentication",children:[],level:2}],w={toc:y};function m(e){var t,r=e,{components:u}=r,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},w),p),i(t,o({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"mutual-auth",src:n(13886).Z,width:"474",height:"266"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How one-way or server authentication works?"),(0,a.kt)("li",{parentName:"ul"},"How two-way(mutual) and client authentication works?")),(0,a.kt)("h2",h({},{id:"one-way-authentication"}),"one-way authentication"),(0,a.kt)("p",null,"In one way SSL, only client validates the server to ensure that it receives data from the intended server. For implementing one-way SSL, server shares its public certificate with the clients. Below is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of one-way SSL:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client requests for some protected data from the server on HTTPS protocol. This initiates SSL/TLS handshake process."),(0,a.kt)("li",{parentName:"ol"},"Server returns its public certificate to the client along with server hello message."),(0,a.kt)("li",{parentName:"ol"},"Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates."),(0,a.kt)("li",{parentName:"ol"},"SSL/TLS client sends ",(0,a.kt)("strong",{parentName:"li"},"the random byte string")," that enables both the client and the server to compute the secret key to be used for encrypting subsequent message data. The random byte string itself is encrypted with the server\u2019s public key."),(0,a.kt)("li",{parentName:"ol"},"After agreeing on this secret key, client and server communicate further for actual data transfer by encrypting/decrypting data using this key.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"one-way",src:n(59419).Z,width:"998",height:"420"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"one-way authentication usually means server authentication (only server certificates are used to authenticate the identity of a server). When installed on a website, an server certificate turns the protocol on the website from HTTP to HTTPS and installs indicators that vouch for the authenticity of the website. ",(0,a.kt)("a",h({parentName:"p"},{href:"browser-authentication"}),"you can follow our guide to setting up https server with openssl on your local machine"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For one-way authentication labs, you also can setting up ",(0,a.kt)("a",h({parentName:"p"},{href:"grpc-auth-labs"}),"grpc server")," only with server(one-way) authentication.")),(0,a.kt)("h2",h({},{id:"two-way-authentication"}),"two-way authentication"),(0,a.kt)("p",null,"Contrary to one-way SSL; in case of two-way SSL, both client and server authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates to each other and then verification/validation is performed based on that."),(0,a.kt)("p",null,"Below is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of two-way SSL:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client requests a protected resource over HTTPS protocol and the SSL/TSL handshake process begins."),(0,a.kt)("li",{parentName:"ol"},"Server returns its public certificate to the client along with server hello."),(0,a.kt)("li",{parentName:"ol"},"Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates."),(0,a.kt)("li",{parentName:"ol"},"If Server certificate was validated successfully, client will provide its public certificate to the server."),(0,a.kt)("li",{parentName:"ol"},"Server validates/verifies the received certificate. Server verifies the certificate through certification authority (CA) for CA signed certificates."),(0,a.kt)("li",{parentName:"ol"},"After completion of handshake process, client and server communicate and transfer data with each other encrypted with the secret keys shared between the two during handshake.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"two-way",src:n(7885).Z,width:"1154",height:"420"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"two-way authentication usually means client authentication (not only server but also client certificates are used to identify the client and server each other). For one-way authentication labs, you can setting up ",(0,a.kt)("a",h({parentName:"p"},{href:"grpc-auth-labs"}),"grpc server")," only with client(two-way) authentication.")),(0,a.kt)("p",null,"Reference:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",h({parentName:"li"},{href:"https://howhttps.works/"}),"An funny way to show you how HTTPS works")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",h({parentName:"li"},{href:"https://cheapsslsecurity.com/blog/client-certificate-vs-server-certificate-simplifying-the-difference/"}),"The differences between Client certificates and Server certificates")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",h({parentName:"li"},{href:"https://tutorialspedia.com/an-overview-of-one-way-ssl-and-two-way-ssl/"}),"An Overview of One-Way SSL and Two-Way SSL"))))}m.isMDXComponent=!0},13886:function(e,t,n){t.Z=n.p+"assets/images/mutual-auth-fbf8eb751f03e95dcc488d3e716d658b.jpeg"},59419:function(e,t,n){t.Z=n.p+"assets/images/one-way-962f619d26fada9fb60c981a302c9bd8.png"},7885:function(e,t,n){t.Z=n.p+"assets/images/two-way-24d2a379115c9401589e10c671b30f5c.png"}}]);