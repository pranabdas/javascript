"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[362],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6123:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={title:"Core modules"},s=void 0,c={unversionedId:"node/core-modules",id:"node/core-modules",title:"Core modules",description:"These are the modules comes preinstalled with node.js like the path module we",source:"@site/docs/node/core-modules.md",sourceDirName:"node",slug:"/node/core-modules",permalink:"/javascript/node/core-modules",editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/node/core-modules.md",tags:[],version:"current",frontMatter:{title:"Core modules"},sidebar:"docs",previous:{title:"Standar I/O",permalink:"/javascript/node/io"},next:{title:"File system",permalink:"/javascript/node/file-system"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are the modules comes preinstalled with node.js like the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," module we\nused earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\n\nconst dirUpload = path.join(__dirname, "uploads");\n\nconsole.log(dirUpload);\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"util")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst util = require("util");\n\nutil.log(path.basename(__filename));\n\nutil.log("  ^ the name of the current file.");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"28 Apr 22:37:34 - core.js\n28 Apr 22:37:34 -   ^ the name of the current file.\n")),(0,a.kt)("p",null,"We have dozens of such modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const v8 = require("v8");\n\nconsole.log(v8.getHeapStatistics());\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  total_heap_size: 4505600,\n  total_heap_size_executable: 524288,\n  total_physical_size: 3408264,\n  total_available_size: 2194589720,\n  used_heap_size: 2376352,\n  heap_size_limit: 2197815296,\n  malloced_memory: 8192,\n  peak_malloced_memory: 123200,\n  does_zap_garbage: 0,\n  number_of_native_contexts: 1,\n  number_of_detached_contexts: 0\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readline")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const readline = require("readline");\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nrl.question("What is you name? ", answer => {\n    console.log(`Hello ${answer}`);\n    process.exit();\n});\n')))}m.isMDXComponent=!0}}]);