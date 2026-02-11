import API from "../../services/candidateService";

export default function CandidateCard({ candidate, refresh }) {

  const updateStatus = async (status) => {
    await API.put(`/candidates/${candidate._id}/status`, { status });
    refresh();
  };

  return (
    <div style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
      <h3>{candidate.name}</h3>
      <p>Job: {candidate.jobTitle}</p>
      <p>Status: {candidate.status}</p>

      <select value={candidate.status}
        onChange={(e)=>updateStatus(e.target.value)}>
        <option>Pending</option>
        <option>Reviewed</option>
        <option>Hired</option>
      </select>
    </div>
  );
}
