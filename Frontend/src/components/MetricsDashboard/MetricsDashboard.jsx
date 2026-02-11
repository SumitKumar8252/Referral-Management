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

  const cards = [
    {
      title: "Total Candidates",
      value: metrics.total,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Pending",
      value: metrics.Pending,
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      title: "Reviewed",
      value: metrics.Reviewed,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Hired",
      value: metrics.Hired,
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 px-4 py-10">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          📊 Metrics Dashboard
        </h2>
        <p className="text-gray-500 mt-2">
          Overview of candidate referral performance
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.gradient} text-white rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105`}
          >
            <h3 className="text-lg font-semibold opacity-90">
              {card.title}
            </h3>
            <p className="text-4xl font-bold mt-4">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Optional Additional Section */}
      <div className="max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          📈 Quick Insights
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Total referrals: <strong>{metrics.total}</strong></li>
          <li>• Hiring success rate:{" "}
            <strong>
              {metrics.total > 0
                ? ((metrics.Hired / metrics.total) * 100).toFixed(1)
                : 0}
              %
            </strong>
          </li>
          <li>• Review rate:{" "}
            <strong>
              {metrics.total > 0
                ? ((metrics.Reviewed / metrics.total) * 100).toFixed(1)
                : 0}
              %
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
