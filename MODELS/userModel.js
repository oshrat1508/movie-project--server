const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  id: String,
  like: {
    type: [String],
    default: [],
  } ,
  profileImg: String,

});

const UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
