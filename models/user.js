const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerShema = new Schema({
  name: { type: String,default: ''},
  email: { type: String, unique: true },
  phone: { type: String, unique: true,default : '' },
  gender: { type: String, default : 'male' },
  role: { type: String, default: "customer" }
});

const User = mongoose.model("User", customerShema);
module.exports = {
  User
};
