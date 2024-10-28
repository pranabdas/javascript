"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[355],{2706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var c=t(4848),s=t(8453);const r={title:"Document Object Model",sidebar_label:"DOM"},l=void 0,o={id:"dom/dom",title:"Document Object Model",description:"The Web browser is itself an object, Browser Object. We can interact with it",source:"@site/docs/dom/dom.md",sourceDirName:"dom",slug:"/dom/",permalink:"/javascript/dom/",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/dom/dom.md",tags:[],version:"current",frontMatter:{title:"Document Object Model",sidebar_label:"DOM"},sidebar:"docs",previous:{title:"DOM",permalink:"/javascript/category/dom"},next:{title:"Event handler",permalink:"/javascript/dom/event-handler"}},i={},a=[{value:"querySelector",id:"queryselector",level:4},{value:"Access and change element",id:"access-and-change-element",level:3}];function d(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"The Web browser is itself an object, Browser Object. We can interact with it\nlike we do with any other object. We can get the window size using an object\nproperty, or open a new tab using a method. The html content inside the BOM, is\ncalled DOM. Here, we will discuss how we can interact with various DOM elements."}),"\n",(0,c.jsx)(n.p,{children:"For example, you can type these things in the console:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"document.URL\ndocument.title\ndocument.head\ndocument.body\n"})}),"\n",(0,c.jsx)(n.p,{children:"And it will return specific DOM elements."}),"\n",(0,c.jsxs)(n.p,{children:["For this tutorial, we will use another html file ",(0,c.jsx)(n.code,{children:"dom-tutorial.html"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"queryselector",children:"querySelector"}),"\n",(0,c.jsxs)(n.p,{children:["We can use ",(0,c.jsx)(n.code,{children:"querySelector"})," to target any element in the html as we do in CSS.\nNote that ",(0,c.jsx)(n.code,{children:"querySelector"})," will return the first instance of the selection, while\n",(0,c.jsx)(n.code,{children:"querySelectorAll"})," will return the list of all matching elements. Now try\nyourself:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'document.querySelector("h2")\ndocument.querySelector(".description")\ndocument.querySelector("ul")\ndocument.querySelectorAll("h4")\ndocument.querySelectorAll("li")\n'})}),"\n",(0,c.jsx)(n.h3,{id:"access-and-change-element",children:"Access and change element"}),"\n",(0,c.jsx)(n.p,{children:"We can select and change and element in the html document:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'document.querySelector("h4.city").innerHTML\ndocument.querySelector("h4.city").outerHTML\n'})}),"\n",(0,c.jsx)(n.p,{children:"Now we can change these elements by simply assigning new values."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'document.querySelector("h4.city").innerHTML = "List of cities:"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["We can access and change ",(0,c.jsx)(n.code,{children:"class"})," or ",(0,c.jsx)(n.code,{children:"id"})," as well:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'document.querySelector(".city").className\ndocument.querySelector(".city").classList\ndocument.querySelector(".city").classList.add("new-class")\ndocument.querySelector(".city").classList.remove("new-class")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var c=t(6540);const s={},r=c.createContext(s);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);