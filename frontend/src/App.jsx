import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import MemoryBoard from "./pages/MemoryBoard";
import Reminders from "./pages/Reminders";
import SelfCare from "./pages/SelfCare";
import Profile from "./pages/Profile";
import MapLocation from "./pages/MapLocation";
import Medication from "./pages/Medication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/caregiver" element={<CaregiverDashboard />} />
        <Route path="/memory-board" element={<MemoryBoard />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<MapLocation />} />
        <Route path="/medication" element={<Medication />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
