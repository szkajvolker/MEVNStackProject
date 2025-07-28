import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Successfully connected to database", connection.connection.name);
  } catch (error) {
    console.error("❌ Failed to connect database!");
    process.exit(1);
  }
};
