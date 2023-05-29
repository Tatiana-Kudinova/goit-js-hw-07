import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(`.gallery`);

const galleryItem = galleryItems.map(({ original, preview, description }) => {
  const galleryItemsMarkup = `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  return galleryItemsMarkup;
});
listEl.insertAdjacentHTML(`beforeend`, galleryItem.join(""));

listEl.addEventListener(`click`, onClick);

function onClick(evt) {
  evt.preventDefault();
  let clickedItem = evt.target;

  console.log(clickedItem.dataset);

  if (!clickedItem.classList.contains(`gallery__image`)) {
    return clickedItem;
  }

  let openOrinalImg = evt.target.dataset.source;
  console.log(openOrinalImg);

  const instance = basicLightbox.create(
    `<img src="${openOrinalImg}" width="800" height="600""/>`
  );
  instance.show();
}
