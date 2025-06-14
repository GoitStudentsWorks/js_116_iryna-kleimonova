import{a as c,i as l,S as j,N as I,P as T}from"./assets/vendor-DqgFoMSy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const i={header:document.querySelector(".header"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),toggleBtn:document.querySelector(".js-toggle"),burgerIcon:document.querySelector(".js-burger-icon"),closeIcon:document.querySelector(".js-close-icon"),logo:document.querySelectorAll(".header-logo"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},A=new IntersectionObserver(([t])=>{t.isIntersecting&&i.footer.classList.add("footer--visible")},{threshold:.8});A.observe(i.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function C(t=1,e=8){try{const{data:o}=await c.get("/artists",{params:{page:t,limit:e}});return o}catch(o){throw l.error({title:"Error",message:"Failed to fetch artists. Please try again later.",position:"topRight",timeout:5e3}),o}}async function x(t){try{const{data:e}=await c.get(`/artists/${t}`);return e}catch(e){throw l.error({title:"Error",message:"Failed to fetch artist details.",position:"topRight",timeout:5e3}),e}}async function P(t){try{const{data:e}=await c.get(`/artists/${t}/albums`);return e.albumsList}catch(e){throw l.error({title:"Error",message:"Failed to fetch artist albums.",position:"topRight",timeout:5e3}),e}}const b="/js_116_iryna-kleimonova/assets/sprite-DCaIFKl6.svg";function F(t){const e=t.artists.map(o=>{const{_id:r,strArtist:s,strBiographyEN:a,strArtistThumb:n,genres:d}=o;return`
        <li class="artist-card" data-id="${r}" data-artist="${encodeURIComponent(JSON.stringify(o))}">
          <img class="artist-card-img" src="${n}" alt="${s}" loading="lazy"/>

          <ul class="artist-card-genres">
            ${d.map(u=>`<li>${u}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${s}</h3>

          <p class="artist-card-info">
            ${a?a.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${b}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");i.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const N=document.querySelector(".artists-info"),m=document.querySelector(".artists-albums");function R(t){const{strArtist:e="-",strArtistThumb:o,intFormedYear:r,intDiedYear:s,strGender:a="-",intMembers:n,strCountry:d="-",strBiographyEN:u="-",genresList:h=[]}=t,M=r?s?`${r} - ${s}`:`${r} - present`:"-",k=h.length?h.map(B=>`<p class="genre-item">${B}</p>`).join(""):"-",q=`
    <h2 class="artist-title">${e}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${o||""}" alt="${e}" loading="lazy"/>
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${M}</p>
          </li>
          <li class="artist-meta-list-item"><b>Sex</b><br>
            <p>${a}</p>
          </li>
          <li class="artist-meta-list-item"><b>Members</b><br>
            <p>${n??"-"}</p>
          </li>
          <li class="artist-meta-list-item"><b>Country</b><br>
            <p>${d}</p>
          </li>
      </ul>
    <div class="artist-bottom">
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${u}</p>
      </div>
      <div class="artist-genres">
        ${k}
      </div>
      </div>
    </div>
    </div>
  `;N.innerHTML=q}function H(t=[]){if(m.innerHTML="",!t.length){m.innerHTML="<h4>-</h4>";return}const e=`
    <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
  ${t.map(o=>{const r=o.tracks&&o.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${o.tracks.map(s=>`
                <li class="track-item">
                  <span class="track-name">${s.strTrack||"-"}</span>
                  <span class="track-duration">
  ${s.intDuration?D(s.intDuration):"-"}
</span>
                  ${s.movie?`<a class="track-link" href="${s.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${b}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${o.strAlbum||"-"}</h3>
            ${r}
          </div>`}).join("")}
    </div>
  `;m.innerHTML=e}function D(t){const e=Math.floor(t/1e3),o=Math.floor(e/60),r=e%60;return`${o}:${r.toString().padStart(2,"0")}`}function O(){i.loadMoreBtn.classList.add("visually-hidden")}function Y(){i.loader.classList.remove("visually-hidden"),i.loadMoreBtn.classList.add("visually-hidden")}function _(){i.loader.classList.add("visually-hidden"),i.loadMoreBtn.classList.remove("visually-hidden")}function U(t,e){const o=typeof t=="string"?document.querySelector(t):t;if(!o)return;const r=document.createElement("div");r.className="stars";const s=Math.min(100,Math.max(0,e/5*100));r.style.setProperty("--rating-percent",`${s}%`),o.appendChild(r)}let f=0;function V({artist:t,albums:e}){f=window.scrollY||document.documentElement.scrollTop;const o={...t,albumsList:e||[],genresList:t.genres||[]};R(o),H(o.albumsList),document.body.style.cssText=`
    position: fixed;
    top: -${f}px;
    left: 0;
    width: 100%;
    overflow: hidden;
  `,i.modal.classList.remove("hidden"),z()}function L(){i.modal.classList.add("hidden");const t=-parseInt(document.body.style.top);document.body.style.cssText="",window.scrollTo({top:t}),K()}function w(t){(t.target===i.modal||t.target.closest(".js-modal-close"))&&L()}function S(t){t.key==="Escape"&&L()}function z(){document.addEventListener("click",w),document.addEventListener("keydown",S)}function K(){document.removeEventListener("click",w),document.removeEventListener("keydown",S)}function W(){var t;(t=i.modalLoader)==null||t.classList.remove("visually-hidden")}function J(){var t;(t=i.modalLoader)==null||t.classList.add("visually-hidden")}const G=new j(".swiper",{modules:[I,T],slidesPerView:1,spaceBetween:0,centeredSlides:!0,touchEventsTarget:"container",simulateTouch:!0,touchRatio:1,pagination:{el:".swiper-pagination",type:"custom",renderCustom(t,e,o){return`
        <span class="swiper-pagination-bullet" data-index="0"></span>
        <span class="swiper-pagination-bullet" data-index="middle"></span>
        <span class="swiper-pagination-bullet" data-index="${o-1}"></span>
      `},clickable:!0},on:{init(t){setTimeout(()=>{p(t),Q(t)},300)},slideChange(t){p(t)}},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});function Q(t){t.pagination.el.addEventListener("click",o=>{const r=o.target.closest(".swiper-pagination-bullet");if(!r)return;let s=r.dataset.index;s==="middle"?s=Math.floor(t.slides.length/2):s=parseInt(s,10),t.slideTo(s)}),p(t)}function p(t){const o=t.pagination.el.querySelectorAll(".swiper-pagination-bullet");o.forEach(s=>s.classList.remove("swiper-pagination-bullet-active"));const r=t.realIndex;r===0?o[0].classList.add("swiper-pagination-bullet-active"):r===t.slides.length-1?o[2].classList.add("swiper-pagination-bullet-active"):o[1].classList.add("swiper-pagination-bullet-active")}c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function X(){try{const{data:t}=await c.get("/feedbacks?limit=20&page=1"),e=t.data,o=document.getElementById("feedbacks-container");o.innerHTML="",e.forEach((r,s)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const n=`raty-${s}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${n}"></div>
          <p class="feedback-text">"${r.descr}"</p>
          <p class="author-name">${r.name}</p>
        </div>
      `,o.appendChild(a),U(`#${n}`,r.rating)}),G.update()}catch(t){console.error("Error fetching feedbacks:",t)}}X();window.history.scrollRestoration="manual";const E=t=>{const e=document.getElementById(t);if(!e)return;const o=e.offsetTop-i.header.offsetHeight;window.scrollTo({top:o,behavior:"smooth"})},Z=()=>{const t=i.navList.classList.toggle("is-open");i.burgerIcon.classList.toggle("hidden",t),i.closeIcon.classList.toggle("hidden",!t),document.body.classList.toggle("body-lock",t)},tt=t=>{i.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},et=()=>{const t=window.scrollY+i.header.offsetHeight+5;i.navLinks.forEach(e=>{const o=e.getAttribute("href");if(!o||o==="#"||o.startsWith("http"))return;const r=document.getElementById(o.slice(1));if(!r)return;const s=r.offsetTop,a=s+r.offsetHeight;t>=s&&t<a?e.classList.add("active"):e.classList.remove("active")})};i.toggleBtn.addEventListener("click",Z);i.logo.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});i.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",o=>{o.preventDefault();const r=e.slice(1);E(r),tt(t),i.navList.classList.remove("is-open"),i.burgerIcon.classList.remove("hidden"),i.closeIcon.classList.add("hidden"),document.body.classList.remove("body-lock"),history.replaceState(null,null," ")})});window.addEventListener("scroll",et);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{const t=window.location.hash.slice(1);E(t),history.replaceState(null,null," ")},0)});let g=1;const y=8;let v=null;async function $(){Y();try{const t=await C(g,y);F(t),v=Math.ceil(t.total/y)}catch{l.error({title:"Error",message:"Failed to load artists. Please try again later.",position:"topRight",timeout:5e3})}finally{_(),g<v&&O()}}i.loadMoreBtn.addEventListener("click",()=>{g++,$().catch(t=>{l.error({title:"Error",message:"Failed to load more artists.",position:"topRight",timeout:5e3})})});i.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const r=e.closest(".artist-card").dataset.artist;if(!r){l.warning({title:"Warning",message:"Missing artist data.",position:"topRight",timeout:4e3});return}W(),i.modal.classList.remove("hidden");try{const s=JSON.parse(decodeURIComponent(r)),a=await x(s._id),n=await P(s._id),d={...a,genres:s.genres||[]};V({artist:d,albums:n})}catch{l.error({title:"Error",message:"Failed to load artist details.",position:"topRight",timeout:5e3})}finally{setTimeout(()=>{J()},20)}});$();
//# sourceMappingURL=index.js.map
