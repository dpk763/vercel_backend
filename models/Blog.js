import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: "", // Optional: default value can be an empty string
  }
}, {
  timestamps: true,
});

export const Blog = mongoose.model("Blog", blogSchema);
