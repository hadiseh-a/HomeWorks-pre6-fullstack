import mongoose from "mongoose";

const connectDB = (uri) => {
  try {
    return mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
