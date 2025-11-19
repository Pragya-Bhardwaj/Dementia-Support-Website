import MemoryCard from "../components/MemoryCard";
import useAuthStore from "../context/useAuthStore";
import useMemoryStore from "../context/useMemoryStore";
import { useState } from "react";

export default function MemoryBoard() {
  const userType = useAuthStore((state) => state.userType);
  const memories = useMemoryStore((state) => state.memories);
  const addMemory = useMemoryStore((state) => state.addMemory);

  const [form, setForm] = useState({
    label: "",
    category: "People",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMemory({
      id: Date.now(),
      ...form,
    });
    setForm({ label: "", category: "People", img: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Memory Board 🧠</h2>
      <p className="text-center text-muted">
        {userType === "patient"
          ? "Tap a memory to help recall familiar people, places, and events."
          : "Add or edit memories to help the patient recall important people and places."}
      </p>

      {/* Caregiver Add Memory Form */}
      {userType === "caregiver" && (
        <div className="card p-4 mb-4 shadow-sm">
          <h4 className="mb-3">Add New Memory</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Label (e.g., Daughter – Priya)"
              className="form-control mb-2"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              required
            />

            <select
              className="form-control mb-2"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>People</option>
              <option>Place</option>
              <option>Event</option>
            </select>

            <input
              type="text"
              placeholder="Image URL"
              className="form-control mb-3"
              value={form.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
              required
            />

            <button className="btn btn-primary w-100">Add Memory</button>
          </form>
        </div>
      )}

      {/* Memory Grid */}
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
}
