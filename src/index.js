const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const router = require("./routers/route");
const multer = require("multer");

app.use(bodyparser.json()); //πConvertObject to JSON Form
app.use(multer().any());

//************************[MongoDB & Node.JS Connectedπ]*************************//
mongoose
  .connect(
    "mongodb+srv://mahesh999333:mahesh999333@cluster0.tecej.mongodb.net/productsManagementGroup43",
    {
      useNewUrlParser: true,
    }
  )
  .then((result) => console.log("Hello MongoDb is connected π"))
  .catch((err) => console.log(err));

//**************************[πIt is Global Api'sπ]*****************************//
app.use("/", router);

//******************************[πPort Createdπ]*******************************//
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port π " + (process.env.PORT || 3000));
});

//ππππππππ[Thank You Index-File End]πππππππππ//
