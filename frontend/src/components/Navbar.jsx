import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-3 shadow-sm">
      <span className="navbar-brand mb-0 h1">Dementia Aid</span>

      <div>
        <Link to="/memory-board" className="btn btn-outline-primary me-2">
          Memory Board
        </Link>
        <Link to="/reminders" className="btn btn-outline-success me-2">
          Reminders
        </Link>
        <Link to="/self-care" className="btn btn-outline-info">
          Self Care
        </Link>
      </div>
    </nav>
  );
}
