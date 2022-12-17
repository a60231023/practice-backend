const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    maxlength: [25, "Name cannot exceed more than 25 character"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
