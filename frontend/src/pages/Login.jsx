import { useNavigate } from "react-router-dom";
import useAuthStore from "../context/useAuthStore";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (type) => {
    login(type);
    navigate(type === "patient" ? "/patient" : "/caregiver");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Dementia Aid</h1>

      <button
        className="btn btn-primary btn-lg w-50 mb-3"
        onClick={() => handleLogin("patient")}
      >
        Patient Login
      </button>

      <button
        className="btn btn-success btn-lg w-50"
        onClick={() => handleLogin("caregiver")}
      >
        Caregiver Login
      </button>
    </div>
  );
}
