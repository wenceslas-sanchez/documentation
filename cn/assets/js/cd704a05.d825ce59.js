"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={hide_table_of_contents:!0},l="Overview",i={unversionedId:"Developers/Overview",id:"Developers/Overview",title:"Overview",description:"How Pendle Works",source:"@site/docs/Developers/Overview.md",sourceDirName:"Developers",slug:"/Developers/Overview",permalink:"/cn/Developers/Overview",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Creating New Pools",permalink:"/cn/AppGuide/CreatingNewPools"},next:{title:"Developer FAQ",permalink:"/cn/Developers/DeveloperFAQ"}},s={},p=[{value:"How Pendle Works",id:"how-pendle-works",level:2},{value:"How to Integrate Pendle",id:"how-to-integrate-pendle",level:2},{value:"For on-chain contract systems building on top of Pendle",id:"for-on-chain-contract-systems-building-on-top-of-pendle",level:3},{value:"For off-chain systems building on top of Pendle:",id:"for-off-chain-systems-building-on-top-of-pendle",level:3},{value:"For mobile wallets who want to feature Pendle Earn in your app:",id:"for-mobile-wallets-who-want-to-feature-pendle-earn-in-your-app",level:3},{value:"Deployed contract addresses:",id:"deployed-contract-addresses",level:3},{value:"Support",id:"support",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"how-pendle-works"},"How Pendle Works"),(0,a.kt)("p",null,"To understand how Pendle works on the contract level, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Start with Pendle's ",(0,a.kt)("a",{parentName:"p",href:"/cn/Developers/HighLevelArchitecture"},"High Level Architecture")," for an overview of the components in Pendle protocol.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to the developer docs on ",(0,a.kt)("a",{parentName:"p",href:"/cn/Developers/Contracts/vePENDLE"},"vePENDLE")," to understand the components and cross-chain mechanisms of vePENDLE.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to the repository for Pendle V2 contracts: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pendle-finance/pendle-core-v2-public/"},"GitHub link")))),(0,a.kt)("p",null,"To understand the deeper mechanics and formulas involved in the Pendle protocol, you can refer to the 4 whitepapers at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pendle-finance/pendle-v2-resources/tree/main/whitepapers"},"this link"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SY: explains EIP-5115 Standardized Yield, a token standard to generalize yield generating mechanisms;"),(0,a.kt)("li",{parentName:"ul"},"SYS: explains how Pendle split any Standardized Yield token into Principal Tokens and Yield Tokens;"),(0,a.kt)("li",{parentName:"ul"},"V2_AMM: explains how the AMM works in Pendle V2;"),(0,a.kt)("li",{parentName:"ul"},"vePENDLE: explains how vePENDLE works;")),(0,a.kt)("h2",{id:"how-to-integrate-pendle"},"How to Integrate Pendle"),(0,a.kt)("h3",{id:"for-on-chain-contract-systems-building-on-top-of-pendle"},"For on-chain contract systems building on top of Pendle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For money markets or CDP-like stablecoins looking to accepts PT as collateral: refer to ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Integration/PTAsCollateral"},"PT as Collateral doc")),(0,a.kt)("li",{parentName:"ul"},"For money markets or CDP-like stablecoins looking to accepts Pendle's LP token as collateral: refer to ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Integration/LPAsCollateral"},"LP as Collateral doc")),(0,a.kt)("li",{parentName:"ul"},"For systems that need an oracle for PT or LP prices: refer to ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Integration/PTOracle"},"this for the PT Oracle")," and ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Integration/LPOracle"},"this for the LP Oracle"))),(0,a.kt)("h3",{id:"for-off-chain-systems-building-on-top-of-pendle"},"For off-chain systems building on top of Pendle:"),(0,a.kt)("p",null,"Pendle provides three key services to support developers in leveraging the Pendle protocol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pendle's RouterStatic:")," This is a low-level system built in Solidity, consisting of on-chain computational and data aggregation functions. You can find additional details ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Helpers/PendleRouterStatic"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pendle's Hosted SDK:")," This is a collection of APIs designed to generate calldata for on-chain operations, such as buying PT, zapping into a market, or redeeming yield. More information is available ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Helpers/HostedSDK"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pendle's Backend:")," This comprises a set of APIs designed to integrate on-chain and off-chain data, covering aspects like spot and historical prices of various assets, APYs of different markets, and a list of transactions for a market. Further details can be found ",(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Helpers/Backend"},"here"),".")),(0,a.kt)("h3",{id:"for-mobile-wallets-who-want-to-feature-pendle-earn-in-your-app"},"For mobile wallets who want to feature Pendle Earn in your app:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pendle Earn is already optimized for mobile usage"),(0,a.kt)("li",{parentName:"ul"},"You just need to add a link or shortcut for users to navigate to the Pendle Earn app at ",(0,a.kt)("a",{parentName:"li",href:"https://app.pendle.finance/earn"},"https://app.pendle.finance/earn")),(0,a.kt)("li",{parentName:"ul"},"If your wallet is not supported on Pendle yet, please reach out to us by creating a ticket at the #collab-ticket channel in our Discord at ",(0,a.kt)("a",{parentName:"li",href:"https://pendle.finance/discord"},"https://pendle.finance/discord"))),(0,a.kt)("h3",{id:"deployed-contract-addresses"},"Deployed contract addresses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Deployments/Ethereum"},"Ethereum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Deployments/Arbitrum"},"Arbitrum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cn/Developers/Deployments/BNBChain"},"BNB Chain"))),(0,a.kt)("p",null,"Other relevant sections can be found in the navigation sidebar on the left."),(0,a.kt)("h3",{id:"support"},"Support"),(0,a.kt)("p",null,"Should you need additional assistance, feel free to reach out to us via our ",(0,a.kt)("a",{parentName:"p",href:"https://pendle.finance/discord"},"Developers channel in Discord"),". Pendle's developers are always at hand and you can anticipate a response to your inquiries within 12 hours."))}u.isMDXComponent=!0}}]);