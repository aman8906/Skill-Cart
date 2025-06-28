import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from './route/book.route.js';
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contactRoute.js";
import orderRoute from "./route/order.route.js";
import applyRoute from "./route/apply.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// ✅ CORS for both LOCAL + LIVE
app.use(cors({
  origin: [
    "http://localhost:5173", // local frontend
    "https://skill-cart-frontend.vercel.app" // live frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/api/contact", contactRoute);
app.use("/api/order", orderRoute);
app.use("/uploads", express.static("uploads"));
app.use("/api/apply", applyRoute);

// ✅ Root check
app.get("/", (req, res) => {
  res.send("✅ SkillCart Backend is Running");
});

// ✅ Connect to MongoDB Atlas and start the server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });



