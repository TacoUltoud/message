const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router.js");
const PORT = process.env.PORT || 8080

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine","ejs");

app.get("/",router.getHomepage)

app.post("/send",router.send)

app.listen(PORT,() => {
  console.log(`listen on port ${PORT}`);
})

module.exports = app