"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9307],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var o=2;o<a;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76758:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return k},default:function(){return v}});var n=r(35318),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))o.call(t,r)&&u(e,r,t[r]);return e};const d={id:"openssl-labs",title:"Openssl Labs",description:"The labs to create and verify certificates"},f=void 0,m={unversionedId:"tls/openssl-labs",id:"tls/openssl-labs",title:"Openssl Labs",description:"The labs to create and verify certificates",source:"@site/docs/tls/openssl-labs.md",sourceDirName:"tls",slug:"/tls/openssl-labs",permalink:"/zh-CN/docs/next/tls/openssl-labs",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644313915,formattedLastUpdatedAt:"2022/2/8",frontMatter:{id:"openssl-labs",title:"Openssl Labs",description:"The labs to create and verify certificates"},sidebar:"tls",previous:{title:"Create Certificates",permalink:"/zh-CN/docs/next/tls/create-certificates"},next:{title:"Openssl Server",permalink:"/zh-CN/docs/next/tls/openssl-server"}},k=[{value:"Generate and verify secp256k1 certificate",id:"generate-and-verify-secp256k1-certificate",children:[{value:"Root (EC) cert",id:"root-ec-cert",children:[],level:3},{value:"Server&#39;s cert request",id:"servers-cert-request",children:[],level:3},{value:"Server&#39;s cert",id:"servers-cert",children:[],level:3},{value:"Client&#39;s cert request",id:"clients-cert-request",children:[],level:3},{value:"Client&#39;s cert",id:"clients-cert",children:[],level:3},{value:"Verify the server certificate aginst by root CA",id:"verify-the-server-certificate-aginst-by-root-ca",children:[],level:3},{value:"verify the client certificate aginst by root CA.",id:"verify-the-client-certificate-aginst-by-root-ca",children:[],level:3},{value:"Source Code",id:"source-code",children:[],level:3}],level:2},{value:"Generate and verify secp256r1 certificate",id:"generate-and-verify-secp256r1-certificate",children:[],level:2},{value:"A chain of trust",id:"a-chain-of-trust",children:[{value:"Root (RSA) cert",id:"root-rsa-cert",children:[],level:3},{value:"Intermediate cert request",id:"intermediate-cert-request",children:[],level:3},{value:"Intermediate cert",id:"intermediate-cert",children:[],level:3},{value:"Leaf cert request",id:"leaf-cert-request",children:[],level:3},{value:"Leaf cert",id:"leaf-cert",children:[],level:3},{value:"verify the trust chain",id:"verify-the-trust-chain",children:[],level:3},{value:"Source Code",id:"source-code-1",children:[],level:3}],level:2}],h={toc:k};function v(e){var t,i=e,{components:u}=i,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r})(i,["components"]);return(0,n.kt)("wrapper",(t=p(p({},h),d),a(t,c({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"openssl",src:r(3638).Z,width:"623",height:"141"})),(0,n.kt)("p",null,"Now let's create and verify the certificates with openssl."),(0,n.kt)("h2",p({},{id:"generate-and-verify-secp256k1-certificate"}),"Generate and verify secp256k1 certificate"),(0,n.kt)("h3",p({},{id:"root-ec-cert"}),"Root (EC) cert"),(0,n.kt)("p",null,"First to generate EC private key and self-signed certificate"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl ecparam -genkey -out ca.key -name secp256k1 \nopenssl req -x509 -new -key ca.key -out ca.cert -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=root.guru@gmail.com"\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notive: To assign ",(0,n.kt)("strong",{parentName:"p"},"secp256k1")," as name of openssl ecparam genkey.")),(0,n.kt)("h3",p({},{id:"servers-cert-request"}),"Server's cert request"),(0,n.kt)("p",null,"Second to generate web server's private key and certificate signing request (EC)"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl ecparam -genkey -out server.key -name secp256k1 \nopenssl req  -key server.key -new -out server.req -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=server@gmail.com"\n')),(0,n.kt)("h3",p({},{id:"servers-cert"}),"Server's cert"),(0,n.kt)("p",null,"Third to use CA's private key to sign web server's CSR and get back the signed certificate of server"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext\n")),(0,n.kt)("h3",p({},{id:"clients-cert-request"}),"Client's cert request"),(0,n.kt)("p",null,"Fourth to generate client's private key and certificate signing request (EC)"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl ecparam -genkey -out client.key -name secp256k1 \nopenssl req -key client.key -new  -out client.req -subj "/C=FR/ST=Alsace/L=Strasbourg/O=PC Client/OU=Computer/CN=*.client.com/emailAddress=client@gmail.com"\n')),(0,n.kt)("h3",p({},{id:"clients-cert"}),"Client's cert"),(0,n.kt)("p",null,"Fifth to use CA's private key to sign client's CSR and get back the signed certificate of client"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext\n")),(0,n.kt)("h3",p({},{id:"verify-the-server-certificate-aginst-by-root-ca"}),"Verify the server certificate aginst by root CA"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl verify -show_chain -CAfile ca.cert server.cert\n")),(0,n.kt)("h3",p({},{id:"verify-the-client-certificate-aginst-by-root-ca"}),"verify the client certificate aginst by root CA."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl verify -show_chain -CAfile ca.cert client.cert\n")),(0,n.kt)("h3",p({},{id:"source-code"}),"Source Code"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/secp256k1/"}),"The detaile code have been put into the github"),".\n",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/secp256k1/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."),(0,n.kt)("h2",p({},{id:"generate-and-verify-secp256r1-certificate"}),"Generate and verify secp256r1 certificate"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The same as ",(0,n.kt)("strong",{parentName:"p"},"secp256r1"),", if you want to reuse these code with secp256r1, please go through ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/vulnsystem/OpensslCertificateVerify/blob/main/secp256r1/"}),"the detailed infomation in github"),".")),(0,n.kt)("h2",p({},{id:"a-chain-of-trust"}),"A chain of trust"),(0,n.kt)("p",null,"In these lab, we create root, intermediate and leaf certificate. The intermediate's certificate signed by root's and leaf's certificate signed by intermediate's. "),(0,n.kt)("h3",p({},{id:"root-rsa-cert"}),"Root (RSA) cert"),(0,n.kt)("p",null,"First to generate root authority's private key and self-signed certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout root.key -out root.cert -subj "/CN=localhost/emailAddress=root@gmail.com" \n')),(0,n.kt)("h3",p({},{id:"intermediate-cert-request"}),"Intermediate cert request"),(0,n.kt)("p",null,"Second to generate intermediate authorities's private key and certificate signing request (CSR)"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl req -newkey rsa:4096 -nodes -keyout intermediate.key -out intermediate.req -subj "/CN=localhost/emailAddress=intermediate@gmail.com"\n')),(0,n.kt)("h3",p({},{id:"intermediate-cert"}),"Intermediate cert"),(0,n.kt)("p",null,"Third to use root's private key to sign intermediate's CSR and get back the signed certificate of intermediate."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl x509 -req -in intermediate.req -days 60 -CA root.cert -CAkey root.key -CAcreateserial -out intermediate.cert -extfile intermediate.ext\n")),(0,n.kt)("p",null,"Notice basicConstraints atrribute in intermediate.ext should be assigned as following."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-name=intermediate.ext"}),"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0\nbasicConstraints=CA:TRUE,pathlen:0\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"CA:TRUE means it is a intermediate CA and allow the CA to issue certificates. If the CA value not be assigned, the default value FALSE will be assigned.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pathlen:0 does still allow the CA to issue certificates, but these certificates must be end-entity-certificates.It also implies that with this certificate, the CA must not issue intermediate CA certificates .")),(0,n.kt)("h3",p({},{id:"leaf-cert-request"}),"Leaf cert request"),(0,n.kt)("p",null,"Fourth to generate end-entity leaf's private key and certificate signing request (CSR)"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'openssl req -newkey rsa:4096 -nodes -keyout leaf.key -out leaf.req -subj "/CN=localhost/emailAddress=leaf@gmail.com"\n')),(0,n.kt)("h3",p({},{id:"leaf-cert"}),"Leaf cert"),(0,n.kt)("p",null,"Fifty ot use intermediate's private key to sign leaf's CSR and get back the signed certificate of leaf"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl x509 -req -in leaf.req -days 60 -CA intermediate.cert -CAkey intermediate.key -CAcreateserial -out leaf.cert -extfile leaf.ext\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notice basicConstraints atrribute in leaf.ext have been assigned defaultly ",(0,n.kt)("strong",{parentName:"p"},"(FALSE)"),". ")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-name=leaf.ext"}),"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0\n")),(0,n.kt)("h3",p({},{id:"verify-the-trust-chain"}),"verify the trust chain"),(0,n.kt)("p",null,"To verify the leaf certificate aginst by intermediate CA"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"intermediate's certificate verification against root certificate\"")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl verify -show_chain -CAfile root.cert intermediate.cert leaf.cert\n")),(0,n.kt)("ol",p({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Partial chain verifiication: to verify leaf's certificate against intermediate certificate")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl verify -show_chain -partial_chain -trusted intermediate.cert leaf.cert\n")),(0,n.kt)("ol",p({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Full chain verifiication: to verify leaf's certificate against intermediate and root certificate")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"openssl verify -show_chain -CAfile root.cert -untrusted intermediate.cert leaf.cert\n")),(0,n.kt)("h3",p({},{id:"source-code-1"}),"Source Code"),(0,n.kt)("p",null,(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/chain-trust/"}),"The detaile code have been put into the github"),".\n",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/blob/main/chain-trust/gen.sh"}),"gen.sh")," collect all the shell command, you can issue ./gen.sh to run all at a time."))}v.isMDXComponent=!0},3638:function(e,t,r){t.Z=r.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);