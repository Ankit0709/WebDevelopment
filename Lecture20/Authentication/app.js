const express = require("express");
const app = express();
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use("/", router);

app.listen(4444, () => {
  console.log("Server started at http://localhost:4444");
});
