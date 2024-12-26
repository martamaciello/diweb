import{_ as B}from"./Render-4448ec15.js";import{a as k}from"./useBadgeLink-a2b300bc.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as h,N as P,an as b,z as u,h as f,f as p,g as y,j as w,F as M}from"./vuex.esm-bundler-f8eff60d.js";import"./state-0c727e5f.js";const U={props:{description:{type:String,required:!1,default:""},srcImage:{type:String,required:!0},promoBadgeUrl:{type:String,required:!0},windowType:{type:String,required:!1,default:"1"}},emits:["promoSelected"],setup(r,{emit:i}){const{isOpenInModal:t,openInModal:e,target:n}=k(r,i);return{isOpenInModal:t,openInModal:e,target:n}}},L=["alt","title","src"],G=["href","target"],C=["alt","title","src"];function q(r,i,t,e,n,c){return e.isOpenInModal?(a(),s("img",{key:0,class:"pointer",alt:t.description,title:t.description,src:t.srcImage,onClick:i[0]||(i[0]=(...l)=>e.openInModal&&e.openInModal(...l))},null,8,L)):(a(),s("a",{key:1,href:t.promoBadgeUrl,target:e.target},[h("img",{alt:t.description,title:t.description,src:t.srcImage},null,8,C)],8,G))}const v=I(U,[["render",q]]),S={components:{BadgeGifLink:v,ModalWithIframe:P(()=>B(()=>import("./ModalWithIframe-1892b939.js"),[window.__assetsPath("assets/ModalWithIframe-1892b939.js"),window.__assetsPath("assets/Modal-4b0c1909.js"),window.__assetsPath("assets/vuex.esm-bundler-f8eff60d.js"),window.__assetsPath("assets/_plugin-vue_export-helper-c27b6911.js"),window.__assetsPath("assets/Spinner-4fecf309.js"),window.__assetsPath("assets/Spinner-6db6c11d.css")],import.meta.url))},props:{gif:{type:Object,required:!0},fromPDP:{type:Boolean,default:!1},isIaChat:{type:Boolean,default:!1,required:!1},isPlp:{type:Boolean,default:!1,required:!1}},setup(r){const i=b("assetsBase"),t=u(""),e=u(!1),n=f(()=>{var o,_,g;return r.isPlp&&r.gif.promo_url_badge_image_plp_windows_type?(o=r.gif)==null?void 0:o.promo_url_badge_image_plp_windows_type:(_=r.gif)!=null&&_.promo_url_badge_image_pdp_windows_type?(g=r.gif)==null?void 0:g.promo_url_badge_image_pdp_windows_type:null}),c=f(()=>{const o=r.gif;if(o)return o.type==="url_img"?o.url:"".concat(i).concat(o.url)}),l=f(()=>{const o=r.gif;if(o)return r.fromPDP?o.promo_url_badge_image_pdp:o.promo_url_badge_image_plp});function m(){e.value=!1}function d(o){t.value=o,e.value=!0}return{assetsBase:i,getGifUrl:c,iframeUrl:t,promoLink:l,showPromotionIframe:e,closeModal:m,setPromotionIframeAsVisible:d,windowType:n}}},T={key:0,"data-testid":"badgeGif",role:"img",name:"badgeGif",class:"badge_gif--container"},V=["alt","title","src"];function x(r,i,t,e,n,c){var d;const l=p("BadgeGifLink"),m=p("ModalWithIframe");return a(),s(M,null,[(d=t.gif)!=null&&d.url?(a(),s("div",T,[e.promoLink&&!t.isIaChat?(a(),y(l,{key:0,description:t.gif.description,srcImage:e.getGifUrl,promoBadgeUrl:e.promoLink,windowType:e.windowType,onPromoSelected:e.setPromotionIframeAsVisible},null,8,["description","srcImage","promoBadgeUrl","windowType","onPromoSelected"])):(a(),s("img",{key:1,alt:t.gif.description,title:t.gif.description,src:e.getGifUrl},null,8,V))])):w("",!0),e.showPromotionIframe?(a(),y(m,{key:1,iframeURL:e.iframeUrl,onCloseModal:e.closeModal},null,8,["iframeURL","onCloseModal"])):w("",!0)],64)}const N=I(S,[["render",x]]);export{N as default};
//# sourceMappingURL=BadgeGif-402a45b5.js.map
