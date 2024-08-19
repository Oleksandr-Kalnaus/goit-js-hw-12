import{a as h,S as L,i as c}from"./assets/vendor-31cfb576.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="45454606-0b86bc84167fe88447f90b3f4",w="https://pixabay.com/api/",v=async(e,o=1)=>{try{return(await h.get(w,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data}catch(r){throw console.error("Error fetching images:",r),r}},g=document.querySelector(".gallery"),f=e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                class="gallery-image"
                src="${e.webformatURL}"
                data-source="${e.largeImageURL}"
                alt="${e.tags}"
                />
            </a>
            <div class="info">
                <p class="text-info">Likes: <span class="number-info">${e.likes}</span></p>
                <p class="text-info">Views: <span class="number-info">${e.views}</span></p>
                <p class="text-info">Comments: <span class="number-info">${e.comments}</span></p>
                <p class="text-info">Downloads: <span class="number-info">${e.downloads}</span></p>
            </div>
        </li>`,S=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),P=async(e,o=!1)=>{if(o&&(g.innerHTML=""),e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=e.map(f).join("");g.insertAdjacentHTML("beforeend",r),await S.refresh()},u=document.querySelector(".search-form"),p=document.querySelector(".loader"),l=document.querySelector(".load-more"),q=document.querySelector(".gallery");let a=1,i="",m=0;const $=()=>{p.classList.remove("hidden")},x=()=>{p.classList.add("hidden")},M=e=>{e.preventDefault(),i=u.elements.user_query.value.trim(),i&&(a=1,y(i,a))},y=async(e,o)=>{$();try{const r=await v(e,o);if(m=r.totalHits,m===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(o===1)P(r.hits,!0);else{const n=r.hits.map(f).join("");q.insertAdjacentHTML("beforeend",n)}u.reset(),R()}catch(r){console.error("Error fetching images:",r),c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{x()}},R=()=>{const e=Math.ceil(m/15);a>=e?(l.classList.add("hidden"),c.info({message:"We’re sorry, but you’ve reached the end of search results.",position:"topRight"})):l.classList.remove("hidden")},E=()=>{a++,y(i,a)};u.addEventListener("submit",M);l.addEventListener("click",E);l.classList.add("hidden");
//# sourceMappingURL=commonHelpers.js.map
