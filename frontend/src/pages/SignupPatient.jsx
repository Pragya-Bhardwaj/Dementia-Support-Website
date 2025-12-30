import { useNavigate } from "react-router-dom";

export default function SignupPatient() {
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("patientSignedUp", "true");
    navigate("/login-patient");
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Patient Sign Up</h3>
      <button className="btn btn-success mt-3" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}
