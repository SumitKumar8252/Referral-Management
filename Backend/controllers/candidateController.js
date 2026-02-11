import Candidate from "../models/Candidate.js";
import validator from "validator";

export const createCandidate = async (req, res) => {
  const { name, email, phone, jobTitle } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!validator.isMobilePhone(phone, "any")) {
    return res.status(400).json({ message: "Invalid phone" });
  }

  const resumeUrl = req.file ? req.file.path : null;

  const candidate = await Candidate.create({
    name,
    email,
    phone,
    jobTitle,
    resumeUrl
  });

  res.json(candidate);
};

export const getCandidates = async (req, res) => {
  const candidates = await Candidate.find().sort({ createdAt: -1 });
  res.json(candidates);
};

export const updateStatus = async (req, res) => {
  const candidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(candidate);
};

export const deleteCandidate = async (req, res) => {
  await Candidate.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
