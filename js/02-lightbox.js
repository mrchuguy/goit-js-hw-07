import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

createGallery();

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  console.log("open");
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
