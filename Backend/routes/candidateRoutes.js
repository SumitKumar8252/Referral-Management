import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

import {
  createCandidate,
  getCandidates,
  updateStatus,
  deleteCandidate
} from "../controllers/candidateController.js";

const router = express.Router();

router.post("/", auth, upload.single("resume"), createCandidate);
router.get("/", auth, getCandidates);
router.put("/:id/status", auth, updateStatus);
router.delete("/:id", auth, deleteCandidate);

export default router;
