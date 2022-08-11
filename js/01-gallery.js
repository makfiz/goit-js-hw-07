import { galleryItems } from './gallery-items.js';
// Change code below this line
// Создание и рендер разметки по массиву данных
const galleryContainer = document.querySelector(".gallery")
let modal
galleryContainer.addEventListener("click", onImgConainerClick)


const galleryItemsTemplate = galleryItems.map(({ preview, original, description }) => {
  return ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div> `
}).join("")
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsTemplate)

// Реализация делегирования




function onImgConainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }
    
   makeModal(evt.target).show();

    if (modal.visible()) {
    document.addEventListener("keydown", onModalEscClose);
}
}

function makeModal(e) {
   return  modal = basicLightbox
        .create(`<img src="${e.dataset.source}" width="1280">`)
}

function onModalEscClose(event) {
    if (event.key !== "Escape") {
        return
    }
    modal.close()
    document.removeEventListener("keydown", onModalEscClose);
}
