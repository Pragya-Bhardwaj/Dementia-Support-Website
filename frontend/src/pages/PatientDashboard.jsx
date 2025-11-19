import Navbar from "../components/Navbar";
import useReminderStore from "../context/useReminderStore";
import useMemoryStore from "../context/useMemoryStore";

export default function PatientDashboard() {
  const reminders = useReminderStore((state) => state.reminders);
  const toggleReminder = useReminderStore((state) => state.toggleReminder);

  const memories = useMemoryStore((state) => state.memories);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        {/* Greeting */}
        <h2 className="mb-3">Welcome back 🧠💙</h2>
        <p className="text-muted">We’re here to help you remember today.</p>

        {/* Today’s Reminders */}
        <div className="card p-3 mb-4 shadow-sm">
          <h4 className="mb-3">Today's Reminders</h4>

          {reminders.map((rem) => (
            <div key={rem.id} className="d-flex align-items-center mb-2">
              <input
                type="checkbox"
                checked={rem.done}
                onChange={() => toggleReminder(rem.id)}
                className="form-check-input me-2"
              />
              <span>
                <strong>{rem.type}</strong> at {rem.time}
              </span>
            </div>
          ))}
        </div>

        {/* Memory Board Preview */}
        <div className="card p-3 mb-4 shadow-sm">
          <h4 className="mb-3">People & Places You Know</h4>

          <div className="d-flex gap-3">
            {memories.slice(0, 2).map((mem) => (
              <div key={mem.id} className="text-center">
                <img
                  src={mem.img}
                  alt={mem.label}
                  width="120"
                  height="120"
                  className="rounded shadow"
                  style={{ objectFit: "cover" }}
                />
                <p className="mt-2">{mem.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Self Care Tips */}
        <div className="card p-3 shadow-sm">
          <h4>Take Care of Yourself 🌿</h4>
          <ul className="mt-2">
            <li>Breathe slowly for 10 seconds</li>
            <li>Drink some water</li>
            <li>Take a short walk</li>
            <li>Listen to soft music</li>
          </ul>
        </div>

      </div>
    </>
  );
}
