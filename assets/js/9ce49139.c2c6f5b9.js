"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73838],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),A=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=A(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=A(n),u=r,d=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var A=2;A<i;A++)o[A]=n[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))A.call(t,n)&&l(e,n,t[n]);return e};const p={id:"symmetric-cryptography",title:"Symmetric Cryptography",description:"Overview of symmetric cryptography"},u=void 0,d={unversionedId:"tls/symmetric-cryptography",id:"version-2.0.0-beta.15/tls/symmetric-cryptography",title:"Symmetric Cryptography",description:"Overview of symmetric cryptography",source:"@site/versioned_docs/version-2.0.0-beta.15/tls/symmetric-cryptography.md",sourceDirName:"tls",slug:"/tls/symmetric-cryptography",permalink:"/docs/2.0.0-beta.15/tls/symmetric-cryptography",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/tls/symmetric-cryptography.md",tags:[],version:"2.0.0-beta.15",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645620430,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"symmetric-cryptography",title:"Symmetric Cryptography",description:"Overview of symmetric cryptography"},sidebar:"tls",previous:{title:"TLS Overview",permalink:"/docs/2.0.0-beta.15/tls/ssl-tls-overview"},next:{title:"Asymmetric Cryptography",permalink:"/docs/2.0.0-beta.15/tls/asymmetric-cryptography"}},m=[{value:"Bit-flipping attack",id:"bit-flipping-attack",children:[],level:2},{value:"Authenticated Encryption (AE)",id:"authenticated-encryption-ae",children:[{value:"The first step is to encrypt.",id:"the-first-step-is-to-encrypt",children:[],level:3},{value:"The second step is to authenticate.",id:"the-second-step-is-to-authenticate",children:[],level:3},{value:"Add some Associated Data (AD)",id:"add-some-associated-data-ad",children:[],level:3},{value:"Decryption and MAC verification",id:"decryption-and-mac-verification",children:[],level:3}],level:2},{value:"Secret key exchange",id:"secret-key-exchange",children:[{value:"Diffie-Hellman key exchange",id:"diffie-hellman-key-exchange",children:[],level:3},{value:"Key Derivation Function - KDF",id:"key-derivation-function---kdf",children:[],level:3},{value:"Trapdoor function",id:"trapdoor-function",children:[],level:3},{value:"Static or Ephemeral key?",id:"static-or-ephemeral-key",children:[],level:3}],level:2}],y={toc:m};function g(e){var t,r=e,{components:l}=r,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&A.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),p),i(t,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"}),"TECHSCHOOL"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"symmetric-cryptography",src:n(62594).Z,width:"880",height:"495"}),"\nAlright, now let\u2019s learn more about symmetric cryptography. I guess you\u2019ve already known the basics.\nFirst of all, Alice has a plaintext message that she wants to send to Bob, but doesn\u2019t want any one in the public zone to read it.\nSo she encrypts the message with a secret key that they have shared with each other before. Then she sends the encrypted message to Bob via the public internet.\nUpon receiving the encrypted message, Bob will easily use the same secret key to decrypt it.\nSince the same key is used for encryption and decryption, it\u2019s kind of symmetric, so we have the name symmetric cryptography.\nNow there might be a hacker Harry, who can catch their exchanged message on the public network. However, the message is already encrypted, and Harry doesn\u2019t have the secret key, so he won\u2019t be able to decrypt it.\nBut he can still change it!"),(0,a.kt)("h2",h({},{id:"bit-flipping-attack"}),"Bit-flipping attack"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"bit-flipping",src:n(34029).Z,width:"880",height:"495"}),"\nThere\u2019s one technique called bit-flipping attack that works like this:\nLet\u2019s say this time Alice is not talking to Bob, but talking to her online bank. And she wants to send 100 dollars to someone. The message is encrypted with a secret key and sent to the bank via the internet.\nNow Harry catches the encrypted message. Although he can\u2019t decrypt it, he can flip some of its bits from 1 to 0 and from 0 to 1, then forward that modified message to the bank.\nNow when the bank decrypts it, they will get a different plaintext content. In this case, it has become 900 dollars instead of 100.\nSo it\u2019s very dangerous. That\u2019s why we need to make sure that the encrypted message hasn\u2019t been altered during transmission."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"But how?")),(0,a.kt)("h2",h({},{id:"authenticated-encryption-ae"}),"Authenticated Encryption (AE)"),(0,a.kt)("p",null,"One way to do that is to use Authenticated Encryption. The idea is to not just encrypt, but also authenticate the encrypted message.\n",(0,a.kt)("img",{loading:"lazy",alt:"ae",src:n(64938).Z,width:"880",height:"495"})),(0,a.kt)("h3",h({},{id:"the-first-step-is-to-encrypt"}),"The first step is to encrypt."),(0,a.kt)("p",null,"Alice\u2019s plaintext message goes through a symmetric encryption algorithm, such as AES-256-GCM or CHACHA20.\nThis encryption algorithm also takes a shared secret key and a random nonce, or an initialization vector (IV) as input. And it will return the encrypted message."),(0,a.kt)("h3",h({},{id:"the-second-step-is-to-authenticate"}),"The second step is to authenticate."),(0,a.kt)("p",null,"The encrypted message, the secret key, and the nonce become inputs of a MAC algorithm, such as GMAC if you use AES-256-GCM, or POLY1305 if you use CHACHA20 encryption algorithm.\nThis MAC algorithm acts like a cryptographic hash function, and its output is a MAC, or message authentication code.\nNow this MAC will be tagged along with the encrypted message, and the final result will be sent to Bob. Because of this, we sometimes call this MAC an authentication tag."),(0,a.kt)("h3",h({},{id:"add-some-associated-data-ad"}),"Add some Associated Data (AD)"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"ad",src:n(67733).Z,width:"880",height:"495"}),"\nIn TLS 1.3, besides the encrypted message, we also want to authenticate some associated data, such as: the addresses, the ports, the protocol version, or the sequence number. This information is unencrypted and known by both communicating parties.\nSo the associated data is also an input of the MAC algorithm. And because of this, the whole process is called Authenticated Encryption with Associated Data, or in short, ",(0,a.kt)("strong",{parentName:"p"}," AEAD "),"."),(0,a.kt)("h3",h({},{id:"decryption-and-mac-verification"}),"Decryption and MAC verification"),(0,a.kt)("p",null,"Now let's see how Bob can check that the encrypted message hasn\u2019t been changed during transmission.\n",(0,a.kt)("img",{loading:"lazy",alt:"decrypt",src:n(18673).Z,width:"880",height:"495"}),"\nIt\u2019s simply a reverse process. Starting with the encrypted message with MAC, we untag the MAC from the encrypted message.\nThen the encrypted message will go to the MAC algorithm together with the shared secret key and the nonce. Note that this is the same nonce that is used in the encryption process. Usually the nonce is padded to the encrypted message before sending to the receiver.\nThe associated data will also go into the MAC algorithm. And the output of it will be another MAC."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"verify",src:n(79075).Z,width:"880",height:"495"}),"\nNow Bob can simply compare the 2 MAC values. If they\u2019re different then he knows that the encrypted message has been changed. Else, he can safely decrypt the message and use it with the confident that it\u2019s the same plaintext message that Alice sent."),(0,a.kt)("h2",h({},{id:"secret-key-exchange"}),"Secret key exchange"),(0,a.kt)("p",null,"However, there\u2019s 1 question: How Bob and Alice share the secret key with each other without leaking it to the public?\n",(0,a.kt)("img",{loading:"lazy",alt:"key-exchange",src:n(92262).Z,width:"880",height:"495"}),"\nWell, the answer is: they need to use asymmetric or public-key cryptography for that purpose. Specifically, they can use either Diffie-Hellman Ephemeral, or Elliptic-Curve Diffie-Hellman Ephemeral."),(0,a.kt)("h3",h({},{id:"diffie-hellman-key-exchange"}),"Diffie-Hellman key exchange"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"DH",src:n(35600).Z,width:"880",height:"495"}),"\nLet\u2019s see how Diffie Hellman key-exchange works!\nFirst, Alice and Bobs both agree on 2 numbers: the base g, and the modulus p. These numbers are known publicly by everyone.\nThen each of them secretly choose a private number. Alice\u2019s private key is number a, and Bob\u2019s private key is number b.\nThen Alice computes her public key and sends it to Bob:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"A = (g^a) mod p\n")),(0,a.kt)("p",null,"Similarly, Bob computes his public key and sends it to Alice:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{})," B = (g^b) mod p\n")),(0,a.kt)("p",null,"Then Alice will receive Bob\u2019s public key B, and Bob will receive Alice\u2019s public key A."),(0,a.kt)("p",null,"Now the magic happens!"),(0,a.kt)("p",null,"Alice computes:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"S = (B^a) mod p\n")),(0,a.kt)("p",null,"Bob computes:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"S = (A^b) mod p\n")),(0,a.kt)("p",null,"And these 2 values magically equal to the same number S."),(0,a.kt)("p",null,"Why? Let's do the math:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"(B^a) mod p = (g^b)^a mod p = ( g^(b*a) ) mod p\n(A^b) mod p = (g^a)^b mod p = ( g^(a*b) ) mod p\n")),(0,a.kt)("p",null,"So Alice and Bob come up with the same secret number S without leaking it to the public."),(0,a.kt)("h3",h({},{id:"key-derivation-function---kdf"}),"Key Derivation Function - KDF"),(0,a.kt)("p",null,"Each encryption algorithm may require a secret key of different length. So to make the secret key, Alice and Bob must put S to the same key derivation function (KDF), and the output will be a shared secret key of required length.\nIn TLS 1.3, we use a HMAC-based key derivation function, so that\u2019s why the name ",(0,a.kt)("strong",{parentName:"p"}," HKDF "),"."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"HKDF2",src:n(9370).Z,width:"880",height:"495"}),"\nGenerally, the KDF takes following inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An input key material (or IKM). In our case, the IKM is the number S."),(0,a.kt)("li",{parentName:"ul"},"How long we want the output key to be, such as 128-bit."),(0,a.kt)("li",{parentName:"ul"},"A cryptographic hash function, such as HMAC-SHA256."),(0,a.kt)("li",{parentName:"ul"},"Optionally some context or application-specific information"),(0,a.kt)("li",{parentName:"ul"},"An optional salt.\nWith all of these inputs, KDF will produce a secret key of required length.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"HKDF1",src:n(56080).Z,width:"880",height:"495"})),(0,a.kt)("h3",h({},{id:"trapdoor-function"}),"Trapdoor function"),(0,a.kt)("p",null,"Now let's get back to the Diffie-Hellman key exchange.\nWe know that p, g, A, B are known to the public, which means the hacker, Harry, also has access to those numbers.\nWe may wonder: Is this key exchange mechanism secure? Or given p, g, A, B, can Harry figure out the secret numbers: a, b, S?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"trapdoor1",src:n(61790).Z,width:"880",height:"495"}),"\nFortunately, these functions will be come trapdoors if we choose good values for p, g, a, b."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose p as a 2048-bit prime number,"),(0,a.kt)("li",{parentName:"ul"},"Choose g as a primitive root modulo p,"),(0,a.kt)("li",{parentName:"ul"},"And choose a, b to be 256-bit random integers.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"trapdoor2",src:n(2176).Z,width:"880",height:"495"}),"\nA trapdoor function basically means it\u2019s easy to compute in one way but hard in the other. In this case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given p, g, a, its\u2019s easy to compute A."),(0,a.kt)("li",{parentName:"ul"},"But given p, g, A, it\u2019s very hard to compute a.")),(0,a.kt)("p",null,"It\u2019s easy to see that A can be computed pretty fast with O(log(a)) time complexity. It\u2019s a well-known Modular exponentiation problem.\nComputing a, on the other hand, is much harder. It\u2019s a Discrete logarithm problem, which takes our current-generation of computers a very long time to solve.\nSo we\u2019re at least safe for now, or until the next generation of strong quantum-computers comes into play.\nHowever, for now, \u201ca long time to solve\u201d doesn\u2019t mean unsolvable, right?"),(0,a.kt)("h3",h({},{id:"static-or-ephemeral-key"}),"Static or Ephemeral key?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"static",src:n(57057).Z,width:"880",height:"495"}),"\nIf Alice and Bob use the same private keys a, and b for every sessions that they communicate, then what happens is, Harry can record all of those sessions, and start solving for a from the session 1.\nAlthough it will take him a long time to solve it, let\u2019s say after session N, he gets the right a. Now he can use it to compute the secret number S, and thus, he would be able to decrypt all of the recorded conversations.\nDoes it sound scary? How can we prevent it?"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"ephemeral",src:n(33106).Z,width:"880",height:"495"}),"\nThe answer is ephemeral key. As the name may suggest, we use different private key or each session. So even if Harry can solve the secret key for 1 session, he could not use it for other ones.\nThis is called perfect forward secrecy in TLS.\nSo now you understand what Diffie-Hellman Ephemeral means. It\u2019s just Diffie-Hellman with ephemeral or short-lived keys."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," How about Elliptic-Curve Diffie-Hellman Ephemeral? "),"\n",(0,a.kt)("img",{loading:"lazy",alt:"elliptic-curve",src:n(87396).Z,width:"880",height:"495"})))}g.isMDXComponent=!0},35600:function(e,t,n){t.Z=n.p+"assets/images/DH-211e4244fe048e4848c4981e480f4613.png"},56080:function(e,t,n){t.Z=n.p+"assets/images/HKDF1-97f4ba2e6239285dc50b1bb12c4a4bed.png"},9370:function(e,t,n){t.Z=n.p+"assets/images/HKDF2-ea94ba795bb64d126edb021c5dbb6dba.png"},67733:function(e,t,n){t.Z=n.p+"assets/images/ad-f0f93105964f0710e924b848c04e98a0.png"},64938:function(e,t,n){t.Z=n.p+"assets/images/ae-478c885568dbf7cfa7ad56ecc4e7248d.png"},34029:function(e,t,n){t.Z=n.p+"assets/images/bit-flipping-11b09fe14207211a5cd3a1c802ad7b2f.png"},18673:function(e,t,n){t.Z=n.p+"assets/images/decrypt-f9df3565ff24b95595ba7b3e67208554.png"},87396:function(e,t,n){t.Z=n.p+"assets/images/elliptic-curve-0d9de7e1b8ff7a1adc62cc432a4427b8.png"},33106:function(e,t,n){t.Z=n.p+"assets/images/ephemeral-7b7762796fe4b373ea30a8df4447edf5.png"},92262:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-7c6d839dc53eb462ced9ed1e5c3850dd.png"},57057:function(e,t,n){t.Z=n.p+"assets/images/static-18d3c3ba1617850ea21bdb1fa94edda6.png"},62594:function(e,t,n){t.Z=n.p+"assets/images/symmetric-cryptography-b5e11f8d1e27a9ccf231b58336503873.png"},61790:function(e,t){t.Z="data:image/png;base64,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"},2176:function(e,t,n){t.Z=n.p+"assets/images/trapdoor2-15eebfcbe64dae64a0b5af529ed3f649.png"},79075:function(e,t,n){t.Z=n.p+"assets/images/verify-401dd73adf8864b261e8e87f26e00558.png"}}]);