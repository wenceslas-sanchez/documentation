"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[3685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={hide_table_of_contents:!0},l="LP Oracle",i={unversionedId:"Developers/Integration/LPOracle",id:"Developers/Integration/LPOracle",title:"LP Oracle",description:"Please make sure you have a good understanding of how Pendle prices PT before learning more about LP oracle (see more about PT oracles here)",source:"@site/docs/Developers/Integration/LPOracle.md",sourceDirName:"Developers/Integration",slug:"/Developers/Integration/LPOracle",permalink:"/Developers/Integration/LPOracle",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"PT Oracle",permalink:"/Developers/Integration/PTOracle"},next:{title:"PT as Collateral in a Money Market",permalink:"/Developers/Integration/PTAsCollateral"}},c={},p=[{value:"About LP Oracle",id:"about-lp-oracle",level:2},{value:"Oracle Preparation",id:"oracle-preparation",level:2},{value:"Fetch price",id:"fetch-price",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lp-oracle"},"LP Oracle"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure you have a good understanding of how Pendle prices PT before learning more about LP oracle (see more about PT oracles ",(0,n.kt)("a",{parentName:"p",href:"/Developers/Integration/PTOracle"},"here"),")")),(0,n.kt)("p",null,"The Pendle's LP token represents a user's share in Pendle AMM which pairs up PT and SY."),(0,n.kt)("p",null,"SY is the interest-bearing token wrapper which enables depositing from and redeeming from underlying asset with no additional fee or price impact. PT can be traded to and from SY/underlying asset using our AMM, with a built-in geometric mean pricing module."),(0,n.kt)("h2",{id:"about-lp-oracle"},"About LP Oracle"),(0,n.kt)("p",null,"LP oracle returns the estimated TWAP exchange rate between LP token and underlying asset. Our approach for LP pricing is to simulate a hypothetical trade on the AMM so that its PT spot price (and the implied rate) matches PT price (and the implied rate) from PT oracle before using market state to calculate LP price."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The 1hr TWAP PT price is 0.90 asset."),(0,n.kt)("li",{parentName:"ul"},"The current state of the market is (x PT, y SY), where PT price is 0.92 asset"),(0,n.kt)("li",{parentName:"ul"},"We calculate a hypothetical, zero-fee swap that brings PT price to 0.90 asset, to reach a state of (x' PT, y' SY)"),(0,n.kt)("li",{parentName:"ul"},"We calculate the estimated TWAP LP token price based on the hypothetical state (x' PT, y' SY) and PT price of 0.90 asset")),(0,n.kt)("p",null,"A detailed work on the math for this approach can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pendle-finance/pendle-v2-resources/blob/main/docs/LP_Oracle_Doc.pdf"},"here"),"."),(0,n.kt)("h2",{id:"oracle-preparation"},"Oracle Preparation"),(0,n.kt)("p",null,"Since LP pricing only depends on PT oracles, its preparation is also the same as setting up a ",(0,n.kt)("a",{parentName:"p",href:"/Developers/Integration/PTOracle"},"PT oracle"),"."),(0,n.kt)("h2",{id:"fetch-price"},"Fetch price"),(0,n.kt)("p",null,"We have implemented the library for fetching oracle exchange rate of LP/underlying asset, which can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pendle-finance/pendle-core-v2-public/blob/main/contracts/oracles/PendleLpOracleLib.sol"},"here"),". "),(0,n.kt)("p",null,"We have also prepared a sample LP oracle for the GLP market in Pendle, in which the LP pricing to USD is as simple as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sol"},'// You can install npm package @pendle/core-v2 to directly import Pendle V2 contracts\nimport "@pendle/core-v2/contracts/oracles/PendleLpOracleLib.sol";\ncontract PendleLpGlpOracle {\n    //...\n    function getLpPrice() external view virtual returns (uint256) {\n        uint256 lpRate = IPMarket(market).getLpToAssetRate(twapDuration);\n        uint256 assetPrice = IGlpManager(glpManager).getPrice(true);\n        return (assetPrice * lpRate) / (10 ** 30);\n    }\n}\n')),(0,n.kt)("p",null,"The full implementation of this LP-GLP oracle has been deployed ",(0,n.kt)("a",{parentName:"p",href:"https://arbiscan.io/address/0x67E64AF30E04A7277ab2D4f09ACE3F77a15801F9#code"},"here"),"."))}d.isMDXComponent=!0}}]);