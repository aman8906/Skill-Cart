
// src/pages/Course.jsx
import React, { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import api from "../api";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/book");
        setBooks(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch books:", err);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks =
    filter === "All" ? books : books.filter((item) => item.category === filter);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-6 text-gray-700">
          Discover a wide range of free and premium development courses to
          level up your skills.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Filter Buttons */}
      <div className="mt-12 flex justify-center gap-4">
        {["All", "Free", "Paid"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md ${
              filter === category
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <BookItem key={item.id || item._id} book={item} />
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Course;
