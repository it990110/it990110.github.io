"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82641],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var s=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),l=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,v=h["".concat(o,".").concat(u)]||h[u]||d[u]||a;return n?s.createElement(v,i(i({ref:t},p),{},{components:n})):s.createElement(v,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return m},default:function(){return f}});var s=n(35318),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e};const h={id:"openssl-server",title:"Openssl Server",description:"To create server and client with openssl"},u=void 0,v={unversionedId:"tls/openssl-server",id:"version-2.0.0-beta.16/tls/openssl-server",title:"Openssl Server",description:"To create server and client with openssl",source:"@site/versioned_docs/version-2.0.0-beta.16/tls/openssl-server.md",sourceDirName:"tls",slug:"/tls/openssl-server",permalink:"/docs/tls/openssl-server",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/tls/openssl-server.md",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"openssl-server",title:"Openssl Server",description:"To create server and client with openssl"},sidebar:"tls",previous:{title:"Openssl Labs",permalink:"/docs/tls/openssl-labs"},next:{title:"Browser Authentication",permalink:"/docs/tls/browser-authentication"}},m=[{value:"RSA openssl server",id:"rsa-openssl-server",children:[{value:"Generate rsa key and certificates",id:"generate-rsa-key-and-certificates",children:[],level:3},{value:"Create server with openssl",id:"create-server-with-openssl",children:[],level:3},{value:"Access server with client",id:"access-server-with-client",children:[],level:3},{value:"The output of handshake",id:"the-output-of-handshake",children:[],level:3},{value:"Test connection",id:"test-connection",children:[],level:3},{value:"Source Code",id:"source-code",children:[],level:3}],level:2},{value:"secp256k1 openssl server",id:"secp256k1-openssl-server",children:[{value:"Generate secp256k1 key and EC certificates",id:"generate-secp256k1-key-and-ec-certificates",children:[],level:3},{value:"Create server with openssl",id:"create-server-with-openssl-1",children:[],level:3},{value:"Access server with client",id:"access-server-with-client-1",children:[],level:3},{value:"Source Code",id:"source-code-2",children:[],level:3}],level:2}],k={toc:m};function f(e){var t,r=e,{components:p}=r,h=((e,t)=>{var n={};for(var s in e)o.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&c)for(var s of c(e))t.indexOf(s)<0&&l.call(e,s)&&(n[s]=e[s]);return n})(r,["components"]);return(0,s.kt)("wrapper",(t=d(d({},k),h),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"openssl",src:n(3638).Z,width:"623",height:"141"})),(0,s.kt)("p",null,"Now let's create server and client with Openssl."),(0,s.kt)("h2",d({},{id:"rsa-openssl-server"}),"RSA openssl server"),(0,s.kt)("h3",d({},{id:"generate-rsa-key-and-certificates"}),"Generate rsa key and certificates"),(0,s.kt)("p",null,"First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the ",(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/rsa"}),"Opensslabs/rsa")),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-shell",metastring:'title="/OpenssLabs/rsa/gen.sh"',title:'"/OpenssLabs/rsa/gen.sh"'}),'# 1. Generate server CA\'s private key and self-signed certificate\nopenssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca.cert -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext\n\necho "Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\n\n# 4. To verify the server certificate aginst by root CA\necho "server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\n\n# 5. Generate web client\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout client.key -out client.req -subj "/CN=localhost/emailAddress=client@gmail.com"\n\n# 6. Use CA\'s private key to sign web client\'s CSR and get back the signed certificate\nopenssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext\n\necho "client\'s signed certificate"\nopenssl x509 -in client.cert -noout -text\n\n# 7. To verify the client\'s certificate aginst by root CA\necho "client\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert client.cert\n\n')),(0,s.kt)("h3",d({},{id:"create-server-with-openssl"}),"Create server with openssl"),(0,s.kt)("p",null,"Please use ",(0,s.kt)("a",d({parentName:"p"},{href:"https://www.openssl.org/docs/man1.1.1/man1/openssl-s_server.html"}),"openssl s_server")," to create the server."),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"openssl s_server -accept 20000 -cert server.cert -key server.key  -debug -tlsextdebug\n")),(0,s.kt)("h3",d({},{id:"access-server-with-client"}),"Access server with client"),(0,s.kt)("p",null,"Please use ",(0,s.kt)("a",d({parentName:"p"},{href:"https://www.openssl.org/docs/man1.1.1/man1/openssl-s_client.html"}),"openssl s_client")," to make connection."),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"openssl s_client -showcerts -connect localhost:20000  -CAfile ca.cert  -cert client.cert -key client.key\n")),(0,s.kt)("h3",d({},{id:"the-output-of-handshake"}),"The output of handshake"),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{}),"Server certificate\nsubject=CN = localhost, emailAddress = server@gmail.com\nissuer=CN = localhost, emailAddress = ca@gmail.com\n\nNo client certificate CA names sent\nPeer signing digest: SHA256\nPeer signature type: RSA-PSS\nServer Temp Key: X25519, 253 bits\nSSL handshake has read 2139 bytes and written 391 bytes\nVerification: OK\nNew, TLSv1.3, **Cipher is TLS_AES_256_GCM_SHA384**\nServer public key is 4096 bit\nSecure Renegotiation IS NOT supported\nCompression: NONE\nExpansion: NONE\n\n")),(0,s.kt)("h3",d({},{id:"test-connection"}),"Test connection"),(0,s.kt)("p",null,"Please input any string in the server console, then the string will send to the client and be showed in the client's consloe."),(0,s.kt)("h3",d({},{id:"source-code"}),"Source Code"),(0,s.kt)("p",null,(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/rsa"}),"The detaile code have been put into the github"),". ",(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/rsa/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."),(0,s.kt)("h2",d({},{id:"secp256k1-openssl-server"}),"secp256k1 openssl server"),(0,s.kt)("h3",d({},{id:"generate-secp256k1-key-and-ec-certificates"}),"Generate secp256k1 key and EC certificates"),(0,s.kt)("p",null,"First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the ",(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1"}),"Opensslabs/secp256k1")),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-shell",metastring:'title="/OpenssLabs/secp256k1/gen.sh"',title:'"/OpenssLabs/secp256k1/gen.sh"'}),'# 1. Generate EC private key and self-signed certificate\nopenssl ecparam -genkey -out ca.key -name secp256k1\nopenssl req -x509 -new -key ca.key -out ca.cert -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=root.guru@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca.cert -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (EC)\nopenssl ecparam -genkey -out server.key -name secp256k1\nopenssl req  -key server.key -new -out server.req -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=server@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext\n\necho "Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\n\n# 4. Generate client\'s private key and certificate signing request (EC)\nopenssl ecparam -genkey -out client.key -name secp256k1\nopenssl req -key client.key -new  -out client.req -subj "/C=FR/ST=Alsace/L=Strasbourg/O=PC Client/OU=Computer/CN=*.client.com/emailAddress=client@gmail.com"\n\n# 5. Use CA\'s private key to sign client\'s CSR and get back the signed certificate\nopenssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext\n\necho "Client\'s signed certificate"\nopenssl x509 -in client.cert -noout -text\n\n# 6. To verify the server certificate aginst by root CA\necho "server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\n\n# 7. To verify the client certificate aginst by root CA.\necho "client\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert client.cert\n')),(0,s.kt)("h3",d({},{id:"create-server-with-openssl-1"}),"Create server with openssl"),(0,s.kt)("p",null,"Please use ",(0,s.kt)("a",d({parentName:"p"},{href:"https://www.openssl.org/docs/man1.1.1/man1/openssl-s_server.html"}),"openssl s_server")," to create the server."),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{}),"openssl s_server -accept 20000 -cert server.cert -key server.key  -debug -tlsextdebug -curves secp256k1 -tls1_2\n")),(0,s.kt)("h3",d({},{id:"access-server-with-client-1"}),"Access server with client"),(0,s.kt)("p",null,"Please use ",(0,s.kt)("a",d({parentName:"p"},{href:"https://www.openssl.org/docs/man1.1.1/man1/openssl-s_client.html"}),"openssl s_client")," to make connection."),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{}),"openssl s_client -showcerts -connect localhost:20000  -CAfile ca.cert  -cert client.cert -key client.key -curves secp256k1 -tls1_2\n")),(0,s.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,s.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,s.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,s.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"The parameter -curves secp256k1 -tls1_2 is very import in this lab. The secp256k1 is not default elliptic curve supported by Openssl TLS1_3, So the curves and TLS version must be assigned. As you know the secp256r1 is default elliptic curve supported by Openssl, So the shell command for server and client are same as rsa's. :::")),(0,s.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,s.kt)("h3",d({parentName:"div"},{id:"the-output-of-handshake-1"}),"The output of handshake"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",d({parentName:"pre"},{}),"Server certificate\nsubject=CN = localhost, emailAddress = server@gmail.com\nissuer=CN = localhost, emailAddress = ca@gmail.com\n\nNo client certificate CA names sent\nPeer signing digest: SHA256\nPeer signature type: ECDSA\nServer Temp Key: ECDH, secp256k1, 256 bits\nSSL handshake has read 1085 bytes and written 330 bytes\nVerification: OK\nNew, TLSv1.2, Cipher is **ECDHE-ECDSA-AES256-GCM-SHA384**\nServer public key is 256 bit\nSecure Renegotiation IS supported\nCompression: NONE\nExpansion: NONE\n")),(0,s.kt)("h3",d({parentName:"div"},{id:"test-connection-1"}),"Test connection"),(0,s.kt)("p",{parentName:"div"},"Please input any string in the server console, then the string will send to the client and be showed in the client's consloe."),(0,s.kt)("h3",d({parentName:"div"},{id:"source-code-1"}),"Source Code"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1"}),"The detaile code have been put into the github"),". ",(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."),(0,s.kt)("h2",d({parentName:"div"},{id:"secp256r1-openssl-server"}),"secp256r1 openssl server"))),(0,s.kt)("h3",d({},{id:"source-code-2"}),"Source Code"),(0,s.kt)("p",null,(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/secp256r1"}),"The detaile code have been put into the github"),". ",(0,s.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/secp256r1/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."))}f.isMDXComponent=!0},3638:function(e,t,n){t.Z=n.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);