import express from "express";
import Order from "../models/order.model.js"; // ✅ Ensure path is correct: 'models', not 'model'

const router = express.Router();

// ✅ POST: Place an order (Free or Paid)
router.post("/", async (req, res) => {
  try {
    console.log("📦 Incoming Order Payload:", req.body);

    const { userId, name, price, status } = req.body;

    // ✅ Validate required fields
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
    console.log("✅ Order saved:", newOrder._id);
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("❌ Order placement error:", err.message);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// ✅ GET: Orders by user ID
router.get("/", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "Missing userId" });
  }

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    console.log(`📦 Fetched ${orders.length} orders for userId: ${userId}`);
    res.status(200).json(orders);
  } catch (err) {
    console.error("❌ Fetch order error:", err.message);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;
