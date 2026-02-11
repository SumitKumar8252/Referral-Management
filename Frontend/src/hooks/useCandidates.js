import { useState, useEffect, useCallback } from "react";
import API from "../services/candidateService";

export default function useCandidates() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCandidates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await API.get("/candidates");
      setCandidates(res.data);

    } catch (err) {
      setError("Failed to fetch candidates", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  return {
    candidates,
    loading,
    error,
    fetchCandidates,
  };
}
