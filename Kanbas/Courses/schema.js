import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  startDate: { type: Date},
  endDate: { type: Date},
  department: { type: String },
  credits: { type: Number},
  description: { type: String},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String },
}, { collection: "courses" });

export default courseSchema;