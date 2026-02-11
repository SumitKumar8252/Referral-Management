import useCandidates from "../../hooks/useCandidates";

export default function MetricsDashboard() {
  const { candidates } = useCandidates();

  const metrics = candidates.reduce(
    (acc, curr) => {
      acc.total++;
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    },
    { total: 0, Pending: 0, Reviewed: 0, Hired: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Metrics Dashboard</h2>

      <div className="grid md:grid-cols-4 gap-4">
        
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total</h3>
          <p className="text-2xl font-bold">{metrics.total}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-2xl font-bold">{metrics.Pending}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Reviewed</h3>
          <p className="text-2xl font-bold">{metrics.Reviewed}</p>
        </div>

        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Hired</h3>
          <p className="text-2xl font-bold">{metrics.Hired}</p>
        </div>

      </div>
    </div>
  );
}
