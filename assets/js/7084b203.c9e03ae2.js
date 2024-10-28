"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[317],{2480:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=a(4848),s=a(8453);const i={title:"Variables"},o=void 0,r={id:"basics/variables",title:"Variables",description:"Starting from ES2015, there are two recommended way to declare variables:",source:"@site/docs/basics/variables.md",sourceDirName:"basics",slug:"/basics/variables",permalink:"/javascript/basics/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/basics/variables.md",tags:[],version:"current",frontMatter:{title:"Variables"},sidebar:"docs",previous:{title:"Setup",permalink:"/javascript/basics/setup"},next:{title:"Conditional Statement",permalink:"/javascript/basics/conditional-statement"}},c={},l=[{value:"Common arithmetic operations",id:"common-arithmetic-operations",level:3},{value:"Some shorthand notations",id:"some-shorthand-notations",level:3},{value:"String concatenation",id:"string-concatenation",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Starting from ES2015, there are two recommended way to declare variables:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let myVar = 2;\nconst numberOfDaysInWeek = 7;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"const"})," actually declares a constant (not variable), which cannot be reassigned."]}),"\n",(0,t.jsxs)(n.p,{children:["Previously, javascript used the keyword ",(0,t.jsx)(n.code,{children:"var"})," to declare variables. Once you\ndefine a variable, we can initialize it. We do not need to explicitly declare\nthe data type (like whether integer, float or string). The data type is\ndetermined when you assign a value. We can check the datatype following way:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"> let pi = 3.14;\n  console.log(typeof pi)\n\nnumber\n"})}),"\n",(0,t.jsx)(n.h3,{id:"common-arithmetic-operations",children:"Common arithmetic operations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let a = 5;\nlet b = 7;\nlet sum = 5 + 7;\nconsole.log(sum)\n\n12\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let a = 3;\nlet b = 9;\nlet c = 6;\nlet result = a + b*c\nconsole.log(result)\n\n57\n"})}),"\n",(0,t.jsx)(n.h3,{id:"some-shorthand-notations",children:"Some shorthand notations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"a = a + 4;\na += 4;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The above works with ",(0,t.jsx)(n.code,{children:"+, -, *, /"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"a = a + 1;\na++;\n\na = a -1;\na--;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"string-concatenation",children:"String concatenation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let greeting = "Hello ";\nlet name = "Pranab";\n\nconsole.log(greeting + name)\n\nHello Pranab\n'})}),"\n",(0,t.jsx)(n.p,{children:"Be careful to check the data type while using operators. Notice the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let a = "4"; // this a string\nlet b = 5;\n\nlet sum = a + b;\nlet sub = a - b;\nlet mult = a * b;\n\nconsole.log("sum = " + sum + ", sub =" + sub + ", mult =" + mult)\n\nsum = 45, sub =-1, mult =20\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Notice the string concatenation in case of addition, however subtraction and\nmultiplication carried out properly even though ",(0,t.jsx)(n.code,{children:"a"})," was a string. Obviously, it\nworks only when the string contains only numbers."]}),"\n",(0,t.jsxs)(n.p,{children:["Please also see ",(0,t.jsx)(n.a,{href:"/functions-objects/variable-scope",children:"Variable scope"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);