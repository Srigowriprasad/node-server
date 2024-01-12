import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  age: Number,
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
