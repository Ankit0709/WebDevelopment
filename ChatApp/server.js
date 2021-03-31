const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.Server(app);
const io = socketio(server);

app.get("/", express.static(__dirname + "/static"));
io.on("connection", (client) => {
  console.log("Connected with " + client.id);
  io.emit();
});
server.listen(4444, () => {
  console.log("Server started at http://localhost:4444");
});
