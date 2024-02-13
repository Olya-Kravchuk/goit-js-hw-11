import{S as u,i}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery");let m=new u(".gallery-link",{captionsData:"alt",captionDelay:500});function d(s){const{largeImageURL:r,webformatURL:o,tags:n,likes:e,views:t,comments:l,downloads:c}=s;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" alt="${n}" />
      </a>
      <ul class="gallery-body">
        <li class="info-box">
          <h3>Likes:</h3>
          <p>${e}</p>
        </li>
        <li class="info-box">
          <h3>Views:</h3>
          <p>${t}</p>
        </li>
        <li class="info-box">
          <h3>Comments:</h3>
          <p>${l}</p>
        </li>
        <li class="info-box">
          <h3>Downloads:</h3>
          <p>${c}</p>
        </li>
      </ul>
    </li>`}function h(s){const r=s.hits.map(o=>d(o)).join(`
`);f.insertAdjacentHTML("beforeend",r),m.refresh()}function g(s){const r="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${o}?${n}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}const y=document.querySelector(".search-form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");y.addEventListener("submit",b);function b(s){s.preventDefault(),p.innerHTML="";const r=s.target.elements.query.value.trim();if(r===""){i.show({message:"Please enter a search query name!",messageColor:"#fff",backgroundColor:"#FF0000",position:"topRight"});return}a.classList.remove("hidden"),g(r).then(o=>{o.hits.length===0?i.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",backgroundColor:"#FF0000",position:"topRight"}):h(o)}).catch(o=>{console.log(o)}).finally(()=>{a.classList.add("hidden")}),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
