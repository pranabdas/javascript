"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[37],{9330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(4848),r=t(8453);const s={title:"React.js"},o=void 0,i={id:"react/react",title:"React.js",description:"An open source framework to build web application [https://reactjs.org](",source:"@site/docs/react/react.md",sourceDirName:"react",slug:"/react/",permalink:"/javascript/react/",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/react/react.md",tags:[],version:"current",frontMatter:{title:"React.js"},sidebar:"docs",previous:{title:"React",permalink:"/javascript/category/react"},next:{title:"GitHub Deploy",permalink:"/javascript/react/gh-pages"}},c={},p=[{value:"Creating react component",id:"creating-react-component",level:3},{value:"Fetch data from API",id:"fetch-data-from-api",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["An open source framework to build web application ",(0,a.jsx)(n.a,{href:"https://reactjs.org",children:"https://reactjs.org"}),". You need to have node.js installed in your system.\nAlternatively, you can run your development environment in Docker:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker run -ti -p 127.0.0.1:3000:3000 -v ${PWD}:/home node:lts-buster-slim bash\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// create your app. npx allows to run create-react-app without installing\nnpx create-react-app my-react-app\n// move to my-react project directory\ncd my-react-app\n// start app\nnpm start\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will start a server in the localhost. A browser should be launched and you\ncan see a spinning react logo."}),"\n",(0,a.jsxs)(n.p,{children:["We will clear all files in ",(0,a.jsx)(n.code,{children:"public"})," and ",(0,a.jsx)(n.code,{children:"src"})," directory, except ",(0,a.jsx)(n.code,{children:"index.html"})," and\n",(0,a.jsx)(n.code,{children:"index.js"}),", respectively. Open ",(0,a.jsx)(n.code,{children:"src/index.js"})," that is the starting point of the\napp. We can simplify this file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <div>\n    <h1>Hello React! </h1>\n    <p>I am learning react and liking it. </p>\n  </div>\n  ,document.getElementById('root')\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If we have more than one html element, we have to put everything inside a single\n",(0,a.jsx)(n.code,{children:"div"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"creating-react-component",children:"Creating react component"}),"\n",(0,a.jsx)(n.p,{children:"React component allows bit more modular approach:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction Heading() {\n  return (\n    <div>\n      <h1>Hello React! </h1>\n      <p>I am learning React and I am liking it.</p>\n    </div>\n  )\n};\n\nReactDOM.render(< Heading />, document.getElementById('root'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Alternative where we can use extension of ",(0,a.jsx)(n.code,{children:"React.Component"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nclass Heading extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>Hello React! </h1>\n        <p>I am learning React and I am liking it.</p>\n      </div>\n    )\n  }\n};\n\nReactDOM.render(< Heading />, document.getElementById('root'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Important:"})," React component names must start with uppercase letter."]}),"\n",(0,a.jsxs)(n.p,{children:["Now let's separate our App component in a separate file. Our ",(0,a.jsx)(n.code,{children:"index.js"})," entry becomes:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { render } from '@testing-library/react';\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App.jsx';\n\nReactDOM.render(< App />, document.getElementById('root'));\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We use ",(0,a.jsx)(n.code,{children:"App.jsx"})," in the ",(0,a.jsx)(n.code,{children:"src"})," directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\n\nfunction App() {\n    return(\n      <>\n        <h1>Hello React! </h1>\n        <p>I am learning React and I am liking it.</p>\n      </>\n    )\n  }\n\nexport default App\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's display some data. You can get the data from\n",(0,a.jsx)(n.code,{children:"https://api.github.com/users/<username>"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import React from \'react\';\n\nconst user = {\n    "login": "pranabdas",\n    "id": 31024886,\n    "node_id": "MDQ6VXNlcjMxMDI0ODg2",\n    "avatar_url": "https://avatars2.githubusercontent.com/u/31024886?v=4",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/pranabdas",\n    "html_url": "https://github.com/pranabdas",\n    "followers_url": "https://api.github.com/users/pranabdas/followers",\n    "following_url": "https://api.github.com/users/pranabdas/following{/other_user}",\n    "gists_url": "https://api.github.com/users/pranabdas/gists{/gist_id}",\n    "starred_url": "https://api.github.com/users/pranabdas/starred{/owner}{/repo}",\n    "subscriptions_url": "https://api.github.com/users/pranabdas/subscriptions",\n    "organizations_url": "https://api.github.com/users/pranabdas/orgs",\n    "repos_url": "https://api.github.com/users/pranabdas/repos",\n    "events_url": "https://api.github.com/users/pranabdas/events{/privacy}",\n    "received_events_url": "https://api.github.com/users/pranabdas/received_events",\n    "type": "User",\n    "site_admin": false,\n    "name": "Pranab Das",\n    "company": null,\n    "blog": "https://pranabdas.github.io",\n    "location": null,\n    "email": null,\n    "hireable": null,\n    "bio": null,\n    "twitter_username": "pranab_das",\n    "public_repos": 24,\n    "public_gists": 1,\n    "followers": 0,\n    "following": 0,\n    "created_at": "2017-08-15T02:36:34Z",\n    "updated_at": "2020-12-02T09:35:04Z"\n}\n\nfunction App() {\n    return(\n    <>\n        <img src={user.avatar_url} alt={user.name} />\n        <h3>Hello {user.name}!</h3>\n        <p>Twitter: <a href={`https://twitter.com/${user.twitter_username}`}>@{user.twitter_username}</a></p>\n      </>\n    )\n  }\n\nexport default App\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Let's create an app to add two numbers. Here we will learn how to accept user\ninputs. We just work in our ",(0,a.jsx)(n.code,{children:"App.jsx"})," file from previous example."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import React, { useState } from \'react\';\n\nfunction App() {\n    const [input1, setInput1] = useState(0);\n    const [input2, setInput2] = useState(0);\n    const [total, setTotal] = useState(input1 + input2);\n\n    function add() {\n        setTotal(input1 + input2)\n    }\n\n    return(\n    <>\n        <h3>Adding two numbers</h3>\n        <input\n            type="number"\n            value={input1}\n            onChange={e => setInput1(+e.target.value)}\n            placeholder="0"\n        />\n        <input\n            type="number"\n            value={input2}\n            onChange={e => setInput2(+e.target.value)}\n            placeholder="0"\n        />\n        <button onClick={add}>Add</button>\n        <p>{total}</p>\n      </>\n    )\n  }\n\nexport default App\n'})}),"\n",(0,a.jsx)(n.h3,{id:"fetch-data-from-api",children:"Fetch data from API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import React from \'react\';\n\nclass App extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      loading: false,\n      planet: {}\n    }\n  }\n\n  componentDidMount() {\n    this.setState({loading: true})\n    fetch("https://swapi.dev/api/planets/2/")\n        .then(response => response.json())\n        .then(data => {\n          this.setState({\n            loading: false,\n            planet: data\n          })\n        })\n  }\n\n  render() {\n    const text = this.state.loading ? "loading..." : this.state.planet.name\n    return (\n      <div>\n        <p>{text}</p>\n      </div>\n    )\n  }\n}\n\nexport default App;\n'})}),"\n",(0,a.jsx)(n.p,{children:"Finally, let's combine all that we have learned. We will accept an user input of\ntheir Github username, and later show them some info based their Github profile\ndata."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you use React ",(0,a.jsx)(n.code,{children:"StrictMode"}),", components will render twice on every change."]})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);