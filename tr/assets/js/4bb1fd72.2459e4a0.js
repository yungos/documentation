"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[6820],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"03-release-news",title:"October 2021 Release Available",authors:"adi1090x",tags:["v21.10","release","iso"]},s=void 0,p={permalink:"/tr/news/03-release-news",source:"@site/news/2021/10-05-release.mdx",title:"October 2021 Release Available",description:"New ISO of Archcraft is now available to download.",date:"2021-10-05T00:00:00.000Z",formattedDate:"October 5, 2021",tags:[{label:"v21.10",permalink:"/tr/news/tags/v-21-10"},{label:"release",permalink:"/tr/news/tags/release"},{label:"iso",permalink:"/tr/news/tags/iso"}],truncated:!0,authors:[{name:"Aditya Shakya",title:"Developer of Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],prevItem:{title:"Archcraft Lite Released",permalink:"/tr/news/04-release-lite-news"},nextItem:{title:"Issues In September 2021 Release",permalink:"/tr/news/02-issue-news"}},u={authorsImageUrls:[void 0]},c=[{value:"Changelog",id:"changelog",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New ISO of Archcraft is now available to download.")),(0,i.kt)("p",null,"Many users faced issues with the September release, due to the bug in the installer.\nHowever it was not a big issue and can be fixed easily, But there are people who are completely new to Linux in general.\nSo, this release belongs to them. This release fixes every issue on the previous release."),(0,i.kt)("h3",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Bug Fix Release for v21.09"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"drivers getting removed via installer")," bug (backlight, external monitor issues)"),(0,i.kt)("li",{parentName:"ul"},"Removed support for ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak")," as it caused issue with thunar and plank (and other gtk applications)"),(0,i.kt)("li",{parentName:"ul"},"Removed support for ",(0,i.kt)("inlineCode",{parentName:"li"},"snaps")," (Arch community really hated it)"),(0,i.kt)("li",{parentName:"ul"},"Replaced ",(0,i.kt)("inlineCode",{parentName:"li"},"lightdm")," with ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sddm")),", as webkit2-greeter was causing issues on older machines"),(0,i.kt)("li",{parentName:"ul"},"Improved ",(0,i.kt)("inlineCode",{parentName:"li"},"openbox"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bspwm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"polybar")," and other stuff"),(0,i.kt)("li",{parentName:"ul"},"And... I learned that I don't ",(0,i.kt)("del",{parentName:"li"},"need to")," have to add everything people suggest")))}d.isMDXComponent=!0}}]);