

import express from "express";
import { getBook } from "../controller/book.controller.js"; // dynamic controller from DB
const router = express.Router();

// Use MongoDB to get books
router.get("/", getBook);

export default router;

