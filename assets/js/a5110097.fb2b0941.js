"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94197],{35318:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(f,o(o({ref:t},h),{},{components:a})):n.createElement(f,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5270:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return m},default:function(){return v}});var n=a(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&h(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&h(e,a,t[a]);return e};const d={id:"hash-function",title:"Hash Function",description:"Overview of hash function"},u=void 0,f={unversionedId:"tls/hash-function",id:"tls/hash-function",title:"Hash Function",description:"Overview of hash function",source:"@site/docs/tls/hash-function.md",sourceDirName:"tls",slug:"/tls/hash-function",permalink:"/docs/next/tls/hash-function",editUrl:"https://github.com/TheBestOrNothing/thebestornothing.github.io/edit/main/website/docs/tls/hash-function.md",tags:[],version:"current",lastUpdatedBy:"thebestornothing",lastUpdatedAt:1645623593,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"hash-function",title:"Hash Function",description:"Overview of hash function"},sidebar:"tls",next:{title:"Public Key Cryptography Basic",permalink:"/docs/next/tls/public-key-cryptography"}},m=[{value:"The properties of hash functions",id:"the-properties-of-hash-functions",children:[],level:2},{value:"Examples of Cryptographic Hash Functions",id:"examples-of-cryptographic-hash-functions",children:[{value:"Password Verification",id:"password-verification",children:[],level:3},{value:"Signature Generation and Verification",id:"signature-generation-and-verification",children:[],level:3},{value:"Verifying File and Message Integrity",id:"verifying-file-and-message-integrity",children:[],level:3},{value:"Bitcoin practice",id:"bitcoin-practice",children:[],level:3}],level:2},{value:"MD VS SHA",id:"md-vs-sha",children:[{value:"Message Digest (MD)",id:"message-digest-md",children:[],level:3},{value:"Secure Hash Function (SHA)",id:"secure-hash-function-sha",children:[],level:3}],level:2}],g={toc:m};function v(e){var t,i=e,{components:h}=i,d=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(i,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),d),r(t,o({components:h,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. "),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"asymmetric-overview",src:a(13251).Z,width:"508",height:"358"})),(0,n.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Input and data like food")))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"asymmetric-overview",src:a(48133).Z,width:"612",height:"408"})),(0,n.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Hash Fucntion like digest")))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"asymmetric-overview",src:a(83503).Z,width:"1100",height:"734"})),(0,n.kt)("div",p({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Hash Value like excrement")))),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"asymmetric-overview",src:a(45399).Z,width:"511",height:"338"})),(0,n.kt)("h2",p({},{id:"the-properties-of-hash-functions"}),"The properties of hash functions"),(0,n.kt)("p",null,"cryptographic hash functions exhibit these three properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"They are \u201ccollision-free.\u201d This means that no two input hashes should map to the same output hash. "),(0,n.kt)("li",{parentName:"ul"},"They can be hidden. It should be difficult to guess the input value for a hash function from its output. "),(0,n.kt)("li",{parentName:"ul"},"They should be puzzle-friendly. It should be difficult to select an input that provides a pre-defined output. Thus, the input should be selected from a distribution that's as wide as possible. ")),(0,n.kt)("h2",p({},{id:"examples-of-cryptographic-hash-functions"}),"Examples of Cryptographic Hash Functions"),(0,n.kt)("p",null,"Cryptographic hash functions are widely used in cryptocurrencies to pass transaction information anonymously. For example, Bitcoin, the original and largest cryptocurrency, uses the SHA-256 cryptographic hash function in its algorithm. Similarly, IOTA, a platform for the Internet of Things, has its own cryptographic hash function, called Curl."),(0,n.kt)("p",null,"However, hashes have other applications in the real world. These are some of the most common cryptographic applications:"),(0,n.kt)("h3",p({},{id:"password-verification"}),"Password Verification"),(0,n.kt)("p",null,"Storing passwords in a regular text file is dangerous, so nearly all sites store passwords as hashes. When a user inputs their password, it is hashed and the result is compared to the list of hashed values stored on the company's servers. This is not a fool-proof practice, however, as the Collection #1 trove of 21 million stolen passwords, discovered in 2019, demonstrates.2"),(0,n.kt)("h3",p({},{id:"signature-generation-and-verification"}),"Signature Generation and Verification"),(0,n.kt)("p",null,"Verifying signatures is a mathematical process used to verify the authenticity of digital documents or messages. A valid digital signature, where the prerequisites are satisfied, gives its receiver strong proof that the message was created by a known sender and that the message was not altered in transit. A digital signature scheme typically consists of three algorithms: a key generation algorithm; a signing algorithm that, given a message and a private key, produces a signature; and a signature verifying algorithm. Merkle Trees, a technology used in cryptocurrencies, is a kind of digital signature."),(0,n.kt)("h3",p({},{id:"verifying-file-and-message-integrity"}),"Verifying File and Message Integrity"),(0,n.kt)("p",null,'Hashes can be used to make sure messages and files transmitted from sender to receiver are not tampered with during transit. The practice builds a "chain of trust." For example, a user might publish a hashed version of their data and the key so that recipients can compare the hash value they compute to the published value to make sure they align.'),(0,n.kt)("h3",p({},{id:"bitcoin-practice"}),"Bitcoin practice"),(0,n.kt)("p",null,"Mining: Breaking down everything you need to know about Bitcoin mining, from blockchain and block rewards to proof of work and mining pools."),(0,n.kt)("p",null,'Merkle Tree: In cryptography and computer science, a hash tree or Merkle tree is a tree in which every "leaf" (node) is labelled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labelled with the cryptographic hash of the labels of its child nodes. '),(0,n.kt)("h2",p({},{id:"md-vs-sha"}),"MD VS SHA"),(0,n.kt)("p",null,"Let us briefly see some popular hash functions"),(0,n.kt)("h3",p({},{id:"message-digest-md"}),"Message Digest (MD)"),(0,n.kt)("p",null,"MD5 was most popular and widely used hash function for quite some years. MD5 digests have been widely used in the software world to provide assurance about integrity of transferred file. For example, file servers often provide a pre-computed MD5 checksum for the files, so that a user can compare the checksum of the downloaded file to it."),(0,n.kt)("h3",p({},{id:"secure-hash-function-sha"}),"Secure Hash Function (SHA)"),(0,n.kt)("p",null,"Family of SHA comprise of four SHA algorithms; SHA-0, SHA-1, SHA-2, and SHA-3. Though from same family, there are structurally different."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference 1: ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.investopedia.com/news/cryptographic-hash-functions/"}),"Cryptographic Hash Functions"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference 2: ",(0,n.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Hash_function"}),"Hash function from WiKi"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference 3: ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.tutorialspoint.com/cryptography/cryptography_hash_functions.htm"}),"Hash function image"),".")))}v.isMDXComponent=!0},83503:function(e,t,a){t.Z=a.p+"assets/images/digest-a287523c171f1292839fd6d6ffe759ac.jpg"},45399:function(e,t,a){t.Z=a.p+"assets/images/excrement-bce0f31da76b8e3b2dd944e6b0d99466.jpg"},48133:function(e,t,a){t.Z=a.p+"assets/images/food-dfd253338273ad968d95ea7837675ff7.jpg"},13251:function(e,t,a){t.Z=a.p+"assets/images/hash-functions-d969cb0d1469fdc3d5839c0fdfaed9e7.jpg"}}]);