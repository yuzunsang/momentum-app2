const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout-form");
const loginInput = loginForm.querySelector(".login-input");
const logoutInput = logoutForm.querySelector(".logout-input");
const loginTypeds = loginForm.querySelector(".login-typeds");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
};

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginTypeds.value;

  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
};

const onLogoutSubmit = (event) => {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
};

if (!savedUsername) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
  logoutInput.addEventListener("submit", onLogoutSubmit);
}

logoutForm.addEventListener("submit", onLogoutSubmit);
