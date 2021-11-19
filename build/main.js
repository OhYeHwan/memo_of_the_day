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
const main = document.querySelector(".main");
const form = document.querySelector(".popup__box");
function onAdd() {
    const memo = createMemo();
    main.appendChild(memo);
}
function createMemo() {
    const memo = document.createElement("div");
    memo.setAttribute("class", "memo");
    memo.innerHTML = `
        <button class="memo__delete_button">X</button>
        <div class="memo__title">Title</div>
        <div class="memo__content">Content</div>
    `;
    return memo;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    onAdd();
    closePopUp(event);
});
//# sourceMappingURL=main.js.map