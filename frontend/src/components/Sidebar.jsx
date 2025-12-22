import { Link } from "react-router-dom";
import {
  FaUser,
  FaBell,
  FaBrain,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      className="bg-light p-3 shadow"
      style={{
        width: "220px",
        height: "100vh",
        position: "fixed",
      }}
    >
      <h4 className="mb-4">Caregiver</h4>

      <ul className="nav flex-column gap-2">
        <li>
          <Link className="nav-link" to="/profile">
            <FaUser /> Profile
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/reminders">
            <FaBell /> Reminders
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/memory-board">
            <FaBrain /> Memory Board
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/map">
            <FaMapMarkedAlt /> Live Location
          </Link>
        </li>
      </ul>
    </div>
  );
}
