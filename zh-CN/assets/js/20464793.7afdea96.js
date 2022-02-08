"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13716],{35318:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return u}});var a=i(27378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),y=l(i),u=r,d=y["".concat(c,".").concat(u)]||y[u]||p[u]||n;return i?a.createElement(d,s(s({ref:t},h),{},{components:i})):a.createElement(d,s({ref:t},h))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,s=new Array(n);s[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<n;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},15977:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return y},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return g},default:function(){return m}});var a=i(35318),r=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,h=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&h(e,i,t[i]);if(o)for(var i of o(t))l.call(t,i)&&h(e,i,t[i]);return e};const y={id:"asymmetric-cryptography",title:"Asymmetric Cryptography",description:"Overview of asymmetric cryptography"},u=void 0,d={unversionedId:"tls/asymmetric-cryptography",id:"tls/asymmetric-cryptography",title:"Asymmetric Cryptography",description:"Overview of asymmetric cryptography",source:"@site/docs/tls/asymmetric-cryptography.md",sourceDirName:"tls",slug:"/tls/asymmetric-cryptography",permalink:"/zh-CN/docs/next/tls/asymmetric-cryptography",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1644319569,formattedLastUpdatedAt:"2022/2/8",frontMatter:{id:"asymmetric-cryptography",title:"Asymmetric Cryptography",description:"Overview of asymmetric cryptography"},sidebar:"tls",previous:{title:"Symmetric Cryptography",permalink:"/zh-CN/docs/next/tls/symmetric-cryptography"},next:{title:"TLS Handshake",permalink:"/zh-CN/docs/next/tls/tls-handshake"}},g=[{value:"Asymmetric Encryption",id:"asymmetric-encryption",children:[],level:2},{value:"Public key sharing",id:"public-key-sharing",children:[],level:2},{value:"Man-in-the-middle swaps the key",id:"man-in-the-middle-swaps-the-key",children:[],level:2},{value:"Digital certificate",id:"digital-certificate",children:[{value:"Certificate signing",id:"certificate-signing",children:[],level:3},{value:"Certificate sharing",id:"certificate-sharing",children:[],level:3}],level:2},{value:"Certificate Authority - A chain of trust",id:"certificate-authority---a-chain-of-trust",children:[],level:2},{value:"Digital signature",id:"digital-signature",children:[],level:2},{value:"Elliptic-Curve Cryptography",id:"elliptic-curve-cryptography",children:[],level:2}],f={toc:g};function m(e){var t,r=e,{components:h}=r,y=((e,t)=>{var i={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(i[a]=e[a]);return i})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},f),y),n(t,s({components:h,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"}),"TECHSCHOOL"),".")),(0,a.kt)("p",null,"Now let\u2019s get back to asymmetric cryptography! It\u2019s an awesome technology that has a wide range of applications."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"asymmetric-overview",src:i(25289).Z,width:"880",height:"495"}),"\nWe\u2019ve already explored 1 of its application, which is for symmetric secret key exchange, with Diffie-Hellman Ephemeral and Elliptic-Curve Diffie-Hellman Ephemeral.\nIn fact, RSA algorithm was also used for key exchange in the past, but it has been removed in TLS 1.3 due to various attacks and no forward-secrecy capability.\nAsymmetric cryptography is also used in encryption system. Here are asymmetric encryption algorithms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RSA with optimal asymmetric encryption padding (RSA-OAEP)."),(0,a.kt)("li",{parentName:"ul"},"RSA with public key cryptography standard 1 (RSA-PKCS1) with the latest version 2.2"),(0,a.kt)("li",{parentName:"ul"},"Elgamal Encryption algorithm.\nAnd finally, another important feature of asymmetric cryptography is for digital signature, which TLS uses extensively for authentication.\nSome popular digital signature algorithms used in TLS are:"),(0,a.kt)("li",{parentName:"ul"},"RSA with Probabilitic Signature Scheme."),(0,a.kt)("li",{parentName:"ul"},"Elliptic-Curve Digital Signature Algorithm."),(0,a.kt)("li",{parentName:"ul"},"Edwards-Curve Digital Signature Algorithm.\nWe will learn about digital signature shortly. But before that, let\u2019s learn how asymmetric encryption system works.")),(0,a.kt)("h2",p({},{id:"asymmetric-encryption"}),"Asymmetric Encryption"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"asymmetric-encryption",src:i(46491).Z,width:"880",height:"495"}),"\nSimilar as in symmetric encryption, Alice has a plaintext message that she wants to send to Bob.\nBut this time, there\u2019s no shared secret key. Instead, Alice encrypt the message with Bob\u2019s public key, and send the encrypted message to Bob.\nWhen Bob receives the message, he uses his private key to decrypt it.\nAlthough the public key and private key are different, they are still connected by some trapdoor function, just like what we\u2019ve seen in the Diffie-Hellman algorithm.\nThe idea is: keys come in pair, and only the private key of the same pair can decrypt the message encrypted with its public key.\nBecause of this, even when Harry the hacker has access to both Alice\u2019s encrypted message and Bob\u2019s public key, he cannot use that public key to decrypt the message."),(0,a.kt)("h2",p({},{id:"public-key-sharing"}),"Public key sharing"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"pubkey-sharing",src:i(79857).Z,width:"880",height:"495"}),"\nThe public key sharing is very simple. Bob just send the key to Alice directly over the public internet without the fear that the key can be used to decrypt any messages.\nThe key is public, so anyone can use it to encrypt messages that only Bob can read, even if they have never talked to each other before. It\u2019s really mind-blowing, isn\u2019t it?\nHowever, life\u2019s not that so easy!"),(0,a.kt)("h2",p({},{id:"man-in-the-middle-swaps-the-key"}),"Man-in-the-middle swaps the key"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"key-swap",src:i(4164).Z,width:"880",height:"495"}),"\nAlthough we know that Harry cannot decrypt the message with Bob\u2019s public key, he can still interfere with the public key sharing, and replace Bob\u2019s public key with his own public key.\nNow when Alice receive the key, she still thinks it\u2019s Bob\u2019s public key, but it\u2019s in fact Harry\u2019s. So if Alice encrypts her message with this key, Harry would be able to decrypt it with his private key.\nThe reason this can happen is because a key is simply just a number, and there\u2019s no identity information to tell us who its owner is.\nSo what can we do? Obviously, we should put the key together with some identity information. And that\u2019s nothing else but a digital certificate."),(0,a.kt)("h2",p({},{id:"digital-certificate"}),"Digital certificate"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"digital-certificate",src:i(2917).Z,width:"880",height:"495"}),"\nSo Bob puts his key inside his certificate, which has his name and other identity information on it. The certificate acts like a passport in the real world.\nBut how do we know it\u2019s really Bob who owns that certificate? What stops Harry from making a fake certificate under Bob\u2019s name but with Harry\u2019s public key?\nWell, just like in the real world, the passport must be issued by a passport authority after a process of identity verification. In digital world, the certificate must be verified and signed by a certificate authority.\nThis certificate authority and passport authority are trusted third party, who helps us prevent creation of fake passport and digital certificates."),(0,a.kt)("h3",p({},{id:"certificate-signing"}),"Certificate signing"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"certificate-signing",src:i(51840).Z,width:"880",height:"495"}),"\nThe certificate signing process happens like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bob has a pair of public and private key."),(0,a.kt)("li",{parentName:"ol"},"In the first step, he creates a certificate signing request, or CSR. This CSR contains his public key and some identity information, such as his name, organization, and email."),(0,a.kt)("li",{parentName:"ol"},"Then the second step, he signs the CSR with his private key, and sends it to the certificate authority."),(0,a.kt)("li",{parentName:"ol"},"The certificate authority will verify Bob\u2019s identity in the certificate. They can contact him to ask for more proof if necessary."),(0,a.kt)("li",{parentName:"ol"},"Then they use Bob\u2019s public key in the certificate to verify his signature. This is to make sure that Bob really owns the private key that paired with the public key in the certificate."),(0,a.kt)("li",{parentName:"ol"},"If everything is valid, the CA will sign the certificate with their own private key, and send it back to Bob.")),(0,a.kt)("h3",p({},{id:"certificate-sharing"}),"Certificate sharing"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"certificate-sharing",src:i(30733).Z,width:"880",height:"495"}),"\nNow Bob will share with Alice this certificate, which contains his public key, instead of sending just the public key as before.\nUpon receiving the certificate, Alice can easily verify its authenticity with the public key of the Certificate authority.\nBecause of this, Harry cannot replace Bob\u2019s public key with his key anymore, since he doesn\u2019t have the CA\u2019s private key to sign the fake certificate.\nNote that this only works because we all trust the Certificate Authority. If somehow the CA is not trustworthy, for example, if they give Harry their private key, then we\u2019re in a serious trouble!"),(0,a.kt)("h2",p({},{id:"certificate-authority---a-chain-of-trust"}),"Certificate Authority - A chain of trust"),(0,a.kt)("p",null,"In reality, there\u2019s a chain of certificate authorities.\n",(0,a.kt)("img",{loading:"lazy",alt:"certificate-authority",src:i(99303).Z,width:"880",height:"495"}),"\nAt the top level is a root certificate authority, who signs their own certificate, and also signs the certificate of their subordinate, which is an intermediate certificate authority.\nThis authority can sign the certificate of other intermediate authorities, or they can sign the end-entity certificate (or leaf certificate).\nEach certificate will reference back to the certificate of their higher level authority, up to the root.\nYour operating systems and browsers store a list of certificates of trusted root certificate authorities. That way they can easily verify the authenticity of all certificates."),(0,a.kt)("h2",p({},{id:"digital-signature"}),"Digital signature"),(0,a.kt)("p",null,"We\u2019ve talked a lot about signing a digital signature, so let\u2019s see how it really works!\n",(0,a.kt)("img",{loading:"lazy",alt:"digital-signature",src:i(5960).Z,width:"880",height:"495"}),"\nTo sign a document:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The signer first need to hash it."),(0,a.kt)("li",{parentName:"ol"},"Then the hash value is encrypted using the signer\u2019s private key."),(0,a.kt)("li",{parentName:"ol"},"The result will be the digital signature."),(0,a.kt)("li",{parentName:"ol"},"Then this signature will be attached to the original document.\nAnd that\u2019s it for the signing process. Now how can we verify that the signature is valid?")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"verify-signature",src:i(28764).Z,width:"880",height:"495"}),"\nWell, we just do a reversed process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First we detach the signature from the document"),(0,a.kt)("li",{parentName:"ol"},"Decrypt it with the signer\u2019s public key to get a hash value."),(0,a.kt)("li",{parentName:"ol"},"Then we hash the document with the same hash algorithm used in the signing process."),(0,a.kt)("li",{parentName:"ol"},"The result is another hash value."),(0,a.kt)("li",{parentName:"ol"},"Then we just compare the 2 hash values."),(0,a.kt)("li",{parentName:"ol"},"If they\u2019re the same then the signature is valid.")),(0,a.kt)("h2",p({},{id:"elliptic-curve-cryptography"}),"Elliptic-Curve Cryptography"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"elliptic-curve",src:i(87396).Z,width:"880",height:"495"}),"\nElliptic-curve cryptography (or ECC) is an approach to asymmetric cryptography, where the algorithm is similar, but a different trapdoor function is used.\nThat trapdoor function is based on the algebraic structure of elliptic curves. And that\u2019s why the name.\nOne amazing value of elliptic curve cryptography is: it requires smaller keys to provide the equivalent security level. You can see it in this comparison with RSA.\nThe U.S. National Security Agency (NSA) used to protect their top secret with ECC 384-bits key, which provides the same security level with a RSA-7680 bit key.\n",(0,a.kt)("strong",{parentName:"p"},"Sounds amazing, right?"),"\nHowever, Elliptic curve cryptography is an easier target for quantum-computing attack. Shor\u2019s algorithm can break ECC on a hypothetical quantum computer with less amount of quantum resources than to break RSA.\nThere might be decades before that strong quantum computer actually be built and used. But have we prepared anything for that yet? Is there any quantum-resistant algorithm?\nYes, there is Supersingular Isogeny Diffie-Hellman key exchange algorithm, which is also based on the Elliptic Curve Cryptography."))}m.isMDXComponent=!0},46491:function(e,t,i){t.Z=i.p+"assets/images/asymmetric-encryption-86beeca3c632e0eb5fa70a33c0e07f0a.png"},25289:function(e,t,i){t.Z=i.p+"assets/images/asymmetric-overview-4b4225f21c160ad9a57edd113e730068.png"},99303:function(e,t,i){t.Z=i.p+"assets/images/certificate-authority-37d0a08c26ac9af3fd608c5dfbe5adf2.png"},30733:function(e,t,i){t.Z=i.p+"assets/images/certificate-sharing-f12f2ca7e54c9c4cc41b28ca56bf6697.png"},51840:function(e,t,i){t.Z=i.p+"assets/images/certificate-signing-64bf09d40be3315fd7b79c58be37578f.png"},2917:function(e,t,i){t.Z=i.p+"assets/images/digital-certificate-3f8d95984cfe64cdc568c4a6624f18d4.png"},5960:function(e,t,i){t.Z=i.p+"assets/images/digital-signature-eeb4196dc3b666b1b9316cc2e1977751.png"},87396:function(e,t,i){t.Z=i.p+"assets/images/elliptic-curve-0d9de7e1b8ff7a1adc62cc432a4427b8.png"},4164:function(e,t,i){t.Z=i.p+"assets/images/key-swap-1bb633b53b0897a3e6f24e92206a3187.png"},79857:function(e,t,i){t.Z=i.p+"assets/images/pubkey-sharing-0ce2f61a7dcddd1128238a2c5e9a0f37.png"},28764:function(e,t,i){t.Z=i.p+"assets/images/verify-signature-0ab603f282999656b87d40fcf7066826.png"}}]);