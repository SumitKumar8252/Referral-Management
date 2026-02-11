import { useState } from "react";
import API from "../../services/candidateService";

export default function ReferralForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    resume: null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0];

      if (file && file.type !== "application/pdf") {
        setError("Only PDF files are allowed.");
        return;
      }

      setForm({ ...form, resume: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const data = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) data.append(key, form[key]);
      });

      await API.post("/candidates", data);

      setSuccess("🎉 Candidate Referred Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        resume: null
      });

    } catch (err) {
      setError("Failed to submit candidate.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4 py-10">
      
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-lg p-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Refer a Candidate 🚀
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Help us find great talent
        </p>

        {/* Alerts */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 text-sm p-3 rounded-lg mb-4 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={form.jobTitle}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
          />

          {/* File Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 transition">
            <label className="cursor-pointer text-gray-600">
              📄 Upload Resume (PDF only)
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {form.resume && (
              <p className="text-sm text-blue-600 mt-2">
                {form.resume.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit Referral"}
          </button>

        </form>
      </div>
    </div>
  );
}
