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
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <span className="navbar-brand fw-bold fs-4 text-primary">
        Dementia Aid
      </span>

      <div className="ms-auto d-flex gap-3">
        <Link className="nav-link fs-5" to="/memory-board">Memory</Link>
        <Link className="nav-link fs-5" to="/reminders">Reminders</Link>
        <Link className="nav-link fs-5" to="/medication">Medication</Link>
        <Link className="nav-link fs-5" to="/self-care">Self Care</Link>
        <Link className="nav-link fs-5" to="/profile">Profile</Link>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
