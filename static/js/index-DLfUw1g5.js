const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/Home-DAbm-FFV.js","static/js/MainFooter-K0ePfc8Q.js","static/js/_plugin-vue_export-helper-DlAUqK2U.js","static/js/vue-CKRjU0l-.js","static/js/MainHeader-CpqoAc0e.js","static/js/Information-GBfdaPlP.js","static/css/Information-DuzlYW0I.css","static/js/social-Df9gKciI.js","static/js/About-DH3BpU7a.js","static/js/Shop_checkout-DCC7A4k6.js","static/js/Sp13-DzLQXTK3.js","static/js/Shop_finish-DeWyt6MA.js","static/js/Support-DRR4YmrQ.js","static/js/pay1-Bbj-5HrQ.js","static/js/pay2-B6kBWWLz.js","static/js/Shop-DQOdFrT9.js","static/js/Sp11-UjobdnA9.js","static/js/Shop_product-Dx7DntfU.js","static/js/Shop_cart-1TBA3bcr.js","static/js/Member-BeoZxWdF.js","static/css/Member-C3_Fv18D.css","static/js/bcool-BbS0mLAu.js"])))=>i.map(i=>d[i]);
var T=(a,n)=>()=>(n||a((n={exports:{}}).exports,n),n.exports);var p=(a,n,r)=>new Promise((u,e)=>{var t=i=>{try{c(r.next(i))}catch(l){e(l)}},o=i=>{try{c(r.throw(i))}catch(l){e(l)}},c=i=>i.done?u(i.value):Promise.resolve(i.value).then(t,o);c((r=r.apply(a,n)).next())});import{o as d,c as f,w as h,a as R,r as g,T as V,u as D,R as I,b,d as v,e as w,f as S}from"./vue-CKRjU0l-.js";var N=T(L=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const C={__name:"App",setup(a){return(n,r)=>(d(),f(D(I),null,{default:h(({Component:u})=>[R(V,{name:"fade"},{default:h(()=>[(d(),f(g(u),{key:n.$route.fullPath}))]),_:2},1024)]),_:1}))}},B="modulepreload",q=function(a){return"/BECOOL_TEST/"+a},E={},s=function(n,r,u){let e=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(r.map(i=>{if(i=q(i),i in E)return;E[i]=!0;const l=i.endsWith(".css"),O=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${O}`))return;const _=document.createElement("link");if(_.rel=l?"stylesheet":B,l||(_.as="script"),_.crossOrigin="",_.href=i,c&&_.setAttribute("nonce",c),document.head.appendChild(_),l)return new Promise((y,A)=>{_.addEventListener("load",y),_.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return e.then(o=>{for(const c of o||[])c.status==="rejected"&&t(c.reason);return n().catch(t)})},$=[{path:"/",component:()=>s(()=>import("./Home-DAbm-FFV.js"),__vite__mapDeps([0,1,2,3,4])),meta:{title:"首頁"}},{path:"/information/",component:()=>s(()=>import("./Information-GBfdaPlP.js"),__vite__mapDeps([5,1,2,3,4,6])),meta:{title:"島嶼危機"}},{path:"/social/",component:()=>s(()=>import("./social-Df9gKciI.js"),__vite__mapDeps([7,1,2,3,4])),meta:{title:"社群中心"}},{path:"/About/",component:()=>s(()=>import("./About-DH3BpU7a.js"),__vite__mapDeps([8,1,2,3,4])),meta:{title:"關於我們"}},{path:"/shop_checkout/",component:()=>s(()=>import("./Shop_checkout-DCC7A4k6.js"),__vite__mapDeps([9,1,2,3,4,10])),meta:{title:"市集結帳"}},{path:"/shop_finish/",component:()=>s(()=>import("./Shop_finish-DeWyt6MA.js"),__vite__mapDeps([11,1,2,3,4])),meta:{title:"市集結束"}},{path:"/support/",component:()=>s(()=>import("./Support-DRR4YmrQ.js"),__vite__mapDeps([12,1,2,3,4])),meta:{title:"支持我們"}},{path:"/pay1/",component:()=>s(()=>import("./pay1-Bbj-5HrQ.js"),__vite__mapDeps([13,1,2,3,4])),meta:{title:"捐款頁面1"}},{path:"/pay2/",component:()=>s(()=>import("./pay2-B6kBWWLz.js"),__vite__mapDeps([14,1,2,3,4])),meta:{title:"捐款頁面2"}},{path:"/shop/",component:()=>s(()=>import("./Shop-DQOdFrT9.js"),__vite__mapDeps([15,1,2,3,4,16,10])),meta:{title:"環保市集"}},{path:"/shop_product/",component:()=>s(()=>import("./Shop_product-Dx7DntfU.js"),__vite__mapDeps([17,1,2,3,4,16])),meta:{title:"環保市集_商品頁"}},{path:"/shop_cart/",component:()=>s(()=>import("./Shop_cart-1TBA3bcr.js"),__vite__mapDeps([18,3,1,2])),meta:{title:"環保市集_購物車"}},{path:"/member/",component:()=>s(()=>import("./Member-BeoZxWdF.js"),__vite__mapDeps([19,1,2,3,4,20])),meta:{title:"會員中心"}},{path:"/bcool/",component:()=>s(()=>import("./bcool-BbS0mLAu.js"),__vite__mapDeps([21,3,2])),meta:{title:"前後台登入"}}],P=b({history:v("/BECOOL_TEST/"),routes:$,scrollBehavior(a,n,r){return{top:0}}});P.beforeEach((a,n,r)=>p(L,null,function*(){if(a.meta.requiredLogin){const e=yield(yield fetch("https://notes.webmix.cc/login_test/login.php")).json();console.log(e),e.login_status?(document.title=a.meta.title,r()):r("/")}else document.title=a.meta.title,r()}));const m=w(C),k=S();m.use(k);m.use(P);m.mount("#app")});export default N();
