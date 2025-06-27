// src/pages/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id}>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
