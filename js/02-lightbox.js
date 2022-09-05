import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

createGallery();

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGallery() {
  let markup = galleryItems
    .map(
      ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    )
    .join("\n");

  gallery.insertAdjacentHTML("beforeend", markup);
}
