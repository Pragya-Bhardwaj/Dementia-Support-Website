import { Link } from "react-router-dom";

export default function AuthHome() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold mb-4">Welcome</h2>

      <div className="card p-4 shadow rounded-4 mx-auto" style={{ maxWidth: 400 }}>
        <Link to="/login-caregiver" className="btn btn-primary w-100 mb-2">
          Caregiver Login
        </Link>

        <Link to="/login-patient" className="btn btn-success w-100 mb-2">
          Patient Login
        </Link>

        <hr />

        <Link to="/signup-caregiver" className="btn btn-outline-primary w-100 mb-2">
          Caregiver Sign Up
        </Link>

        <Link to="/signup-patient" className="btn btn-outline-success w-100">
          Patient Sign Up
        </Link>
      </div>
    </div>
  );
}
