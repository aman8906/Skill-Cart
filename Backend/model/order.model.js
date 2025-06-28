import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: "Placed" },
  },
  { timestamps: true } // ✅ Needed for createdAt
);

export default mongoose.model("Order", orderSchema);
