// components/OrderTracking.jsx
import React from "react";

const steps = ["Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

const OrderTracking = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="w-full px-2 sm:px-4 mt-4">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 flex flex-col items-center text-center relative">
            {/* Connecting Line */}
            {index !== 0 && (
              <div
                className={`absolute top-4 -left-1 w-full h-1 z-0 ${
                  index <= currentIndex ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}

            {/* Step Circle */}
            <div
              className={`z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index <= currentIndex ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>

            {/* Step Label */}
            <span className="mt-2 text-xs sm:text-sm font-medium">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;
