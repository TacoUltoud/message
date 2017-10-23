const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine","ejs");

app.get("/",router.getHomepage)

app.post("/send",router.send)

app.listen(8080,() => {
  console.log("listen on port 8080");
})

module.exports = app