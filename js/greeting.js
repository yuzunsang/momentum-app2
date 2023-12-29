const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-input");
const logoutForm = document.querySelector(".logout-form");
const logoutInput = logoutForm.querySelector(".logout-input");
const greeting = document.querySelector(".greeting");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

// username이 localStorage에 있는 지 확인
if (!savedUsername) {
  // loginForm 보여주기
  loginForm.classList.remove(HIDDEN_KEY);
} else {
  // logoutForm 및 greeting 보여주기
  paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
  event.preventDefault();

  // username을 localStorage에 저장
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function onLogoutSubmit() {
  // localStorage의 username을 지우고 새로고침
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

function paintGreetings(username) {
  loginForm.classList.add(HIDDEN_KEY);
  greeting.classList.remove(HIDDEN_KEY);
  logoutForm.classList.remove(HIDDEN_KEY);
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);
