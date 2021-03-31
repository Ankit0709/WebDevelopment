const fs = require("fs");
const path = require("path");
let data = "We are appending data in file";
//write(filename,data,options,callback)
fs.writeFile(path.join(__dirname, "abc.txt"), data, (err) => {
  if (err) throw err;
  console.log("Done successfully");
});
//read(filename,options,callback)
fs.readFile(path.join(__dirname, "abc.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
