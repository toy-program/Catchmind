import express from "express";
import logger from "morgan";
import { join } from "path";
import socketIO from "socket.io";

import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
const handleListening = () => console.log(`Server is on ${PORT}`);

const server = app.listen(PORT, handleListening);

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const io = socketIO.listen(server);

io.on("connection", socket => socketController(socket));
