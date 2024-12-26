var c=Object.defineProperty;var f=(r,t,s)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var d=(r,t,s)=>(f(r,typeof t!="symbol"?t+"":t,s),s);import{b as w}from"./Render-4448ec15.js";var l={toArray:function(r){if(!r)return[];if("toArray"in Object(r))return r.toArray();for(var t=r.length||0,s=new Array(t);t--;)s[t]=r[t];return s},allByTag:function(r,t){return this.toArray((t||document).getElementsByTagName(r))},allByClass:function(r,t){var s="getElementsByClassName",i=this;if((t||document)[s])return this.toArray((t||document)[s](r));var e=[],h=this.allByTag("*",t||document);return h.forEach(function(n){i.hasClass(n,r)&&e.push(n)}),this.toArray(e)},firstByClass:function(r,t){return this.allByClass(t,r)[0]},getData:function(r,t){var s,i=new RegExp("data"+(t?"-"+t+"-(.*)":"-(.*)"));return r&&this.toArray(r.attributes).forEach(function(e){var h=i.exec(e.name);h&&(s=s||{},s[h[1]]=e.value)}),s||!1}};const v=6e3;function E(){if(window){var r=l.allByClass("artwork carousel"),t=l.allByClass("carousel-container-artwork");r.forEach(s=>new g(s)),t.forEach(s=>new _(s))}}class g{constructor(t){this.selectedSlideIndex=0,this.startX=0,this.startY=0,this.carousel=t,this.initCarousel(this.carousel)}initCarousel(t){this.hookDots(t),this.hookTouchEvents(t),this.autoPlayCarousel(t)}hookDots(t){const s=l.allByClass("dot-box",t)[0],i=l.allByClass("dot",s);i&&i.forEach((e,h)=>{e.addEventListener("click",n=>{n.preventDefault(),this.selectedSlideIndex=h,this.setCurrentDotAndSlide(t)})})}hookTouchEvents(t){var s=l.allByClass("carousel-container",t)[0];s&&(this.hookTouchStartEvent(s),this.hookTouchEndEvent(t,s))}hookTouchStartEvent(t){t.removeEventListener("touchstart",this.touchStartEvent.bind(this)),t.addEventListener("touchstart",this.touchStartEvent.bind(this))}touchStartEvent(t){const s=t.changedTouches[0];this.startX=s.pageX,this.startY=s.screenY}hookTouchEndEvent(t,s){s.removeEventListener("touchend",i=>{this.touchEndEvent(t,i)}),s.addEventListener("touchend",i=>{this.touchEndEvent(t,i)})}touchEndEvent(t,s){const i=l.allByClass("dot-box",t)[0],h=l.allByClass("dot",i).length,n=s.changedTouches[0],o=n.pageX-this.startX,a=n.screenY-this.startY;a<150&&a>-150&&(o<-100&&this.selectedSlideIndex<h-1&&(this.selectedSlideIndex+=1,this.setCurrentDotAndSlide(t)),o>100&&this.selectedSlideIndex>0&&(this.selectedSlideIndex-=1,this.setCurrentDotAndSlide(t)))}setCurrentDotAndSlide(t){this.showSelectedSlide(t),this.setCurrentDot(t)}setCurrentDot(t){var s=l.allByClass("dot-box",t)[0],i=l.allByClass("dot",s);i.forEach((e,h)=>{this.selectedSlideIndex===h?(e.classList.add("selected"),e.classList.remove("unselected")):(e.classList.remove("selected"),e.classList.add("unselected"))})}showSelectedSlide(t){var s=l.allByClass("carousel-container-slide",t);s.forEach((i,e)=>{e===this.selectedSlideIndex?(i.classList.remove("hide"),i.classList.remove("fade-out"),i.classList.add("show"),i.classList.add("fade-in")):(i.classList.remove("show"),i.classList.remove("fade-in"),i.classList.add("hide"),i.classList.add("fade-out"))})}getSetIntervalCarouselAutoPlay(t,s=10){const i=l.allByClass("dot",t);if(i!=null&&i.length)return setInterval(()=>{const e=this.selectedSlideIndex+1;this.selectedSlideIndex=e<i.length?e:0,this.setCurrentDotAndSlide(t)},s*1e3)}autoPlayCarousel(t){let s=this.getSetIntervalCarouselAutoPlay(t);t.addEventListener("mouseover",()=>{clearInterval(s)}),t.addEventListener("mouseout",()=>{s=this.getSetIntervalCarouselAutoPlay(t)})}}class _{constructor(t){d(this,"initCarousel",t=>{this.ui.slides_wrapper=l.allByClass("carousel-artworks-wrapper",t)[0],this.ui.arrow_left=l.allByClass("arrow-container-left",t)[0],this.ui.arrow_right=l.allByClass("arrow-container-right",t)[0],this.ui.progress_bar=l.allByClass("progress",t)[0],this.ui.slides=Array.from(l.allByClass("artwork-multilayer",this.ui.slides_wrapper)),this.ui.scroll_width=this.ui.slides[0].getBoundingClientRect().width,this.ui.automatic=t.classList.contains("carousel-container-artwork-auto"),this.ui.slidesLength=this.ui.slides.length,this.ui.slideSize=this.ui.slides[0].offsetWidth,this.resetCarousel(),this.hookArrows(),this.hookKeyDown(),this.widthChangeChecker(),this.carousel.addEventListener("mousemove",()=>{this.overing=!0}),this.ui.slides_wrapper.addEventListener("scroll",this.hookScrollEvents.bind(this)),this.carousel.addEventListener("mouseout",()=>{this.overing=!1,this.ui.slides_wrapper.removeEventListener("scroll",this.hookScrollEvents.bind(this))}),window.matchMedia("screen and (max-width: 768px)").matches&&this.hookTouchEvents(),this.ui.automatic&&this.hookAutomaticTransition()});d(this,"startAutomaticTransition",()=>{this.stopAutomaticTransition(),this.slideInterval=setInterval(()=>{!this.isSliding&&!this.overing&&this.showSlide(1)},v)});d(this,"stopAutomaticTransition",()=>{clearInterval(this.slideInterval)});d(this,"sendAnalytics",t=>{w.sendCarouselPromotionPush(t)});this.carousel=t,this.ui={},this.slideInterval=!1,this.isSliding=!1,this.timer=null,this.overing=!1,this.initCarousel(this.carousel)}resetCarousel(t){this.ui.slides_wrapper.scroll({left:0,behavior:"smooth"}),this.ui.rec=this.ui.slides_wrapper.getBoundingClientRect(),this.isSliding=!1,this.timer=null,this.ui.scroll_ini=0,this.ui.index=0,this.ui.scroll_left=0;let s=0;const i=Math.round(this.ui.rec.width);for(let e=0;e<this.ui.slides.length;e++){const h=this.ui.slides[e].getBoundingClientRect();if(s+=h.width,Math.round(s)===i){this.ui.last=e;break}if(Math.round(s)>i){this.ui.last=e-1;break}}this.ui.slider_gap=this.ui.last,this.controlButtons(0),this.ui.slider_bar=l.allByClass("_slider_bar",this.ui.progress_bar)[0],this.ui.slider_width=100/(this.ui.slidesLength-this.ui.last),this.ui.slider_bar.style.width="".concat(this.ui.slider_width,"%"),this.ui.slider_bar.style.left="0%",t&&this.sendAnalytics(this.ui.slides[0])}hookArrows(){this.ui.arrow_right.addEventListener("click",t=>{this.arrowsEvents(t,1)}),this.ui.arrow_left.addEventListener("click",t=>{this.arrowsEvents(t,-1)})}hookKeyDown(){const t=this,s=function(i){const{innerHeight:e,innerWidth:h}=window,{top:n,left:o,bottom:a,right:u}=i.getBoundingClientRect();return(n>0&&n<e||a>0&&a<e)&&(o>0&&o<h||u>0&&u<h)};document.addEventListener("keydown",function(i){s(t.ui.slides_wrapper)&&((i.key==="ArrowRight"||i.keyCode===39)&&t.arrowsEvents(i,1),(i.key==="ArrowLeft"||i.keyCode===37)&&t.arrowsEvents(i,-1))})}widthChangeChecker(){var t=this.ui.slides_wrapper.scrollWidth;setInterval(()=>{const s=this.ui.slides_wrapper.scrollWidth;s!==t&&(t=s,this.resetCarousel())},500)}hookTouchEvents(){this.hookTouchStartEvent(this.ui.slides_wrapper)}hookScrollEvents(t){const s=this;window.clearTimeout(this.timer),this.isSliding=!0,this.checkBar(),this.timer=setTimeout(function(){const i=t.target.scrollLeft;s.checkIndex(i)},500)}hookTouchStartEvent(t){t.removeEventListener("touchstart",this.touchStartEvent.bind(this)),t.addEventListener("touchstart",this.touchStartEvent.bind(this))}hookAutomaticTransition(){this.startAutomaticTransition()}arrowsEvents(t,s){t.preventDefault(),!this.isSliding&&(this.overing=!1,this.arrowing,this.showSlide(s))}touchStartEvent(){this.ui.slides_wrapper.classList.add("shifting")}showSlide(t){if(this.isSliding=!0,this.ui.last===this.ui.slidesLength-1&&t===1)return this.ui.automatic?this.resetCarousel(!0):(this.isSliding=!1,this.controlButtons(this.ui.index));if(this.ui.index===0&&t===-1)return this.isSliding=!1,this.controlButtons(this.ui.index);const s=this.ui.index+t,i=s*this.ui.slider_width;this.setSlideData(s,t,!1);const e=t===1?this.ui.slides[this.ui.last]:this.ui.slides[this.ui.index];this.ui.slides_wrapper.scroll({left:this.ui.scroll_left,behavior:"smooth"}),this.ui.slider_bar.style.left="".concat(i,"%"),this.controlButtons(s),this.isSliding=!1,e&&this.ui.send_analytics&&this.sendAnalytics(e)}checkIndex(t){const s=t>this.ui.scroll_ini?1:-1;this.ui.scroll_ini=t,this.isSliding=!1;const i=[];for(let h=this.ui.index;h<=this.ui.last;h++)i.push(h);this.ui.index=Math.round(this.ui.slides_wrapper.scrollLeft/this.ui.slides_wrapper.scrollWidth*this.ui.slidesLength),this.ui.slides_wrapper.classList.remove("shifting"),this.setSlideData(this.ui.index,s,!0),this.controlButtons(this.ui.index);const e=this.ui.index*this.ui.slider_width;if(this.ui.slider_bar.style.left="".concat(e,"%"),this.arrowing)this.arrowing=!1;else if(this.ui.send_analytics&&!this.ui.automatic){const h=[],n=this;for(let a=this.ui.index;a<=this.ui.last;a++)h.push(a);const o=[];h.forEach(function(a){i.includes(a)||o.push(n.ui.slides[a])}),o!=null&&o.length&&this.sendAnalytics(o)}}checkBar(){const s=Math.round(this.ui.slides_wrapper.scrollLeft/this.ui.slides_wrapper.scrollWidth*this.ui.slidesLength)*this.ui.slider_width;this.ui.slider_bar.style.left="".concat(s,"%")}controlButtons(t){var s=t===this.ui.slidesLength-1||this.ui.last===this.ui.slidesLength-1,i=t===0;s?this.ui.arrow_right.classList.add("hidden","disabled"):this.ui.arrow_right.classList.remove("hidden","disabled"),i?this.ui.arrow_left.classList.add("hidden","disabled"):this.ui.arrow_left.classList.remove("hidden","disabled")}setSlideData(t,s,i){this.ui.index=t,this.ui.last=this.ui.index+this.ui.slider_gap,this.ui.scroll_width=this.ui.slides[t].getBoundingClientRect().width*s;var e=i?Math.abs(this.ui.scroll_width*t):this.ui.scroll_left+this.ui.scroll_width;this.ui.scroll_left=e,this.ui.send_analytics=!0}}export{E as i};
//# sourceMappingURL=carousel-6191af93.js.map
