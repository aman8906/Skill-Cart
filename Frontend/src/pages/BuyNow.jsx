

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const BuyNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const item = res.data.find((c) => c.id === parseInt(id));
        setCourse(item);
      } catch (err) {
        toast.error("❌ Failed to load course.");
      }
    };
    fetchCourse();
  }, [id]);

  const handlePurchase = async () => {
    if (!course || !user?._id) {
      toast.error("Login required to place order.");
      return;
    }

    try {
      await axios.post("http://localhost:4001/api/order", {
        courseId: course.id,
        name: course.name,
        price: course.price,
        userId: user._id,
      });

      toast.success("✅ Order placed successfully!");
      navigate("/my-orders");
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err);
      toast.error("❌ Failed to place order.");
    }
  };

  if (!course) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={course.image} alt={course.name} className="rounded" />
      <h2 className="text-2xl font-bold mt-4">{course.name}</h2>
      <p>{course.title}</p>
      <p className="font-semibold mt-2">Price: ₹{course.price}</p>
      <button
        onClick={handlePurchase}
        className="mt-4 bg-pink-600 text-white px-4 py-2 rounded"
      >
        Confirm Purchase
      </button>
    </div>
  );
};

export default BuyNow;

