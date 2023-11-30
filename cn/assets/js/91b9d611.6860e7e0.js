"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[8801],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>b});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),i=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},m=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=i(a),k=n,b=s["".concat(o,".").concat(k)]||s[k]||l[k]||c;return a?r.createElement(b,d(d({ref:e},m),{},{components:a})):r.createElement(b,d({ref:e},m))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,d=new Array(c);d[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,d[1]=p;for(var i=2;i<c;i++)d[i]=a[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6833:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const c={hide_table_of_contents:!0},d="BNB Chain",p={unversionedId:"Developers/Deployments/BNBChain",id:"Developers/Deployments/BNBChain",title:"BNB Chain",description:"While interacting, please use the ABI of implementation contracts provided or generate ABI from the smart contract code in GitHub.",source:"@site/docs/Developers/Deployments/BNBChain.md",sourceDirName:"Developers/Deployments",slug:"/Developers/Deployments/BNBChain",permalink:"/cn/Developers/Deployments/BNBChain",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Optimism",permalink:"/cn/Developers/Deployments/Optimism"},next:{title:"PT Oracle",permalink:"/cn/Developers/Integration/PTOracle"}},o={},i=[{value:"Core Contracts",id:"core-contracts",level:2},{value:"SY Tokens",id:"sy-tokens",level:2},{value:"Yield Tokens (YT)",id:"yield-tokens-yt",level:2},{value:"Principal Tokens (PT)",id:"principal-tokens-pt",level:2},{value:"Markets",id:"markets",level:2}],m={toc:i},s="wrapper";function l(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bnb-chain"},"BNB Chain"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"While interacting, please use the ABI of implementation contracts provided or generate ABI from the smart contract code in GitHub.")),(0,n.kt)("h2",{id:"core-contracts"},"Core Contracts"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ABI"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PENDLE (Wormhole)"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/token/0xb3Ed0A426155B79B898849803E3B36552f7ED507"},(0,n.kt)("inlineCode",{parentName:"a"},"0xb3Ed0A426155B79B898849803E3B36552f7ED507"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0xb3Ed0A426155B79B898849803E3B36552f7ED507&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"vePENDLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/token/0x8A09574b0401A856d89d1b583eE22E8cb0C5530B"},(0,n.kt)("inlineCode",{parentName:"a"},"0x8A09574b0401A856d89d1b583eE22E8cb0C5530B"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x8A09574b0401A856d89d1b583eE22E8cb0C5530B&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Router"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x00000000025EFaDc0b8d17d3d87aB5056e3D2510"},(0,n.kt)("inlineCode",{parentName:"a"},"0x00000000025EFaDc0b8d17d3d87aB5056e3D2510"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x00000000025EFaDc0b8d17d3d87aB5056e3D2510&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"RouterStatic"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x2700ADB035F82a11899ce1D3f1BF8451c296eABb"},(0,n.kt)("inlineCode",{parentName:"a"},"0x2700ADB035F82a11899ce1D3f1BF8451c296eABb"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x2700ADB035F82a11899ce1D3f1BF8451c296eABb&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PendleYieldContractFactory"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xa2530b4cfBF271e2B409A05C2CE520e4cB5fCc88"},(0,n.kt)("inlineCode",{parentName:"a"},"0xa2530b4cfBF271e2B409A05C2CE520e4cB5fCc88"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0xa2530b4cfBF271e2B409A05C2CE520e4cB5fCc88&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PendleYieldContractFactoryV3"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x40Ae6da2d92aa3DCb7f8d7a7209FD12BDfcb7C85"},(0,n.kt)("inlineCode",{parentName:"a"},"0x40Ae6da2d92aa3DCb7f8d7a7209FD12BDfcb7C85"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x40Ae6da2d92aa3DCb7f8d7a7209FD12BDfcb7C85&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"MarketFactoryV3"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xC40fEbF5A33b8C92B187d9be0fD3fe0ac2E4B07c"},(0,n.kt)("inlineCode",{parentName:"a"},"0xC40fEbF5A33b8C92B187d9be0fD3fe0ac2E4B07c"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0xC40fEbF5A33b8C92B187d9be0fD3fe0ac2E4B07c&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT Oracle"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x70ee0A6DB4F5a2Dc4d9c0b57bE97B9987e75BAFD"},(0,n.kt)("inlineCode",{parentName:"a"},"0x70ee0A6DB4F5a2Dc4d9c0b57bE97B9987e75BAFD"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x70ee0A6DB4F5a2Dc4d9c0b57bE97B9987e75BAFD&format=raw"},"ABI"))))),(0,n.kt)("h2",{id:"sy-tokens"},"SY Tokens"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ABI"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SY-wBETH"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x96F77F24b3d17166FcaF3a9E3B8330fF38B966F9"},(0,n.kt)("inlineCode",{parentName:"a"},"0x96F77F24b3d17166FcaF3a9E3B8330fF38B966F9"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x96F77F24b3d17166FcaF3a9E3B8330fF38B966F9&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SY-Thena-frxETH-ETH"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xf86DDA825885674F85C5420079E1Df1bC0F372c6"},(0,n.kt)("inlineCode",{parentName:"a"},"0xf86DDA825885674F85C5420079E1Df1bC0F372c6"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0xf86DDA825885674F85C5420079E1Df1bC0F372c6&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SY-ankrBNB"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x58732F1C1243A0D5876a601FB8D1Ee508B21580D"},(0,n.kt)("inlineCode",{parentName:"a"},"0x58732F1C1243A0D5876a601FB8D1Ee508B21580D"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x58732F1C1243A0D5876a601FB8D1Ee508B21580D&format=raw"},"ABI"))))),(0,n.kt)("h2",{id:"yield-tokens-yt"},"Yield Tokens (YT)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ABI"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"YT-wBETH-26DEC24"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x429c77E193Ff7e6c6c3B2e1f00877B91792e87ee"},(0,n.kt)("inlineCode",{parentName:"a"},"0x429c77E193Ff7e6c6c3B2e1f00877B91792e87ee"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x429c77E193Ff7e6c6c3B2e1f00877B91792e87ee&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"YT-Thena frxETH-ETH-27JUN24"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x8D0884EBA8E481CcADf2F91E62170cdF79AE9C64"},(0,n.kt)("inlineCode",{parentName:"a"},"0x8D0884EBA8E481CcADf2F91E62170cdF79AE9C64"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x8D0884EBA8E481CcADf2F91E62170cdF79AE9C64&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"YT-ankrBNB-26JUN25"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x269f3E230C90C0a29140106D4cFB5860aF6F6827"},(0,n.kt)("inlineCode",{parentName:"a"},"0x269f3E230C90C0a29140106D4cFB5860aF6F6827"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x269f3E230C90C0a29140106D4cFB5860aF6F6827&format=raw"},"ABI"))))),(0,n.kt)("h2",{id:"principal-tokens-pt"},"Principal Tokens (PT)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ABI"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-wBETH-26DEC24"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x70c1138B54ba212776d3A9d29b6160C54C31cd5d"},(0,n.kt)("inlineCode",{parentName:"a"},"0x70c1138B54ba212776d3A9d29b6160C54C31cd5d"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x70c1138B54ba212776d3A9d29b6160C54C31cd5d&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-Thena frxETH-ETH-27JUN24"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x5eC2ae0AFDEc891E7702344dc2A31C636B3627Eb"},(0,n.kt)("inlineCode",{parentName:"a"},"0x5eC2ae0AFDEc891E7702344dc2A31C636B3627Eb"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x5eC2ae0AFDEc891E7702344dc2A31C636B3627Eb&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-ankrBNB-26JUN25"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x04eb6B56ff53f457c8E857ca8D4fbC8d9a531c0C"},(0,n.kt)("inlineCode",{parentName:"a"},"0x04eb6B56ff53f457c8E857ca8D4fbC8d9a531c0C"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x04eb6B56ff53f457c8E857ca8D4fbC8d9a531c0C&format=raw"},"ABI"))))),(0,n.kt)("h2",{id:"markets"},"Markets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ABI"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-wBETH-26DEC24/SY-wBETH Market"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x080f52A881ba96EEE2268682733C857c560e5dd4"},(0,n.kt)("inlineCode",{parentName:"a"},"0x080f52A881ba96EEE2268682733C857c560e5dd4"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x080f52A881ba96EEE2268682733C857c560e5dd4&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-Thena frxETH-ETH-27JUN24/SY-Thena frxETH-ETH Market"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x66317Dec4a3d8d1e47b85f704E5DF675a68BB7C9"},(0,n.kt)("inlineCode",{parentName:"a"},"0x66317Dec4a3d8d1e47b85f704E5DF675a68BB7C9"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0x66317Dec4a3d8d1e47b85f704E5DF675a68BB7C9&format=raw"},"ABI"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PT-ankrBNB-26JUN25/SY-ankrBNB Market"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xEDa1D0e1681D59dea451702963d6287b844Cb94C"},(0,n.kt)("inlineCode",{parentName:"a"},"0xEDa1D0e1681D59dea451702963d6287b844Cb94C"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://api.bscscan.com/api?module=contract&action=getabi&address=0xEDa1D0e1681D59dea451702963d6287b844Cb94C&format=raw"},"ABI"))))))}l.isMDXComponent=!0}}]);