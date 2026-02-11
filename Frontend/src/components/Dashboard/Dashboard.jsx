import { useState } from "react";
import useCandidates from "../../hooks/useCandidates";
import CandidateCard from "../CandidateCard/CandidateCard";

export default function Dashboard() {
  const { candidates, fetchCandidates } = useCandidates();
  const [search, setSearch] = useState("");

  const filtered = candidates.filter((c) => {
    const job = c.jobTitle?.toLowerCase() || "";
    const status = c.status?.toLowerCase() || "";
    const searchText = search.toLowerCase();

    return job.includes(searchText) || status.includes(searchText);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Job Title or Status..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 border p-2 rounded mb-6"
      />

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-gray-500">No candidates found.</p>
      )}

      {/* Candidate List */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((c) => (
          <CandidateCard
            key={c._id}
            candidate={c}
            refresh={fetchCandidates}
          />
        ))}
      </div>
    </div>
  );
}
