import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")
galleryContainer.addEventListener("click", onImgConainerClick)


const galleryItemsTemplate = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`
}).join("")
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsTemplate)


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,  
});  

function onImgConainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }
  
    gallery.on('show.simplelightbox');   
}

 