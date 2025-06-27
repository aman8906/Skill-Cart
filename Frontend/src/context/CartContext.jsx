// src/context/CartContext.jsx
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart
  const addToCart = (book) => {
    const exist = cartItems.find((item) => item._id === book._id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  // Remove from Cart
  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter((item) => item._id !== bookId));
  };

  // Update Quantity
  const updateQuantity = (bookId, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === bookId ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
