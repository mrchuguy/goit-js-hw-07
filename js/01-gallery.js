import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

createGallery();

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        const keyClick = function (event) {
          if (event.key === "Escape") {
            instance.close();
            document.removeEventListener("keyup", keyClick);
          }
        };
        document.addEventListener("keyup", keyClick);
      },
    }
  );
  instance.show();
});

function createGallery() {
  let markup = galleryItems
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    )
    .join("\n");

  gallery.insertAdjacentHTML("beforeend", markup);
}
