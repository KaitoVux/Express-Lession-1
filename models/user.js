const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerShema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  gender: { type: String },
  role: { type: String, default: "customer" }
});

const User = mongoose.model("User", customerShema);
module.exports = {
  User
};
