import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

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
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
