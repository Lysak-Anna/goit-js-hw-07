import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');          
const markUp = galleryItems.map(item => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${ item.original }">
    <img
      class="gallery__image"
      src="${ item.preview }"
       data-source="${item.original}"
      alt="${item.description}"
    /> 
  </a>
</div>`).join('');
    

gallery.insertAdjacentHTML('beforeend', markUp);
gallery.addEventListener('click', galleryClickHandler);

let instance;

function galleryClickHandler(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const currentImage = event.target;
  instance = basicLightbox.create(`
     <img src="${currentImage.dataset.source}" >
    `);
  
  instance.show(escapeHandler);
 
}

function escapeHandler(event) {
  addEvent();
  if (event.code === 'Escape') {
    instance.close(removeEvent);
    
  }   
}
function removeEvent() {
  window.removeEventListener('keydown', escapeHandler);
}
function addEvent() {
  window.addEventListener('keydown', escapeHandler);
  window.addEventListener('click', removeEvent);
}












  



