import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onPictureClick);

function createGalleryMarkup(gallery) {
    const markup =  gallery.map(({ preview, original, description }) => {
         return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
        </a>
        </li>`
    }).join(' ');
    return markup;
}
function onPictureClick(event) {
    event.preventDefault();
    const isPictureClick = event.target.classList.contains("gallery__image");
    if (!isPictureClick) {
        return;
    }
    const largePicUrl = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
        <img src="${largePicUrl}" width="800" height="600">`);
    instance.show();
    console.log(largePicUrl);
}
