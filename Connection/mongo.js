const mongoose = require('mongoose');
const uri = "mongodb+srv://vtdat199:vOKAaOuxs6wCqXTt@cluster0-bddud.mongodb.net/test?retryWrites=true&w=majority"

const connection =  mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
});

module.exports = connection;



