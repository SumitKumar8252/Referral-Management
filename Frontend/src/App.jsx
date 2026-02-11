import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ReferralForm from "./components/ReferralForm/ReferralForm";
import MetricsDashboard from "./components/MetricsDashboard/MetricsDashboard";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/refer" element={
          <ProtectedRoute>
            <ReferralForm />
          </ProtectedRoute>
        } />
        <Route path="/metrics" element={
          <ProtectedRoute>
            <MetricsDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
