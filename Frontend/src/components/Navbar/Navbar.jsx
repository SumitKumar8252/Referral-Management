import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      
      <h1 className="text-lg font-bold text-blue-600">
        Candidate Referral
      </h1>

      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600"
        >
          Dashboard
        </Link>

        <Link
          to="/refer"
          className="text-gray-700 hover:text-blue-600"
        >
          Refer
        </Link>

        <Link
          to="/metrics"
          className="text-gray-700 hover:text-blue-600"
        >
          Metrics
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
