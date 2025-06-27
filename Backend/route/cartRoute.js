// routes/cartRoutes.js
import express from "express";
import Cart from "../model/cartModel.js";

const router = express.Router();

// GET User Cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart || { items: [] });
});

// ADD or UPDATE item
router.post("/add", async (req, res) => {
  const { userId, book } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [{ ...book }] });
  } else {
    const index = cart.items.findIndex((item) => item.bookId === book.bookId);
    if (index >= 0) {
      cart.items[index].quantity += 1;
    } else {
      cart.items.push(book);
    }
  }

  await cart.save();
  res.json(cart);
});

// REMOVE item
router.delete("/:userId/:bookId", async (req, res) => {
  const { userId, bookId } = req.params;
  const cart = await Cart.findOne({ userId });

  cart.items = cart.items.filter((item) => item.bookId != bookId);
  await cart.save();
  res.json(cart);
});

// UPDATE quantity
router.put("/updateQty", async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  const cart = await Cart.findOne({ userId });
  const item = cart.items.find((item) => item.bookId == bookId);
  if (item) item.quantity = quantity;

  await cart.save();
  res.json(cart);
});

export default router;
