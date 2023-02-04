"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[22],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(b,l(l({ref:n},u),{},{components:t})):r.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},780:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Variable scope"},c=void 0,s={unversionedId:"functions-objects/variable-scope",id:"functions-objects/variable-scope",title:"Variable scope",description:"When you define a function in the root of your script, it is available globally",source:"@site/docs/functions-objects/variable-scope.md",sourceDirName:"functions-objects",slug:"/functions-objects/variable-scope",permalink:"/javascript/functions-objects/variable-scope",draft:!1,editUrl:"https://github.com/pranabdas/javascript/blob/main/docs/functions-objects/variable-scope.md",tags:[],version:"current",frontMatter:{title:"Variable scope"},sidebar:"docs",previous:{title:"Functions",permalink:"/javascript/functions-objects/functions"},next:{title:"Objects",permalink:"/javascript/functions-objects/objects"}},u={},p=[{value:"let and const",id:"let-and-const",level:3},{value:"Default values for function argument",id:"default-values-for-function-argument",level:3},{value:"Arbitrary number of arguments",id:"arbitrary-number-of-arguments",level:3}],f={toc:p},m="wrapper";function b(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you define a function in the root of your script, it is available globally\nthroughout the script, including inside the function block. When you define a\nvariable inside the function block, it is available only inside the function\nblock."),(0,o.kt)("h3",{id:"let-and-const"},"let and const"),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," is defined it cannot be changed. Like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const PI = 3.14;\n")),(0,o.kt)("p",null,"The value of a ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," cannot be changed later. On the other hand ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," is\nanother variable type, which has even smaller scope than ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," has scope\nonly in a block level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function varScope() {\n    var localVar = 1;\n\n    if (localVar) {\n        var localVar = 2;\n        console.log(localVar);\n    }\n    console.log(localVar);\n}\n\nvarScope()\n\n2\n2\n")),(0,o.kt)("p",null,"So we see that if we reassign a variable inside a block, the variable is changed\nfor the whole function. Here comes the ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function varScope() {\n    var localVar = 1;\n\n    if (localVar) {\n        let localVar = 2;\n        console.log(localVar);\n    }\n    console.log(localVar);\n}\n\nvarScope()\n\n2\n1\n")),(0,o.kt)("p",null,"Note that if we define the first variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),", it's scope will be whole\nfunction block while the scope of second ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," is only the if-condition block."),(0,o.kt)("h3",{id:"default-values-for-function-argument"},"Default values for function argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function greetUser(greetingMessage="Hello", userName="User") {\n    console.log(greetingMessage + " " + userName);\n};\n\n> greetUser()\nHello User\n\n> greetUser("Welcome")\nWelcome User\n\n> greetUser("Welcome", "Pranab")\nWelcome Pranab\n')),(0,o.kt)("h3",{id:"arbitrary-number-of-arguments"},"Arbitrary number of arguments"),(0,o.kt)("p",null,"We can access the arguments by the ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sumAll() {\n    var sum = 0;\n\n    for (var ii=0; ii<arguments.length; ii++) {\n        sum += arguments[ii];\n    };\n    return sum;\n};\n\n> sumAll(2, 3, 4)\n9\n")))}b.isMDXComponent=!0}}]);