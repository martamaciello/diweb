import{z as p,A as y,a9 as K,a3 as C,h as i}from"./vuex.esm-bundler-f8eff60d.js";const D={MOBILE:/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/,TABLET:/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i},U="(min-width: 62.25em)",t={DESKTOP:"DESKTOP",TABLET:"TABLET",MOBILE:"MOBILE"},d={DESKTOP:{NORMAL:"(min-width: 995px)"},MOBILE:{SMALL:"(max-width:479px)",NORMAL:"(max-width:768px)"},TABLET:{PORTRAIT:"(min-width: 480px) and (max-width:767px)",LANDSCAPE:"(min-width: 767px) and (max-width:1026px)"},OTHER:{BIG:"(min-width:1280px)"}},_=()=>{const r=p(!1),o=p(null);let n;const u=({matches:e})=>{e?o.value=t.DESKTOP:o.value=t.MOBILE};y(()=>{n=window.matchMedia(d.DESKTOP.NORMAL),u(n),"addEventListener"in n?n.addEventListener("change",u):n.addListener(u),r.value=!0}),K(()=>{r.value=!1,n&&("removeEventListener"in n?n.removeEventListener("change",u):n.removeListener(u))});const l=C(),s=l.getters["page/isServer"],a=l.getters["page/getUserAgent"],A=l.getters["akamai/isDesktopDevice"],v=l.getters["akamai/isTabletDevice"],E=l.getters["akamai/isMobileDevice"],L=i(()=>{const e=T()===t.DESKTOP;return o.value?o.value===t.DESKTOP:e}),S=i(()=>T()===t.TABLET),M=i(()=>{const e=T()===t.MOBILE;return o.value?o.value===t.MOBILE:e}),O=i(()=>A!==void 0&&!r.value?A:L.value),m=i(()=>v!==void 0&&!r.value?v:S),w=i(()=>E!==void 0&&!r.value?E:M),B=i(()=>{const e=s?a:window.navigator.userAgent;return/Chrome/i.test(e)}),g=i(()=>{const e=s?a:window.navigator.userAgent;return/Safari/i.test(e)}),h=()=>{const e=s?a:window.navigator.userAgent;return/iPad|iPhone|iPod/.test(e)&&!window.MSStream},P=()=>{const e=s?a:window.navigator.userAgent;return/android/i.test(e)},b=()=>{const e=s?a:window.navigator.userAgent;return/Macintosh/.test(e)&&!/iPad|iPhone|iPod/.test(e)},T=()=>{const e=s?a:window.navigator.userAgent;return D.MOBILE.test(e)?t.MOBILE:D.TABLET.test(e)?t.TABLET:t.DESKTOP},c=e=>s?!1:window.matchMedia(e).matches,k=i(()=>c(d.MOBILE.SMALL)),I=()=>c(d.MOBILE.NORMAL),f=()=>c(d.TABLET.PORTRAIT),R=()=>c(d.TABLET.LANDSCAPE),x=()=>c(d.OTHER.BIG);return{isClientMounted:r,isDesktopDeviceByHeaderAndResolution:O,isTabletDeviceByHeaderAndResolution:m,isMobileDeviceByHeaderAndResolution:w,isDesktopDevice:L,isTabletDevice:S,isMobileDevice:M,isChrome:B,isSafari:g,isIOS:h,isAndroid:P,isMacOS:b,isCssDesktopScreen:()=>c(U),isMobileScreen:k,isDesktopScreen:()=>!I()&&!f()&&!R()&&!x()}};export{_ as n};
//# sourceMappingURL=navigatorDetect-1d2a0641.js.map
