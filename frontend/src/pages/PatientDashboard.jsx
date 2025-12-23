import PatientNavbar from "../components/PatientNavbar";
import useMemoryStore from "../context/useMemoryStore";
import useReminderStore from "../context/useReminderStore";

export default function PatientDashboard() {
  const memories = useMemoryStore((state) => state.memories);
  const reminders = useReminderStore((state) => state.reminders);
  const toggleReminder = useReminderStore((state) => state.toggleReminder);

  return (
    <>
      <PatientNavbar />

      <div className="container mt-4">

        {/* Gentle Greeting */}
        <div className="mb-4">
          <h2 className="fw-bold">Hello 👋</h2>
          <p className="text-muted fs-5">
            Let’s look at some familiar things today.
          </p>
        </div>

        {/* MEMORY BOARD — SHOWN FIRST */}
        <div className="card p-4 shadow-sm mb-4">
          <h3 className="mb-3 text-primary">Your Memory Board</h3>

          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {memories.map((mem) => (
              <div
                key={mem.id}
                className="text-center"
                style={{ width: "160px" }}
              >
                <img
                  src={mem.img}
                  alt={mem.label}
                  className="rounded shadow"
                  width="150"
                  height="150"
                  style={{ objectFit: "cover" }}
                />
                <p className="mt-2 fs-5">{mem.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* REMINDERS */}
        <div className="card p-4 shadow-sm mb-4">
          <h3 className="mb-3 text-success">Today’s Reminders</h3>

          {reminders.map((r) => (
            <div
              key={r.id}
              className="d-flex align-items-center mb-3 fs-5"
            >
              <input
                type="checkbox"
                checked={r.done}
                onChange={() => toggleReminder(r.id)}
                className="form-check-input me-3"
                style={{ transform: "scale(1.5)" }}
              />
              <span>
                {r.type} at {r.time}
              </span>
            </div>
          ))}
        </div>

        {/* SELF CARE */}
        <div className="card p-4 shadow-sm mb-5">
          <h3 className="mb-3 text-info">Take Care 🌿</h3>

          <ul className="fs-5">
            <li>Take 5 slow breaths</li>
            <li>Drink a glass of water</li>
            <li>Listen to calm music</li>
            <li>Rest for a few minutes</li>
          </ul>
        </div>

      </div>
    </>
  );
}
