import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB Connected Successfully");
  } catch (error) {
    console.log("MONGODB Error occured: ", error);
  }
};
