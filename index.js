/** @format */

const express = require("express");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const app = express();

cloudinary.config({
  // cloud_name : process.env.CLOUD_NAME
  cloud_name : "atharvapanegai",
  api_key : "592221752833538",
  api_secret: "HUpC_hDWEuHIhDgBsZIraWImz-I",
})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/myget", (req, res) => {
  console.log(req.body);

  res.send(req.query);
});
app.post("/mypost", async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  let file = req.files.sampleFile;

  result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "users",
  });

  console.log(result);

  details = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    result,
  };

  res.send(details);
});

app.get("/mygetform", (req, res) => {
  res.render("getform");
});

app.get("/mypostform", (req, res) => {
  res.render("postform");
});

app.listen(4000, () => {
  console.log("Server is Runnning at 4000");
});
