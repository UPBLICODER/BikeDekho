const { Schema, model } = require("mongoose");
const { type } = require("os");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required:true,
    minlength:8
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;