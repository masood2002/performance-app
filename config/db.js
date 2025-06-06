import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
