var express = require('express');
var app = express();
var port = 3000;


app.use("/", (req, res) =>{
  res.send("HELLO WORLD")
});

app.listen(port, () => {
  console.log("Server Listening on port" + port);
});
