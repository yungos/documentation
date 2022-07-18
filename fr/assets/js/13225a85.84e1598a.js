"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2926],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2436:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Post Installation",c={unversionedId:"install-archcraft/post-install",id:"install-archcraft/post-install",isDocsHomePage:!1,title:"Post Installation",description:"Apr\xe9s avoir install\xe9 Archcraft, voici quelque trucs que vous devez faire...",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/post-install.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/post-install",permalink:"/fr/docs/install-archcraft/post-install",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/post-install.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installer Archcraft avec ABIF",permalink:"/fr/docs/install-archcraft/install-with-abif"},next:{title:"Openbox",permalink:"/fr/docs/window-managers/openbox"}},u=[{value:"Mettre a jours votre syst\xe9me",id:"mettre-a-jours-votre-syst\xe9me",children:[]},{value:"Installez des programs",id:"installez-des-programs",children:[]},{value:"R\xe9glez les d\xe9chirures d&#39;\xe9cran",id:"r\xe9glez-les-d\xe9chirures-d\xe9cran",children:[]},{value:"Activer le mode de suspension",id:"activer-le-mode-de-suspension",children:[]},{value:"R\xe9gler le fond d&#39;\xe9cran de verrouillage",id:"r\xe9gler-le-fond-d\xe9cran-de-verrouillage",children:[]},{value:"Retirer les modules inutiles de initrd",id:"retirer-les-modules-inutiles-de-initrd",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-installation"},"Post Installation"),(0,i.kt)("p",null,"Apr\xe9s avoir install\xe9 Archcraft, voici quelque trucs que vous devez faire..."),(0,i.kt)("h3",{id:"mettre-a-jours-votre-syst\xe9me"},"Mettre a jours votre syst\xe9me"),(0,i.kt)("p",null,"Ret\xe9l\xe9chargez la base de donn\xe9es des paquets et mettez \xe0 jours votre installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -Syyu\n")),(0,i.kt)("p",null,"Si vous recevez un joli ",(0,i.kt)("inlineCode",{parentName:"p"},"packet invalide ou corrumpus (Signature PGP)"),", faites..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S archlinux-keyring\n$ sudo pacman-key --populate\n")),(0,i.kt)("h3",{id:"installez-des-programs"},"Installez des programs"),(0,i.kt)("p",null,"Installez vos programs favoris avec pacman ou yay (AUR)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S gimp inkscape discord\n\n# Or from AUR\n\n$ yay -S spotify        \n")),(0,i.kt)("h3",{id:"r\xe9glez-les-d\xe9chirures-d\xe9cran"},"R\xe9glez les d\xe9chirures d'\xe9cran"),(0,i.kt)("p",null,"Si vous avez des soucis de d\xe9chirure d'\xe9cran, faites ceci:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Activez le backend ",(0,i.kt)("inlineCode",{parentName:"li"},"GLX")," pour votre compositeur. Si vous \xe9tes sous ",(0,i.kt)("inlineCode",{parentName:"li"},"openbox")," clique droit sur votre bureau et ",(0,i.kt)("strong",{parentName:"li"},"Pr\xe9f\xe9rences > Compositeur")," et cliquez sur ",(0,i.kt)("inlineCode",{parentName:"li"},"Utiliser 'glx' backend")," ou vous pouvez \xe9diter le fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/picom.conf")," manuellement"),(0,i.kt)("li",{parentName:"ol"},"Si la premi\xe9re option ne marche pas pour vous, cr\xe9ez un fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"xorg.conf")," comme ceci :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Change to xorg.conf.d dir\n$ cd /etc/X11/xorg.conf.d\n\n# Create a conf file\n$ sudo touch 20-amdgpu.conf\n\n# Edit the file\n$ sudo vim 20-amdgpu.conf\n\n# Paste this in the editor\nSection "Device"\n     Identifier "AMD"\n     Driver "amdgpu"\n     Option "TearFree" "true"\nEndSection                      \n')),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Cette methode peut ne pas marcher sur votre syst\xe9me et donc vous pourrez pas lancer ",(0,i.kt)("strong",{parentName:"p"},"xorg"),".\nDonc soyez s\xfbr de connaitre comment utiliser le ",(0,i.kt)("strong",{parentName:"p"},"TTY")," ou bien boot sur le ",(0,i.kt)("strong",{parentName:"p"},"recovery mode (mode de r\xe9cup\xe9ration)")))),(0,i.kt)("h3",{id:"activer-le-mode-de-suspension"},"Activer le mode de suspension"),(0,i.kt)("p",null,"Activez le service de suspension de betterlockscreen pour votre compte utilisateur"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable betterlockscreen suspend service\n\n$ sudo systemctl enable betterlockscreen@$USER.service                      \n")),(0,i.kt)("h3",{id:"r\xe9gler-le-fond-d\xe9cran-de-verrouillage"},"R\xe9gler le fond d'\xe9cran de verrouillage"),(0,i.kt)("p",null,"R\xe9glez la disposition de l'\xe9cran de verrouillage sur des \xe9crans HIDPI ou \xe0 basse r\xe9solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the lockscreen wallpaper\n\n$ betterlockscreen -u /usr/share/backgrounds/groot.jpg\n")),(0,i.kt)("h3",{id:"retirer-les-modules-inutiles-de-initrd"},"Retirer les modules inutiles de initrd"),(0,i.kt)("p",null,"Disant que vous avez install\xe9 Archcraft (avec ",(0,i.kt)("inlineCode",{parentName:"p"},"ABIF"),") sur une machine avec un GPU Intel.\nVous avez seulement besoin du module ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"i915")),".\nSupprimez les autres modules de cette liste et reconstruisez initrd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Edit mkinitcpio.conf file\n$ sudo vim /etc/mkinitcpio.conf\n\n# Change line 7 from\nMODULES=(i915? amdgpu? radeon? nouveau? vboxvideo? vmwgfx?)\n# To\nMODULES=(i915)\n\n# Save file and rebuild initrd\n$ sudo mkinitcpio -p linux                      \n")),(0,i.kt)("p",null,"Et voil\xe0!!!!, c'est tout pour maintenant, profitez bien de Archcraft."))}p.isMDXComponent=!0}}]);