function g(c,u,l){let t,n,a,e=null,i=0;l||(l={});let s=function(){i=l.leading===!1?0:Date.now(),e=null,a=c.apply(t,n),e||(t=n=null)};function o(){let r=Date.now();!i&&l.leading===!1&&(i=r);let f=u-(r-i);return t=this,n=arguments,f<=0||f>u?(e&&(clearTimeout(e),e=null),i=r,a=c.apply(t,n),e||(t=n=null)):!e&&l.trailing!==!1&&(e=setTimeout(s,f)),a}return o.cancel=function(){clearTimeout(u)},o}export{g as t};
//# sourceMappingURL=throttle-5b801d35.js.map
