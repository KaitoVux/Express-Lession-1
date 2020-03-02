const express = require('express'),
      port = 8888,
      http = require ('http');
const app = express();
var server = require("http").Server(app);

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let defaultController = require('./controllers/defaultController')();
app.use("/", defaultController);

app.use((req, res, next) => {
  next(res.status(404).json({
    data: {},
    status: 404,
    message: 'Không tìm thấy trang yêu cầu'
  }));
});

server.listen(port, function() {
  var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "\r\nStarted at :- " + datetime;
    console.log(message);
})