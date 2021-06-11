const { type } = require("os");
const DB = require("../connection");
const mongoose = require("mongoose");
const schema = DB.Schema;
const userSchema = new schema({
  email: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  city: { type: String },
});
userModel = DB.model("user", userSchema);
module.exports = userModel;
