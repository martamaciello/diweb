import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{h as z,o as l,c as s,a,n as x,j as m,an as v,z as y,t as h,i as r,aa as w}from"./vuex.esm-bundler-f8eff60d.js";const f=Object.freeze({ECI:"001",BRICOR:"bricor"});var j=f;const b=Object.freeze({VOID:"javascript:void(0)"});var C=b;const R={name:"EnergyRating",props:{energyRating:{type:Object,required:!0}},setup(o){return{disabledUrl:z(()=>o.energyRating._detail_energy_url===C.VOID?"disabled-click":"")}}},I={key:0,class:"detail-energy"},E=["href"],O=["src","alt"];function S(o,i,e,t,c,_){return e.energyRating?(l(),s("div",I,[a("a",{href:e.energyRating._detail_energy_url,target:"_blank",rel:"me, nofollow noopener noreferrer",class:x(["detail-energy__link",t.disabledUrl])},[a("img",{src:e.energyRating._detail_energy,alt:e.energyRating._detail_name,class:"detail-energy__image"},null,8,O)],10,E)])):m("",!0)}const Z=g(R,[["render",S],["__scopeId","data-v-c445df76"]]),L={name:"ColorItem",props:{color:{type:Object,required:!0},isPdp:{type:Boolean,required:!0},showColorTitle:{type:Boolean,default:!1},hideDisabledColorClass:{type:Boolean,default:!1}},emits:["updateColor","loadSizes","sendColorName"],setup(o,{emit:i}){const e=v("showColorZoom",!1),t=y(!1),c=()=>{i("updateColor",o.color),i("loadSizes")},_=()=>{d(),e&&(t.value=!0)},n=()=>{d(!0),e&&(t.value=!1)},d=p=>{var u;i("sendColorName",p||(u=o.color)==null?void 0:u.title)};return{colorZoomIsVisible:t,onMouseEnter:_,onMouseLeave:n,showColorZoom:e,updateColor:c}}},P={rel:"nofollow"},D=["src","title","alt","data-variant-image-src","data-color"],U={key:0,class:"label-color"},k={rel:"nofollow"},N={key:0,class:"coming-soon"},T=["src"];function B(o,i,e,t,c,_){var n;return l(),s("div",{"data-testId":"color-item",class:"color_with_label",onClick:i[0]||(i[0]=r(d=>t.updateColor(),["stop"])),onKeyup:i[1]||(i[1]=w(d=>t.updateColor(),["space","enter"])),onKeydown:i[2]||(i[2]=w(r(()=>{},["prevent"]),["space"])),onMouseenter:i[3]||(i[3]=r(d=>t.onMouseEnter(e.color.title),["stop"])),onMouseleave:i[4]||(i[4]=r(d=>t.onMouseLeave(),["stop"]))},[a("div",{class:x(["product_preview-variants-thumbnail","color-circle",{pdp:e.isPdp},{selected:e.color.preselected},{"product_preview-variants-thumbnail--disabled":!e.hideDisabledColorClass&&e.color.not_available}])},[a("span",P,[a("img",{src:e.color.thumbnail_url,title:e.color.title,alt:e.color.title,"data-variant-image-src":e.color.image,"data-color":e.color.title},null,8,D)])],2),e.showColorTitle?(l(),s("div",U,[a("span",k,[a("span",null,h(e.color.title),1),e.color.coming_soon?(l(),s("span",N,h(o.$t("product_detail.add_to_cart.proximamente")),1)):m("",!0)])])):m("",!0),t.colorZoomIsVisible?(l(),s("div",{key:1,"data-testId":"zoomColor",class:x(["color_item_zoom",["product_preview-variants-thumbnail","color-circle"]])},[a("span",null,[a("img",{src:(n=e.color)==null?void 0:n.thumbnail_url},null,8,T)])])):m("",!0)],32)}const q=g(L,[["render",B]]);var A={IMPOLICY_RULES:{RESIZE:"Resize"},PDP_RESOLUTIONS:[{media:"(max-width: 425px)",size:720},{media:"(max-width: 1440px)",size:900},{media:"(max-width: 1920px)",size:1200},{media:"(min-width: 1921px)",size:1200}],PLP_RESOLUTIONS:{big_products:[{media:"(max-width: 425px)",size:720},{media:"(max-width: 768px)",size:820},{media:"(max-width: 1440px)",size:960},{media:"(max-width: 1920px)",size:1200},{media:"(min-width: 1921px)",size:1200}],little_products:[{media:"(max-width: 425px)",size:520},{media:"(max-width: 1440px)",size:860},{media:"(max-width: 1920px)",size:1200},{media:"(min-width: 1921px)",size:1200}]},PDP_RESOLUTIONS_PRELOAD:[{media:"(max-width: 425px)",size:720},{media:"(min-width: 425.1px) and (max-width: 1440px)",size:900},{media:"(min-width: 1920.1px) and (max-width: 1920px)",size:1200},{media:"(min-width: 1921px)",size:1200}],PLP_RESOLUTIONS_PRELOAD:{big_products:[{media:"(max-width: 425px)",size:780},{media:"(min-width: 425.1px) and (max-width: 768px)",size:820},{media:"(min-width: 768.1px) and (max-width: 1440px)",size:960},{media:"(min-width: 1440.1px) and (max-width: 1920px)",size:1200},{media:"(min-width: 1921px)",size:1200}],little_products:[{media:"(max-width: 425px)",size:520},{media:"(min-width: 425.1px) and (max-width: 1440px)",size:540},{media:"(min-width: 1440.1px) and (max-width: 1920px)",size:720},{media:"(min-width: 1921px)",size:1200}]},VIDEO_RESOLUTIONS:{small:{media:"(max-width: 425px)"},medium:{media:"(min-width: 425px) and (max-width: 1440px)"},big:{media:"(min-width: 1440px)"}}};export{q as C,Z as E,C as d,A as i,j as p};
//# sourceMappingURL=imageImpolicyResolutionsTypes-92cbf4e7.js.map
