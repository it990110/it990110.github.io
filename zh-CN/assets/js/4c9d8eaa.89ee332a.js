"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83692],{35318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(a),p=n,d=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70541:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return U},default:function(){return C},frontMatter:function(){return T},metadata:function(){return D},toc:function(){return P}});var r=a(35318),n=a(27378),o=a(94157),i=a(2411),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({to:e,children:t}){return n.createElement(i.default,{to:e},t||n.createElement(o.Z,{id:"team.profile.websiteLinkLabel"},"website"))}function b({className:e,name:t,children:a,githubUrl:r,twitterUrl:o}){return n.createElement("div",{className:e},n.createElement("div",{className:"card card--full-height"},n.createElement("div",{className:"card__header"},n.createElement("div",{className:"avatar avatar--vertical"},n.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${r}.png`,alt:`${t}'s avatar`}),n.createElement("div",{className:"avatar__intro"},n.createElement("h3",{className:"avatar__name"},t)))),n.createElement("div",{className:"card__body"},a),n.createElement("div",{className:"card__footer"},n.createElement("div",{className:"button-group button-group--block"},r&&n.createElement("a",{className:"button button--secondary",href:r},"GitHub"),o&&n.createElement("a",{className:"button button--secondary",href:o},"Twitter")))))}function f(e){return n.createElement(b,(t=((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))h.call(t,a)&&p(e,a,t[a]);return e})({},e),c(t,s({className:"col col--6 margin-bottom--lg"}))));var t}function g(){return n.createElement("div",{className:"row"},n.createElement(f,{name:"Alexey Pyltsyn",githubUrl:"https://github.com/lex111"},n.createElement(o.Z,{id:"team.profile.Alexey Pyltsyn.body"},"Obsessed open-source enthusiast \ud83d\udc4b Eternal amateur at everything \ud83e\udd37\u200d\u2642\ufe0f Maintainer of Russian docs on PHP, React, Kubernetes and much more \ud83e\uddd0")),n.createElement(f,{name:"Joel Marcey",githubUrl:"https://github.com/JoelMarcey",twitterUrl:"https://twitter.com/joelmarcey"},n.createElement(o.Z,{id:"team.profile.Joel Marcey.body"},"Docusaurus founder and now ever grateful Docusaurus cheerleader to those who actually write code for it.")),n.createElement(f,{name:"S\xe9bastien Lorber",githubUrl:"https://github.com/slorber",twitterUrl:"https://twitter.com/sebastienlorber"},n.createElement(o.Z,{id:"team.profile.Sebastien Lorber.body",values:{website:n.createElement(d,{to:"https://sebastienlorber.com/"}),devto:n.createElement(i.default,{to:"https://dev.to/sebastienlorber"},"Dev.to")}},"React lover since 2014. Freelance, helping Facebook ship Docusaurus v2. He writes regularly, on his {website} and {devto}.")),n.createElement(f,{name:"Sida Chen",githubUrl:"https://github.com/Josh-Cena",twitterUrl:"https://twitter.com/SidaChen63"},n.createElement(o.Z,{id:"team.profile.Sida Chen.body"},"Student from Shanghai, China. Enthusiastic open-source project creator, but never actually works hard on those projects he created.")),n.createElement(f,{name:"Yangshun Tay",githubUrl:"https://github.com/yangshun",twitterUrl:"https://twitter.com/yangshunz"},n.createElement(o.Z,{id:"team.profile.Yangshun Tay.body"},"Full Front End Stack developer who likes working on the Jamstack. Working on Docusaurus made him Facebook's unofficial part-time Open Source webmaster, which is an awesome role to be in.")))}function y(){return n.createElement("div",{className:"row"},n.createElement(f,{name:"Endilie Yacop Sucipto",githubUrl:"https://github.com/endiliey",twitterUrl:"https://twitter.com/endiliey"},n.createElement(o.Z,{id:"team.profile.Endilie Yacop Sucipto.body"},"Maintainer @docusaurus \xb7 \ud83d\udd25\ud83d\udd25\ud83d\udd25")),n.createElement(f,{name:"Wei Gao",githubUrl:"https://github.com/wgao19",twitterUrl:"https://twitter.com/wgao19"},n.createElement(o.Z,{id:"team.profile.Wei Gao.body"},"\ud83c\udffb\u200d\ud83c\udf3e Work in progress React developer, maintains Docusaurus, writes docs and spams this world with many websites.")))}function w(){return n.createElement("div",{className:"row"},n.createElement(f,{name:"Anshul Goyal",githubUrl:"https://github.com/anshulrgoyal",twitterUrl:"https://twitter.com/ar_goyal"},n.createElement(o.Z,{id:"team.profile.Anshul Goyal.body",values:{websiteLink:n.createElement(i.default,{href:"https://anshulgoyal.dev/"},n.createElement(o.Z,{id:"team.profile.Anshul Goyal.body.websiteLink.label"},"website"))}},"Fullstack developer who loves to code and try new technologies. In his free time, he contributes to open source, writes blog posts on his {websiteLink} and watches Anime.")),n.createElement(f,{name:"Drew Alexander",githubUrl:"https://github.com/drewbi"},n.createElement(o.Z,{id:"team.profile.Drew Alexander.body"},"Developer and Creative, trying to gain the skills to build whatever he can think of.")),n.createElement(f,{name:"Fanny Vieira",githubUrl:"https://github.com/fanny",twitterUrl:"https://twitter.com/fannyvieiira"},n.createElement(o.Z,{id:"team.profile.Fanny Vieira.body",values:{blogLink:n.createElement(i.default,{href:"https://dev.to/fannyvieira"},n.createElement(o.Z,{id:"team.profile.Fanny Vieira.body.blogLink.label"},"her blog")),spotifyLink:n.createElement(i.default,{href:"https://open.spotify.com/user/anotherfanny"},n.createElement(o.Z,{id:"team.profile.Fanny Vieira.body.spotifyLink.label"},"Spotify playlists"))}},"Fanny got started with web development in high school, building a project for the school kitchen. In her free time she loves contributing to Open Source, occasionally writing on {blogLink} about her experiences, cooking, and creating {spotifyLink}.")),n.createElement(f,{name:"Sam Zhou",githubUrl:"https://github.com/SamChou19815",twitterUrl:"https://twitter.com/SamChou19815"},n.createElement(o.Z,{id:"team.profile.Sam Zhou.body",values:{websiteLink:n.createElement(i.default,{href:"https://developersam.com"},n.createElement(o.Z,{id:"team.profile.Anshul Goyal.body.websiteLink.label"},"website")),samLangLink:n.createElement(i.default,{href:"https://samlang.developersam.com/"},n.createElement(o.Z,{id:"team.profile.Sam Zhou.body.samLangLink.label"},"programming language")),miniReactLink:n.createElement(i.default,{href:"https://github.com/SamChou19815/mini-react"},n.createElement(o.Z,{id:"team.profile.Sam Zhou.body.miniReactLink.label"},"mini React"))}},"Sam started programming in 2011 and built his {websiteLink} in 2015. He is interested in programming languages, dev infra and web development, and has built his own {samLangLink} and {miniReactLink}.")),n.createElement(f,{name:"Tan Teik Jun",githubUrl:"https://github.com/teikjun",twitterUrl:"https://twitter.com/teik_jun"},n.createElement(o.Z,{id:"team.profile.Tan Teik Jun.body"},"Open-source enthusiast who aims to become as awesome as the other humans on this page. Working on Docusaurus brought him closer to his goal. \ud83c\udf31")),n.createElement(f,{name:"Nisarag Bhatt",githubUrl:"https://github.com/FocalChord",twitterUrl:"https://twitter.com/focalchord_"},n.createElement(o.Z,{id:"team.profile.Nisarag Bhatt.body"},"Fullstack web developer who loves learning new technologies and applying them! Loves contributing to open source as well as writing content articles and tutorials.")))}var v=Object.defineProperty,k=Object.defineProperties,E=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,S=(e,t)=>{for(var a in t||(t={}))O.call(t,a)&&L(e,a,t[a]);if(N)for(var a of N(t))j.call(t,a)&&L(e,a,t[a]);return e};const T={},U="Team",D={unversionedId:"team",id:"team",title:"Team",description:"ActiveTeamRow,",source:"@site/community/1-team.mdx",sourceDirName:".",slug:"/team",permalink:"/zh-CN/community/team",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"Gitcoins",lastUpdatedAt:1644220012,formattedLastUpdatedAt:"2022/2/7",sidebarPosition:1,frontMatter:{},sidebar:"community",previous:{title:"Support",permalink:"/zh-CN/community/support"},next:{title:"Awesome Resources",permalink:"/zh-CN/community/resources"}},P=[{value:"Active Team",id:"active-team",children:[],level:2},{value:"Honorary Alumni",id:"honorary-alumni",children:[],level:2},{value:"Student Fellows",id:"student-fellows",children:[],level:2},{value:"Acknowledgements",id:"acknowledgements",children:[],level:2}],A={toc:P};function C(e){var t,a=e,{components:n}=a,o=((e,t)=>{var a={};for(var r in e)O.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&N)for(var r of N(e))t.indexOf(r)<0&&j.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=S(S({},A),o),k(t,E({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",S({},{id:"team"}),"Team"),(0,r.kt)("h2",S({},{id:"active-team"}),"Active Team"),(0,r.kt)("p",null,"The Docusaurus team works on the core functionality, plugins for the classic theme, as well as the Docusaurus documentation website."),(0,r.kt)("p",null,"Current members of the Docusaurus team are listed in alphabetical order below."),(0,r.kt)(g,{mdxType:"ActiveTeamRow"}),(0,r.kt)("h2",S({},{id:"honorary-alumni"}),"Honorary Alumni"),(0,r.kt)("p",null,"Docusaurus would never be what it is today without the huge contributions from these folks who have moved on to bigger and greater things."),(0,r.kt)(y,{mdxType:"HonoraryAlumniTeamRow"}),(0,r.kt)("h2",S({},{id:"student-fellows"}),"Student Fellows"),(0,r.kt)("p",null,"A handful of students have also worked on Docusaurus as part of their school term/internship and the ",(0,r.kt)("a",S({parentName:"p"},{href:"https://fellowship.mlh.io/"}),"Major League Hacking Fellowship program"),", contributing amazing features such as plugin options validation, migration tooling, and a Bootstrap theme."),(0,r.kt)(w,{mdxType:"StudentFellowsTeamRow"}),(0,r.kt)("h2",S({},{id:"acknowledgements"}),"Acknowledgements"),(0,r.kt)("p",null,"Docusaurus was originally created by Joel Marcey. Today, Docusaurus has a few hundred open source contributors. We\u2019d like to recognize a few people who have made significant contributions to Docusaurus and its documentation in the past and have helped maintain them over the years:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/amyrlam"}),"Amy Lam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/chenglou"}),"Cheng Lou")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/caabernathy"}),"Christine Abernathy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/vjeux"}),"Christopher Chedeau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/elviswolcott"}),"Elvis Wolcott")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/ericnakagawa"}),"Eric Nakagawa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/fiennyangeln"}),"Fienny Angelina")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/deltice"}),"Frank Li")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/hramos"}),"H\xe9ctor Ramos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/rlamana"}),"Ram\xf3n Lamana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",S({parentName:"li"},{href:"https://github.com/rickyvetter"}),"Ricky Vetter"))))}C.isMDXComponent=!0}}]);