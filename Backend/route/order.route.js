
import express from "express";
import Order from "../model/order.model.js";
const router = express.Router();

// ✅ POST: Place an order (Free or Paid)
router.post("/", async (req, res) => {
  try {
    const { userId, name, price, status } = req.body;

    if (!userId || !name || price === undefined) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newOrder = new Order({
      userId,
      name,
      price,
      status: status || "Placed",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("❌ Order placement error:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// ✅ GET: Orders by user
router.get("/", async (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ message: "Missing userId" });

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error("❌ Fetch order error:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;

