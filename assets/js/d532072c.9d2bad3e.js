"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[939],{2714:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(4848),t=s(8453);const i={title:"File system"},l=void 0,o={id:"node/file-system",title:"File system",description:"File list",source:"@site/docs/node/file-system.md",sourceDirName:"node",slug:"/node/file-system",permalink:"/javascript/node/file-system",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/node/file-system.md",tags:[],version:"current",frontMatter:{title:"File system"},sidebar:"docs",previous:{title:"Core modules",permalink:"/javascript/node/core-modules"},next:{title:"Callbacks",permalink:"/javascript/node/callbacks"}},c={},a=[{value:"File list",id:"file-list",level:3},{value:"Read file",id:"read-file",level:3},{value:"Write file",id:"write-file",level:3},{value:"Create new directory",id:"create-new-directory",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"file-list",children:"File list"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nconst files = fs.readdirSync(".");\n\nconsole.log(files);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"read-file",children:"Read file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nconst text = fs.readFileSync("../../README.md", "utf-8");\n\nconsole.log(text);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If we want to ready the binary, we just don't need to provide second encoding\nargument ",(0,r.jsx)(n.code,{children:"utf-8"}),". When we read files synchronously, the code will wait until the\njob has finished. We can also read files asynchronously. Let us also implement\nsome error handling."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nconst text = fs.readFile("../../README.md", "utf-8", (err, text) => {\n    if (err) {\n        console.log(`An error has occurred!\\n ${err}`);\n        process.exit();\n    };\n    console.log(text);\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"write-file",children:"Write file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nconst md = `\n# This is a new file\n\nWe are learning how to write file using Node.js.\n`;\n\nfs.writeFile("./note.md", md.trim(), err => {\n    if (err) {\n        throw err;\n    };\n    console.log("File saved!");\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-new-directory",children:"Create new directory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\n\nfs.mkdir("new-dir", err => {\n    if (err) {\n        throw err;\n    }\n    console.log("Directory created!");\n});\n'})})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);