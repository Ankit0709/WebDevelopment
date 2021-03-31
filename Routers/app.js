const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", express.static(__dirname + "/static"));

const routes = {
  teachers: require("./routes/teachers").route,
  students: require("./routes/students").route,
};

app.use("/teachers", routes.teachers);
app.use("/students", routes.students);

app.listen(4444, () => {
  console.log("Server started at localhost://4444");
});
