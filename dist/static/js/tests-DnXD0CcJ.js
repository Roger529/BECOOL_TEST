import{g as W,m as c,c as C,b as J,d as V,e as X,n as Q,f as Z,h as ee,S as ae,a as se,N as te,P as ie}from"./swiper-vue-WAfnBAxP.js";import{_ as re,a as le,b as ne,c as oe}from"./Sp18-C81z9wpS.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as de,a as M,w as k,m as K,o as pe,j as R}from"./vue-CpKcPlHy.js";function fe(A){let{swiper:e,extendParams:L,on:d,emit:g}=A;const b=W();let f=!1,y=null,E=null,z,p,m,h;L({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:i,rtlTranslate:n}=e,{dragEl:r,el:l}=i,o=e.params.scrollbar,a=e.params.loop?e.progressLoop:e.progress;let s=p,t=(m-p)*a;n?(t=-t,t>0?(s=p-t,t=0):-t+p>m&&(s=m+t)):t<0?(s=p+t,t=0):t+p>m&&(s=m-t),e.isHorizontal()?(r.style.transform=`translate3d(${t}px, 0, 0)`,r.style.width=`${s}px`):(r.style.transform=`translate3d(0px, ${t}px, 0)`,r.style.height=`${s}px`),o.hide&&(clearTimeout(y),l.style.opacity=1,y=setTimeout(()=>{l.style.opacity=0,l.style.transitionDuration="400ms"},1e3))}function U(i){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${i}ms`)}function v(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:i}=e,{dragEl:n,el:r}=i;n.style.width="",n.style.height="",m=e.isHorizontal()?r.offsetWidth:r.offsetHeight,h=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?p=m*h:p=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?n.style.width=`${p}px`:n.style.height=`${p}px`,h>=1?r.style.display="none":r.style.display="",e.params.scrollbar.hide&&(r.style.opacity=0),e.params.watchOverflow&&e.enabled&&i.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function I(i){return e.isHorizontal()?i.clientX:i.clientY}function O(i){const{scrollbar:n,rtlTranslate:r}=e,{el:l}=n;let o;o=(I(i)-Z(l)[e.isHorizontal()?"left":"top"]-(z!==null?z:p/2))/(m-p),o=Math.max(Math.min(o,1),0),r&&(o=1-o);const a=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*o;e.updateProgress(a),e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}function H(i){const n=e.params.scrollbar,{scrollbar:r,wrapperEl:l}=e,{el:o,dragEl:a}=r;f=!0,z=i.target===a?I(i)-i.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,i.preventDefault(),i.stopPropagation(),l.style.transitionDuration="100ms",a.style.transitionDuration="100ms",O(i),clearTimeout(E),o.style.transitionDuration="0ms",n.hide&&(o.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),g("scrollbarDragStart",i)}function N(i){const{scrollbar:n,wrapperEl:r}=e,{el:l,dragEl:o}=n;f&&(i.preventDefault&&i.cancelable?i.preventDefault():i.returnValue=!1,O(i),r.style.transitionDuration="0ms",l.style.transitionDuration="0ms",o.style.transitionDuration="0ms",g("scrollbarDragMove",i))}function S(i){const n=e.params.scrollbar,{scrollbar:r,wrapperEl:l}=e,{el:o}=r;f&&(f=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",l.style.transitionDuration=""),n.hide&&(clearTimeout(E),E=Q(()=>{o.style.opacity=0,o.style.transitionDuration="400ms"},1e3)),g("scrollbarDragEnd",i),n.snapOnRelease&&e.slideToClosest())}function B(i){const{scrollbar:n,params:r}=e,l=n.el;if(!l)return;const o=l,a=r.passiveListeners?{passive:!1,capture:!1}:!1,s=r.passiveListeners?{passive:!0,capture:!1}:!1;if(!o)return;const t=i==="on"?"addEventListener":"removeEventListener";o[t]("pointerdown",H,a),b[t]("pointermove",N,a),b[t]("pointerup",S,s)}function F(){!e.params.scrollbar.el||!e.scrollbar.el||B("on")}function $(){!e.params.scrollbar.el||!e.scrollbar.el||B("off")}function _(){const{scrollbar:i,el:n}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const r=e.params.scrollbar;if(!r.el)return;let l;if(typeof r.el=="string"&&e.isElement&&(l=e.el.querySelector(r.el)),!l&&typeof r.el=="string"){if(l=b.querySelectorAll(r.el),!l.length)return}else l||(l=r.el);e.params.uniqueNavElements&&typeof r.el=="string"&&l.length>1&&n.querySelectorAll(r.el).length===1&&(l=n.querySelector(r.el)),l.length>0&&(l=l[0]),l.classList.add(e.isHorizontal()?r.horizontalClass:r.verticalClass);let o;l&&(o=l.querySelector(V(e.params.scrollbar.dragClass)),o||(o=X("div",e.params.scrollbar.dragClass),l.append(o))),Object.assign(i,{el:l,dragEl:o}),r.draggable&&F(),l&&l.classList[e.enabled?"remove":"add"](...C(e.params.scrollbar.lockClass))}function x(){const i=e.params.scrollbar,n=e.scrollbar.el;n&&n.classList.remove(...C(e.isHorizontal()?i.horizontalClass:i.verticalClass)),$()}d("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const i=e.params.scrollbar;let{el:n}=e.scrollbar;n=c(n),n.forEach(r=>{r.classList.remove(i.horizontalClass,i.verticalClass),r.classList.add(e.isHorizontal()?i.horizontalClass:i.verticalClass)})}),d("init",()=>{e.params.scrollbar.enabled===!1?P():(_(),v(),w())}),d("update resize observerUpdate lock unlock changeDirection",()=>{v()}),d("setTranslate",()=>{w()}),d("setTransition",(i,n)=>{U(n)}),d("enable disable",()=>{const{el:i}=e.scrollbar;i&&i.classList[e.enabled?"remove":"add"](...C(e.params.scrollbar.lockClass))}),d("destroy",()=>{x()});const q=()=>{e.el.classList.remove(...C(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...C(e.params.scrollbar.scrollbarDisabledClass)),_(),v(),w()},P=()=>{e.el.classList.add(...C(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...C(e.params.scrollbar.scrollbarDisabledClass)),x()};Object.assign(e.scrollbar,{enable:q,disable:P,updateSize:v,setTranslate:w,init:_,destroy:x})}function ue(A){let{swiper:e,extendParams:L,on:d}=A;L({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let g=null,b,f,y=new Date().getTime();function E(a){const s=g;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}function z(a){const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function p(a){a=c(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function m(a){a=c(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function h(a,s){a=c(a),a.forEach(t=>{t.setAttribute("role",s)})}function w(a,s){a=c(a),a.forEach(t=>{t.setAttribute("aria-roledescription",s)})}function U(a,s){a=c(a),a.forEach(t=>{t.setAttribute("aria-controls",s)})}function v(a,s){a=c(a),a.forEach(t=>{t.setAttribute("aria-label",s)})}function I(a,s){a=c(a),a.forEach(t=>{t.setAttribute("id",s)})}function O(a,s){a=c(a),a.forEach(t=>{t.setAttribute("aria-live",s)})}function H(a){a=c(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function N(a){a=c(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function S(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,t=a.target;if(!(e.pagination&&e.pagination.el&&(t===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(V(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const u=c(e.navigation.prevEl);c(e.navigation.nextEl).includes(t)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?E(s.lastSlideMessage):E(s.nextSlideMessage)),u.includes(t)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?E(s.firstSlideMessage):E(s.prevSlideMessage))}e.pagination&&t.matches(V(e.params.pagination.bulletClass))&&t.click()}}function B(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(H(s),m(s)):(N(s),p(s))),a&&(e.isEnd?(H(a),m(a)):(N(a),p(a)))}function F(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function $(){return F()&&e.params.pagination.clickable}function _(){const a=e.params.a11y;F()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(p(s),e.params.pagination.renderBullet||(h(s,"button"),v(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,ee(s)+1)))),s.matches(V(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const x=(a,s,t)=>{p(a),a.tagName!=="BUTTON"&&(h(a,"button"),a.addEventListener("keydown",S)),v(a,t),U(a,s)},q=a=>{f&&f!==a.target&&!f.contains(a.target)&&(b=!0),e.a11y.clicked=!0},P=()=>{b=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},i=a=>{y=new Date().getTime()},n=a=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-y<100)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;f=s;const t=e.slides.indexOf(s)===e.activeIndex,u=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);t||u||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{b||(e.params.loop?e.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(s),0),b=!1)}))},r=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&w(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&h(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((t,u)=>{const D=e.params.loop?parseInt(t.getAttribute("data-swiper-slide-index"),10):u,T=a.slideLabelMessage.replace(/\{\{index\}\}/,D+1).replace(/\{\{slidesLength\}\}/,s);v(t,T)})},l=()=>{const a=e.params.a11y;e.el.append(g);const s=e.el;a.containerRoleDescriptionMessage&&w(s,a.containerRoleDescriptionMessage),a.containerMessage&&v(s,a.containerMessage),a.containerRole&&h(s,a.containerRole);const t=e.wrapperEl,u=a.id||t.getAttribute("id")||`swiper-wrapper-${z(16)}`,D=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";I(t,u),O(t,D),r();let{nextEl:T,prevEl:j}=e.navigation?e.navigation:{};T=c(T),j=c(j),T&&T.forEach(G=>x(G,u,a.nextSlideMessage)),j&&j.forEach(G=>x(G,u,a.prevSlideMessage)),$()&&c(e.pagination.el).forEach(Y=>{Y.addEventListener("keydown",S)}),W().addEventListener("visibilitychange",i),e.el.addEventListener("focus",n,!0),e.el.addEventListener("focus",n,!0),e.el.addEventListener("pointerdown",q,!0),e.el.addEventListener("pointerup",P,!0)};function o(){g&&g.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=c(a),s=c(s),a&&a.forEach(u=>u.removeEventListener("keydown",S)),s&&s.forEach(u=>u.removeEventListener("keydown",S)),$()&&c(e.pagination.el).forEach(D=>{D.removeEventListener("keydown",S)}),W().removeEventListener("visibilitychange",i),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",n,!0),e.el.removeEventListener("pointerdown",q,!0),e.el.removeEventListener("pointerup",P,!0))}d("beforeInit",()=>{g=X("span",e.params.a11y.notificationClass),g.setAttribute("aria-live","assertive"),g.setAttribute("aria-atomic","true")}),d("afterInit",()=>{e.params.a11y.enabled&&l()}),d("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&r()}),d("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&B()}),d("paginationUpdate",()=>{e.params.a11y.enabled&&_()}),d("destroy",()=>{e.params.a11y.enabled&&o()})}const ge="/BECOOL_TEST/static/jpg/Sp19-GolsWFsa.jpg",me={components:{Swiper:ae,SwiperSlide:se},setup(){return{onSwiper:L=>{console.log(L)},onSlideChange:()=>{console.log("slide change")},modules:[te,ie,fe,ue]}}};function be(A,e,L,d,g,b){const f=K("swiper-slide"),y=K("swiper");return pe(),de("div",null,[M(y,{modules:d.modules,"slides-per-view":1,"space-between":50,navigation:"",pagination:{clickable:!0},scrollbar:{draggable:!0},onSwiper:d.onSwiper,onSlideChange:d.onSlideChange},{default:k(()=>[M(f,null,{default:k(()=>e[0]||(e[0]=[R("img",{src:re,alt:""},null,-1)])),_:1}),M(f,null,{default:k(()=>e[1]||(e[1]=[R("img",{src:le,alt:""},null,-1)])),_:1}),M(f,null,{default:k(()=>e[2]||(e[2]=[R("img",{src:ne,alt:""},null,-1)])),_:1}),M(f,null,{default:k(()=>e[3]||(e[3]=[R("img",{src:oe,alt:""},null,-1)])),_:1}),M(f,null,{default:k(()=>e[4]||(e[4]=[R("img",{src:ge,alt:""},null,-1)])),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const Se=ce(me,[["render",be]]);export{Se as default};
