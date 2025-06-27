

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import api from "../api";
import OrderTracking from "../components/OrderTracking";
import Navbar from "../components/Navbar";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await api.get(`/api/order?userId=${user._id}`);
        setOrders(res.data);
      } catch (err) {
        console.error("❌ Error loading orders:", err);
      }
    };

    if (user?._id) getOrders();
  }, [user]);

  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧾 My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-red-500">No orders found.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order) => (
            <li key={order._id} className="p-4 border rounded shadow bg-white">
              <h3 className="text-lg font-semibold">{order.name}</h3>
              <p>Price: ₹{order.price}</p>
              <p className="text-sm text-gray-500">
                Ordered on: {new Date(order.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-blue-600">
                  {order.status || "Placed"}
                </span>
              </p>
              <OrderTracking currentStatus={order.status || "Placed"} />
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default MyOrders;

