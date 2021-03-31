const { MongoClient } = require("mongodb");
const DB_PATH = "mongodb://localhost:27017";

MongoClient.connect(DB_PATH, (err, client) => {
  if (err) throw err;

  const db = client.db("Employees");

  const employee = db.collection("employee");
  // employee.insertOne(
  //   {
  //     id: 10,
  //     name: "Rohit",
  //     designation: "Software Developer",
  //   },
  //   (err, result) => {
  //     if (err) throw err;
  //     console.log(result.ops);
  //   }
  // );
  employee.insertMany(
    [
      {
        name: "Akshay",
        designation: "HR",
      },
      { name: "Raman", designation: "Tester" },
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result.ops);
    }
  );
});
