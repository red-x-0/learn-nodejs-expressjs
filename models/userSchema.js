const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

const userSchema = new Schema({
  title: String,
  summary: String,
  body: String,
});
 

const User = mongoose.model("User", userSchema);
 

module.exports = User; 