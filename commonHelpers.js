import{a as p,S as b,i as c}from"./assets/vendor-31cfb576.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const w="45454606-0b86bc84167fe88447f90b3f4";p.defaults.baseURL="https://pixabay.com/api/";const v=async(e,a=1)=>{try{return(await p.get("",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:15}})).data}catch(r){throw console.error("Error fetching images:",r),r}},g=document.querySelector(".gallery"),y=e=>`<li class="gallery-item">
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
        </li>`,S=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),P=async(e,a=!1)=>{if(a&&(g.innerHTML=""),e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=e.map(y).join("");g.insertAdjacentHTML("beforeend",r),await S.refresh()},u=document.querySelector(".search-form"),h=document.querySelector(".loader"),o=document.querySelector(".load-more"),f=document.querySelector(".gallery");let n=1,l="",m=0;const q=()=>{h.classList.remove("hidden")},M=()=>{h.classList.add("hidden")},$=e=>{e.preventDefault(),l=u.elements.user_query.value.trim(),l&&(n=1,L(l,n))},L=async(e,a)=>{q();try{const r=await v(e,a);if(m=r.totalHits,m===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.classList.add("hidden"),f.innerHTML="";return}if(a===1)P(r.hits,!0);else{const i=r.hits.map(y).join("");f.insertAdjacentHTML("beforeend",i)}u.reset(),x()}catch(r){console.error("Error fetching images:",r),c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{M()}},x=()=>{const e=Math.ceil(m/15);n>=e?(o.classList.add("hidden"),c.info({message:"We’re sorry, but you’ve reached the end of search results.",position:"topRight"})):o.classList.remove("hidden")},R=()=>{n++,L(l,n)};u.addEventListener("submit",$);o.addEventListener("click",R);o.classList.add("hidden");
//# sourceMappingURL=commonHelpers.js.map
