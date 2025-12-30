import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function AuthHome() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card text-center">
        <div className="logo-circle">🧠</div>

        <h1 className="title">Dementia Aid</h1>
        <p className="subtitle">We're here to help you remember</p>

        <h3 className="section-title">Choose Your Role</h3>

        <div
          className="role-box"
          onClick={() => navigate("/login-patient")}
        >
          <span className="role-icon">💙</span>
          <div>
            <strong>Patient Login</strong>
            <p>Access your memory board and reminders</p>
          </div>
        </div>

        <div
          className="role-box"
          onClick={() => navigate("/login-caregiver")}
        >
          <span className="role-icon">👤</span>
          <div>
            <strong>Caregiver Login</strong>
            <p>Manage care and support your loved one</p>
          </div>
        </div>
      </div>
    </div>
  );
}
