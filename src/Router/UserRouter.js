import express from "express";
import { createUser, getAllUsers } from "../Controller/UserController.js";
import { middleware1, middleware2 } from "../Middleware/index.js";

const userRouter = express.Router();
userRouter.get("/", [middleware1, middleware2], getAllUsers);

userRouter.post("/", [middleware1, middleware2], createUser);


export default userRouter;