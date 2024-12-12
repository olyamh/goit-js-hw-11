import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { pixabayApi } from "./js/pixabay-api";
import { gallery } from "./js/pixabay-api";
import { loader } from "./js/pixabay-api";

loader.style.visibility = 'hidden';

const API_KEY = "47534106-2225be5d16534437522f359a0";
const params = new URLSearchParams({
    key: API_KEY,
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});
const BASE_URL = "https://pixabay.com/api/";

const form = document.querySelector(".js-search-form");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    gallery.innerHTML = "";

         
            const input = event.target.querySelector('.search-input');
            const clientInput  = input.value.trim();
            console.log("input-trim:", clientInput);
            if (!clientInput){
                iziToast.show({
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'topRight',
                    close: true,
                    title: ``,
                    message: 'Please, enter text'
                });
                form.reset();
                return;
            }
           
            console.log("input:", clientInput);
            params.set('q', clientInput);
            pixabayApi(BASE_URL, params);
        
});








