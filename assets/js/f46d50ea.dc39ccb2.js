"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79586],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return y}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&u(e,n,t[n]);return e};const p={id:"node-mutual-auth",title:"Node Mutual Auth",description:"To create node server and client with TLS"},m=void 0,h={unversionedId:"tls/node-mutual-auth",id:"version-2.0.0-beta.16/tls/node-mutual-auth",title:"Node Mutual Auth",description:"To create node server and client with TLS",source:"@site/versioned_docs/version-2.0.0-beta.16/tls/node-mutual-auth.md",sourceDirName:"tls",slug:"/tls/node-mutual-auth",permalink:"/docs/tls/node-mutual-auth",editUrl:"https://github.com/it990110/it990110.github.io/edit/main/website/docs/tls/node-mutual-auth.md",tags:[],version:"2.0.0-beta.16",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"node-mutual-auth",title:"Node Mutual Auth",description:"To create node server and client with TLS"},sidebar:"tls",previous:{title:"gRPC Auth Labs",permalink:"/docs/tls/grpc-auth-labs"}},f=[{value:"Generate secp256k1 key and EC certificates",id:"generate-secp256k1-key-and-ec-certificates",children:[],level:3},{value:"Create node server",id:"create-node-server",children:[],level:3},{value:"Access server with client",id:"access-server-with-client",children:[],level:3},{value:"Source Code",id:"source-code",children:[],level:3}],v={toc:f};function y(e){var t,a=e,{components:u}=a,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),p),i(t,s({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"openssl",src:n(87643).Z,width:"623",height:"141"})),(0,r.kt)("p",null,"Now let's create node server and client with TLS."),(0,r.kt)("h3",d({},{id:"generate-secp256k1-key-and-ec-certificates"}),"Generate secp256k1 key and EC certificates"),(0,r.kt)("p",null,"First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/"}),"Opensslabs/node-mutual-auth")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell",metastring:'title="/OpenssLabs/node-mutual-auth/credentials/gen.sh"',title:'"/OpenssLabs/node-mutual-auth/credentials/gen.sh"'}),'# 1. Generate EC private key and self-signed certificate\nopenssl ecparam -genkey -out ca.key -name secp256k1\nopenssl req -x509 -new -key ca.key -out ca.cert -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=root.guru@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca.cert -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (EC)\nopenssl ecparam -genkey -out server.key -name secp256k1\nopenssl req  -key server.key -new -out server.req -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=server@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext\n\necho "Server\'s signed certificate"\nopenssl x509 -in server.cert -noout -text\n\n# 4. Generate client\'s private key and certificate signing request (EC)\nopenssl ecparam -genkey -out client.key -name secp256k1\nopenssl req -key client.key -new  -out client.req -subj "/C=FR/ST=Alsace/L=Strasbourg/O=PC Client/OU=Computer/CN=*.client.com/emailAddress=client@gmail.com"\n\n# 5. Use CA\'s private key to sign client\'s CSR and get back the signed certificate\nopenssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext\n\necho "Client\'s signed certificate"\nopenssl x509 -in client.cert -noout -text\n\n# 6. To verify the server certificate aginst by root CA\necho "server\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert server.cert\n\n# 7. To verify the client certificate aginst by root CA.\necho "client\'s certificate verification"\nopenssl verify -show_chain -CAfile ca.cert client.cert\n')),(0,r.kt)("h3",d({},{id:"create-node-server"}),"Create node server"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:'title="OpenssLabs/node-mutual-auth/server.js"',title:'"OpenssLabs/node-mutual-auth/server.js"'}),"var tls = require('tls'),\n  fs = require('fs'),\n  msg = [\n    '.-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.',\n    ': :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :',\n    \":    :: :  : :: :: :: :: ::   .': :   : :: :: :\",\n    \": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;\",\n    \":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;\",\n  ].join('\\n').cyan;\n\nvar options = {\n  ca: fs.readFileSync('./credentials/ca.cert'),\n  key: fs.readFileSync('./credentials/server.key'),\n  cert: fs.readFileSync('./credentials/server.cert'),\n  ecdhCurve: 'secp256k1',\n  maxVersion: 'TLSv1.2',\n  ciphers: 'ECDHE-ECDSA-AES256-GCM-SHA384',\n};\n\ntls\n  .createServer(options, function (s) {\n    s.write(msg + '\\n');\n    s.pipe(s);\n  })\n  .listen(8000);\n")),(0,r.kt)("h3",d({},{id:"access-server-with-client"}),"Access server with client"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:'title="OpenssLabs/node-mutual-auth/client.js',title:'"OpenssLabs/node-mutual-auth/client.js'}),"var tls = require('tls'),\n  fs = require('fs');\n\nvar options = {\n  ca: fs.readFileSync('./credentials/ca.cert'),\n  key: fs.readFileSync('./credentials/client.key'),\n  cert: fs.readFileSync('./credentials/client.cert'),\n  ecdhCurve: 'secp256k1',\n  maxVersion: 'TLSv1.2',\n  ciphers: 'ECDHE-ECDSA-AES256-GCM-SHA384',\n};\n\nvar conn = tls.connect(8000, 'localhost', options, function () {\n  if (conn.authorized) {\n    console.log('Connection authorized by a Certificate Authority.');\n  } else {\n    console.log('Connection not authorized: ' + conn.authorizationError);\n  }\n});\n\n// Send a friendly message\nconn.write('I am the client sending you a message.');\n\nconn.on('data', function (data) {\n  console.log('Receive:' + data.toString());\n  conn.end();\n});\n\nconn.on('close', function () {\n  console.log('Connection closed');\n});\n\nconn.on('error', function (error) {\n  console.error(error);\n  conn.destroy();\n});\n")),(0,r.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"The parameter ",(0,r.kt)("strong",{parentName:"h5"},"ecdhCurve and maxVersion")," is very import in this lab. The ",(0,r.kt)("strong",{parentName:"h5"},"secp256k1")," is not default elliptic curve supported by Openssl TLS1_3, So the curves and TLS version must be assigned. :::")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("h3",d({parentName:"div"},{id:"try-it-out"}),"Try it out"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"./gen.sh\nnode server.js //in one shell\nnode client.js //in anther shell\n")),(0,r.kt)("h3",d({parentName:"div"},{id:"output-of-client"}),"Output of client"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",d({parentName:"pre"},{}),"Connection authorized by a Certificate Authority.\nReceive:undefined\n\nReceive:I am the client sending you a message.\nConnection closed\n")))),(0,r.kt)("h3",d({},{id:"source-code"}),"Source Code"),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/"}),"The detaile code have been put into the github"),". ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/credentials/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."))}y.isMDXComponent=!0},87643:function(e,t,n){t.Z=n.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);