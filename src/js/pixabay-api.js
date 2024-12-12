import {createMarkup} from "./render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector('.loader')
const form = document.querySelector(".js-search-form");

export function pixabayApi(url, options){
   return fetch(`${url}?${options}`)
   .then((response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
loader.style.visibility = 'visible'
    return response.json();
})
.then(data => {
    console.log("get:" , data); 
        if (data.hits.length === 0){
            iziToast.show({
                messageColor: 'white',
                backgroundColor: 'red',
                position: 'topRight',
                close: true,
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
        }
        gallery.innerHTML += createMarkup(data.hits);
        const lightbox = new SimpleLightbox('.gallery-item a', {
            captionDelay: 250,
            captions: true,
            captionsData: "alt",
        });
        
        lightbox.refresh();

        loader.style.visibility = 'hidden';
})
.catch(error =>  iziToast.show({
                messageColor: 'white',
                backgroundColor: 'red',
                position: 'topRight',
                close: true,
                title: `${error}`,
                message: 'Sorry, there are no images matching your search query. Please try again!'
            }))
.finally(() => form.reset())

}

