import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Hired"],
    default: "Pending"
  },
  resumeUrl: String
}, { timestamps: true });

export default mongoose.model("Candidate", candidateSchema);
