"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68721],{35318:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return u}});var a=i(27378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var h=a.createContext({}),o=function(e){var t=a.useContext(h),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=o(e.components);return a.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,h=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=o(i),u=n,f=p["".concat(h,".").concat(u)]||p[u]||d[u]||s;return i?a.createElement(f,r(r({ref:t},c),{},{components:i})):a.createElement(f,r({ref:t},c))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=p;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var o=2;o<s;o++)r[o]=i[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},37191:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return m},default:function(){return g}});var a=i(35318),n=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))h.call(t,i)&&c(e,i,t[i]);if(l)for(var i of l(t))o.call(t,i)&&c(e,i,t[i]);return e};const p={id:"tls-handshake",title:"TLS Handshake",description:"the handshake of TLS"},u=void 0,f={unversionedId:"tls/tls-handshake",id:"tls/tls-handshake",title:"TLS Handshake",description:"the handshake of TLS",source:"@site/docs/tls/tls-handshake.md",sourceDirName:"tls",slug:"/tls/tls-handshake",permalink:"/zh-CN/docs/next/tls/tls-handshake",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2022/2/8",frontMatter:{id:"tls-handshake",title:"TLS Handshake",description:"the handshake of TLS"},sidebar:"tls",previous:{title:"Asymmetric Cryptography",permalink:"/zh-CN/docs/next/tls/asymmetric-cryptography"},next:{title:"Create Certificates",permalink:"/zh-CN/docs/next/tls/create-certificates"}},m=[{value:"Full handshake",id:"full-handshake",children:[{value:"client hello",id:"client-hello",children:[],level:3},{value:"server hello",id:"server-hello",children:[],level:3},{value:"authentication messages",id:"authentication-messages",children:[],level:3},{value:"client finish",id:"client-finish",children:[],level:3}],level:2},{value:"Abbreviated handshake with PSK resumption",id:"abbreviated-handshake-with-psk-resumption",children:[],level:2},{value:"0-RTT handshake",id:"0-rtt-handshake",children:[],level:2},{value:"TLS 1.3 vs TLS 1.2",id:"tls-13-vs-tls-12",children:[],level:2}],k={toc:m};function g(e){var t,n=e,{components:c}=n,p=((e,t)=>{var i={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&o.call(e,a)&&(i[a]=e[a]);return i})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),p),s(t,r({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"}),"TECHSCHOOL"),".")),(0,a.kt)("p",null,"OK, so now with all the knowledge we\u2019ve gained so far, let\u2019s take a closer look at how they\u2019re used in the TLS handshake protocol."),(0,a.kt)("h2",d({},{id:"full-handshake"}),"Full handshake"),(0,a.kt)("h3",d({},{id:"client-hello"}),"client hello"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"client-hello",src:i(27791).Z,width:"880",height:"495"}),"\nThe TLS 1.3 full handshake starts with a hello message that the client sends to the server. Actually this message contains a lot of things, but here I just list some important information:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, a list of protocol version that client supports."),(0,a.kt)("li",{parentName:"ol"},"Then a list of supported AEAD symmetric cipher suites. In this case, there are 2 options: AES-256-GCM or CHACHA20-POLY1305"),(0,a.kt)("li",{parentName:"ol"},"After that, there\u2019s a list of supported key exchange groups. For example, this client supports both Finite field Diffie-Hellman Ephemeral and Elliptic-Curve Diffie-Hellman Ephemeral."),(0,a.kt)("li",{parentName:"ol"},"That\u2019s why client also shares its 2 public keys, 1 for Diffie-Hellman, and the other for Elliptic-Curve Diffie-Hellman. This way, the server will be able to compute the shared secret key no mater what algorithm it chooses."),(0,a.kt)("li",{parentName:"ol"},"The last field client sends in this message is a list of signature algorithms it supports. This is for server to choose which algorithm it should use to sign the whole handshake. We will see how it works in a bit.")),(0,a.kt)("h3",d({},{id:"server-hello"}),"server hello"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"server-hello",src:i(15079).Z,width:"880",height:"495"}),"\nAfter receiving the client hello message, the server also sends back its hello message,which contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The selected protocol version TLS 1.3"),(0,a.kt)("li",{parentName:"ul"},"The selected cipher suites: AES-256-GCM"),(0,a.kt)("li",{parentName:"ul"},"The selected key exchange method: Diffie-Hellman Ephemeral"),(0,a.kt)("li",{parentName:"ul"},"And the server\u2019s public key for that chosen method."),(0,a.kt)("li",{parentName:"ul"},"The next field is a request for the client\u2019s certificate, which is optional and will only be sent if the server wants to authenticate the client by its certificate."),(0,a.kt)("li",{parentName:"ul"},"Normally on a HTTPS website, only the server side needs to send its certificate to the client. And that is sent in the next field of this message.")),(0,a.kt)("h3",d({},{id:"authentication-messages"}),"authentication messages"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"authentication-messages",src:i(93796).Z,width:"880",height:"495"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The next field is certificate verify, which is, in fact, the signature of the entire handshake up to this point. Here\u2019s how it is generated: The whole data from the beginning of the handshake up to the certificate request is called a handshake context. We concatenate this context with the server\u2019s certificate, hash it, and sign the hash value with the server\u2019s private key using 1 of the signature algorithms that the client supports."),(0,a.kt)("li",{parentName:"ul"},"In a similar fashion, the server finish is generated by concatenating the handshake context, the certificate, and the certificate verify, hash it, and put the hash value through the MAC algorithm of the chosen cipher suite. The result is the MAC of the entire handshake.")),(0,a.kt)("p",null,"Here the server certificate, certificate verify, and server finish are called authentication messages, because they are used to authenticate the server. With the signature and MAC of the entire handshake, TLS 1.3 is safe against several types of man-in-the-middle Downgrade attacks."),(0,a.kt)("h3",d({},{id:"client-finish"}),"client finish"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"client-finish",src:i(22392).Z,width:"880",height:"495"}),"\nNow after the client receives the hello message from server, it will validate the server\u2019s certificate with the root authority, and check the signature and MAC of the entire handshake to make sure it\u2019s not been tampered with.\nIf everything is good then the client sends its finish message with the MAC of the entire handshake up to this point, and optionally the client\u2019s certificate and certificate verify in case the server has requested.\nAnd that\u2019s the whole flow of the full TLS handshake."),(0,a.kt)("h2",d({},{id:"abbreviated-handshake-with-psk-resumption"}),"Abbreviated handshake with PSK resumption"),(0,a.kt)("p",null,"To improve the performance, the client and server don\u2019t always go through this full handshake. Sometimes, they perform abbreviated handshake by using preshared key resumption.\nThe idea is: after the previous handshake, the client and server already know each other, so they don\u2019t need to authenticate again.\nSo the server may send one or multiple session tickets to the client, which can be used as the pre-shared key (PSK) identity in the next handshake. It goes with a ticket lifetime as well as some other information.\n",(0,a.kt)("img",{loading:"lazy",alt:"PSK-resumption",src:i(31815).Z,width:"880",height:"495"}),"\nNow in the next handshake, the client will send a simple hello message, which contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A list of PSK identities (or tickets) obtained from the previous handshake"),(0,a.kt)("li",{parentName:"ul"},"A PSK key exchange mode, which can be either PSK only, or PSK with Diffie-Hellman."),(0,a.kt)("li",{parentName:"ul"},"If the PSK with Diffie-Hellman mode is used, then the client also needs to share its Diffie-Hellman public key. This will provide perfect forward secrecy, as well as allow the server to fallback to full handshake if needed.")),(0,a.kt)("p",null,"When the server receives this client hello message, it sends back its hello with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The selected pre-shared key identity"),(0,a.kt)("li",{parentName:"ul"},"The optional Diffie-Hellman public key of the server"),(0,a.kt)("li",{parentName:"ul"},"And the server Finish just like in the full handshake.\nFinally the client sends back its Finish, and that\u2019s the end of the PSK resumption.\nAs you can see, there\u2019s no certificate authentication between client and server in this abbreviated handshake.\nThis also opens up an opportunity for zero round-trip time (0-RTT) data, which means, the client doesn\u2019t need to wait for the handshake to complete to send its first application data to the server.")),(0,a.kt)("h2",d({},{id:"0-rtt-handshake"}),"0-RTT handshake"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"rrt-handshake",src:i(57305).Z,width:"880",height:"495"}),"\nIn 0-RTT, client sends the application data together with the client hello message. This data is encrypted using the key derived from the first PSK in the ticket list.\nAnd it also adds 1 more field: early data indication to tell the server that there\u2019s early application data being sent along.\nIf the server accepts this 0-RTT request, it will sends back the server hello just like in the normal PSK resumption, and optionally some application data as well.\nThe client will finish with a message containing the MAC, and an end-of-early-data indicator. That\u2019s how 0 round-trip time works in TLS 1.3.\nIts pros is reduce the latency by 1 round trip time. But the cons is openning up a potential threat of replay attack. Which means, the hacker can just copy and send the same encrypted 0-RTT request to the server multiple times. To avoid this, the server application must be implemented in a way that\u2019s resilient to duplicate requests."),(0,a.kt)("h2",d({},{id:"tls-13-vs-tls-12"}),"TLS 1.3 vs TLS 1.2"),(0,a.kt)("p",null,"Now before we finish, let\u2019s do a quick comparison of TLS 1.3 and TLS 1.2 to see what\u2019s new!\n",(0,a.kt)("img",{loading:"lazy",alt:"tls-new-version",src:i(73906).Z,width:"880",height:"495"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"TLS 1.3 has safer key exchange mechanisms, where the vulnerable RSA and other static key exchange methods are removed, leaving only ephemeral Diffie-Hellman or Elliptic-Curve Diffie-Hellman remain, therefore achieved perfect forward secrecy."),(0,a.kt)("li",{parentName:"ol"},"TLS 1.3 handshake is at least 1 round-trip faster than TLS 1.2."),(0,a.kt)("li",{parentName:"ol"},"Symmetric encryption in TLS 1.3 is more secure because AEAD cipher suite is mandatory, and it also removes some weak algorithms from the list such as Block Cipher Mode (CBC), RC4, or Triple DES."),(0,a.kt)("li",{parentName:"ol"},"The cipher suite in TLS 1.3 is also simpler, since it only contains the AEAD algorithm and a hash algorithm. The key exchange and signature algorithms are moved to separate fields. While in TLS 1.2, they\u2019re merged into the cipher suite. This makes the number of recommended cipher suites become too big, 37 options in TLS 1.2 if i remember correctly. While in TLS 1.3, there are only 5."),(0,a.kt)("li",{parentName:"ol"},"Next, TLS 1.3 also give us stronger signature, since it signs the entire handshake, not just cover some part of it as in TLS 1.2."),(0,a.kt)("li",{parentName:"ol"},"Last but not least, Elliptic-curve cryptography gets a significant attention in TLS 1.3, with some better curves algorithm added, such as Edward-curve digital signature algorithm, which is faster without sacrificing security.")),(0,a.kt)("p",null,"And that\u2019s everything I want to share with you in this article. Thanks for reading, and I\u2019ll catch you guys in the next one!"))}g.isMDXComponent=!0},31815:function(e,t,i){t.Z=i.p+"assets/images/PSK-resumption-4c458fc4d10424a22cc52a6b8f944bd3.png"},93796:function(e,t,i){t.Z=i.p+"assets/images/authentication-messages-1d5c4acd32a659f026ee9e1142f2d32d.png"},22392:function(e,t,i){t.Z=i.p+"assets/images/client-finish-de8b8b7b9e61caf41c29350b95345015.png"},27791:function(e,t,i){t.Z=i.p+"assets/images/client-hello-5f178cc8168dca75a790312205079521.png"},57305:function(e,t,i){t.Z=i.p+"assets/images/rrt-handshake-bfb98c9fc2692549a92050e667ebe795.png"},15079:function(e,t,i){t.Z=i.p+"assets/images/server-hello-383fdc3155af72e60fb73d0ad739b6be.png"},73906:function(e,t,i){t.Z=i.p+"assets/images/tls-new-version-e3683416410c5a0103a152a4f29e8bf7.png"}}]);