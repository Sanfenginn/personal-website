const container = document.querySelector(".container");
const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");

buttonOpen.addEventListener("click", () => {
  container.classList.add("show-nav");
});

buttonClose.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
