import { useState, useEffect } from "react";
import API from "../services/candidateService";

export default function useCandidates() {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    const res = await API.get("/candidates");
    setCandidates(res.data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return { candidates, fetchCandidates };
}
