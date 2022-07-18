"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[9589],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(7294),a=t(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),c="tabItem_1uMI",u="tabItemActive_2DSg";var l=function(e){var r,t=e.lazy,a=e.block,l=e.defaultValue,s=e.values,f=e.groupId,p=e.className,d=n.Children.toArray(e.children),m=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value,y=o(),b=y.tabGroupChoices,g=y.setTabGroupChoices,w=(0,n.useState)(v),h=w[0],O=w[1],k=[];if(null!=f){var x=b[f];null!=x&&x!==h&&m.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var r=e.currentTarget,t=k.indexOf(r),n=m[t].value;O(n),null!=f&&(g(f,n),setTimeout((function(){var e,t,n,a,o,i,c,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&a<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(u),setTimeout((function(){return r.classList.remove(u)}),2e3))}),150))},j=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=k.indexOf(e.target)+1;t=k[n]||k[0];break;case"ArrowLeft":var a=k.indexOf(e.target)-1;t=k[a]||k[k.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===r}),key:r,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=t?t:r)}))),t?(0,n.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},5755:function(e,r,t){t.r(r),t.d(r,{Highlight:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=(t(5064),t(8215),["components"]),c={sidebar_position:10},u="Wayfire",l={unversionedId:"window-managers/wayfire",id:"window-managers/wayfire",isDocsHomePage:!1,title:"Wayfire",description:"More information : Here",source:"@site/docs/window-managers/wayfire.mdx",sourceDirName:"window-managers",slug:"/window-managers/wayfire",permalink:"/docs/window-managers/wayfire",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/wayfire.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sway",permalink:"/docs/window-managers/sway"},next:{title:"Hyprland",permalink:"/docs/window-managers/hyprland"}},s=[],f=function(e){var r=e.children,t=e.color;return(0,o.kt)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},r)},p={toc:s,Highlight:f};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wayfire"},"Wayfire"),(0,o.kt)("p",null,"More information : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-wayfire"},"Here")))}d.isMDXComponent=!0},6010:function(e,r,t){function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);