// components/OrderTracking.jsx
import React from "react";

const steps = ["Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

const OrderTracking = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 w-full">
      {steps.map((step, index) => (
        <div className="flex-1 flex flex-col items-center relative" key={step}>
          {/* Connector line */}
          {index !== 0 && (
            <div
              className={`absolute left-0 top-3 h-1 w-full z-0 ${
                index <= currentIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          )}

          {/* Step circle */}
          <div
            className={`z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              index <= currentIndex ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>

          {/* Label */}
          <div className="mt-2 text-sm font-medium text-center">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;
