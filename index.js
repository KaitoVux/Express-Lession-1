const express = require('express'),
      port = 8888,
      http = require ('http');
    
const app = express();

let defaultController = require('./controllers/defaultController')();
app.use("/default", defaultController);

app.use((req, res, next) => {
  next(res.status(404).json({
    data: {},
    status: 404,
    message: 'Không tìm thấy trang yêu cầu'
  }));
});

http.createServer (app).listen (port);