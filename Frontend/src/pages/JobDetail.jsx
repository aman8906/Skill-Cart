// src/pages/JobDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // 🔸 Replace this with actual API call later
    const fakeJobs = [
      {
        id: "1",
        title: "Frontend Developer (React)",
        company: "TechNova Pvt Ltd",
        location: "Remote / Bangalore",
        salary: "₹6 - ₹10 LPA",
        type: "Full-Time",
        posted: "2 days ago",
        description:
          "We are looking for a skilled frontend developer with experience in React, CSS, and REST APIs. You will work with a dynamic team building modern web interfaces.",
        responsibilities: [
          "Develop responsive web pages using React.",
          "Collaborate with backend and design teams.",
          "Write clean and reusable code.",
        ],
        qualifications: [
          "Strong knowledge of JavaScript and React.",
          "Experience with REST APIs and Git.",
          "Good understanding of HTML/CSS.",
        ],
        applyLink: "mailto:hr@technova.com?subject=Application for Frontend Developer",
      },
      // Add more jobs as needed
    ];

    const foundJob = fakeJobs.find((j) => j.id === id);
    setJob(foundJob);
  }, [id]);

  if (!job) return <div className="text-center p-6">Loading job details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/jobs"
        className="inline-block mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Back to Jobs
      </Link>

      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-pink-700 mb-2">{job.title}</h1>
        <p className="text-lg font-semibold text-gray-700">{job.company}</p>
        <p className="text-gray-600 mb-2">📍 {job.location} | 💰 {job.salary} | 📄 {job.type}</p>
        <p className="text-sm text-gray-500 mb-4">Posted: {job.posted}</p>

        <h2 className="text-lg font-semibold mt-4 mb-1">Job Description:</h2>
        <p className="text-gray-700 mb-4">{job.description}</p>

        <h2 className="text-lg font-semibold mb-1">Responsibilities:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mb-1">Qualifications:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {job.qualifications.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>

        <Link to={`/apply/${job._id}`}>
  <button className="bg-pink-600 text-white px-4 py-2 rounded mt-4">
    Apply Now
  </button>
</Link>
      </div>
    </div>
  );
};

export default JobDetail;
