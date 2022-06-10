"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94152],{35318:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var n=t(27378);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=l,b=d["".concat(i,".").concat(c)]||d[c]||m[c]||r;return t?n.createElement(b,s(s({ref:a},u),{},{components:t})):n.createElement(b,s({ref:a},u))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68799:function(e,a,t){var n=t(27378),l=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;a.Z=function({children:e,hidden:a,className:t}){return n.createElement("div",((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&i(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},80673:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(27378),l=t(14324),r=t(46294),s=t(38944),o="tabItem_Ocg6",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&b(e,t,a[t]);if(m)for(var t of m(a))c.call(a,t)&&b(e,t,a[t]);return e};function T(e){var a,t,l;const{lazy:i,block:m,defaultValue:d,values:c,groupId:b,className:T}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=c?c:g.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),f=(0,r.lx)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:null!=(l=null!=d?d:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?l:null==(t=g[0])?void 0:t.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,r.UB)(),[I,N]=(0,n.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=b){const e=k[b];null!=e&&e!==I&&v.some((a=>a.value===e))&&N(e)}const C=e=>{const a=e.currentTarget,t=x.indexOf(a),n=v[t].value;n!==I&&(O(a),N(n),null!=b&&w(b,n))},Z=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]||x[x.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},T)},v.map((({value:e,label:a,attributes:t})=>{return n.createElement("li",(l=h({role:"tab",tabIndex:I===e?0:-1,"aria-selected":I===e,key:e,ref:e=>x.push(e),onKeyDown:Z,onFocus:C,onClick:C},t),r={className:(0,s.Z)("tabs__item",o,null==t?void 0:t.className,{"tabs__item--active":I===e})},p(l,u(r))),null!=a?a:e);var l,r}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===I))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==I})))))}function g(e){const a=(0,l.Z)();return n.createElement(T,h({key:String(a)},e))}},95921:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(27378),l="browserWindow_my1Q",r="browserWindowHeader_jXSR",s="buttons_uHc7",o="browserWindowAddressBar_Pd8y",i="dot_giz1",p="browserWindowMenuIcon_Vhuh",u="bar_rrRL",m="browserWindowBody_Idgs";var d=function({children:e,minHeight:a,url:t="http://localhost:3000"}){return n.createElement("div",{className:l,style:{minHeight:a}},n.createElement("div",{className:r},n.createElement("div",{className:s},n.createElement("span",{className:i,style:{background:"#f25f58"}}),n.createElement("span",{className:i,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i,style:{background:"#58cb42"}})),n.createElement("div",{className:o},t),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:u}),n.createElement("span",{className:u}),n.createElement("span",{className:u})))),n.createElement("div",{className:m},e))}},55962:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return f},default:function(){return I},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return k}});var n=t(35318),l=t(95921),r=t(80673),s=t(68799),o="red_FE5X",i="orange_kp8w",p="yellow_uGry",u=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,T=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&T(e,t,a[t]);if(c)for(var t of c(a))h.call(a,t)&&T(e,t,a[t]);return e};const v={id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},f=void 0,y={unversionedId:"guides/markdown-features/tabs",id:"guides/markdown-features/tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-tabs.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/tabs",permalink:"/zh-CN/docs/next/markdown-features/tabs",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"it990110",lastUpdatedAt:1654866333,formattedLastUpdatedAt:"2022/6/10",frontMatter:{id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},sidebar:"docs",previous:{title:"MDX and React",permalink:"/zh-CN/docs/next/markdown-features/react"},next:{title:"Code blocks",permalink:"/zh-CN/docs/next/markdown-features/code-blocks"}},k=[{value:"Displaying a default tab",id:"displaying-a-default-tab",children:[],level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",children:[],level:2},{value:"Customizing tabs",id:"customizing-tabs",children:[{value:"Customizing tab headings",id:"customizing-tab-headings",children:[],level:3}],level:2}],w={toc:k};function I(e){var a,t=e,{components:u}=t,T=((e,a)=>{var t={};for(var n in e)b.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))a.indexOf(n)<0&&h.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=g(g({},w),T),m(a,d({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Docusaurus provides ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tabs>")," components that you can use thanks to ",(0,n.kt)("a",g({parentName:"p"},{href:"/zh-CN/docs/next/markdown-features/react"}),"MDX"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(s.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(s.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It is also possible to provide ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," props to ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(s.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(s.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("br",null),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("code",null,"Tabs")," props take precedence over the ",(0,n.kt)("code",null,"TabItem")," props:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"apple",label:"Apple 2",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(s.Z,{value:"orange",label:"Orange 2",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(s.Z,{value:"banana",label:"Banana 2",default:!0,mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("br",null)),(0,n.kt)("div",g({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."),(0,n.kt)("p",{parentName:"div"},"It is possible to only render the default tab with ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tabs lazy />"),"."))),(0,n.kt)("h2",g({},{id:"displaying-a-default-tab"}),"Displaying a default tab"),(0,n.kt)("p",null,"The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," to one of the tab items. You can also set the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," component to the label value of your choice. For example, in the example above, either setting ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},'value="apple"')," tab or setting ",(0,n.kt)("inlineCode",{parentName:"p"},'defaultValue="apple"'),' for the tabs forces the "Apple" tab to be open by default.'),(0,n.kt)("p",null,"Docusaurus will throw an error if a ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," is provided for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue={null}"),"."),(0,n.kt)("h2",g({},{id:"syncing-tab-choices"}),"Syncing tab choices"),(0,n.kt)("p",null,"You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the choice in ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage")," and all ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tab>")," instances with the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="MacOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="MacOS">Use Command + V to paste.</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,n.kt)(s.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,n.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,n.kt)(s.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"Use Command + V to paste."))),(0,n.kt)("br",null),(0,n.kt)("p",null,"For all tab groups that have the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="MacOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,n.kt)(s.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"I am macOS."),(0,n.kt)(s.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux."))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Tab choices with different group IDs will not interfere with each other:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="MacOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows in windows."),(0,n.kt)(s.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"macOS is macOS.")),(0,n.kt)(r.Z,{groupId:"non-mac-operating-systems",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows is windows."),(0,n.kt)(s.Z,{value:"unix",label:"Unix",mdxType:"TabItem"},"Unix is unix."))),(0,n.kt)("h2",g({},{id:"customizing-tabs"}),"Customizing tabs"),(0,n.kt)("p",null,"You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,n.kt)("inlineCode",{parentName:"p"},"className")," prop, and the specified CSS class will be added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(s.Z,{value:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(s.Z,{value:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("h3",g({},{id:"customizing-tab-headings"}),"Customizing tab headings"),(0,n.kt)("p",null,"You can also customize each tab heading independently by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"attributes")," field. The extra props can be passed to the headings either through the ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," prop in ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs"),", or props of each ",(0,n.kt)("inlineCode",{parentName:"p"},"TabItem"),"\u2014in the same way as you declare ",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-jsx",metastring:'title="some-doc.mdx"',title:'"some-doc.mdx"'}),'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'}),".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n")),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"apple",label:"Apple",attributes:{className:o},mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(s.Z,{value:"orange",label:"Orange",attributes:{className:i},mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(s.Z,{value:"banana",label:"Banana",attributes:{className:p},mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("div",g({},{className:"admonition admonition-tip alert alert--success"}),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),(0,n.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("inlineCode",{parentName:"p"},"className")," would be merged with other default class names. You may also use a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"data-value")," field (",(0,n.kt)("inlineCode",{parentName:"p"},"{'data-value': 'apple'}"),") paired with CSS attribute selectors:"),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",g({parentName:"pre"},{className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'}),"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n")))))}I.isMDXComponent=!0}}]);