import useCandidates from "../../hooks/useCandidates";

export default function MetricsDashboard() {
  const { candidates } = useCandidates();

  const total = candidates.length;
  const pending = candidates.filter(c=>c.status==="Pending").length;
  const reviewed = candidates.filter(c=>c.status==="Reviewed").length;
  const hired = candidates.filter(c=>c.status==="Hired").length;

  return (
    <div>
      <h2>Metrics</h2>
      <p>Total: {total}</p>
      <p>Pending: {pending}</p>
      <p>Reviewed: {reviewed}</p>
      <p>Hired: {hired}</p>
    </div>
  );
}
