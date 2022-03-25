"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[788],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5281:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Conditional Statement"},c=void 0,s={unversionedId:"basics/conditional-statement",id:"basics/conditional-statement",title:"Conditional Statement",description:"If condition",source:"@site/docs/basics/conditional-statement.md",sourceDirName:"basics",slug:"/basics/conditional-statement",permalink:"/javascript/basics/conditional-statement",editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/basics/conditional-statement.md",tags:[],version:"current",frontMatter:{title:"Conditional Statement"},sidebar:"docs",previous:{title:"Variables",permalink:"/javascript/basics/variables"},next:{title:"Arrays",permalink:"/javascript/basics/arrays"}},u={},p=[{value:"If condition",id:"if-condition",level:3},{value:"if-else",id:"if-else",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"if-condition"},"If condition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 33;\n\nif (age > 18) {\n    console.log("Your are an adult.");\n}\n')),(0,o.kt)("h3",{id:"if-else"},"if-else"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 15;\n\nif (age > 18) {\n    console.log("You are an adult.");\n} else {\n    console.log("You are not an adult yet.");\n}\n')),(0,o.kt)("p",null,"During equality test, use ",(0,o.kt)("inlineCode",{parentName:"p"},"===")," for strict equality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'a = 4;\nb = "4";\n\na == b // this will result true.\na === b // this will result false\n')),(0,o.kt)("p",null,"And and or operators are denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"||"),", respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var age = 35;\n\nif (age > 18 && age < 60) {\n    console.log("You are an adult but not a senior citizen.");\n}\n')),(0,o.kt)("p",null,"There is a shorthand for if-else condition as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'if (a==b) {\n    console.log("Match");\n} else {\n    console.log("No match");\n}\n')),(0,o.kt)("p",null,"is same as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'a==b ? console.log("Match") : console.log("No match");\n')))}d.isMDXComponent=!0}}]);