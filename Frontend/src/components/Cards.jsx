import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">₹{item.price}</div>
          <Link to={`/buy-now/${item.id}`}>
  <button className="mt-3 bg-white border px-4 py-1 rounded-full hover:bg-pink-100">
    Buy Now
  </button>
</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
