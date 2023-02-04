"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[623],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2805:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={title:"File system"},s=void 0,c={unversionedId:"node/file-system",id:"node/file-system",title:"File system",description:"File list",source:"@site/docs/node/file-system.md",sourceDirName:"node",slug:"/node/file-system",permalink:"/javascript/node/file-system",draft:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/node/file-system.md",tags:[],version:"current",frontMatter:{title:"File system"},sidebar:"docs",previous:{title:"Core modules",permalink:"/javascript/node/core-modules"},next:{title:"Callbacks",permalink:"/javascript/node/callbacks"}},u={},f=[{value:"File list",id:"file-list",level:3},{value:"Read file",id:"read-file",level:3},{value:"Write file",id:"write-file",level:3},{value:"Create new directory",id:"create-new-directory",level:3}],d={toc:f},p="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"file-list"},"File list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst files = fs.readdirSync(".");\n\nconsole.log(files);\n')),(0,i.kt)("h3",{id:"read-file"},"Read file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst text = fs.readFileSync("../../README.md", "utf-8");\n\nconsole.log(text);\n')),(0,i.kt)("p",null,"If we want to ready the binary, we just don't need to provide second encoding\nargument ",(0,i.kt)("inlineCode",{parentName:"p"},"utf-8"),". When we read files synchronously, the code will wait until the\njob has finished. We can also read files asynchronously. Let us also implement\nsome error handling."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst text = fs.readFile("../../README.md", "utf-8", (err, text) => {\n    if (err) {\n        console.log(`An error has occurred!\\n ${err}`);\n        process.exit();\n    };\n    console.log(text);\n});\n')),(0,i.kt)("h3",{id:"write-file"},"Write file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst md = `\n# This is a new file\n\nWe are learning how to write file using Node.js.\n`;\n\nfs.writeFile("./note.md", md.trim(), err => {\n    if (err) {\n        throw err;\n    };\n    console.log("File saved!");\n});\n')),(0,i.kt)("h3",{id:"create-new-directory"},"Create new directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nfs.mkdir("new-dir", err => {\n    if (err) {\n        throw err;\n    }\n    console.log("Directory created!");\n});\n')))}m.isMDXComponent=!0}}]);