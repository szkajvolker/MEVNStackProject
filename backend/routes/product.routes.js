import express from "express";
import {} from "..controllers/product.controllers.js";

const router = express.Router();

router.post("/", addNewProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProduct);

export default router;
