const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  job_title: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
exports.User = User;
