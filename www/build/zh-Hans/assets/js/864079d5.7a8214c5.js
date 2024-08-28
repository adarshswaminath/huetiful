"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[696],{3835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var l=s(4848),r=s(8453);const i={},c=void 0,d={id:"palettes",title:"palettes",description:"Functions",source:"@site/docs/palettes.mdx",sourceDirName:".",slug:"/palettes",permalink:"/zh-Hans/docs/palettes",draft:!1,unlisted:!1,editUrl:"https://github.com/prjctimg/huetiful/tree/main/www/docs/docs/palettes.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/zh-Hans/docs/"},next:{title:"quickstart",permalink:"/zh-Hans/docs/quickstart"}},t={},a=[{value:"Functions",id:"functions",level:2},{value:"colors()",id:"colors",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"diverging()",id:"diverging",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"nearest()",id:"nearest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"qualitative()",id:"qualitative",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"sequential()",id:"sequential",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(n.h3,{id:"colors",children:"colors()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"colors"}),"(",(0,l.jsx)(n.code,{children:"shade"}),", ",(0,l.jsx)(n.code,{children:"value"}),"): ",(0,l.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Returns TailwindCSS color value(s) from the default palette."}),"\n",(0,l.jsx)(n.p,{children:"The function behaves as follows:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If called with both ",(0,l.jsx)(n.code,{children:"shade"})," and ",(0,l.jsx)(n.code,{children:"value"})," parameters, it returns that color as a hex string. For example ",(0,l.jsx)(n.code,{children:"'blue'"})," and ",(0,l.jsx)(n.code,{children:"'500'"})," would return the equivalent of ",(0,l.jsx)(n.code,{children:"blue-500"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["If called with no parameters or just the ",(0,l.jsx)(n.code,{children:"'all'"})," parameter as the ",(0,l.jsx)(n.code,{children:"shade"}),", it returns an array of colors from ",(0,l.jsx)(n.code,{children:"'050'"})," to ",(0,l.jsx)(n.code,{children:"'900'"})," for every ",(0,l.jsx)(n.code,{children:"shade"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Note that to specify ",(0,l.jsx)(n.code,{children:"'050'"})," as a number you just pass ",(0,l.jsx)(n.code,{children:"50"}),". Values are all valid as string or number for example ",(0,l.jsx)(n.code,{children:"'100'"})," and",(0,l.jsx)(n.code,{children:"100"})," ."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If the ",(0,l.jsx)(n.code,{children:"shade "})," is ",(0,l.jsx)(n.code,{children:"'all'"})," and the ",(0,l.jsx)(n.code,{children:"value"})," is specified, it returns an array of colors at the specified ",(0,l.jsx)(n.code,{children:"value"})," for each ",(0,l.jsx)(n.code,{children:"shade"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"shade"}),": ",(0,l.jsx)(n.code,{children:"string"})," = ",(0,l.jsx)(n.code,{children:"'all'"})]}),"\n",(0,l.jsx)(n.p,{children:"The hue family to return."}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"value"}),": ",(0,l.jsx)(n.code,{children:"any"})," = ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.p,{children:["The tone value of the shade. Values are in incrementals of ",(0,l.jsx)(n.code,{children:"100"}),". For example numeric (",(0,l.jsx)(n.code,{children:"100"}),") and its string equivalent (",(0,l.jsx)(n.code,{children:"'100'"}),") are valid."]}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"any"})}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { colors } from \"huetiful-js\";\n\n// We pass in red as the target hue.\n// It returns a function that can be called with an optional value parameter\nconsole.log(colors('red'));\n// [\n '#fef2f2', '#fee2e2',\n '#fecaca', '#fca5a5',\n '#f87171', '#ef4444',\n '#dc2626', '#b91c1c',\n '#991b1b', '#7f1d1d'\n]\n\nconsole.log(colors('red','900'));\n// '#7f1d1d'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/palettes.ts#L864",children:"palettes.ts:864"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"diverging",children:"diverging()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"diverging"}),"(",(0,l.jsx)(n.code,{children:"scheme"}),"): ",(0,l.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"A wrapper function for ColorBrewer's map of diverging color schemes."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"scheme"}),": ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.p,{children:"The name of the scheme."}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"any"})}),"\n",(0,l.jsxs)(n.p,{children:["The collection of colors from the specified ",(0,l.jsx)(n.code,{children:"scheme"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { diverging } from 'huetiful-js'\n\nconsole.log(diverging(\"Spectral\"))\n//[\n '#7fc97f', '#beaed4',\n '#fdc086', '#ffff99',\n '#386cb0', '#f0027f',\n '#bf5b17', '#666666'\n]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/palettes.ts#L558",children:"palettes.ts:558"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"nearest",children:"nearest()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"nearest"}),"(",(0,l.jsx)(n.code,{children:"collection"}),", ",(0,l.jsx)(n.code,{children:"options"}),"): ",(0,l.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Returns the nearest color(s) in a collection as compared ",(0,l.jsx)(n.code,{children:"against"})," the passed in color using the ",(0,l.jsx)(n.code,{children:"differenceHyab"})," metric function."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["To get the nearest color from the Tailwind CSS default palette pass in the string ",(0,l.jsx)(n.code,{children:"tailwind"})," as the ",(0,l.jsx)(n.code,{children:"collection"})," parameter."]}),"\n",(0,l.jsxs)(n.li,{children:["If the ",(0,l.jsx)(n.code,{children:"num"})," parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"collection"}),": ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.p,{children:"The collection of colors to search for nearest colors."}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"options"}),": ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"unknown"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"let cols = colors('all', '500');\n\nconsole.log(nearest(cols, 'blue', 3));\n// [ '#a855f7', '#8b5cf6', '#d946ef' ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/palettes.ts#L812",children:"palettes.ts:812"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"qualitative",children:"qualitative()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"qualitative"}),"(",(0,l.jsx)(n.code,{children:"scheme"}),"): ",(0,l.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"A wrapper function for ColorBrewer's map of qualitative color schemes."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"scheme"}),": ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.p,{children:"The name of the scheme"}),"\n",(0,l.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"any"})}),"\n",(0,l.jsxs)(n.p,{children:["The collection of colors from the specified ",(0,l.jsx)(n.code,{children:"scheme"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { qualitative } from 'huetiful-js'\n\nconsole.log(qualitative(\"Accent\"))\n// [\n '#7fc97f', '#beaed4',\n '#fdc086', '#ffff99',\n '#386cb0', '#f0027f',\n '#bf5b17', '#666666'\n]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/palettes.ts#L700",children:"palettes.ts:700"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"sequential",children:"sequential()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"sequential"}),"(",(0,l.jsx)(n.code,{children:"scheme"}),"): ",(0,l.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"A wrapper function for ColorBrewer's map of sequential color schemes."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"scheme"}),": ",(0,l.jsx)(n.code,{children:"any"})]}),"\n",(0,l.jsx)(n.p,{children:"The name of the scheme."}),"\n",(0,l.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"any"})}),"\n",(0,l.jsxs)(n.p,{children:["A collection of colors in the specified colorspace. The default is hex if ",(0,l.jsx)(n.code,{children:"colorspace"})," is ",(0,l.jsx)(n.code,{children:"undefined."})]}),"\n",(0,l.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { sequential } from 'huetiful-js\n\nconsole.log(sequential(\"OrRd\"))\n\n// [\n '#fff7ec', '#fee8c8',\n '#fdd49e', '#fdbb84',\n '#fc8d59', '#ef6548',\n '#d7301f', '#b30000',\n '#7f0000'\n]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/palettes.ts#L324",children:"palettes.ts:324"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var l=s(6540);const r={},i=l.createContext(r);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);