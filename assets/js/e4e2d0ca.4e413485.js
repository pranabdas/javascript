"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([["977"],{8201:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>p,frontMatter:()=>i});var r=JSON.parse('{"id":"react/gh-pages","title":"Deploying React app to github pages","description":"Install gh-pages in your project.","source":"@site/docs/react/gh-pages.md","sourceDirName":"react","slug":"/react/gh-pages","permalink":"/javascript/react/gh-pages","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/javascript/blob/main/docs/react/gh-pages.md","tags":[],"version":"current","frontMatter":{"title":"Deploying React app to github pages","sidebar_label":"GitHub Deploy"},"sidebar":"docs","previous":{"title":"React.js","permalink":"/javascript/react/"},"next":{"title":"TypeScript","permalink":"/javascript/react/typescript"}}'),a=n("5893"),s=n("65");let i={title:"Deploying React app to github pages",sidebar_label:"GitHub Deploy"},c=void 0,o={},p=[];function l(e){let t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"gh-pages"})," in your project."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install gh-pages --save-dev\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Make following changes in the ",(0,a.jsx)(t.code,{children:"package.json"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'{\n  "homepage": "https://pranabdas.github.io/suvapp",\n  "name": "suvapp",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@testing-library/jest-dom": "^5.11.6",\n    "@testing-library/react": "^11.2.2",\n    "@testing-library/user-event": "^12.3.0",\n    "react": "^17.0.1",\n    "react-dom": "^17.0.1",\n    "react-scripts": "4.0.1",\n    "web-vitals": "^0.2.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d build"\n  },\n  ...\n'})}),"\n",(0,a.jsx)(t.p,{children:"Deploy command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm run deploy\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["Note that if you are using ",(0,a.jsx)(t.code,{children:"react-router"})," github pages deploy might not work\nproperly. Please consider using ",(0,a.jsx)(t.code,{children:"hash-router"})," instead. Alternatively, you can\ndeploy via another service, e.g., Netlify."]})})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},65:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(7294);let a={},s=r.createContext(a);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);