(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53237],{32103:function(e,t,a){"use strict";var o=a(27378),r=a(58413),n=a(94157),s=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&d(e,a,t[a]);return e},g=(e,t)=>l(e,i(t));const p=(e,t)=>{switch(e){case"noicon":case"loaded":return null;case"loading":return(0,n.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:a}=e,o=a?` (${(e=>{const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const a=Math.floor(Math.log(e)/Math.log(1024));return 0===a?`${e} ${t[a]}`:`${(e/1024**a).toFixed(1)} ${t[a]}`})(a)})`:"";return(0,n.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:o})}case"offline":return(0,n.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,n.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,n.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}};t.Z=function(e){const{alt:t,className:a,img:n}=e;return"string"==typeof n||"default"in n?o.createElement("img",h({src:"string"==typeof n?n:n.default,className:a,alt:t},e)):o.createElement(r.Z,g(h({},e),{alt:t,className:a,height:n.src.height||100,width:n.src.width||100,placeholder:{lqip:n.preSrc},src:n.src.src,srcSet:n.src.images.map((e=>g(h({},e),{src:e.path}))),getMessage:p}))}},37989:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var o=a(27378),r=a(2411),n=a(94157),s=a(64324),l=a(35330),i=a(32103),c=a(93549),m=a(38944),u={tweet:"tweet_x2tn",tweetMeta:"tweetMeta_fAxr"};function d({url:e,handle:t,name:a,content:r,avatar:n,date:s}){return o.createElement("div",{className:(0,m.Z)("card",u.tweet)},o.createElement("div",{className:"card__header"},o.createElement("div",{className:"avatar"},o.createElement("img",{alt:a,className:"avatar__photo",src:n}),o.createElement("div",{className:"avatar__intro"},o.createElement("div",{className:u.tweet},o.createElement("div",null,o.createElement("strong",null,a)," ",o.createElement("span",{className:u.tweetMeta},"@",t))),o.createElement("div",{className:"margin-bottom--sm"},r),o.createElement("a",{className:(0,m.Z)(u.tweetMeta,u.tweetDate),href:e},s)))))}var h=[{url:"https://twitter.com/acemarke/status/1452725153998245891",handle:"acemarke",name:"Mark Erikson",date:"Oct 26, 2021",avatar:"https://pbs.twimg.com/profile_images/842582724737163264/tFKLiJI5_400x400.jpg",content:o.createElement(o.Fragment,null,"We've been using Docusaurus for all the Redux org docs sites for the last couple years, and it's great! We've been able to focus on content, customize some presentation and features, and It Just Works."),showOnHomepage:!0},{url:"https://twitter.com/arcanis/status/1351620354561732608",handle:"arcanis",name:"Ma\xebl",date:"Jan 20, 2021",avatar:"https://pbs.twimg.com/profile_images/1311259425949261825/7hPZqoJd_400x400.jpg",content:o.createElement(o.Fragment,null,"I've used Docusaurus for two websites this year, and I've been very happy about the v2. Looks good, and simple to setup."),showOnHomepage:!0},{url:"https://twitter.com/maxlynch/status/1375113166007455748",handle:"maxlynch",name:"Max Lynch",date:"Mar 25, 2021",avatar:"https://pbs.twimg.com/profile_images/1318970727173885953/bln98FNj_400x400.jpg",content:o.createElement(o.Fragment,null,"Docusaurus v2 doubles as a really nice little static site generator tool for content-focused sites, love it \ud83d\udc4f"),showOnHomepage:!0},{url:"https://twitter.com/supabase/status/1328960757149671425",handle:"supabase",name:"Supabase",date:"Nov 18, 2020",avatar:"https://pbs.twimg.com/profile_images/1397471927132844033/jN-wuufb_400x400.jpg",content:o.createElement(o.Fragment,null,"We've been using V2 since January and it has been great - we spend less time building documentation and more time building \ud83d\udef3",o.createElement("br",null),o.createElement("br",null),"Thanks @docusaurus team \ud83e\udd96"),showOnHomepage:!0},{url:"https://twitter.com/paularmstrong/status/1387059593373700100",handle:"paularmstrong",name:"Paul Armstrong",date:"Apr 27, 2021",avatar:"https://pbs.twimg.com/profile_images/823614982394769408/C4KgET17_400x400.jpg",content:o.createElement(o.Fragment,null,"Continue to be impressed and excited about Docusaurus v2 alpha releases. Already using the sidebar items generator to help monorepo workspace devs create their own doc pages without any configuration needed."),showOnHomepage:!0},{url:"https://twitter.com/sanketsahu/status/1328677366642528257",handle:"Sanket Sahu",name:"sanketsahu",date:"Nov 17, 2020",avatar:"https://pbs.twimg.com/profile_images/1481221429991718913/aNZZgZME_400x400.jpg",content:o.createElement(o.Fragment,null,".@docusaurus \u2764\ufe0f"),showOnHomepage:!1},{url:"https://twitter.com/debs_obrien/status/1374615572298801155",handle:"Debbie O'Brien",name:"debs_obrien",date:"Mar 24, 2021",avatar:"https://pbs.twimg.com/profile_images/1252900852156772352/JLIVJ-TC_400x400.jpg",content:o.createElement(o.Fragment,null,"Been doing a lot of work with @docusaurus lately and I have to say it is really fun to work with. A lot of really cool features. I love that you can easily reuse content by creating a markdown file and importing it as a component. \ud83d\udd25"),showOnHomepage:!0},{url:"https://twitter.com/Dr_Electron/status/1443635328376508433",handle:"Dr_Electron",name:"Dr.Electron",date:"Oct 11, 2021",avatar:"https://pbs.twimg.com/profile_images/1280609918022815746/nCWpKbYh_400x400.jpg",content:o.createElement(o.Fragment,null,"The #IOTA wiki is now part of the @docusaurus showcase. We even have the honor of being a favorite. We are really happy that we found this project. It helped us a lot to improve the documentation. And we still have a lot of plans with things like tutorials, versioning and i8n."),showOnHomepage:!0},{url:"https://twitter.com/kentcdodds/status/1323806816019468288",handle:"kentcdodds",name:"Kent C. Dodds",date:"Nov 4, 2020",avatar:"https://pbs.twimg.com/profile_images/1444988463216922631/IDffhy4i_400x400.jpg",content:o.createElement(o.Fragment,null,"http://testing-library.com just got a nice update! We're now on the latest version of @docusaurus thanks to @matanbobi, @TensorNo, and @nickemccurdy \ud83d\udc99",o.createElement("br",null),o.createElement("br",null),"My favorite new feature: dark mode!! \ud83c\udf11/\u2600\ufe0f"),showOnHomepage:!0},{url:"https://twitter.com/bantg/status/1463608561368457225",handle:"bantg",name:"banteg",date:"Nov 25, 2021",avatar:"https://pbs.twimg.com/profile_images/1406018339835678720/fLQOnMbp_400x400.jpg",content:o.createElement(o.Fragment,null,"I like docusaurus much more, it's so snappy."),showOnHomepage:!1},{url:"https://twitter.com/swyx/status/1418405515684581378",handle:"swyx",name:"swyx",date:"Jul 23, 2021",avatar:"https://pbs.twimg.com/profile_images/1456506127961640962/iM2Hf8du_400x400.jpg",content:o.createElement(o.Fragment,null,"Happy to share Temporal's first open source sponsorship \u2014 of @docusaurus!",o.createElement("br",null),o.createElement("br",null),"@temporalio uses it for http://docs.temporal.io, and it has been a huge boon to our docs team. @sebastienlorber is an incredible steward of the project, support it if you can!"),showOnHomepage:!0},{url:"https://twitter.com/rachelnabors/status/1478490902037467137",handle:"rachelnabors",name:"R 'Nearest' Nabors \ud83d\udc99",date:"Jan 5, 2022",avatar:"https://pbs.twimg.com/profile_images/1316805792893489152/7soY-vhs_400x400.jpg",content:o.createElement(o.Fragment,null,"I hear @docusaurus is a good tool for that!"),showOnHomepage:!1},{url:"https://twitter.com/dabit3/status/1394685348375052295",handle:"dabit3",name:"Nader Dabit",date:"May 19, 2021",avatar:"https://pbs.twimg.com/profile_images/1485813693682262017/E8H-p7iy_400x400.jpg",content:o.createElement(o.Fragment,null,"I did try Docusaurus, and I really liked it! Still investigating various options but it's probably at the top of my list for sure"),showOnHomepage:!1},{url:"https://twitter.com/johnny_reilly/status/1469238609266028545",handle:"johnny_reilly",name:"John Reilly",date:"Dec 10, 2021",avatar:"https://pbs.twimg.com/profile_images/552803871567790081/rPdTN64o_400x400.jpeg",content:o.createElement(o.Fragment,null,"I \u2764\ufe0f @docusaurus - it makes it so easy to spin up docs, blogs and simple websites. I've used it to:",o.createElement("br",null),o.createElement("br",null)," \u2705 Replatform my blog with GitHub pages ",o.createElement("br",null),"\u2705 Build a website for a local business ",o.createElement("br",null),"\u2705 Build internal facing blog/docs sites with @AzureStaticApps"),showOnHomepage:!1},{url:"https://twitter.com/tinkertim/status/1423358665726304260",handle:"tinkertim",name:"Tim Post \ud83d\udc89\ud83d\udc89\ud83d\udc89",date:"Aug 6, 2021",avatar:"https://pbs.twimg.com/profile_images/1199471998650454017/59xAQG4y_400x400.jpg",content:o.createElement(o.Fragment,null,"Docusaurus is mind-bendingly flexible. ",o.createElement("br",null),o.createElement("br",null),'"Wait! We need to have two products documented on the same site and both need to be translated into multiple languages!"',o.createElement("br",null),o.createElement("br",null)," ... and that's actually easy. Loving it!"),showOnHomepage:!1},{url:"https://twitter.com/sebastienlorber/status/1321784071815680000",handle:"sebastienlorber",name:"Sebastien Lorber",date:"Oct 29, 2020",avatar:"https://pbs.twimg.com/profile_images/573206276819140608/gKAusMeX_400x400.jpeg",content:o.createElement(o.Fragment,null,"\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a\ud83e\udd73\ud83c\udf8a The @reactnative website just migrated to @docusaurus v2",o.createElement("br",null),"Some obvious changes: ",o.createElement("br",null),"\ud83c\udf14 Dark mode ",o.createElement("br",null),"\u26a1\ufe0f SPA navigation / prefetching ",o.createElement("br",null),"\ud83e\uddd0 @algolia DocSearch v3 ",o.createElement("br",null),"\ud83d\udca5 @mdx_js enable many new possibilities ",o.createElement("br",null),o.createElement("br",null),"Check it out: http://reactnative.dev"),showOnHomepage:!1},{url:"https://twitter.com/iansu/status/1184149586048245760",handle:"iansu",name:"Ian Sutherland",date:"Oct 16, 2019",avatar:"https://pbs.twimg.com/profile_images/916780671552516096/yzDVUVKY_400x400.jpg",content:o.createElement(o.Fragment,null,"We just updated the Create React App docs to Docusaurus v2. Now with dark mode! \ud83d\ude0e",o.createElement("br",null),o.createElement("br",null),"Thanks to the @docusaurus team for their help! \u2764\ufe0f",o.createElement("br",null),o.createElement("br",null),"https://create-react-app.dev"),showOnHomepage:!1},{url:"https://twitter.com/mweststrate/status/1181276252293853186",handle:"mweststrate",name:"Michel Weststrate",date:"Oct 8, 2019",avatar:"https://pbs.twimg.com/profile_images/1192174732189339649/NYGFeR-K_400x400.jpg",content:o.createElement(o.Fragment,null,"New #mobx docs are online! More modern, fixing many UI issues.",o.createElement("br",null),o.createElement("br",null),"\ud83d\udc4f @cloverich did the awesome job of migrating from ancient gitbook -> @docusaurus! \ud83d\udc4f ",o.createElement("br",null),o.createElement("br",null),"No real content updates yet, but contributing and publishing has become way easier"),showOnHomepage:!1},{url:"https://twitter.com/verdaccio_npm/status/1420187249145118722",handle:"verdaccio_npm",name:"verdaccio",date:"Jul 28, 2021",avatar:"https://pbs.twimg.com/profile_images/1423143362232823809/4khdTyVZ_400x400.png",content:o.createElement(o.Fragment,null,"The new website has landed \ud83d\ude80 powered by @docusaurus v2 and made by @_semoal kudos to him \ud83d\udc4f #verdaccio #nodejs awesome contribution \u2764\ufe0f\u200d\ud83d\udd25 (video made with react remotion @JNYBGR ) all Open Source and hosted on @Netlify https://verdaccio.org"),showOnHomepage:!1},{url:"https://twitter.com/yangshunz/status/1284536949718478848",handle:"yangshunz",name:"Yangshun Tay",date:"Jul 19, 2020",avatar:"https://pbs.twimg.com/profile_images/1247950572096868352/3kuZJz5j_400x400.jpg",content:o.createElement(o.Fragment,null,"I made a @docusaurus website for answers to the H5BP Front End Interview Questions! Hopefully it makes the browsing experience easier - https://frontendinterviewhandbook.com"),showOnHomepage:!1},{url:"https://twitter.com/pierregillesl/status/1372839188698001408",handle:"pierregillesl",name:"Pierre-Gilles Leymarie",date:"Mar 19, 2021",avatar:"https://pbs.twimg.com/profile_images/1302550637197000705/pg5XF8rA_400x400.jpg",content:o.createElement(o.Fragment,null,"Just upgraded our website to @docusaurus latest with internationalization support \ud83e\udd73",o.createElement("br",null),o.createElement("br",null),"Before that, we had to build 2 separate versions of the website to get it in English + French.",o.createElement("br",null),o.createElement("br",null),"Now, it's working out of the box, with proper meta tags for SEO \ud83d\udc4c"),showOnHomepage:!1},{url:"https://twitter.com/biantris_/status/1480259279487741953",handle:"biantris_",name:"biazita",date:"Jan 10, 2022",avatar:"https://pbs.twimg.com/profile_images/1371525161829208064/UCzm0Zye_400x400.jpg",content:o.createElement(o.Fragment,null,"Today I tried @docusaurus in a project, I really like the ease and speed of developing with it \\o/"),showOnHomepage:!1}],g="section_rC2D",p="sectionAlt_XiGz",A="featureImage_yA8i",w="featureHeading_TLGJ",b="announcement_FsS0",E="announcementDark_tzC4",f="announcementInner_RsrQ",v="hero_syme",y="heroInner_VWeJ",C="heroProjectTagline_EkV5",_="heroTitleTextHtml_zYwv",k="heroLogo_jM6J",N="indexCtas_hUA_",j="indexCtasGitHubButtonWrapper_AOht",I="indexCtasGitHubButton_sMIS",K="tweetsSection_Fqsy",x=Object.defineProperty,B=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,S=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const O=[{thumbnail:a(74833),name:'Christopher "vjeux" Chedeau',title:(0,n.I)({id:"homepage.quotes.christopher-chedeau.title",message:"Lead Prettier Developer",description:"Title of quote of Christopher Chedeau on the home page"}),text:o.createElement(n.Z,{id:"homepage.quotes.christopher-chedeau",description:"Quote of Christopher Chedeau on the home page"},"I've helped open source many projects at Facebook and every one needed a website. They all had very similar constraints: the documentation should be written in markdown and be deployed via GitHub pages. I\u2019m so glad that Docusaurus now exists so that I don\u2019t have to spend a week each time spinning up a new one.")},{thumbnail:a(77478),name:"Hector Ramos",title:(0,n.I)({id:"homepage.quotes.hector-ramos.title",message:"Lead React Native Advocate",description:"Title of quote of Hector Ramos on the home page"}),text:o.createElement(n.Z,{id:"homepage.quotes.hector-ramos",description:"Quote of Hector Ramos on the home page"},"Open source contributions to the React Native docs have skyrocketed after our move to Docusaurus. The docs are now hosted on a small repo in plain markdown, with none of the clutter that a typical static site generator would require. Thanks Slash!")},{thumbnail:a(90103),name:"Ricky Vetter",title:(0,n.I)({id:"homepage.quotes.risky-vetter.title",message:"ReasonReact Developer",description:"Title of quote of Ricky Vetter on the home page"}),text:o.createElement(n.Z,{id:"homepage.quotes.risky-vetter",description:"Quote of Ricky Vetter on the home page"},"Docusaurus has been a great choice for the ReasonML family of projects. It makes our documentation consistent, i18n-friendly, easy to maintain, and friendly for new contributors.")}];function F(){const e=[[],[],[]];return h.filter((e=>e.showOnHomepage)).forEach(((t,a)=>e[a%3].push(t))),o.createElement("div",{className:(0,m.Z)(g,p)},o.createElement("div",{className:"container"},o.createElement("h2",{className:(0,m.Z)("margin-bottom--lg","text--center")},"Loved by many engineers"),o.createElement("div",{className:(0,m.Z)("row",K)},e.map(((e,t)=>o.createElement("div",{className:"col col--4",key:t},e.map((e=>{return o.createElement(d,(t=((e,t)=>{for(var a in t||(t={}))D.call(t,a)&&S(e,a,t[a]);if(M)for(var a of M(t))H.call(t,a)&&S(e,a,t[a]);return e})({},e),a={key:e.url},B(t,Q(a))));var t,a}))))))))}var Z=function(){const{siteConfig:{customFields:e,tagline:t}}=(0,s.default)(),{description:a}=e;return o.createElement(c.Z,{title:t,description:a},o.createElement("main",null,o.createElement("div",{className:v},o.createElement("div",{className:y},o.createElement("h1",{className:C},o.createElement("img",{alt:(0,n.I)({message:"Docusaurus with Keytar"}),className:k,src:(0,l.Z)("/img/docusaurus_keytar.svg"),width:"200",height:"200"}),o.createElement("span",{className:_,dangerouslySetInnerHTML:{__html:(0,n.I)({id:"homepage.hero.title",message:"Build <b>optimized</b> websites <b>quickly</b>, focus on your <b>content</b>",description:"Home page hero title, can contain simple html tags"})}})),o.createElement("div",{className:N},o.createElement(r.default,{className:"button button--primary",to:"/docs"},o.createElement(n.Z,null,"Get Started")),o.createElement(r.default,{className:"button button--info",to:"https://docusaurus.new"},o.createElement(n.Z,null,"Playground")),o.createElement("span",{className:j},o.createElement("iframe",{className:I,src:"https://ghbtns.com/github-btn.html?user=facebook&repo=docusaurus&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))),o.createElement("div",{className:(0,m.Z)(b,E)},o.createElement("div",{className:f},o.createElement(n.Z,{values:{docusaurusV1Link:o.createElement(r.default,{to:"https://v1.docusaurus.io/"},o.createElement(n.Z,null,"Docusaurus v1")),migrationGuideLink:o.createElement(r.default,{to:"/docs/migration"},o.createElement(n.Z,null,"v1 to v2 migration guide"))}},"Coming from {docusaurusV1Link}? Check out our {migrationGuideLink}"),".")),o.createElement("div",{className:g},o.createElement("div",{className:"container text--center margin-bottom--xl"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement("img",{className:A,alt:"Powered by MDX",src:(0,l.Z)("/img/undraw_typewriter.svg"),width:"1009.54",height:"717.96"}),o.createElement("h2",{className:(0,m.Z)(w)},o.createElement(n.Z,null,"Powered by Markdown")),o.createElement("p",{className:"padding-horiz--md"},o.createElement(n.Z,null,"Save time and focus on your project's documentation. Simply write docs and blog posts with Markdown/MDX and Docusaurus will publish a set of static HTML files ready to serve. You can even embed JSX components into your Markdown thanks to MDX."))),o.createElement("div",{className:"col"},o.createElement("img",{alt:"Built Using React",className:A,src:(0,l.Z)("/img/undraw_react.svg"),width:"1108",height:"731.18"}),o.createElement("h2",{className:(0,m.Z)(w)},o.createElement(n.Z,null,"Built Using React")),o.createElement("p",{className:"padding-horiz--md"},o.createElement(n.Z,null,"Extend or customize your project's layout by reusing React. Docusaurus can be extended while reusing the same header and footer."))),o.createElement("div",{className:"col"},o.createElement("img",{alt:"Ready for Translations",className:A,src:(0,l.Z)("/img/undraw_around_the_world.svg"),width:"1137",height:"776.59"}),o.createElement("h2",{className:(0,m.Z)(w)},o.createElement(n.Z,null,"Ready for Translations")),o.createElement("p",{className:"padding-horiz--md"},o.createElement(n.Z,null,"Localization comes pre-configured. Use Crowdin to translate your docs into over 70 languages."))))),o.createElement("div",{className:"container text--center"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--4 col--offset-2"},o.createElement("img",{alt:"Document Versioning",className:A,src:(0,l.Z)("/img/undraw_version_control.svg"),width:"1038.23",height:"693.31"}),o.createElement("h2",{className:(0,m.Z)(w)},o.createElement(n.Z,null,"Document Versioning")),o.createElement("p",{className:"padding-horiz--md"},o.createElement(n.Z,null,"Support users on all versions of your project. Document versioning helps you keep documentation in sync with project releases."))),o.createElement("div",{className:"col col--4"},o.createElement("img",{alt:"Document Search",className:A,src:(0,l.Z)("/img/undraw_algolia.svg"),width:"1137.97",height:"736.21"}),o.createElement("h2",{className:(0,m.Z)(w)},o.createElement(n.Z,null,"Content Search")),o.createElement("p",{className:"padding-horiz--md"},o.createElement(n.Z,null,"Make it easy for your community to find what they need in your documentation. We proudly support Algolia documentation search.")))))),o.createElement(F,null),o.createElement("div",{className:(0,m.Z)(g)},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},O.map((e=>o.createElement("div",{className:"col",key:e.name},o.createElement("div",{className:"avatar avatar--vertical margin-bottom--sm"},o.createElement(i.Z,{alt:e.name,className:"avatar__photo avatar__photo--xl",img:e.thumbnail,style:{overflow:"hidden"}}),o.createElement("div",{className:"avatar__intro padding-top--sm"},o.createElement("div",{className:"avatar__name"},e.name),o.createElement("small",{className:"avatar__subtitle"},e.title))),o.createElement("p",{className:"text--center text--italic padding-horiz--md"},e.text)))))))))}},74833:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg",toString:function(){return a.p+"assets/ideal-img/christopher-chedeau.a975949.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAIBAAAQMEAwEBAAAAAAAAAAAAAQIDEQAEEiEFBhMicf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEREiH/2gAMAwEAAhEDEQA/ANXduxrtXGLKzafdu/p8ukuNkBAxSAlMghTn1P7R7HduBLLZuONT7FIzygHKNyI1ugHnXBzSFBagrxxkHcSdVCmmyoktoJJkkinzcdDKi1k//9k=",palette:null}},77478:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg",toString:function(){return a.p+"assets/ideal-img/hector-ramos.957d17a.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQGB//EACUQAQABAwIEBwAAAAAAAAAAAAECAwQRAAUGEhNxByE3QUJRof/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGxEAAQQDAAAAAAAAAAAAAAAAAQACEyEDMUH/2gAMAwEAAhEDEQA/AJKz4m2+z2+ta0o29aaJGq0cJPI5ipzAMT90G43vcevU59qrMuZy9E83PbTXiR6jXUfi3tKSeysIK91XWrypwZKwiufrU0Y4rYdpBElHlL//2Q==",palette:null}},90103:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg 200w",images:[{path:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg",width:200,height:200}],src:a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg",toString:function(){return a.p+"assets/ideal-img/ricky-vetter.b237586.200.jpg"},placeholder:void 0,width:200,height:200},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIBAAAQMEAwEBAAAAAAAAAAAAAQIDBAAFERITITEiYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRIv/aAAwDAQACEQMRAD8A3N4uctMkSGrg+1x4420vBLIBxjlTqScqyPR+Uiq/o2P2R35UN9jMGdYSWWiRqQdB1lQzQ05ptM2QEoSAHFAADzuhcYxqrlH/2Q==",palette:null}}}]);