var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {required: true, type: String},
  age: {required: true, type: Number},
});

var Users = mongoose.model("Users", UserSchema);

module.exports = {
  Users 
}