!function(){"use strict";var e,c,a,f,d,b={},t={};function r(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=b,r.c=t,e=[],r.O=function(c,a,f,d){if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],f=e[i][1],d=e[i][2];for(var t=!0,n=0;n<a.length;n++)(!1&d||b>=d)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var o=f();void 0!==o&&(c=o)}}return c}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[a,f,d]},r.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};c=c||[null,a({}),a([]),a(a)];for(var t=2&f&&e;"object"==typeof t&&!~c.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},r.d(d,b),d},r.d=function(e,c){for(var a in c)r.o(c,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(c,a){return r.f[a](e,c),c}),[]))},r.u=function(e){return"assets/js/"+({20:"f237b5dc",53:"935f2afb",124:"8514e8ce",249:"eb516b89",673:"c417c803",876:"4e7ea8c0",878:"81510f0e",879:"a93f97d0",1242:"3d6590ee",1293:"cf968e94",1338:"44c1b474",1361:"a694fc9f",1383:"21c007fe",1429:"cf49068a",1500:"090f8ee1",1616:"7e7a7d7d",1682:"9369e631",1686:"81d4b70a",1695:"7647876b",1839:"2ffa923f",1941:"3ae52d74",2076:"585d966d",2132:"5a7c9710",2178:"cb1d71a0",2535:"814f3328",2539:"ca574298",3089:"a6aa9e1f",3245:"a25bf6eb",3250:"3f776645",3275:"b827c012",3348:"601da74f",3469:"8b9ef0af",3523:"2038ae26",3608:"9e4087bc",3690:"a9093f3e",3751:"3720c009",3776:"071dac50",3816:"a1b9b0d0",3868:"178d592c",3896:"757890b8",3950:"78d8ecd6",4013:"01a85c17",4121:"55960ee5",4195:"c4f5d8e4",4231:"c051ddcc",4496:"6b3678e9",4511:"74eca7cb",4595:"f67c5f0b",4666:"0f6e7eab",4770:"5050f5de",5110:"b74eb9dd",5346:"5484080c",5374:"f7be884d",5396:"6b18a495",5491:"0c7b4f9d",5777:"0c9fa2dd",5797:"4e895938",5940:"4be1500a",6056:"05d3b79a",6103:"ccc49370",6117:"91e7d6ee",6373:"58a419e1",6483:"6c62e965",6596:"0c9c864f",6716:"bfebab25",6841:"13d0a7de",6963:"faf79ab5",7013:"b9806af8",7038:"4e6d2299",7083:"ec20ce42",7233:"a34bf942",7317:"9cad2ab3",7355:"8dffbcce",7377:"1197c81d",7533:"1ca6ba7e",7590:"805577a7",7760:"8f5dcb2a",7918:"17896441",7933:"d61ca50f",7962:"b55c9503",8059:"bc9e0a4b",8153:"cf6ae710",8186:"adfb7c0f",8355:"228ce5fb",8380:"38d5af69",8388:"548347c6",8456:"b29f728d",8534:"6aa9cbfe",8610:"6875c492",8802:"f4f3fd77",8868:"7a925c02",8945:"e2273000",8982:"74a22658",9060:"0c097758",9227:"472926ba",9344:"cad1a164",9404:"13933b9d",9410:"4c794abc",9514:"1be78505",9541:"87933e22",9566:"2f5e4031",9582:"d75b63e3",9855:"c505868e"}[e]||e)+"."+{20:"77395a33",53:"6d1ec920",124:"681d629d",249:"44c6b66c",673:"f761a6d3",876:"4df0a039",878:"25a28738",879:"7c9b99f6",1242:"f412ddb5",1293:"2409472d",1338:"04b6f41e",1361:"8f9c0738",1383:"4b28fcf8",1429:"7b64acc5",1500:"19983b38",1616:"503ea267",1682:"35913158",1686:"b2abccf5",1695:"7231cde5",1839:"f59d5cee",1941:"2456a1f4",2076:"b3f70fd5",2132:"e5188f7e",2178:"b6693068",2535:"f801704a",2539:"0ad46db0",3089:"5dc77030",3245:"5a54ab63",3250:"82a7f54d",3275:"0dd409c7",3348:"5089da9d",3469:"2504d5f1",3516:"b0f6626d",3523:"00bd4625",3608:"c73d54bd",3690:"535d7eb2",3751:"8ea86c21",3776:"e998c5f9",3816:"7e6e11c6",3868:"e8b1375c",3896:"d40bf2b8",3950:"0b5d71e9",4013:"a99215e0",4121:"37d4fb89",4195:"87306d42",4231:"5979d802",4300:"6bd87328",4496:"762f40ac",4511:"d03a027f",4595:"96d0ff82",4608:"33e22c44",4666:"1cba306d",4770:"c07eb2fe",5110:"c42a90d9",5256:"87bf155c",5346:"821f3ff3",5374:"5d8c411b",5396:"bba5e8c6",5491:"ce0711c5",5777:"d0cd2a87",5797:"87b3f93b",5940:"875ac13d",6056:"ccaa181f",6103:"14d6da7d",6117:"398347fc",6159:"aa76d575",6373:"1118274d",6483:"31bf4272",6596:"912646d3",6716:"17313d32",6841:"77021d07",6945:"7abda646",6963:"c7389fdb",7013:"6e6efbf2",7038:"163fb8e6",7083:"a3b02ad3",7233:"8896c96c",7317:"e130abbe",7355:"710d1d99",7377:"d0b8dff1",7533:"331253f3",7590:"70a04a7f",7760:"42c9ff19",7918:"328a3f7d",7933:"ed7bead2",7962:"aba29e57",8059:"e87467ab",8153:"f27ed965",8186:"a86aec33",8355:"37bbd1a0",8380:"062e0f38",8388:"999e6c04",8456:"4abe42b5",8534:"be743364",8610:"f73e15ae",8802:"9ed4ed49",8868:"218ce773",8945:"14d04f51",8982:"243859b0",9060:"6dbeacb4",9227:"ba06c2cd",9344:"74969c48",9404:"4ccab945",9410:"d1f565f1",9514:"cd88d2a4",9541:"1a7cbc35",9566:"da978a70",9582:"71147725",9727:"d30c292a",9855:"f44d8545"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.25cf9600.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},d="Archcraft-Wiki:",r.l=function(e,c,a,b){if(f[e])f[e].push(c);else{var t,n;if(void 0!==a)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+a){t=u;break}}t||(n=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+a),t.src=e),f[e]=[c];var l=function(c,a){t.onerror=t.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),c)return c(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),n&&document.head.appendChild(t)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/pl/",r.gca=function(e){return e={17896441:"7918",f237b5dc:"20","935f2afb":"53","8514e8ce":"124",eb516b89:"249",c417c803:"673","4e7ea8c0":"876","81510f0e":"878",a93f97d0:"879","3d6590ee":"1242",cf968e94:"1293","44c1b474":"1338",a694fc9f:"1361","21c007fe":"1383",cf49068a:"1429","090f8ee1":"1500","7e7a7d7d":"1616","9369e631":"1682","81d4b70a":"1686","7647876b":"1695","2ffa923f":"1839","3ae52d74":"1941","585d966d":"2076","5a7c9710":"2132",cb1d71a0:"2178","814f3328":"2535",ca574298:"2539",a6aa9e1f:"3089",a25bf6eb:"3245","3f776645":"3250",b827c012:"3275","601da74f":"3348","8b9ef0af":"3469","2038ae26":"3523","9e4087bc":"3608",a9093f3e:"3690","3720c009":"3751","071dac50":"3776",a1b9b0d0:"3816","178d592c":"3868","757890b8":"3896","78d8ecd6":"3950","01a85c17":"4013","55960ee5":"4121",c4f5d8e4:"4195",c051ddcc:"4231","6b3678e9":"4496","74eca7cb":"4511",f67c5f0b:"4595","0f6e7eab":"4666","5050f5de":"4770",b74eb9dd:"5110","5484080c":"5346",f7be884d:"5374","6b18a495":"5396","0c7b4f9d":"5491","0c9fa2dd":"5777","4e895938":"5797","4be1500a":"5940","05d3b79a":"6056",ccc49370:"6103","91e7d6ee":"6117","58a419e1":"6373","6c62e965":"6483","0c9c864f":"6596",bfebab25:"6716","13d0a7de":"6841",faf79ab5:"6963",b9806af8:"7013","4e6d2299":"7038",ec20ce42:"7083",a34bf942:"7233","9cad2ab3":"7317","8dffbcce":"7355","1197c81d":"7377","1ca6ba7e":"7533","805577a7":"7590","8f5dcb2a":"7760",d61ca50f:"7933",b55c9503:"7962",bc9e0a4b:"8059",cf6ae710:"8153",adfb7c0f:"8186","228ce5fb":"8355","38d5af69":"8380","548347c6":"8388",b29f728d:"8456","6aa9cbfe":"8534","6875c492":"8610",f4f3fd77:"8802","7a925c02":"8868",e2273000:"8945","74a22658":"8982","0c097758":"9060","472926ba":"9227",cad1a164:"9344","13933b9d":"9404","4c794abc":"9410","1be78505":"9514","87933e22":"9541","2f5e4031":"9566",d75b63e3:"9582",c505868e:"9855"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(c,a){var f=r.o(e,c)?e[c]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(a,d){f=e[c]=[a,d]}));a.push(f[2]=d);var b=r.p+r.u(c),t=new Error;r.l(b,(function(a){if(r.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+c,c)}},r.O.j=function(c){return 0===e[c]};var c=function(c,a){var f,d,b=a[0],t=a[1],n=a[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(n)var i=n(r)}for(c&&c(a);o<b.length;o++)d=b[o],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},a=self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();