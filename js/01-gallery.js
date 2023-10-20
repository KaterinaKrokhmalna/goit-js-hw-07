import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
const markup = galleryItems.map(({preview, original, description})=>`
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
         alt="${description}">
    </a>
        </li>
        `).join("")

 
gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener("click", galleryImageClick);

function galleryImageClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return
  }
  const imageAlt = event.target.alt;
  const imageSrc = event.target.dataset.source;
  const modal = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600" alt = "${imageAlt}">
`);
modal.show();
}
    