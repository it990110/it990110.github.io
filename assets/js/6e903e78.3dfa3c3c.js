"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40634],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return y}});var r=n(35318),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e};const h={id:"create-certificates",title:"Create Certificates",description:"How to create certificates"},d=void 0,f={unversionedId:"tls/create-certificates",id:"tls/create-certificates",title:"Create Certificates",description:"How to create certificates",source:"@site/docs/tls/create-certificates.md",sourceDirName:"tls",slug:"/tls/create-certificates",permalink:"/docs/next/tls/create-certificates",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/tls/create-certificates.md",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644313915,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"create-certificates",title:"Create Certificates",description:"How to create certificates"},sidebar:"tls",previous:{title:"TLS Handshake",permalink:"/docs/next/tls/tls-handshake"},next:{title:"Openssl Labs",permalink:"/docs/next/tls/openssl-labs"}},m=[{value:"Generate CA&#39;private key and certificate",id:"generate-caprivate-key-and-certificate",children:[],level:2},{value:"Generate web server&#39;s private key and CSR",id:"generate-web-servers-private-key-and-csr",children:[],level:2},{value:"Sign the web server&#39;s certificate request",id:"sign-the-web-servers-certificate-request",children:[],level:2},{value:"Verify a certificate",id:"verify-a-certificate",children:[],level:2},{value:"Source Code",id:"source-code",children:[],level:2}],k={toc:m};function y(e){var t,i=e,{components:p}=i,h=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(i,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),h),a(t,o({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://dev.to/techschoolguru/how-to-create-sign-ssl-tls-certificates-2aai"}),"TECHSCHOOL"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"openssl",src:n(3638).Z,width:"623",height:"141"})),(0,r.kt)("p",null,"Now let's create and verify the certificates with openssl.\nFor the purpose of this tutorial, we won\u2019t submit our Certificate Signing Request (CSR) to a real CA. Instead, we will play both roles: the certificate authority and the certificate applicant."),(0,r.kt)("p",null,"So here's what we're gonna do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the first step, we will generate a private key and its self-signed certificate for the CA. They will be used to sign the CSR later."),(0,r.kt)("li",{parentName:"ul"},"In the second step, we will generate a private key and its paired CSR for the web server that we want to use TLS."),(0,r.kt)("li",{parentName:"ul"},"Then finally we will use the CA\u2019s private key to sign the web server\u2019s CSR and get back the signed certificate.")),(0,r.kt)("h2",u({},{id:"generate-caprivate-key-and-certificate"}),"Generate CA'private key and certificate"),(0,r.kt)("p",null,"The first command we\u2019re gonna used is openssl req, which stands for request. This command is used to create and process certificate signing request. It can also be used to create a ",(0,r.kt)("strong",{parentName:"p"},"self-signed")," certificate for the CA, which is exactly what we want in the first step."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl req -x509 -newkey rsa:4096 -days 365 -keyout ca-key.pem -out ca-cert.pem\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The -x509 option is used to tell openssl to output a self-signed certificate instead of a certificate request. In case you don\u2019t know, X509 is just a standard format of the public key certificate."),(0,r.kt)("li",{parentName:"ul"},"The -newkey rsa:4096 option basically tells openssl to create both a new RSA private key (4096-bit) and its certificate request at the same time. As we\u2019re using this together with -x509 option, it will output a certificate instead of a certificate request."),(0,r.kt)("li",{parentName:"ul"},"The next option is -days 365, which specifies the number of days that the certificate is valid for."),(0,r.kt)("li",{parentName:"ul"},"Then we use the -keyout option to tell openssl to write the created private key to ca-key.pem file"),(0,r.kt)("li",{parentName:"ul"},"And finally the -out option to tell it to write the certificate to ca-cert.pem file.")),(0,r.kt)("p",null,"Once the key is generated, we will be asked to provide a pass phrase, which will be used to encrypt the private key before writing it to the PEM file.\nWhy is it encrypted? Because if somehow the private key file is hacked, the hacker cannot use it to do anything without knowing the pass phrase to decrypt it first.\nNext, openssl will ask us for some identity information to generate the certificate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The country code"),(0,r.kt)("li",{parentName:"ul"},"The state or province name"),(0,r.kt)("li",{parentName:"ul"},"The organisation name"),(0,r.kt)("li",{parentName:"ul"},"The unit name"),(0,r.kt)("li",{parentName:"ul"},"The common name (or domain name)"),(0,r.kt)("li",{parentName:"ul"},"The email address\nAnd that\u2019s it! The certificate and private key files will be successfully generated.\nIf we cat the private key file ca-key.pem, we can see it says ENCRYPTED PRIVATE KEY:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIJnzBJBgkqhkiG9w0BBQ0wPDAbBgkqhkiG9w0BBQwwDgQILfki090rvloCAggA\nMB0GCWCGSAFlAwQBKg...GNYc7i9SVDBoA==\n-----END ENCRYPTED PRIVATE KEY-----\n")),(0,r.kt)("p",null,"The certificate ca-cert.pem, on the other hand, is not encrypted, but only base64-encoded, because it just contains the public key, the identity information, and the signature that should be visible to everyone."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"-----BEGIN CERTIFICATE-----\nMIIFxjCCA64CCQCNT+eP2vjJxzANBgkqhkiG9w0BAQsFADCBpDELMAkGA1UEBhMC\nRlIxEjAQBgNVBAgMC...udJwE7HnnA7lpA\n-----END CERTIFICATE-----\n")),(0,r.kt)("p",null,"We can use the openssl x509 command to display all the information encoded in this certificate. This command can also be used to sign certificate requests, which we see in a moment."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl x509 -in ca-cert.pem -noout -text\n")),(0,r.kt)("p",null,"Here we use the -in option to pass in the CA\u2019s certificate file. And the -noout option to tell it to not output the original base64-encoded value. Instead, we use the -text option because we want to display it in a readable text format."),(0,r.kt)("p",null,"Now we can see all information of the certificate, such as the version, the serial number. The issuer and the subject are the same in this case because this is a self-signed certificate. Then the RSA public key and signature."),(0,r.kt)("p",null,"I\u2019m gonna copy this command and save it to a ",(0,r.kt)("strong",{parentName:"p"},"gen.sh")," script. With this script, I want to automate the process of generating a set of keys and certificates."),(0,r.kt)("p",null,"Before moving to the 2nd step, I\u2019m gonna show you another way to provide the identity information without entering it interactively as before. To do this, we must add the -subj (subject) option to the openssl req command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'openssl req -x509 -newkey rsa:4096 -days 365 -keyout ca-key.pem -out ca-cert.pem -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"In this subject string:\n/C=FR is for Country\n/ST=Occitanie is for STate or province\n/L=Toulouse is for Locality name or city\n/O=Tech School is for Organisation\n/OU=Education is for Organisation Unit\n/CN=*.techschool.guru is for Common Name or domain name\n/emailAddress=techschool.guru@gmail.com is for email address\n")),(0,r.kt)("h2",u({},{id:"generate-web-servers-private-key-and-csr"}),"Generate web server's private key and CSR"),(0,r.kt)("p",null,"Now the next step is to generate a private key and CSR for our web server.\nIt\u2019s almost the same as the command we used in the 1st step. Except that, this time we don\u2019t want to self-sign it, so we should remove the -x509 option. The -days option should be removed as well, since we don\u2019t create a certificate, but just a CSR."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'openssl req -newkey rsa:4096 -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"\n')),(0,r.kt)("p",null,"The name of the output key should be server-key.pem. The output certificate request file should be server-req.pem. And the subject should contain our web server\u2019s information."),(0,r.kt)("p",null,"Now, when we run this command, the encrypted private key and the certificate signing request files will be generated."),(0,r.kt)("p",null,"This time, in the server-req.pem file, it says CERTIFICATE REQUEST, not CERTIFICATE as in the ca-cert.pem file. That's because it\u2019s not a certificate as before, but a certificate signing request instead."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"-----BEGIN CERTIFICATE REQUEST-----\nMIIE2DCCAsACAQAwgZIxCzAJBgNVBAYTAkZSMRYwFAYDVQQIDA1JbGUgZGUgRnJh\nbmNlMQ4wDAYDVQQHDAVQ...pWofr2eOeBQ4Q=\n-----END CERTIFICATE REQUEST-----\n")),(0,r.kt)("p",null,"So now let\u2019s move to step 3 and sign this request."),(0,r.kt)("h2",u({},{id:"sign-the-web-servers-certificate-request"}),"Sign the web server's certificate request"),(0,r.kt)("p",null,"To sign the certificate, we will use the same openssl x509 command that we\u2019ve used to display certificate before. Let\u2019s open the terminal and run this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl x509 -req -in server-req.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this command, we use the -req option to tell openssl that we\u2019re gonna pass in a certificate request. We use the -in option follow by the name of the request file: server-req.pem."),(0,r.kt)("li",{parentName:"ul"},"Next we use the -CA option to pass in the certificate file of the CA: ca-cert.pem. And the -CAkey option to pass in the private key of the CA: ca-key.pem."),(0,r.kt)("li",{parentName:"ul"},"Then one important option is -CAcreateserial. Basically the CA must ensure that each certificate it signs goes with a unique serial number. So with this option, a file containing the next serial number will be generated if it doesn\u2019t exist."),(0,r.kt)("li",{parentName:"ul"},"Finally we use the -out option to specify the file to write the output certificate to.")),(0,r.kt)("p",null,"Now as you can see here, because the CA\u2019s private key is encrypted, openssl is asking for the pass phrase to decrypt it before it can be used to sign the certificate. It\u2019s a countermeasure in case the CA\u2019s private key is hacked.\nOK, now we\u2019ve got the signed certificate for our web server. Let\u2019s print it out in plain text format."),(0,r.kt)("p",null,"There is its unique serial number 0xb141e873fd7b8567. We can also see a ca-cert.srl file, which contains the same serial number."),(0,r.kt)("p",null,"By default, the certificate is valid for 30 days. We can change it by adding the -days option to the signing command."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem\n")),(0,r.kt)("p",null,"Now the validity duration has changed to 60 days.\nA certificate can be used for multiple websites with different domain names. We can do that by specifying the Subject Alternative Name extension when signing the certificate request.\nThe -extfile option of the openssl x509 command allows us to state the file containing the extensions. We can see the format of the config file in this page.\nThere are several things that we can use as the alternative name, such as email, DNS, or IP. I will create a new file server-ext.cnf with this content:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0\n")),(0,r.kt)("p",null,"Here I set DNS to multiple domain names: ",(0,r.kt)("em",{parentName:"p"},".pcbook.com and "),".pcbook.org. I also set IP to 0.0.0.0 which will be used when we develop on localhost."),(0,r.kt)("p",null,"Now in the certificate signing command, let\u2019s add the -extfile option and pass in the name of the extension config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf\n")),(0,r.kt)("p",null,"Now the result certificate file has a new extensions section with all the subject alternative names that we\u2019ve chosen:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Certificate:\n    ...\n    Signature Algorithm: sha1WithRSAEncryption\n        Issuer: C=FR, ST=Occitanie, L=Toulouse, O=Tech School, OU=Education, CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com\n        Validity\n            Not Before: Apr 10 18:17:05 2020 GMT\n            Not After : Jun  9 18:17:05 2020 GMT\n        Subject: C=FR, ST=Ile de France, L=Paris, O=PC Book, OU=Computer, CN=*.pcbook.com/emailAddress=pcbook@gmail.com\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (4096 bit)\n                Modulus:\n                    00:cb:e2:2b:c3:68:...\n                Exponent: 65537 (0x10001)\n        X509v3 extensions:\n            X509v3 Subject Alternative Name: \n                DNS:*.pcbook.com, DNS:*.pcbook.org, IP Address:0.0.0.0\n    Signature Algorithm: sha1WithRSAEncryption\n         5e:67:4d:f7:91:89:fc:...\n")),(0,r.kt)("p",null,"So looks like our automate script is ready, except for the fact that we have to enter a lot of password to protect the private keys.\nIn case we just want to use this for development and testing, we can tell openssl to not encrypt the private key, so that it won\u2019t ask us for the pass phrase.\nWe do that by adding the -nodes option to the openssl req command like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'rm *.pem\n\n# 1. Generate CA\'s private key and self-signed certificate\nopenssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca-key.pem -out ca-cert.pem -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca-cert.pem -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf\n\necho "Server\'s signed certificate"\nopenssl x509 -in server-cert.pem -noout -text\n')),(0,r.kt)("p",null,"Now if we run gen.sh again, it will not ask for passwords anymore. And if we look at the private key file, it will be PRIVATE KEY, and not ENCRYPTED PRIVATE KEY as before."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"-----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqhkiG9w0BAQEFAASCCS0wggkpAgEAAoICAQDL4ivDaIzDM3my\nVDzT2Mw5R9bicXS...AxAt2Ldmc4=\n-----END PRIVATE KEY-----\n")),(0,r.kt)("h2",u({},{id:"verify-a-certificate"}),"Verify a certificate"),(0,r.kt)("p",null,"One last thing before we finish, I will show you how to verify if a certificate is valid or not. We can do that with the openssl verify command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"openssl verify -CAfile ca-cert.pem server-cert.pem\n")),(0,r.kt)("p",null,"We just pass in the trusted CA\u2019s certificate and the certificate that we want to verify. If it returns OK then the certificate is valid."),(0,r.kt)("p",null,"And that\u2019s it for today\u2019s article. I hope it\u2019s useful for you. Thanks for reading and I\u2019ll see you guys in the next one!"),(0,r.kt)("h2",u({},{id:"source-code"}),"Source Code"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/vulnsystem/OpenssLabs/tree/main/getting-started"}),"The source Code have been pushed to the github.")," Please give star if it useful."))}y.isMDXComponent=!0},3638:function(e,t,n){t.Z=n.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);