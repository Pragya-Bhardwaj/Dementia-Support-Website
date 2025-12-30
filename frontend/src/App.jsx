import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { checkAuthState } from "./utils/authCheck";

import MemoryBoard from "./pages/MemoryBoard";
import Reminders from "./pages/Reminders";
import Medication from "./pages/Medication";
import SelfCare from "./pages/SelfCare";
import Profile from "./pages/Profile";

import AuthHome from "./pages/AuthHome";
import LoginCaregiver from "./pages/LoginCaregiver";
import LoginPatient from "./pages/LoginPatient";
import SignupCaregiver from "./pages/SignupCaregiver";
import SignupPatient from "./pages/SignupPatient";

import CaregiverDashboard from "./pages/CaregiverDashboard";
import PatientDashboard from "./pages/PatientDashboard";


function App() {
  const auth = checkAuthState();

  return (
    <BrowserRouter>
      <Routes>

        {/* ENTRY POINT */}
        <Route
          path="/"
          element={
            auth.state === "LOGGED_IN" ? (
              auth.role === "caregiver" ? (
                <Navigate to="/caregiver-dashboard" replace />
              ) : (
                <Navigate to="/patient-dashboard" replace />
              )
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />

        {/* AUTH PAGES */}
        <Route path="/auth" element={<AuthHome />} />
        <Route path="/login-caregiver" element={<LoginCaregiver />} />
        <Route path="/login-patient" element={<LoginPatient />} />
        <Route path="/signup-caregiver" element={<SignupCaregiver />} />
        <Route path="/signup-patient" element={<SignupPatient />} />

        {/* DASHBOARDS */}
        <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />

         {/* PATIENT PAGES */}
        <Route path="/memory-board" element={<MemoryBoard />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/profile" element={<Profile />} />

        {/* FALLBACK — VERY IMPORTANT */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
