import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-functions.js";
import { getGallery } from "./js/pixabay-api.js";

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(elem) {
  elem.preventDefault();
  
  galleryList.innerHTML = '';

  const query = elem.target.elements.query.value.trim();
  
  if (query === '') {
    iziToast.show({
      message: 'Please enter a search query name!',
      messageColor: '#fff',
      backgroundColor: '#FF0000',
      position: 'topRight',
    });      
    return;
  }
  
  loader.classList.remove('hidden');

  getGallery(query).then(data => {
    if (data.hits.length === 0) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#fff',
        backgroundColor: '#FF0000',
        position: 'topRight',
      });
    } else {
      renderGallery(data);
    }
  }).catch((error) => {
      console.log(error);
  }).finally(() => {
      loader.classList.add('hidden');
  });

  elem.target.reset();
}