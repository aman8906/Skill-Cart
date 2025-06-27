// routes/apply.route.js
import express from "express";
import multer from "multer";
import path from "path";
import Application from "../model/application.model.js";

const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/resumes"); // Folder to store files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});

const upload = multer({ storage: storage });

// POST: /api/apply
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, jobId } = req.body;
    const resumePath = req.file?.path;

    if (!resumePath) return res.status(400).json({ message: "Resume is required." });

    const application = new Application({
      name,
      email,
      jobId,
      resume: resumePath,
    });

    await application.save();
    res.status(201).json({ success: true, message: "Application submitted!" });
  } catch (err) {
    console.error("Apply Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
