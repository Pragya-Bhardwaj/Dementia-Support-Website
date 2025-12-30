import { useNavigate } from "react-router-dom";

export default function SignupCaregiver() {
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("caregiverSignedUp", "true");
    navigate("/login-caregiver");
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Caregiver Sign Up</h3>
      <button className="btn btn-primary mt-3" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}
