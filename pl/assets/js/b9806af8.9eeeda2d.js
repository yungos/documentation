"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[7013],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"01-post-mpd",title:"Dodaj moj\u0105 muzyk\u0119 w mpd",authors:"adi1090x",tags:["howto","mpd","ncmpcpp","polybar"]},p=void 0,c={permalink:"/pl/blog/01-post-mpd",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pl/docusaurus-plugin-content-blog/2021/07-20-post-mpd.md",source:"@site/i18n/pl/docusaurus-plugin-content-blog/2021/07-20-post-mpd.md",title:"Dodaj moj\u0105 muzyk\u0119 w mpd",description:"Je\u015bli chcesz doda\u0107 swoj\u0105 ulubion\u0105 muzyk\u0119 do mpd, (zak\u0142adaj\u0105c, \u017ce znajduje si\u0119 ona w katalogu ~/Music) wykonuj poni\u017csze kroki:",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"howto",permalink:"/pl/blog/tags/howto"},{label:"mpd",permalink:"/pl/blog/tags/mpd"},{label:"ncmpcpp",permalink:"/pl/blog/tags/ncmpcpp"},{label:"polybar",permalink:"/pl/blog/tags/polybar"}],readingTime:.335,truncated:!0,authors:[{name:"Aditya Shakya",title:"Tw\xf3rca Archcrafta",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],prevItem:{title:"Zmie\u0144 motyw i ikony bspwm",permalink:"/pl/blog/02-post-bspwm"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Je\u015bli chcesz doda\u0107 swoj\u0105 ulubion\u0105 muzyk\u0119 do ",(0,o.kt)("inlineCode",{parentName:"p"},"mpd"),", (",(0,o.kt)("em",{parentName:"p"},"zak\u0142adaj\u0105c, \u017ce znajduje si\u0119 ona w katalogu ",(0,o.kt)("inlineCode",{parentName:"em"},"~/Music")),") wykonuj poni\u017csze kroki:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Otw\xf3rz terminal i uruchom ",(0,o.kt)("strong",{parentName:"li"},"ncmpcpp")),(0,o.kt)("li",{parentName:"ul"},"W ",(0,o.kt)("inlineCode",{parentName:"li"},"ncmpcpp"),", naci\u015bnij ",(0,o.kt)("kbd",null,"2")," aby otworzy\u0107 ",(0,o.kt)("strong",{parentName:"li"},"song browser")," ",(0,o.kt)("em",{parentName:"li"},"(przegl\u0105dark\u0119 muzyki)")),(0,o.kt)("li",{parentName:"ul"},"W zak\u0142adce przegl\u0105darki, naci\u015bnij ",(0,o.kt)("kbd",null,"u")," aby zaktualizowa\u0107 ",(0,o.kt)("strong",{parentName:"li"},"music database")," ",(0,o.kt)("em",{parentName:"li"},"(muzyczn\u0105 baz\u0119 danych)")),(0,o.kt)("li",{parentName:"ul"},"Wybierz swoje utwory i naci\u015bnij ",(0,o.kt)("kbd",null,"SPACE")," ",(0,o.kt)("em",{parentName:"li"},"(SPACJ\u0118)"),", aby doda\u0107 utwory do ",(0,o.kt)("strong",{parentName:"li"},"current playlist")," ",(0,o.kt)("em",{parentName:"li"},"(bie\u017c\u0105cej listy odtwarzania)"))))}d.isMDXComponent=!0}}]);