// src/pages/Jobs.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // 🔸 Replace this with API call later
    setJobs([
      {
        id: 1,
        title: "Frontend Developer (React)",
        company: "TechNova Pvt Ltd",
        location: "Remote / Bangalore",
        salary: "₹6 - ₹10 LPA",
        type: "Full-Time",
        posted: "2 days ago",
        description:
          "We are looking for a skilled frontend developer with experience in React, CSS, and REST APIs. You will work with a dynamic team building modern web interfaces.",
      },
      {
        id: 2,
        title: "Backend Developer (Node.js)",
        company: "CodeWave Solutions",
        location: "Hyderabad",
        salary: "₹8 - ₹12 LPA",
        type: "Full-Time",
        posted: "5 days ago",
        description:
          "Join our backend team to build scalable APIs using Node.js, Express, and MongoDB. Good understanding of authentication and database design is a plus.",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "PixelCraft Studio",
        location: "Delhi NCR",
        salary: "₹5 - ₹8 LPA",
        type: "Contract (6 months)",
        posted: "1 week ago",
        description:
          "We're hiring a creative UI/UX designer who can convert product requirements into elegant and intuitive designs using Figma or Adobe XD.",
      },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">💼 Explore Job Opportunities</h1>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No job listings available right now.</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-pink-700">{job.title}</h2>
                <span className="text-sm text-gray-500">{job.posted}</span>
              </div>

              <p className="text-gray-800 font-medium">{job.company}</p>
              <p className="text-gray-600 mb-1">📍 {job.location}</p>
              <p className="text-gray-600">💰 {job.salary} | 📄 {job.type}</p>

              <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                {job.description}
              </p>

              <Link
                to={`/jobs/${job.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
