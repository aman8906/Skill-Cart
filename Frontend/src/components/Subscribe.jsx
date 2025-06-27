import React, { useState } from "react";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4001/subscribe", { email });
      alert("✅ Subscription successful!");
      setEmail("");
    } catch (error) {
      alert("❌ Subscription failed. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center mt-20 px-4">
      <h2 className="text-3xl font-bold mb-2">
        Hello, welcome to <span className="text-pink-500">SkillCart!</span>
      </h2>
      <p className="mb-6 text-gray-600">
        Upgrade your knowledge. Subscribe now and get updates!
      </p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
