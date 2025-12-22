import useAuthStore from "../context/useAuthStore";

export default function ReminderCard({ reminder, onToggle }) {
  const userType = useAuthStore((state) => state.userType);

  const icons = {
    Medicine: "💊",
    Meals: "🍽",
    Appointment: "📅",
    Hygiene: "🚿",
  };

  return (
    <div className="card p-3 shadow-sm mb-3 d-flex flex-row align-items-center justify-content-between">
      <div>
        <h5 className="mb-1">
          {icons[reminder.type] || "⏰"} {reminder.type}
        </h5>
        <p className="mb-0 text-muted">
          Time: {reminder.time} • {reminder.frequency}
        </p>
      </div>

      {/* Patient checkbox */}
      {userType === "patient" && (
        <input
          type="checkbox"
          checked={reminder.done}
          onChange={() => onToggle(reminder.id)}
          className="form-check-input"
          aria-label="Mark reminder as done"
        />
      )}

      {/* Caregiver status */}
      {userType === "caregiver" && (
        <span
          className={`badge ${
            reminder.done ? "bg-success" : "bg-warning text-dark"
          }`}
        >
          {reminder.done ? "Checked ✔" : "Pending"}
        </span>
      )}
    </div>
  );
}
