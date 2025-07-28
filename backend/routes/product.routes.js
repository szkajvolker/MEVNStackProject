import express from "express";
import {
  addNewProduct,
  allProducts,
  aProduct,
  DeleteProduct,
  updateProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.post("/", addNewProduct);
router.get("/", allProducts);
router.put("/:id", updateProduct);
router.delete("/:id", DeleteProduct);
router.get("/:id", aProduct);

export default router;
