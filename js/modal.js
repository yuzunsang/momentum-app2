const welcomeContainer = document.querySelector(".welcome");
const welcomeBtn = document.querySelector(".welcome__btn");
const modalContainer = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

function onWelcomeBtn() {
  welcomeContainer.classList.add("hidden");
  modalContainer.classList.remove("hidden");
}

function onCloseBtn() {
  welcomeContainer.classList.remove("hidden");
  modalContainer.classList.add("hidden");
}

welcomeBtn.addEventListener("click", onWelcomeBtn);
modalClose.addEventListener("click", onCloseBtn);
