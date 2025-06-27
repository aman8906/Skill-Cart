// src/pages/ApplyJob.jsx
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams(); // Job ID from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("coverLetter", formData.coverLetter);
      data.append("resume", formData.resume);
      data.append("jobId", id);

      await axios.post("http://localhost:4001/api/apply", data);
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting application", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Apply for This Job</h2>

      {success ? (
        <div className="text-green-600 font-semibold text-center">
          ✅ Application submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter / Message"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyJob;
