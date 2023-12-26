const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;

  if (username === "") {
    console.log("Please write your name.");
  } else console.log("Hello " + username);
};

const onLinkClick = () => {
  alert("clicked");
};

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onLinkClick);
