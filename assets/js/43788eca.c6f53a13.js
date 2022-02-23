"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8242:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return m},default:function(){return v}});var n=r(35318),i=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e};const p={id:"browser-authentication",title:"Browser Authentication",description:"How browser authentication works"},h=void 0,f={unversionedId:"tls/browser-authentication",id:"version-2.0.0-beta.16/tls/browser-authentication",title:"Browser Authentication",description:"How browser authentication works",source:"@site/versioned_docs/version-2.0.0-beta.16/tls/browser-authentication.md",sourceDirName:"tls",slug:"/tls/browser-authentication",permalink:"/docs/tls/browser-authentication",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/tls/browser-authentication.md",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"browser-authentication",title:"Browser Authentication",description:"How browser authentication works"},sidebar:"tls",previous:{title:"Openssl Server",permalink:"/docs/tls/openssl-server"},next:{title:"Mutual Authentication",permalink:"/docs/tls/mutual-authentication"}},m=[{value:"Generate server certificate",id:"generate-server-certificate",children:[],level:2},{value:"Create a webpage",id:"create-a-webpage",children:[],level:2},{value:"Start openssl server",id:"start-openssl-server",children:[],level:2},{value:"Send request",id:"send-request",children:[],level:2},{value:"Add server cert in the manager",id:"add-server-cert-in-the-manager",children:[],level:2},{value:"index.html loaded",id:"indexhtml-loaded",children:[],level:2},{value:"souce code",id:"souce-code",children:[],level:2}],b={toc:m};function v(e){var t,i=e,{components:u}=i,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),p),a(t,s({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"openssl",src:r(3638).Z,width:"623",height:"141"})),(0,n.kt)("p",null,"This lab to show you how authority of web browser works."),(0,n.kt)("h2",d({},{id:"generate-server-certificate"}),"Generate server certificate"),(0,n.kt)("p",null,"We will create the CA and server certificate which key type is rsa:4096. The detailed ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpensslCertificateVerify/browser-authentication"}),"source code")," have been push to github. Please star it when helpful. The CA and server certificates will generate after you run the ",(0,n.kt)("strong",{parentName:"p"},"gen.sh"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'# 1. Generate server CA\'s private key and self-signed certificate\nopenssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca.cert -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext\n\necho "Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\n\n# 4. To verify the server certificate aginst by root CA\necho "server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\n\n')),(0,n.kt)("h2",d({},{id:"create-a-webpage"}),"Create a webpage"),(0,n.kt)("p",null,"In the github repository, there is a index.html file in the same directory as gen.sh. The webpage will be loaded when browser send a request from server."),(0,n.kt)("h2",d({},{id:"start-openssl-server"}),"Start openssl server"),(0,n.kt)("p",null,"To make a simple server, we can use openssl s_server command which implements a generic SSL/TLS server which listens for connections on a given port using SSL/TLS. Please issue the following command to start a TLS server."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"openssl s_server -accept 20000 -cert server.cert -key server.key  -WWW -debug -tlsextdebug\n")),(0,n.kt)("p",null,"The useful options in this command:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"accept: the optional TCP host and port to listen on for connections. If not specified, ","*",":4433 is used."),(0,n.kt)("li",{parentName:"ul"},"cert and key: the certificate and key of server are required, which have generated by gen.sh"),(0,n.kt)("li",{parentName:"ul"},"WWW: Emulates a simple web server. It is very useful. The pages will be resolved relative to the current directory, for example if the URL https://localhost:20000/index.html is requested the file ./index.html will be loaded."),(0,n.kt)("li",{parentName:"ul"},"debug and tlsextdebug: to show the detailed dump information of all traffic.")),(0,n.kt)("h2",d({},{id:"send-request"}),"Send request"),(0,n.kt)("p",null,"After server started successfully, we can use browser to send a request as following."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"https://localhost:20000/index.html\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But security risk warning occur.")," Because its certificate issuer is unknow and the server certificate created by ourself is not trusted by browser. ",(0,n.kt)("img",{loading:"lazy",alt:"firefox-security-warning",src:r(42303).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"There are two ways to open the index"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Advanced...")," buttom and ",(0,n.kt)("strong",{parentName:"li"},"Accept the Risk and Continue")),(0,n.kt)("li",{parentName:"ul"},"Add the CA certificate which sign the server certificate in the certificate manager of browser.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"After CA ceritificate added in the manager, the browser will trust all the server's certificate which signed by the CA's.")),(0,n.kt)("h2",d({},{id:"add-server-cert-in-the-manager"}),"Add server cert in the manager"),(0,n.kt)("p",null,"You can found the certificate manager is located at ",(0,n.kt)("strong",{parentName:"p"},"about:preferences#privacy")," in the firefox. And import the CA's cert to the manager. ",(0,n.kt)("img",{loading:"lazy",alt:"firefox-security-warning",src:r(95763).Z,width:"975",height:"606"})),(0,n.kt)("h2",d({},{id:"indexhtml-loaded"}),"index.html loaded"),(0,n.kt)("p",null,"There is ",(0,n.kt)("strong",{parentName:"p"},"Hello World")," in the webpage."),(0,n.kt)("h2",d({},{id:"souce-code"}),"souce code"),(0,n.kt)("p",null,"The detailed ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/browser-authentication"}),"source code")," have been push to github. Please star it when helpful."))}v.isMDXComponent=!0},95763:function(e,t,r){t.Z=r.p+"assets/images/firefox-certificate-manager-e23623ff1b4afa3c3b4472c120195b4c.png"},42303:function(e,t,r){t.Z=r.p+"assets/images/firefox-security-warning-4916137e0328cdb63b5560e1e7c286b1.png"},3638:function(e,t,r){t.Z=r.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);