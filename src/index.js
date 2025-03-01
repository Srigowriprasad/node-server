import express from "express";
import cors from 'cors';
import router from "./Router/index.js";
import connectDB from "./Mongo/index.js";
import dotenv from 'dotenv';
import { createJWToken } from "./Middleware/index.js";
dotenv.config();

const app = express();

const corsOption = {
  origin : ['http://localhost:3000'],
}

app.use(express.json());
app.use("/api", router);
app.use(cors(corsOption));

createJWToken();

const PORT = 5000;
app.listen(PORT, (error) => {
  if (!error) {
    connectDB();
    console.log(`Server is running on port : ${PORT}`);
  } else {
    console.log(`Error in running server`);
  }
});
