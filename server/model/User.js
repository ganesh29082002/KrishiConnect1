const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullname: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  role: {type: String},
  phoneno : {type : Number},
  city : {type : String},
  verified :{type:Boolean , default:false},
  token: { type: String },
  resetToken: String,
  resetTokenExpiration: Date,
});

module.exports = mongoose.model("users", userSchema);