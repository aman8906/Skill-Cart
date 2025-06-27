// models/Application.model.js
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: String,
    email: String,
    resume: String, // Path to uploaded file
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
