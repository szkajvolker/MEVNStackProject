import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const addNewProduct = async (req, res) => {
  try {
    if (!req.body.name || !req.body.brand || !req.body.type || !req.body.price) {
      return res.status(400).json({ message: "Please fill all required fields!" });
    }

    const product = req.body;
    const newProduct = await Product.create(product);
    return res.status(201).json({ message: "New product successfully created", newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    return res.status(200).json({ message: "Products retrieved successfully", products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id format" });
  }
  try {
    if (!req.body.name || !req.body.brand || !req.body.type || !req.body.price) {
      return res.status(400).json({ message: "Please fill all required fields!" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id format" });
  }
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted Successfully", deletedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const aProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id format" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product retrieved successfully ", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
