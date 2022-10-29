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
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const currentImage = event.target;
  const link = currentImage.parentNode;
  currentImage.src = link.href;
  


   const handleClick = () => {
     if (event.code === 'Escape') {
        instance.close();
        
      }
  }
  function addEvent () {
    document.addEventListener('keydown', handleClick);
  }
  

  const instance = basicLightbox.create(`
    
     <img src="${currentImage.src}" >
`)
  instance.show(addEvent);
  
 
  
  // function escapeHandler(event) {
  //   document.addEventListener("keydown", event => {
  //     if (event.code === 'Escape') {
  //       instance.close();
  //       removeEventListener();
  //     }
  //     console.log("Keydown: ", event);
    
  //   });
  // }
 
  // function removeEventListener(event) {
   
  //   document.removeEventListener("keydown", event => {
    
  //   });
  // }

}


// function escapeHandler(event) {
//   document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//     instance.close();
//   });
// }
  

// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування клавіатури 
// було тільки доти, доки відкрите модальне вікно. 
// Бібліотека basicLightbox містить метод для програмного закриття модального вікна

