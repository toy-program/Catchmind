import { initSockets } from "./sockets";

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const nickname = localStorage.getItem(NICKNAME);

const logIn = nickname => {
  const { events } = window;
  const socket = io("/");
  initSockets(socket);
  socket.emit(events.setNickname, { nickname });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;

  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
