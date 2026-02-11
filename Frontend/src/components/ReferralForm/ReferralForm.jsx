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

      setSuccess("Candidate Referred Successfully!");

      // Reset form
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Refer Candidate
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        {success && (
          <p className="text-green-500 text-sm mb-2">{success}</p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Candidate Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          className="w-full mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
