import mongoose from "mongoose";

async function connectDB() {
  try {
    console.log("Establishing connection to mongodb...");
    await mongoose.connect(
      `mongodb://srigowriprasad:mongodb@ac-to6vaf0-shard-00-00.3w4h5jg.mongodb.net:27017,
      ac-to6vaf0-shard-00-01.3w4h5jg.mongodb.net:27017,
      ac-to6vaf0-shard-00-02.3w4h5jg.mongodb.net:27017/srigowri?ssl=true&replicaSet=atlas-nwqmim-shard-0&authSource=admin&retryWrites=true&w=majority`
    );
    console.log("Connected to mongodb ");
  } catch (error) {
    console.log("Error in connection to mongodb " + error);
  }
}

export default connectDB;
