var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-app");

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var User = mongoose.model("User, nameSchema")

app.use("/", (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("Server Listening on port" + port);
});
