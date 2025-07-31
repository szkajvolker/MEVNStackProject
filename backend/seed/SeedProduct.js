import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/product.model.js";
import { connectDB } from "../config/db.js";
import products from "../data/products.json" with { type: "json" };

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    console.log("Products collection cleared");

    await Product.insertMany(products);
    console.log("Products uploaded into database");

    process.exit(0);
  } catch (error) {
    console.error("Seeder error:", error.message);
    process.exit(1);
  }
};

seedProducts();
