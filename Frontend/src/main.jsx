import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider"; // ✅ default export

import CartProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
