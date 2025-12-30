import { useNavigate } from "react-router-dom";

export default function LoginPatient() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "patient");
    localStorage.setItem("lastActiveDate", Date.now());
    navigate("/patient");
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Patient Login</h3>
      <button className="btn btn-success mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
