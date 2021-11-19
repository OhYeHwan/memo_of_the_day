"use strict";
const popup = document.querySelector(".popup");
const url = document.querySelector(".popup__box__url");
const content = document.querySelector(".popup__box__content");
const titleInput = document.querySelector(".popup__box__input__title");
const urlInput = document.querySelector(".popup__box__url__input");
const contentInput = document.querySelector(".popup__box__content__input");
function openUrlPopUp(event) {
    url.style.display = "flex";
    content.style.display = "none";
    openPopUp(event);
}
function openContentPopUp(event) {
    content.style.display = "flex";
    url.style.display = "none";
    openPopUp(event);
}
function openPopUp(event) {
    event.preventDefault();
    popup.style.display = "flex";
}
function closePopUp(event) {
    event.preventDefault();
    inputClear();
    popup.style.display = "none";
}
function inputClear() {
    titleInput.value = "";
    urlInput.value = "";
    contentInput.value = "";
}
//# sourceMappingURL=main.js.map