import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      {user && (
        <>
          <Link to="/">Dashboard </Link>
          <Link to="/refer"> Refer </Link>
          <Link to="/metrics"> Metrics </Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
