const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello!");
});
server.listen(4444, () => {
  console.log("Server Started at http://localhost:4444");
});
