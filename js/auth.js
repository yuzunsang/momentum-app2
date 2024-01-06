const auth = document.querySelector("#auth");
const wrapper = document.querySelector("#wrapper");

const welcome = document.querySelector(".welcome");
const welcomeBtn = document.querySelector(".welcome__btn");

const modal = document.querySelector(".modal");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const logoutForm = document.querySelector(".logout-form");
const greeting = document.querySelector(".greeting");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 username이 없다면 auth를 보여주기
if (!savedUsername) {
  auth.classList.remove(HIDDEN_KEY);
  wrapper.classList.add(HIDDEN_KEY);
}
// 저장된 username이 있다면 wrapper를 보여주기
else {
  paintWrapper();
  paintGreetings(savedUsername);
}

function onStartBtn() {
  welcome.classList.add(HIDDEN_KEY);
  modal.classList.remove(HIDDEN_KEY);
}

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // 히든 클래스 초기화한 후 wrapper 보여주기
  paintWrapper();
  paintGreetings(username);
}

function paintWrapper() {
  auth.classList.add(HIDDEN_KEY);
  welcome.classList.remove(HIDDEN_KEY);
  modal.classList.add(HIDDEN_KEY);
  wrapper.classList.remove(HIDDEN_KEY);
}

function onLogoutSubmit() {
  // localStorage의 username을 지우고 새로고침
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_KEY);
  logoutForm.classList.remove(HIDDEN_KEY);
  greeting.innerText = `안녕하세요 ${username}님.`;
}

welcomeBtn.addEventListener("click", onStartBtn);

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);
