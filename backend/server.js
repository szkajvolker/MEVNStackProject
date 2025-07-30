import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import loginRoutes from "./routes/login.routes.js";
//import orderRoutes from "./routes/order.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/login", loginRoutes);
//app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server is running on http://localhost:${PORT} address.`);
});
