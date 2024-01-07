const sideBar = document.querySelector("#sidebar");

const openBtn = document.querySelector(".sidebar__open-btn");
const closeBtn = document.querySelector(".sidebar__close-btn");

function onOpenSideBar() {
  sideBar.classList.remove("hidden");
  sideBar.style.width = "300px";
}

function onCloseSideBar() {
  sideBar.classList.add("hidden");
  sideBar.style.width = "0";
}

openBtn.addEventListener("click", onOpenSideBar);
closeBtn.addEventListener("click", onCloseSideBar);
