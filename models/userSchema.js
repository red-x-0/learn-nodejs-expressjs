const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

const userSchema = new Schema({
  uname: String,
  gender: String,
  age: Number,
  country: String,
  updatedAt: { type: Date, default: Date.now },
});
 

const User = mongoose.model("User", userSchema);
 

module.exports = User; 