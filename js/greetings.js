const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal__form__input input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  modal.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = modalInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  modal.classList.remove(HIDDEN_CLASSNAME);
  modal.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
