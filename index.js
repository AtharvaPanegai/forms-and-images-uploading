/** @format */

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/myget", (req, res) => {
  console.log(req.body);

  res.send(req.query);
});

app.get("/mygetform", (req, res) => {
  res.render("getform");
});

app.get("/mypostform",(req,res)=>{
  res.render("postform")
})

app.listen(4000, () => {
  console.log("Server is Runnning at 4000");
});
