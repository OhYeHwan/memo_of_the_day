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

const main = document.querySelector(".main") as HTMLDivElement;
const form = document.querySelector(".popup__box") as HTMLFormElement;

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
