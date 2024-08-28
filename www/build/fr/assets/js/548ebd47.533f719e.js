"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[692],{4327:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(4848),l=r(8453);const i={},c=void 0,o={id:"wrappers",title:"wrappers",description:"Classes",source:"@site/docs/wrappers.mdx",sourceDirName:".",slug:"/wrappers",permalink:"/fr/docs/wrappers",draft:!1,unlisted:!1,editUrl:"https://github.com/prjctimg/huetiful/tree/main/www/docs/docs/wrappers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"whats_new",permalink:"/fr/docs/whats_new"}},t={},d=[{value:"Classes",id:"classes",level:2},{value:"ColorArray",id:"colorarray",level:3},{value:"Example",id:"example",level:4},{value:"Constructors",id:"constructors",level:4},{value:"new ColorArray()",id:"new-colorarray",level:5},{value:"Parameters",id:"parameters",level:6},{value:"Returns",id:"returns",level:6},{value:"Defined in",id:"defined-in",level:6},{value:"Methods",id:"methods",level:4},{value:"discover()",id:"discover",level:5},{value:"Parameters",id:"parameters-1",level:6},{value:"Returns",id:"returns-1",level:6},{value:"Example",id:"example-1",level:6},{value:"Defined in",id:"defined-in-1",level:6},{value:"filterBy()",id:"filterby",level:5},{value:"Parameters",id:"parameters-2",level:6},{value:"Returns",id:"returns-2",level:6},{value:"See",id:"see",level:6},{value:"Example",id:"example-2",level:6},{value:"Defined in",id:"defined-in-2",level:6},{value:"interpolator()",id:"interpolator",level:5},{value:"Parameters",id:"parameters-3",level:6},{value:"Returns",id:"returns-3",level:6},{value:"Example",id:"example-3",level:6},{value:"Defined in",id:"defined-in-3",level:6},{value:"nearest()",id:"nearest",level:5},{value:"Parameters",id:"parameters-4",level:6},{value:"Returns",id:"returns-4",level:6},{value:"Example",id:"example-4",level:6},{value:"Defined in",id:"defined-in-4",level:6},{value:"output()",id:"output",level:5},{value:"Returns",id:"returns-5",level:6},{value:"Defined in",id:"defined-in-5",level:6},{value:"sortBy()",id:"sortby",level:5},{value:"Parameters",id:"parameters-5",level:6},{value:"Returns",id:"returns-6",level:6},{value:"Example",id:"example-5",level:6},{value:"Defined in",id:"defined-in-6",level:6},{value:"stats()",id:"stats",level:5},{value:"Parameters",id:"parameters-6",level:6},{value:"Returns",id:"returns-7",level:6},{value:"Defined in",id:"defined-in-7",level:6}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(n.h3,{id:"colorarray",children:"ColorArray"}),"\n",(0,s.jsx)(n.p,{children:"Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument). *"}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"* import { ColorArray } from 'huetiful-js'\n*\nlet sample = ['blue', 'pink', 'yellow', 'green'];\nlet wrapper = new ColorArray(sample);\n// We can even chain the methods and get the result by calling output()\n\nconsole.log(wrapper.sortByHue('desc', 'lch').output());\n\n// [ 'blue', 'green', 'yellow', 'pink' ]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h5,{id:"new-colorarray",children:"new ColorArray()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"new ColorArray"}),"(",(0,s.jsx)(n.code,{children:"colors"}),"): ",(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"colors"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.p,{children:"The collection of colors to bind."}),"\n",(0,s.jsx)(n.h6,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L45",children:"wrappers.ts:45"})}),"\n",(0,s.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h5,{id:"discover",children:"discover()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"discover"}),"(",(0,s.jsx)(n.code,{children:"options"}),"): ",(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Takes a collection of colors and finds the nearest matches using the ",(0,s.jsx)(n.code,{children:"differenceHyab()"})," color difference metric for a set of predefined palettes."]}),"\n",(0,s.jsxs)(n.p,{children:["The function returns different values based on the ",(0,s.jsx)(n.code,{children:"kind"})," parameter passed in:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An array of colors for the ",(0,s.jsx)(n.code,{children:"kind"})," of scheme, if the ",(0,s.jsx)(n.code,{children:"kind"})," parameter is specified."]}),"\n",(0,s.jsx)(n.li,{children:"Else it returns an object of all the palette types as keys and their values as an array of colors."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection."}),"\n",(0,s.jsx)(n.h6,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.h6,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})}),"\n",(0,s.jsx)(n.h6,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { load } from 'huetiful-js';\n\nlet sample = [\n\t'#ffff00',\n\t'#00ffdc',\n\t'#00ff78',\n\t'#00c000',\n\t'#007e00',\n\t'#164100',\n\t'#720000',\n\t'#600000',\n\t'#4e0000',\n\t'#3e0000',\n\t'#310000'\n];\n\nconsole.log(load(sample).discover({ kind: 'tetradic' }).output());\n// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]\n"})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L139",children:"wrappers.ts:139"})}),"\n",(0,s.jsx)(n.h5,{id:"filterby",children:"filterBy()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"filterBy"}),"(",(0,s.jsx)(n.code,{children:"options"}),"): ",(0,s.jsx)(n.code,{children:"Collection"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Filters a collection of colors using the specified ",(0,s.jsx)(n.code,{children:"factor"})," as the criterion. The supported options are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'contrast'"})," - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'lightness'"})," - Returns colors in the specified lightness range."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'chroma'"})," - Returns colors in the specified ",(0,s.jsx)(n.code,{children:"saturation"})," or ",(0,s.jsx)(n.code,{children:"chroma"})," range. The range is internally normalized to the supported ranges by the ",(0,s.jsx)(n.code,{children:"colorspace"})," in use if it is out of range."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'distance'"})," - Returns colors with the specified ",(0,s.jsx)(n.code,{children:"distance"})," range. The ",(0,s.jsx)(n.code,{children:"distance"})," is tested against a comparison color (the 'against' param) and the specified ",(0,s.jsx)(n.code,{children:"distance"})," ranges. Uses the ",(0,s.jsx)(n.code,{children:"differenceHyab"})," metric for calculating the distances."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"luminance"})," - Returns colors in the specified luminance range."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'hue'"})," - Returns colors in the specified hue ranges between 0 to 360."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"chroma"})," and ",(0,s.jsx)(n.code,{children:"lightness"})," factors, the range is internally normalized to the supported ranges by the ",(0,s.jsx)(n.code,{children:"colorspace"})," in use if it is out of range.\nThis means a value in the range ",(0,s.jsx)(n.code,{children:"[0,1]"})," will return, for example if you pass ",(0,s.jsx)(n.code,{children:"startLightness"})," as ",(0,s.jsx)(n.code,{children:"0.3"})," it means ",(0,s.jsx)(n.code,{children:"0.3 (or 30%)"})," of the channel's supported range.\nBut if the value of either start or end is above 1 AND the ",(0,s.jsx)(n.code,{children:"colorspace"})," in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range ",(0,s.jsx)(n.code,{children:"[0,100]"})," and will return the normalized value."]}),"\n",(0,s.jsx)(n.h6,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.h6,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Collection"})}),"\n",(0,s.jsx)(n.h6,{id:"see",children:"See"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://culorijs.org/color-spaces/",children:"https://culorijs.org/color-spaces/"})," For the expected ranges per colorspace."]}),"\n",(0,s.jsxs)(n.p,{children:["Supports expression strings e.g ",(0,s.jsx)(n.code,{children:"'>=0.5'"}),". The supported symbols are ",(0,s.jsx)(n.code,{children:"== | === | != | !== | >= | <= | < | >"})]}),"\n",(0,s.jsx)(n.h6,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { filterBy } from 'huetiful-js';\n\nlet sample = [\n\t'#00ffdc',\n\t'#00ff78',\n\t'#00c000',\n\t'#007e00',\n\t'#164100',\n\t'#ffff00',\n\t'#310000',\n\t'#3e0000',\n\t'#4e0000',\n\t'#600000',\n\t'#720000'\n];\n\n// Filtering colors by their relative contrast against 'green'.\n// The collection will include colors with a relative contrast equal to 3 or greater.\n\nconsole.log(\n\tload(sample).filterBy({ start: '>=3', factor: 'contrast', against: 'green' })\n);\n// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]\n"})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L188",children:"wrappers.ts:188"})}),"\n",(0,s.jsx)(n.h5,{id:"interpolator",children:"interpolator()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"interpolator"}),"(",(0,s.jsx)(n.code,{children:"options"}),"): ",(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Interpolates the passed in colors and returns a collection of colors from the interpolation."}),"\n",(0,s.jsx)(n.p,{children:"Some things to keep in mind when creating color scales using this function:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To create a color scale for cyclic values pass ",(0,s.jsx)(n.code,{children:"true"})," to the ",(0,s.jsx)(n.code,{children:"closed"})," parameter in the ",(0,s.jsx)(n.code,{children:"options"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"num"})," is 1 then a single color is returned from the resulting interpolation with the internal ",(0,s.jsx)(n.code,{children:"t"})," value at ",(0,s.jsx)(n.code,{children:"0.5"})," else a collection of the ",(0,s.jsx)(n.code,{children:"num"})," of color scales is returned."]}),"\n",(0,s.jsx)(n.li,{children:"If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black."}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.p,{children:"Optional channel specific overrides."}),"\n",(0,s.jsx)(n.h6,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})}),"\n",(0,s.jsx)(n.h6,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { load } from 'huetiful-js';\n\n console.log(load(['pink', 'blue']).interpolateSpline({num:8, colorspace:'lch'}));\n\n // [\n'#ffc0cb', '#ff9ebe',\n'#f97bbb', '#ed57bf',\n'#d830c9', '#b800d9',\n'#8700eb', '#0000ff'\n ]\n *\n"})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L96",children:"wrappers.ts:96"})}),"\n",(0,s.jsx)(n.h5,{id:"nearest",children:"nearest()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"nearest"}),"(",(0,s.jsx)(n.code,{children:"against"}),", ",(0,s.jsx)(n.code,{children:"num"}),"): ",(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns the nearest color(s) in the bound collection against"}),"\n",(0,s.jsx)(n.h6,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"against"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.p,{children:"The color to use for distance comparison."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"num"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsxs)(n.p,{children:["The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the ",(0,s.jsx)(n.code,{children:"differenceHyab"})," metric."]}),"\n",(0,s.jsx)(n.h6,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/fr/docs/wrappers#colorarray",children:(0,s.jsx)(n.code,{children:"ColorArray"})})}),"\n",(0,s.jsx)(n.h6,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { load, colors } from 'huetiful-js';\n\nlet cols = colors('all', '500');\n\nconsole.log(load(cols).nearest('blue', 3));\n// [ '#a855f7', '#8b5cf6', '#d946ef' ]\n"})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L64",children:"wrappers.ts:64"})}),"\n",(0,s.jsx)(n.h5,{id:"output",children:"output()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"output"}),"(): ",(0,s.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"any"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the result value from the chain."}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L263",children:"wrappers.ts:263"})}),"\n",(0,s.jsx)(n.h5,{id:"sortby",children:"sortBy()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sortBy"}),"(",(0,s.jsx)(n.code,{children:"options"}),"): ",(0,s.jsx)(n.code,{children:"Collection"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sorts colors according to the specified ",(0,s.jsx)(n.code,{children:"factor"}),". The supported options are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'contrast'"})," - Sorts colors according to their contrast value as defined by WCAG.\nThe contrast is tested ",(0,s.jsx)(n.code,{children:"against"})," a comparison color which can be specified in the ",(0,s.jsx)(n.code,{children:"options"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'lightness'"})," - Sorts colors according to their lightness."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'chroma'"})," - Sorts colors according to the intensity of their ",(0,s.jsx)(n.code,{children:"chroma"})," in the ",(0,s.jsx)(n.code,{children:"colorspace"})," specified in the ",(0,s.jsx)(n.code,{children:"options"})," object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'distance'"})," - Sorts colors according to their distance.\nThe distance is computed from the ",(0,s.jsx)(n.code,{children:"against"})," color token which is used for comparison for all the colors in the ",(0,s.jsx)(n.code,{children:"collection"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"luminance"})," - Sorts colors according to their relative brightness as defined by the WCAG3 definition."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The return type is determined by the type of ",(0,s.jsx)(n.code,{children:"collection"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Plain objects are returned as ",(0,s.jsx)(n.code,{children:"Map"})," objects because they remember insertion order. ",(0,s.jsx)(n.code,{children:"Map"})," objects are returned as is."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ArrayLike"})," objects are returned as plain arrays. Plain arrays are returned as is."]}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.h6,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Collection"})}),"\n",(0,s.jsx)(n.h6,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { sortBy } from 'huetiful-js'\n\nlet sample = ['purple', 'green', 'red', 'brown']\nconsole.log(\n load(sample).sortBy({ against:'yellow' factor:'distance',order:'desc'})\n)\n\n// [ 'brown', 'red', 'green', 'purple' ]\n"})}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L222",children:"wrappers.ts:222"})}),"\n",(0,s.jsx)(n.h5,{id:"stats",children:"stats()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"stats"}),"(",(0,s.jsx)(n.code,{children:"options"}),"): {}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Computes statistical values about the passed in color collection."}),"\n",(0,s.jsxs)(n.p,{children:["The topmost properties from each returned ",(0,s.jsx)(n.code,{children:"factor"})," object are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"against"})," - The color being used for comparison."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Required for the ",(0,s.jsx)(n.code,{children:"distance"})," and ",(0,s.jsx)(n.code,{children:"contrast"})," factors.\nIf ",(0,s.jsx)(n.code,{children:"relativeMean"})," is ",(0,s.jsx)(n.code,{children:"false"}),", other factors that take the comparison color token as an overload will have this property's value as ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"colorspace"})," - The colorspace in which the factors were computed in. It has no effect on the ",(0,s.jsx)(n.code,{children:"contrast"})," or ",(0,s.jsx)(n.code,{children:"distance"})," factors (for now)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"extremums"})," - An array of the minimum and the maximum value (respectively) of the ",(0,s.jsx)(n.code,{children:"factor"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"colors"})," - An array of color tokens that have the minimum and maximum ",(0,s.jsx)(n.code,{children:"extremum"})," values respectively."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mean"})," - The average value for the ",(0,s.jsx)(n.code,{children:"factor"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"displayable"})," - The percentage of the displayable or colors with channel ranges that can be rendered in that colorspace when converted to RGB."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"mean"})," property can be overloaded by the ",(0,s.jsx)(n.code,{children:"relativeMean"})," option:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"relativeMean"})," is ",(0,s.jsx)(n.code,{children:"true"}),", the ",(0,s.jsx)(n.code,{children:"against"})," option will be used as a subtrahend for calculating the distance between each ",(0,s.jsx)(n.code,{children:"extremum"}),'.\nFor example, it will mean "Get the largest/smallest distance between ',(0,s.jsx)(n.code,{children:"factor"})," as compared ",(0,s.jsx)(n.code,{children:"against"})," this color token otherwise just get the smallest/largest ",(0,s.jsx)(n.code,{children:"factor"}),' from thr passed in collection."']}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.p,{children:"Optional parameters to specify how the data should be computed."}),"\n",(0,s.jsx)(n.h6,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"{}"}),"\n",(0,s.jsx)(n.h6,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/prjctimg/huetiful/blob/137de2749ff057aba136efac93d9d58e25ca35b0/lib/wrappers.ts#L252",children:"wrappers.ts:252"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const l={},i=s.createContext(l);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);