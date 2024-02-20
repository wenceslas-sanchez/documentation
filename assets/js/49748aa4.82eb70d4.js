"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[4868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={hide_table_of_contents:!0},l="Getting Started",i={unversionedId:"Developers/SDK/GettingStarted",id:"Developers/SDK/GettingStarted",title:"Getting Started",description:"Overview",source:"@site/docs/Developers/SDK/GettingStarted.md",sourceDirName:"Developers/SDK",slug:"/Developers/SDK/GettingStarted",permalink:"/Developers/SDK/GettingStarted",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Price Impact Calculation for Liquidating PT and LP",permalink:"/Developers/Integration/PriceImpactCalculation"},next:{title:"WrappedContract",permalink:"/Developers/SDK/WrappedContract"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Create Pendle SDK Router",id:"create-pendle-sdk-router",level:2},{value:"Usage",id:"usage",level:2},{value:"Other resources",id:"other-resources",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Pendle SDK is a typescript package to interact with the Pendle protocol."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"With NPM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @pendle/sdk-v2\n")),(0,a.kt)("p",null,"With Yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @pendle/sdk-v2\n")),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"Pendle SDK is built on top of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/"},"Ethers.js")," library. To interact with the contracts using Ethers.js, first we need to prepare two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"provider"),", which is a connection to the Ethereum network."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"signer"),", which holds your private key and can sign things.")),(0,a.kt)("p",null,"Typically, ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," that interacts with the Ethereum network via JSON-RPC can be created  as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import ethers from 'ethers';\n\nconst jsonRpcUrl = 'your-json-rpc-url';\nconst privateKey = 'your-private-key';\nconst provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);\nconst signer = new ethers.Wallet(privateKey, provider);\n")),(0,a.kt)("p",null,"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/getting-started"},"documentation of Ethers.js")," for the usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"signer"),"."),(0,a.kt)("p",null,"To demonstrate the usage of the SDK, we will use a prepared ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," and some test accounts with filled balances in a local forked network. Check how you can ",(0,a.kt)("a",{parentName:"p",href:"/Developers/SDK/Playground"},"try out the Pendle SDK in a local playgrond")," to see how they are created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import ethers from 'ethers';\nimport { provider, testAccounts } from './sdk-doc-playground.mjs';\n\n{\n    const address = testAccounts[0].address;\n    const ethBalance = ethers.utils.formatEther(await testAccounts[0].wallet.getBalance());\n    console.log('Test account info:', { address, ethBalance });\n}\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Test account info: {\n  address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',\n  ethBalance: '9959.796037708252906401'\n}\n")),(0,a.kt)("h2",{id:"create-pendle-sdk-router"},"Create Pendle SDK Router"),(0,a.kt)("p",null,"Pendle SDK Router is an object that interacts with ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x00000000005BBB0EF59571E58418F9a4357b68A0"},"PendleRouter contract"),". It can be created as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router } from '@pendle/sdk-v2';\n\nconst router = Router.getRouter({\n    chainId: 1, // ethereum chain id\n    provider,\n    signer: testAccounts[0].wallet,\n});\n\nconsole.log('Router address:', router.address);\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Router address: 0x00000000005BBB0EF59571E58418F9a4357b68A0\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Please check out the next guides for detailed explanation on using the Pendle SDK."),(0,a.kt)("h2",{id:"other-resources"},"Other resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Source code: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pendle-finance/pendle-sdk-core-v2-public"},"https://github.com/pendle-finance/pendle-sdk-core-v2-public")),(0,a.kt)("li",{parentName:"ul"},"API reference: ",(0,a.kt)("a",{parentName:"li",href:"https://pendle-finance.github.io/pendle-sdk-core-v2-public/index.html"},"https://pendle-finance.github.io/pendle-sdk-core-v2-public/index.html"))))}u.isMDXComponent=!0}}]);