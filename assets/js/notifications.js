import { getSocket } from "./sockets";
const notification = document.getElementById("jsNotification");

const handleNewUser = ({ nickname }) => {
  console.log(nickname, "just joined");
};

const socket = getSocket();

socket.on(window.events.newUser, handleNewUser);
