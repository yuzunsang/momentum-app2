const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

function onClickModalBtn() {
  modal.classList.add("open-modal");
}
function onClickCloseBtn() {
  modal.classList.remove("open-modal");
}

modalBtn.addEventListener("click", onClickModalBtn);
closeBtn.addEventListener("click", onClickCloseBtn);
