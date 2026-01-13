import mongoose from "mongoose";
const MONGOURL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURL);
    console.log("Connected To DB");
  } catch (error) {
    console.log("Failed to connect");
    console.log(error);
  }
};

export default connectDB;
