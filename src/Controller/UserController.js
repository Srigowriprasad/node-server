import UserModel from "../Mongo/Schema/UserSchema.js";

export const getAllUsers = (req, res) => {
  const users = UserModel.find({});
  res.status(200).send(users);
};

export const createUser = (req, res) => {
  const payLoad = req.body;
  const { name, age } = payLoad;
  const user = UserModel.findOne().limit(1).sort({ _id: -1 });
  console.log(user);
  const generatedUserId = user.userId ? user.userId + 1 : 1;
  const createdUser = UserModel.create({ userId: generatedUserId, name, age });
  res.status(200).send(createdUser);
};
