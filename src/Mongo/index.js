import mongoose from "mongoose";

async function connectDB() {
  try {
    console.log("Establishing connection to mongodb...");
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to mongodb ");
  } catch (error) {
    console.log("Error in connection to mongodb " + error);
  }
}

export default connectDB;
