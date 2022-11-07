import { galleryItems } from './gallery-items.js';
// Change code below this line

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
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', markUp);

gallery.addEventListener('click', galleryClickHandler);

function galleryClickHandler(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const currentImage = event.target;
  const link = currentImage.parentNode;
  currentImage.src = link.href;
  
  const instance = basicLightbox.create(`
    
     <img src="${currentImage.src}" >
`)
    instance.show(escapeHandler);
  
 
  
  function escapeHandler(event) {
    document.addEventListener("keydown", event => {
      
      if (event.code === 'Escape') {
        instance.close(() => {
             document.removeEventListener('keydown', event => {
            console.log('delete');
          });
         
    });
       
      }
      
    });
  }
  
}



  



