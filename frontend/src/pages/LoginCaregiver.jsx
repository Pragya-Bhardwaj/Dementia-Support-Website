import { useNavigate } from "react-router-dom";

export default function LoginCaregiver() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "caregiver");
    localStorage.setItem("lastActiveDate", Date.now());
    navigate("/caregiver-dashboard");
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Caregiver Login</h3>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
