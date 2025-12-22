import useReminderStore from "../context/useReminderStore";
import ReminderCard from "../components/ReminderCard";
import useAuthStore from "../context/useAuthStore";

export default function Reminders() {
  const reminders = useReminderStore((state) => state.reminders);
  const toggleReminder = useReminderStore((state) => state.toggleReminder);
  const userType = useAuthStore((state) => state.userType);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Reminders</h2>

      <p className="text-center text-muted mb-4">
        {userType === "patient"
          ? "Please check reminders once you complete them."
          : "You can see whether the patient has completed their reminders."}
      </p>

      {reminders.length === 0 && (
        <p className="text-center text-muted">No reminders available.</p>
      )}

      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          onToggle={toggleReminder}
        />
      ))}

      {/* Firebase notification placeholder */}
      {userType === "patient" && (
        <div
          className="alert alert-info mt-4"
          role="alert"
          aria-live="polite"
        >
          🔔 <strong>Good Morning!</strong> You have a reminder for{" "}
          <strong>{reminders[0]?.type}</strong> at{" "}
          <strong>{reminders[0]?.time}</strong>.
        </div>
      )}
    </div>
  );
}
