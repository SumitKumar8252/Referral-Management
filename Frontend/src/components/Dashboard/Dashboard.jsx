import { useState } from "react";
import useCandidates from "../../hooks/useCandidates";
import CandidateCard from "../CandidateCard/CandidateCard";

export default function Dashboard() {
  const { candidates, fetchCandidates } = useCandidates();
  const [search, setSearch] = useState("");

  const filtered = candidates.filter(
    (c) =>
      c.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      c.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        placeholder="Search by Job or Status"
        onChange={(e)=>setSearch(e.target.value)}
      />
      {filtered.map((c)=>(
        <CandidateCard key={c._id} candidate={c} refresh={fetchCandidates}/>
      ))}
    </div>
  );
}
