import { Link } from "react-router-dom";
import useMemoryStore from "../context/useMemoryStore";
import useReminderStore from "../context/useReminderStore";
import useAuthStore from "../context/useAuthStore";

export default function PatientDashboard() {
  const memories = useMemoryStore((state) => state.memories);
  const reminders = useReminderStore((state) => state.reminders);
  const toggleReminder = useReminderStore((state) => state.toggleReminder);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="container-fluid">
      <div className="row">

        {/* SIDEBAR */}
        <div className="col-md-2 bg-white border-end min-vh-100 p-3">
          <h5 className="fw-bold text-primary mb-4">
            Dementia Aid
          </h5>

          <ul className="nav flex-column gap-2 fw-bold">
            <li className="nav-item">
              <span className="nav-link active bg-primary text-white rounded-pill">
                Dashboard
              </span>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/memory-board">
                Memory Board
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/reminders">
                Reminders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/medication">
                Medication
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/self-care">
                Self Care
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item mt-4">
              <button
                className="btn btn-outline-danger w-100 fw-bold"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="col-md-10 bg-light p-4">

          {/* WELCOME CARD */}
          <div
            className="rounded-4 p-4 mb-4 text-white fw-bold"
            style={{
              background: "linear-gradient(90deg, #6a9cff, #b9a6ff)",
            }}
          >
            <h6 className="fw-bold">Welcome Back</h6>
            <h3 className="fw-bold mt-1">
              Take your time. Everything is okay.
            </h3>
            <small className="fw-bold">
              One step at a time 💙
            </small>
          </div>

          {/* MEMORY BOARD — FIRST */}
          <h4 className="fw-bold mb-3">
            Memory Board
          </h4>

          <div className="row mb-4">
            {memories.map((m) => (
              <div key={m.id} className="col-md-3 mb-3">
                <div className="card rounded-4 shadow-sm p-3 text-center fw-bold">
                  <img
                    src={m.img}
                    alt={m.label}
                    className="rounded-3 mb-2"
                    height="130"
                    style={{ objectFit: "cover" }}
                  />
                  <div>{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* REMINDERS */}
          <h4 className="fw-bold mb-3">
            Today’s Reminders
          </h4>

          <div className="row">
            {reminders.map((r) => (
              <div key={r.id} className="col-md-4 mb-3">
                <div className="card rounded-4 p-3 shadow-sm d-flex flex-row align-items-center fw-bold">
                  <input
                    type="checkbox"
                    checked={r.done}
                    onChange={() => toggleReminder(r.id)}
                    className="form-check-input me-3"
                    style={{ transform: "scale(1.4)" }}
                  />
                  <div>
                    <div>{r.type}</div>
                    <small className="text-muted fw-bold">
                      {r.time}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
