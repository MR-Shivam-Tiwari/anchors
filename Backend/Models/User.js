// User.js (or wherever your User model is defined)

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false, // Making the name field optional
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensuring the email is unique
  },
  otp: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
