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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 px-4 py-8">
      
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Candidate Dashboard 👨‍💼
        </h2>
        <p className="text-gray-500 mt-1">
          Manage and track all referred candidates
        </p>
      </div>

      {/* Search + Stats Bar */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search by Job Title or Status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
          />

          {/* Stats */}
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Total: {candidates.length}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Showing: {filtered.length}
            </span>
          </div>
        </div>
      </div>

      {/* Candidate Grid */}
      <div className="max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center bg-white shadow-md rounded-2xl p-12">
            <p className="text-gray-400 text-lg">
              🚫 No candidates found.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CandidateCard
                key={c._id}
                candidate={c}
                refresh={fetchCandidates}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
