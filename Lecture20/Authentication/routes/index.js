const express = require("express");
const router = express.Router();

//Get /welcome
router.get("/welcome", (req, res, next) => {
  res.render("home", { title: "Home page" });
});
//Get /login
router.get("/login", (req, res, next) => {
  res.render("login", { title: "Login page" });
});

//Get /register
router.get("/register", (req, res, next) => {
  res.render("signup", { title: "Sign Up page" });
});

//POST /register
router.post("/register", (req, res, next) => {
  if (req.body.username && req.body.email && req.body.password) {
    var userData = {
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
  } else {
    let err = new Error("Your need to enter all the information!");
    err.status = 400;
    return next(err);
  }
});
module.exports = router;
