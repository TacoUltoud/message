const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("message");
})

app.post("/send",function(req,res){
  var tmp = req.body;
  if(!check_email(tmp.email)){
    tmp.email = "wrong email format"; 
    res.send(tmp);
  }
  else res.send(tmp);
})

function check_email(email){
  const rule = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/;
  return rule.test(email);
}

module.exports = {
  check_email
}

app.listen(8080,() => {
  console.log("listen on port 8080");
})