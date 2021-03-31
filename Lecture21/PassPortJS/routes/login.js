const express = require("express");
const router = express.Router();

//GET /
router.get("/", (req, res, next) => {
  res.render("login");
});

modules.export = { router };
