import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function LoginCaregiver() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "caregiver");
    localStorage.setItem("lastActiveDate", Date.now());
    navigate("/caregiver-dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-link" onClick={() => navigate("/auth")}>
          ← Back to role selection
        </button>

        <h2 className="form-title">Caregiver Login</h2>

        <label>Username</label>
        <div className="input-box">
          <span>👤</span>
          <input placeholder="Enter your username" />
        </div>

        <label>Password</label>
        <div className="input-box">
          <span>🔒</span>
          <input type="password" placeholder="Enter your password" />
        </div>

        <p className="forgot">Forgot password?</p>

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
