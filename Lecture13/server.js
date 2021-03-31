const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome all!");
});
//query paramater
server.get("/welcome", (req, res) => {
  res.send(`Welcome  ${req.query.f} ${req.query.l}  to my Site`);
});
server.get("/welcome/:name", (req, res) => {
  res.send(`Welcome here  ${req.params.name} to 2.0`);
});

server.listen(4002, () => {
  console.log("Server started at http://localhost:4002");
});
