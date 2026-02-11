import { useState } from "react";
import API from "../../services/candidateService";

export default function CandidateCard({ candidate, refresh }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateStatus = async (status) => {
    try {
      setLoading(true);
      setError("");

      await API.put(`/candidates/${candidate._id}/status`, { status });

      refresh();
    } catch (err) {
      setError("Failed to update status", err);
    } finally {
      setLoading(false);
    }
  };

  const statusColor = {
    Pending: "bg-yellow-200 text-yellow-800",
    Reviewed: "bg-blue-200 text-blue-800",
    Hired: "bg-green-200 text-green-800"
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-semibold">{candidate.name}</h3>

      <p className="text-gray-600 mb-1">
        <span className="font-medium">Job:</span> {candidate.jobTitle}
      </p>

      <p className="mb-2">
        <span className="font-medium">Status:</span>{" "}
        <span
          className={`px-2 py-1 rounded text-sm ${statusColor[candidate.status]}`}
        >
          {candidate.status}
        </span>
      </p>

      <select
        value={candidate.status}
        onChange={(e) => updateStatus(e.target.value)}
        disabled={loading}
        className="border p-2 rounded"
      >
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>

      {loading && (
        <p className="text-sm text-gray-500 mt-2">Updating...</p>
      )}

      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}
