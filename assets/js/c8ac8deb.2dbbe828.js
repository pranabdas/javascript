"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([["203"],{873:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>l});var r=JSON.parse('{"id":"dom/event-handler","title":"Event handler","description":"We can do something based on the browser events, like when a button is clicked,","source":"@site/docs/dom/event-handler.md","sourceDirName":"dom","slug":"/dom/event-handler","permalink":"/javascript/dom/event-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/javascript/blob/main/docs/dom/event-handler.md","tags":[],"version":"current","frontMatter":{"title":"Event handler"},"sidebar":"docs","previous":{"title":"DOM","permalink":"/javascript/dom/"},"next":{"title":"Node","permalink":"/javascript/category/node"}}'),a=t("5893"),o=t("65");let l={title:"Event handler"},s=void 0,c={},i=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"We can do something based on the browser events, like when a button is clicked,\npage is scrolled etc."}),"\n",(0,a.jsx)(n.p,{children:"Let's create a simple html page:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n    <head>\n        <title>Event Handler</title>\n        <style>\n            .header {\n                background-color: aqua;\n            }\n        </style>\n    </head>\n\n    <body>\n        <h1 class="header">Hello Event Handler</h1>\n    </body>\n\n    <script>\n        const topHeader = document.querySelector(".header");\n\n        function clicked() {\n            alert("Top header is clicked!")\n        }\n\n        topHeader.onclick = clicked;\n    <\/script>\n</html>\n'})}),"\n",(0,a.jsxs)(n.p,{children:['Now whenever we click our header, we will see an alert saying, "Top header is\nclicked". The full list of browser events are available in ',(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events",children:"MDN website"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(7294);let a={},o=r.createContext(a);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);