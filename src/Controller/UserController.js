import UserModel from "../Mongo/Schema/UserSchema.js";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).send(users);
};

export const createUser = async (req, res) => {
  const payLoad = req.body;
  const { name, age } = payLoad;
  const user = await UserModel.findOne().sort({$natural : -1});
  const generatedUserId = user?.userId ? user.userId + 1 : 1;
  const createdUser = await UserModel.create({ userId: generatedUserId, name, age });
  res.status(200).send(createdUser);
};
