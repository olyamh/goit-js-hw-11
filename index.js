import{i as m,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o){return o.map(({webformatURL:i,largeImageURL:t,tags:s,likes:e,views:r,comments:l,downloads:u})=>`
                <li class="gallery-item">
                    <a href="${t}"><img src="${i}" alt="${s}" width="360"/>
                        <ul class="image-descr-list">
                            <li class="image-descr-item">Tags: ${s}</li>
                            <li class="image-descr-item">Likes: ${e}</li>
                            <li class="image-descr-item">Views: ${r}</li>
                            <li class="image-descr-item">Comments: ${l}</li>
                            <li class="image-descr-item">Downloads: ${u}</li>
                        </ul>
                    </a>
                </li>
                `).join("")}const a=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=document.querySelector(".js-search-form");function p(o,i){return fetch(`${o}?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return n.style.visibility="visible",t.json()}).then(t=>{console.log("get:",t),setTimeout(()=>{t.hits.length===0&&m.show({messageColor:"white",backgroundColor:"red",position:"topRight",close:!0,title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML+=f(t.hits),new d(".gallery-item a",{captionDelay:250,captions:!0,captionsData:"alt"}).refresh(),n.style.visibility="hidden"},2e3)}).catch(t=>console.error(t)).finally(()=>h.reset())}n.style.visibility="hidden";const g="47534106-2225be5d16534437522f359a0",c=new URLSearchParams({key:g,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0}),y="https://pixabay.com/api/",b=document.querySelector(".js-search-form");b.addEventListener("submit",function(o){o.preventDefault(),a.innerHTML="";const t=o.target.querySelector(".search-input").value.trim();console.log("input:",t),c.set("q",t),p(y,c)});
//# sourceMappingURL=index.js.map
