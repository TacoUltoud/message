const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("message");
})

app.post("/send",function(req,res){
  res.send(req.body);
})

app.listen(8080,() => {
  console.log("listen on port 8080");
})