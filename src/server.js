import express from "express";
import logger from "morgan";
import { join } from "path";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.get("/", (req, res) => res.render("home"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
const handleListening = () => console.log(`Server is on ${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", socket => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotification", {
      message,
      nickname: socket.nickname || "Anonymous"
    });
  });

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
