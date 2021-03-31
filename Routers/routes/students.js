const express = require("express");
const route = express.Router();

let students = [];
route.get("/", (req, res) => {
  res.send(students);
});

route.post("/", (req, res) => {
  students.push({
    name: req.body.name,
    id: req.body.id,
  });
  res.send("Success");
});
module.exports = {
  route,
};
