import express from "express";
import router from "./src/Router/index.js";
import connectDB from "./src/Mongo/index.js";

const app = express();

app.use(express.json());
app.use("/api", router);
const PORT = 5000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port : ${PORT}`);
  } else {
    console.log(`Error in running server`);
  }
});

connectDB();
