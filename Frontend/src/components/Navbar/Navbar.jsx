import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  const linkStyle = (path) =>
    `px-3 py-2 rounded-lg transition duration-200 ${
      location.pathname === path
        ? "bg-blue-100 text-blue-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
        >
          🚀 Candidate Referral
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className={linkStyle("/")}>
            Dashboard
          </Link>
          <Link to="/refer" className={linkStyle("/refer")}>
            Refer
          </Link>
          <Link to="/metrics" className={linkStyle("/metrics")}>
            Metrics
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <Link
            to="/"
            className={linkStyle("/")}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/refer"
            className={linkStyle("/refer")}
            onClick={() => setMenuOpen(false)}
          >
            Refer
          </Link>
          <Link
            to="/metrics"
            className={linkStyle("/metrics")}
            onClick={() => setMenuOpen(false)}
          >
            Metrics
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
