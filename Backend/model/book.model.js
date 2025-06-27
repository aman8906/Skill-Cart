

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  title: String,
  category: String,
  price: Number,
  image: String
});

export default mongoose.model("Book", bookSchema);

