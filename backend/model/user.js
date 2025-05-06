import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 8,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

export const UserModel = mongoose.model("User", userSchema);
