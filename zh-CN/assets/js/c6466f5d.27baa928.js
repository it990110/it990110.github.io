"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50168],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,v=d["".concat(o,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68799:function(e,t,r){var n=r(27378),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;t.Z=function({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},80673:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(27378),a=r(14324),s=r(46294),i=r(38944),l="tabItem_Ocg6",o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&v(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&v(e,r,t[r]);return e};function f(e){var t,r,a;const{lazy:o,block:p,defaultValue:d,values:h,groupId:v,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=h?h:y.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),b=(0,s.lx)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:null!=(a=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=y[0])?void 0:r.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:S}=(0,s.UB)(),[T,N]=(0,n.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=v){const e=w[v];null!=e&&e!==T&&k.some((t=>t.value===e))&&N(e)}const A=e=>{const t=e.currentTarget,r=C.indexOf(t),n=k[r].value;n!==T&&(O(t),N(n),null!=v&&S(v,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break}case"ArrowLeft":{const r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=m({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>C.push(e),onKeyDown:j,onFocus:A,onClick:A},r),s={className:(0,i.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":T===e})},c(a,u(s))),null!=t?t:e);var a,s}))),o?(0,n.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function y(e){const t=(0,a.Z)();return n.createElement(f,m({key:String(t)},e))}},92730:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return v},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return y},default:function(){return b}});var n=r(35318),a=r(80673),s=r(68799),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&d(e,r,t[r]);return e};const v={id:"grpc-auth-labs",title:"gRPC Auth Labs",description:"How to set up grpc authentication server"},m=void 0,f={unversionedId:"tls/grpc-auth-labs",id:"tls/grpc-auth-labs",title:"gRPC Auth Labs",description:"How to set up grpc authentication server",source:"@site/docs/tls/grpc-auth-labs.md",sourceDirName:"tls",slug:"/tls/grpc-auth-labs",permalink:"/zh-CN/docs/next/tls/grpc-auth-labs",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2022/2/23",frontMatter:{id:"grpc-auth-labs",title:"gRPC Auth Labs",description:"How to set up grpc authentication server"},sidebar:"tls",previous:{title:"Mutual Authentication",permalink:"/zh-CN/docs/next/tls/mutual-authentication"},next:{title:"Node Mutual Auth",permalink:"/zh-CN/docs/next/tls/node-mutual-auth"}},y=[{value:"Generate CA and server certificates",id:"generate-ca-and-server-certificates",children:[],level:2},{value:"Implement server-side TLS",id:"implement-server-side-tls",children:[],level:2},{value:"Start client connection",id:"start-client-connection",children:[],level:2},{value:"Subject Alternative Name (SAN)",id:"subject-alternative-name-san",children:[],level:2},{value:"Implement mutual TLS",id:"implement-mutual-tls",children:[],level:2},{value:"Private key passphrase",id:"private-key-passphrase",children:[],level:2}],k={toc:y};function b(e){var t,i=e,{components:d}=i,v=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),v),l(t,o({components:d,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Copyright: the following content is adapt from the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://dev.to/techschoolguru/how-to-secure-grpc-connection-with-ssl-tls-in-go-4ph"}),"TECHSCHOOL"),".")),(0,n.kt)("p",null,"In the previous lecture, we have learned how ",(0,n.kt)("a",h({parentName:"p"},{href:"mutual-authentication"}),"mutual authentication works"),"."),(0,n.kt)("p",null,"Today we will learn how to secure the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://grpc.io/docs/guides/auth/#nodejs"}),"gRPC connection using TLS"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"grpc",src:r(71694).Z,width:"552",height:"327"})),(0,n.kt)("p",null,"If you haven\u2019t read my post about SSL/TLS. I highly recommend you to read it first to have a deep understanding about TLS before continue."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"ssl-tls-overview"}),"Overview of SSL/TLS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"symmetric-cryptography"}),"Symmetric Cryptography")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"asymmetric-cryptography"}),"Asymmetric Cryptography")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"tls-handshake"}),"TLS Handshake"))),(0,n.kt)("p",null,"Here's the link to the full gRPC course playlist on Youtube\nGithub repository: pcbook-go and pcbook-java\nGitlab repository: pcbook-go and pcbook-java\nTypes of gRPC connections"),(0,n.kt)("p",null,"There are 3 types of gRPC connections:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"grpc-connection-types",src:r(90436).Z,width:"880",height:"495"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first one is insecure connection, which we\u2019ve been using since the beginning of this course. In this connection, all data transfered between client and server is not encrypted. So please don\u2019t use it in production!"),(0,n.kt)("li",{parentName:"ul"},"The second type is connection secured by server-side TLS. In this case, all the data is encrypted, but only the server needs to provide its TLS certificate to the client. You can use this type of connection if the server doesn\u2019t care which client is calling its API."),(0,n.kt)("li",{parentName:"ul"},"The third and strongest type is connection secured by mutual TLS. We use it when the server also needs to verify who\u2019s calling its services. So in this case, both client and server must provide their TLS certificates to the other.")),(0,n.kt)("p",null,"In this article, we will learn to implement both server-side and mutual TLS in node. So let\u2019s get started!\nGenerate TLS certificates."),(0,n.kt)("h2",h({},{id:"generate-ca-and-server-certificates"}),"Generate CA and server certificates"),(0,n.kt)("p",null,"First we write the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/credentials/gen.sh"}),"gen.sh")," script to generate TLS certificates."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-shell"}),'# 1. Generate server CA\'s private key and self-signed certificate\nopenssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca.cert -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server-ext.cnf\n\necho "Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\n\n# 4. To verify the server certificate aginst by root CA\necho "server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\n')),(0,n.kt)("p",null,"I encourage you to read my post about ",(0,n.kt)("a",h({parentName:"p"},{href:"create-certificates"}),"how to create and sign TLS certificate")," to understand how this script works."),(0,n.kt)("p",null,"Basically this script contains 3 parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First, generate CA\u2019s private key and its self-signed certificate."),(0,n.kt)("li",{parentName:"ul"},"Second, create web server\u2019s private key and CSR."),(0,n.kt)("li",{parentName:"ul"},"And third, use CA\u2019s private key to sign the web server\u2019s CSR and get back its certificate.")),(0,n.kt)("p",null,"The generated files that we care about in this lab are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The CA\u2019s certificate,"),(0,n.kt)("li",{parentName:"ul"},"The CA\u2019s private key,"),(0,n.kt)("li",{parentName:"ul"},"The server\u2019s certificate,"),(0,n.kt)("li",{parentName:"ul"},"And the server\u2019s private key.")),(0,n.kt)("h2",h({},{id:"implement-server-side-tls"}),"Implement server-side TLS"),(0,n.kt)("p",null,"Next step, I will show you how to secure our gRPC connection with server-side TLS."),(0,n.kt)("p",null,"Let\u2019s open ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/greeter_server.js"}),"greeter_server.js")," file. I will add ca and server certificates and sever private key to create TLS credentials."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Insecure",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"function main() {\n  var server = new grpc.Server();\n  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});\n  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {\n    server.start();\n  });\n}\n"))),(0,n.kt)(s.Z,{value:"Server-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"function main() {\n  var server = new grpc.Server();\n\n  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});\n  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(\n    fs.readFileSync('./credentials/ca.cert'),\n    [{\n        cert_chain: fs.readFileSync('./credentials/server.cert'),\n        private_key: fs.readFileSync('./credentials/server.key')\n    }],\n    false\n  ), () => {\n    server.start();\n  });\n}\n")))),(0,n.kt)("p",null,"Now we can start the server:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-shell"}),"npm install\nnode greeter_server.js\n")),(0,n.kt)("h2",h({},{id:"start-client-connection"}),"Start client connection"),(0,n.kt)("p",null,"After the server started, the client will try to connect with insecure function. But it failed because we haven\u2019t enabled TLS on the client side yet. So let\u2019s do that!"),(0,n.kt)("p",null,"Similar to what we did on the server, I also add a function to load TLS credentials from files. But this time, we only need to load the certificate of the CA who signed the server\u2019s certificate."),(0,n.kt)("p",null,"The reason is, client needs to make sure that it\u2019s the right server it wants to talk to. So server's cert will be verified against the CA's cert and the CA should be trusted by client."),(0,n.kt)("p",null,"Let\u2019s open ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/greeter_client.js"}),"greeter_client.js")," file and add the trusted ca certificates to client."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Insecure",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"var client = new hello_proto.Greeter(target,\n            grpc.credentials.createInsecure());\n"))),(0,n.kt)(s.Z,{value:"Server-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"var client = new hello_proto.Greeter(target,\n            grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert')));\n")))),(0,n.kt)("p",null,"So here we load the ca.cert file. Note that we only need to set the RootCAs field, which contains the trusted CA\u2019s certificate."),(0,n.kt)("p",null,"And we\u2019re done. Let\u2019s try it out!"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-shell"}),"node greeter_client.js\n")),(0,n.kt)("p",null,"This time the requests are successfully sent to the server. Perfect!"),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/img/GettingStartedCongratulations.png",width:"150"})),(0,n.kt)("h2",h({},{id:"subject-alternative-name-san"}),"Subject Alternative Name (SAN)"),(0,n.kt)("p",null,"There\u2019s 1 thing I want to show you here. Remember that when we develop on localhost, It\u2019s important to add the IP:0.0.0.0 as an Subject Alternative Name (SAN) extension to the certificate."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"xIP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0\n"))),(0,n.kt)(s.Z,{value:"wzIP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org\n")))),(0,n.kt)("p",null,"Let\u2019s see what will happen if we remove this from the server.ext config file."),(0,n.kt)("p",null,"Then regenerate the certificates, restart the server, and run the client again."),(0,n.kt)("p",null,"As you can see, there\u2019s an error saying that the TLS handshake failed because it cannot validate the certificate for 0.0.0.0, since the SAN doesn\u2019t contain this IP address."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"(node:9199) ","[DEP0123]"," DeprecationWarning: Setting the TLS ServerName to an IP address is not permitted by RFC 6066. This will be ignored in a future version.")),(0,n.kt)("p",null,"On production, it will be OK because we use domain names instead."),(0,n.kt)("p",null,"Alright, so now you know how to enable server-side TLS for your gRPC connection. Let\u2019s learn how to enable mutual TLS!"),(0,n.kt)("h2",h({},{id:"implement-mutual-tls"}),"Implement mutual TLS"),(0,n.kt)("p",null,"At the moment, the server has already shared its certificate with the client. For mutual TLS, the client also has to share its certificate with the server. So now let\u2019s update this ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/gen.sh"}),"gen.sh")," script to create and sign a certificate for the client."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-shell"}),'# 4. Generate client\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout client.key -out client.req -subj "/CN=localhost/emailAddress=client@gmail.com"\n\n# 5. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert\n\necho "Client and Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\nopenssl x509 -in client.cert -noout -text\n\n# 6. To verify the server certificate aginst by root CA\necho "Client and server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\nopenssl verify -show_chain -CAfile ca.cert client.cert\n')),(0,n.kt)("p",null,"Let\u2019s say for this tutorial, we use the same CA to sign both server and client\u2019s certificates. In the real world, we might have multiple clients with different certificates signed by different CAs."),(0,n.kt)("p",null,"After the client\u2019s certificate and private key are ready. To enable mutual TLS, on the server side ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/greeter_server.js"}),"greeter_server.js"),", we should change the ClientAuth field from False to True."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Mutual-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"function main() {\n  var server = new grpc.Server();\n\n  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});\n  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(\n    fs.readFileSync('./credentials/ca.cert'),\n    [{\n        cert_chain: fs.readFileSync('./credentials/server.cert'),\n        private_key: fs.readFileSync('./credentials/server.key')\n    }],\n    true\n  ), () => {\n    server.start();\n  });\n}\n"))),(0,n.kt)(s.Z,{value:"Server-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"function main() {\n  var server = new grpc.Server();\n\n  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});\n  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(\n    fs.readFileSync('./credentials/ca.cert'),\n    [{\n        cert_chain: fs.readFileSync('./credentials/server.cert'),\n        private_key: fs.readFileSync('./credentials/server.key')\n    }],\n    false\n  ), () => {\n    server.start();\n  });\n}\n")))),(0,n.kt)("p",null,"And we\u2019re done with the server. Let\u2019s run it in the terminal."),(0,n.kt)("p",null,"Now if we connect the current client to this new server, it will fail because the server now also requires client to send its certificate."),(0,n.kt)("p",null,"Let\u2019s go to the client code ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/greeter_client.js"}),"greeter_client.js")," to fix this. I will just copy the code to load certificate on the server side and change the file names to client.cert and client.key.Then we have to add the client certificate to the TLS config by setting the Certificates field, just like what we did on the server side."),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Mutual-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"var client = new hello_proto.Greeter(target,\n                grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert'),\n                                        fs.readFileSync('./credentials/client.key'),\n                                        fs.readFileSync('./credentials/client.cert')));\n"))),(0,n.kt)(s.Z,{value:"Server-auth",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"var client = new hello_proto.Greeter(target,\n                grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert')));\n")))),(0,n.kt)("p",null,"OK, now if we re-run the client, all the requests will be successful."),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/img/GettingStartedCongratulations.png",width:"150"})),(0,n.kt)("h2",h({},{id:"private-key-passphrase"}),"Private key passphrase"),(0,n.kt)("p",null,"One last thing before we finish. As you know, the current client\u2019s and server\u2019s private key that we are using are not encrypted. It\u2019s because we use the -nodes option when generating them (in the cert/gen.sh file)."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-shell"}),'openssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"\n')),(0,n.kt)("p",null,"If we remove this -nodes option and run make cert, we will be asked to provide a passphrase to encrypt the server\u2019s private key: ",(0,n.kt)("strong",{parentName:"p"},"passphrase"),"."),(0,n.kt)("p",null,"And the generated private key of the server is now encrypted. If we try to start the server with this key, it will return an ",(0,n.kt)("strong",{parentName:"p"},"error"),": cannot load TLS credentials. That\u2019s because the key is encrypted."),(0,n.kt)("p",null,"We can add more codes to decrypt the key with the passphrase, but I think in the end, we still have to protect the passphrase by keeping it somewhere safe. So we can always store our unencrypted private key in that place as well."),(0,n.kt)("p",null,"For example, if you use amazon web service, you can store your private key or any other secrets in encrypted format with aws secret manager. Or you can use HashiCorp\u2019s Vault for the same purpose."),(0,n.kt)("p",null,"And that\u2019s everything I wanted to share with you in this article. I hope you find it useful. Thanks a lot for reading, and see you guys in the next one!"))}b.isMDXComponent=!0},90436:function(e,t,r){t.Z=r.p+"assets/images/grpc-connection-types-08b1b5c28f3316e3e5b06e61a89bba26.png"},71694:function(e,t,r){t.Z=r.p+"assets/images/grpc-2b88fa6714071d12c164ea4cb2a00d14.svg"}}]);