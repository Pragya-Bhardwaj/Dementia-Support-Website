import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../context/useAuthStore";

export default function PatientNavbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3">
      <span className="navbar-brand fw-bold fs-4 text-primary">
        Dementia Aid
      </span>

      <div className="d-flex gap-3">
        <Link className="btn btn-outline-primary" to="/memory-board">
          Memory
        </Link>

        <Link className="btn btn-outline-success" to="/reminders">
          Reminders
        </Link>

        <Link className="btn btn-outline-warning" to="/medication">
          Medication
        </Link>

        <Link className="btn btn-outline-info" to="/self-care">
          Self Care
        </Link>

        <Link className="btn btn-outline-dark" to="/profile">
          Profile
        </Link>

        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
