import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    description: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    image: {
      type: String,
      default: "",
    },
    specs: {
      type: Object,
      default: {},
    },
    warranty: {
      type: String,
      default: "1 year",
    },
    modelNumber: {
      type: String,
      default: "",
    },
    releaseDate: {
      type: Date,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
