const express = require("express");
const app = express();
let tasks=[];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(tasks);
}
app.post("/",(req,res)=>{

});
app.listen(4444, () => {
    console.log("Server started at http://localhost:4444");
});
  
