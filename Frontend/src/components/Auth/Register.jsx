import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    //  Check all fields filled
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("All fields are required");
    }

    //  Password match validation
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      await register(form.name, form.email, form.password);

      // Redirect to login after successful registration
      navigate("/login");

    } catch (err) {
      setError("Registration failed. Try again.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account 🚀
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join the Candidate Referral System
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg outline-none transition"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg outline-none transition"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg outline-none transition"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Back to Login */}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full mt-3 border border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-50 transition duration-300"
          >
            Back to Login
          </button>

        </form>
      </div>
    </div>
  );
}
