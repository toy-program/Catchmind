import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => (socket = aSocket);

export const initSockets = aSocket => {
  const { events } = windows;
  updateSocket(aSocket);
  const socket = getSocket();
  socket.on(events.newUser, handleNewUser);
};
