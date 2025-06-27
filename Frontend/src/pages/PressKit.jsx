// src/pages/PressKit.jsx
import React from "react";

const PressKit = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 Press Kit</h1>

      {/* About the Company */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p className="text-gray-700">
          We are a leading platform offering online courses, digital solutions, and career opportunities for aspiring developers. Our mission is to empower learners with practical skills and help companies discover tech talent.
        </p>
      </section>

      {/* Brand Assets */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Brand Assets</h2>
        <p className="text-gray-700 mb-2">You may use the following assets for editorial or media purposes:</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-medium">Company Logo (PNG)</p>
            <a
              href="/assets/logo.png"
              download
              className="text-blue-600 underline"
            >
              Download Logo
            </a>
          </div>
          <div>
            <p className="font-medium">Brand Guide (PDF)</p>
            <a
              href="/assets/brand-guide.pdf"
              download
              className="text-blue-600 underline"
            >
              Download Brand Guide
            </a>
          </div>
        </div>
      </section>

      {/* Contact for Press */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Media Contact</h2>
        <p className="text-gray-700">For press inquiries, please contact:</p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:press@yourcompany.com" className="text-blue-600 underline">press@yourcompany.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +91-9876543210
        </p>
      </section>
    </div>
  );
};

export default PressKit;
