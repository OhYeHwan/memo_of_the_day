const popup = document.querySelector(".popup") as HTMLDivElement;
const url = document.querySelector(".popup__box__url") as HTMLDivElement;
const content = document.querySelector(
  ".popup__box__content"
) as HTMLDivElement;
const titleInput = document.querySelector(
  ".popup__box__input__title"
) as HTMLInputElement;
const urlInput = document.querySelector(
  ".popup__box__url__input"
) as HTMLInputElement;
const contentInput = document.querySelector(
  ".popup__box__content__input"
) as HTMLInputElement;

function openUrlPopUp(event: Event) {
  url.style.display = "flex";
  content.style.display = "none";
  openPopUp(event);
}

function openContentPopUp(event: Event) {
  content.style.display = "flex";
  url.style.display = "none";
  openPopUp(event);
}

function openPopUp(event: Event) {
  event.preventDefault();
  popup.style.display = "flex";
}

function closePopUp(event: Event) {
  event.preventDefault();
  inputClear();
  popup.style.display = "none";
}

function inputClear() {
  titleInput.value = "";
  urlInput.value = "";
  contentInput.value = "";
}
