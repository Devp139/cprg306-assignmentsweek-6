"use client"; // ✅ Required for client-side interactivity

import { useState } from "react";

export default function NewItem() {
  // ✅ Step 3: Initialize state
  const [quantity, setQuantity] = useState(1);

  // ✅ Step 4: Functions
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // ✅ Step 5 + 6: Render & Style
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-xl shadow-md w-fit">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`px-4 py-2 rounded-lg text-white ${
          quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        }`}
      >
        -
      </button>

      {/* Current Quantity */}
      <span className="text-xl font-bold">{quantity}</span>

      {/* Increment Button */}
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`px-4 py-2 rounded-lg text-white ${
          quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        +
      </button>
    </div>
  );
}
