import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
