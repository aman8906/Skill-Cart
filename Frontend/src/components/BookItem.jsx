// src/components/BookItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white flex flex-col items-center">
      <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-4 text-lg font-semibold">{book.name}</h3>
      <p className="text-gray-600 mt-1">₹{book.price}</p>
      <Link to={`/buy/${book.id}`} className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default BookItem;
