"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[788],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Conditional Statement"},c=void 0,s={unversionedId:"basics/conditional-statement",id:"basics/conditional-statement",title:"Conditional Statement",description:"If condition",source:"@site/docs/basics/conditional-statement.md",sourceDirName:"basics",slug:"/basics/conditional-statement",permalink:"/javascript/basics/conditional-statement",draft:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/basics/conditional-statement.md",tags:[],version:"current",frontMatter:{title:"Conditional Statement"},sidebar:"docs",previous:{title:"Variables",permalink:"/javascript/basics/variables"},next:{title:"Arrays",permalink:"/javascript/basics/arrays"}},u={},p=[{value:"If condition",id:"if-condition",level:3},{value:"if-else",id:"if-else",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"if-condition"},"If condition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 33;\n\nif (age > 18) {\n    console.log("Your are an adult.");\n}\n')),(0,o.kt)("h3",{id:"if-else"},"if-else"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 15;\n\nif (age > 18) {\n    console.log("You are an adult.");\n} else {\n    console.log("You are not an adult yet.");\n}\n')),(0,o.kt)("p",null,"During equality test, use ",(0,o.kt)("inlineCode",{parentName:"p"},"===")," for strict equality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'a = 4;\nb = "4";\n\na == b // this will result true.\na === b // this will result false\n')),(0,o.kt)("p",null,"And and or operators are denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"||"),", respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 35;\n\nif (age > 18 && age < 60) {\n    console.log("You are an adult but not a senior citizen.");\n}\n')),(0,o.kt)("p",null,"There is a shorthand for if-else condition as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'if (a==b) {\n    console.log("Match");\n} else {\n    console.log("No match");\n}\n')),(0,o.kt)("p",null,"is same as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'a==b ? console.log("Match") : console.log("No match");\n')))}d.isMDXComponent=!0}}]);