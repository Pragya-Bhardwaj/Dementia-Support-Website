import Sidebar from "../components/Sidebar";
import useReminderStore from "../context/useReminderStore";
import EmergencyCallButton from "../components/EmergencyCallButton";
import { useState } from "react";

export default function CaregiverDashboard() {
  const reminders = useReminderStore((state) => state.reminders);
  const addReminder = useReminderStore((state) => state.addReminder);

  const [form, setForm] = useState({
    type: "",
    time: "",
    frequency: "Daily",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder({
      id: Date.now(),
      ...form,
      done: false,
    });
    setForm({ type: "", time: "", frequency: "Daily" });
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container" style={{ marginLeft: "240px" }}>
        <h2 className="mt-4 mb-4">Caregiver Dashboard</h2>

        {/* Patient Reminder Status */}
        <div className="card p-3 shadow-sm mb-4">
          <h4>Patient Reminder Status</h4>

          {reminders.map((r) => (
            <p key={r.id}>
              <strong>{r.type}</strong> at {r.time} →{" "}
              {r.done ? (
                <span className="text-success">Checked ✔</span>
              ) : (
                <span className="text-danger">Pending ⏳</span>
              )}
            </p>
          ))}
        </div>

        {/* Add Reminder */}
        <div className="card p-4 shadow-sm mb-4">
          <h4 className="mb-3">Add Reminder</h4>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              placeholder="Type (Medicine / Meal)"
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              required
            />

            <input
              type="time"
              className="form-control mb-2"
              value={form.time}
              onChange={(e) =>
                setForm({ ...form, time: e.target.value })
              }
              required
            />

            <select
              className="form-control mb-3"
              value={form.frequency}
              onChange={(e) =>
                setForm({ ...form, frequency: e.target.value })
              }
            >
              <option>Daily</option>
              <option>Weekly</option>
            </select>

            <button className="btn btn-primary w-100">
              Save Reminder
            </button>
          </form>
        </div>

        {/* Emergency Caller */}
        <div className="card p-4 shadow-sm mb-4">
          <h4>Emergency Caller</h4>
          <EmergencyCallButton label="Call Ambulance" />
          <EmergencyCallButton label="Call Doctor" />
          <EmergencyCallButton label="Call Hospital" />
        </div>

        {/* Simulated Live Location */}
        <div className="card p-4 shadow-sm mb-5">
          <h4>Live Location (Simulated)</h4>
          <img
            src="https://via.placeholder.com/400x200?text=Map+Placeholder"
            alt="Simulated map"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
