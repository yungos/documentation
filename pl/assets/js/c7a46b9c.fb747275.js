"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[897],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,r,n){var t=n(7294);r.Z=function(e){var r=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},r)}},5064:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(7294),o=n(9443);var a=function(){var e=(0,t.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var r,n=e.lazy,o=e.block,u=e.defaultValue,s=e.values,f=e.groupId,p=e.className,d=t.Children.toArray(e.children),m=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value,y=a(),b=y.tabGroupChoices,h=y.setTabGroupChoices,g=(0,t.useState)(v),w=g[0],O=g[1],k=[];if(null!=f){var x=b[f];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var r=e.currentTarget,n=k.indexOf(r),t=m[n].value;O(t),null!=f&&(h(f,t),setTimeout((function(){var e,n,t,o,a,i,c,u;(e=r.getBoundingClientRect(),n=e.top,t=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=c&&t>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},j=function(e){var r,n=null;switch(e.key){case"ArrowRight":var t=k.indexOf(e.target)+1;n=k[t]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(r=n)||r.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},m.map((function(e){var r=e.value,n=e.label;return t.createElement("li",{role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":w===r}),key:r,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=n?n:r)}))),n?(0,t.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},d.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==w})}))))}},9443:function(e,r,n){var t=(0,n(7294).createContext)(void 0);r.Z=t},4445:function(e,r,n){n.r(r),n.d(r,{Highlight:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),c={sidebar_position:11},l="Hyprland",u={unversionedId:"window-managers/hyprland",id:"window-managers/hyprland",isDocsHomePage:!1,title:"Hyprland",description:"More information : Here",source:"@site/docs/window-managers/hyprland.mdx",sourceDirName:"window-managers",slug:"/window-managers/hyprland",permalink:"/pl/docs/window-managers/hyprland",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/hyprland.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Wayfire",permalink:"/pl/docs/window-managers/wayfire"},next:{title:"River",permalink:"/pl/docs/window-managers/river"}},s=[],f=function(e){var r=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},r)},p={toc:s,Highlight:f};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hyprland"},"Hyprland"),(0,a.kt)("p",null,"More information : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-hyprland"},"Here")))}d.isMDXComponent=!0},6010:function(e,r,n){function t(e){var r,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(o&&(o+=" "),o+=r);return o}n.d(r,{Z:function(){return o}})}}]);