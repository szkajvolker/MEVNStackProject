import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { user, products, total } = req.body;

    const order = new Order({
      user,
      products,
      total,
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
