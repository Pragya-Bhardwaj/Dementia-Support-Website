import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function CaregiverDashboard() {
  useEffect(() => {
    localStorage.setItem("lastActiveDate", Date.now());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white min-vh-100 p-3">
          <h4 className="text-center mb-4">Caregiver Panel</h4>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/caregiver" className="nav-link text-white">
                Dashboard
              </Link>
            </li>

            <li className="nav-item mb-2">
              <Link to="/memory-board" className="nav-link text-white">
                Memory Board
              </Link>
            </li>

            <li className="nav-item mb-2">
              <Link to="/reminders" className="nav-link text-white">
                Reminders Status
              </Link>
            </li>

            <li className="nav-item mb-2">
              <Link to="/profile" className="nav-link text-white">
                Profile
              </Link>
            </li>

            <li className="nav-item mt-4">
              <button className="btn btn-danger w-100">
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <h2 className="mb-4">Welcome, Caregiver</h2>

          <div className="row">
            {/* Memory Board */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm p-4">
                <h5>Memory Board</h5>
                <p className="text-muted">
                  Add or edit photos, notes, and important memories for the patient.
                </p>
                <Link to="/memory-board" className="btn btn-primary">
                  Open Memory Board
                </Link>
              </div>
            </div>

            {/* Reminders Status */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm p-4">
                <h5>Reminders Status</h5>
                <p className="text-muted">
                  View which reminders have been checked by the patient.
                </p>
                <Link to="/reminders" className="btn btn-success">
                  View Reminders
                </Link>
              </div>
            </div>

            {/* Emergency Call */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm p-4 border-danger">
                <h5 className="text-danger">Emergency Call</h5>
                <p className="text-muted">
                  Quickly call ambulance, doctor, or hospital.
                </p>

                <div className="d-flex gap-2">
                  <button className="btn btn-danger">Ambulance</button>
                  <button className="btn btn-warning">Doctor</button>
                  <button className="btn btn-secondary">Hospital</button>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm p-4">
                <h5>Profile Management</h5>
                <p className="text-muted">
                  Update patient and caregiver information.
                </p>
                <Link to="/profile" className="btn btn-dark">
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
