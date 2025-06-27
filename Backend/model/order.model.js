

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  courseId: Number,
  name: String,
  price: Number,
  userId: String,
  status: {
    type: String,
    default: "Placed",
  },
}, { timestamps: true }); // ✅ Adds createdAt & updatedAt

const Order = mongoose.model("Order", orderSchema);
export default Order;


