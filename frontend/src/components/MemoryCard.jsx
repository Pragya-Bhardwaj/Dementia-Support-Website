import { FaVolumeUp, FaTrash } from "react-icons/fa";
import useAuthStore from "../context/useAuthStore";
import useMemoryStore from "../context/useMemoryStore";

export default function MemoryCard({ memory }) {
  const userType = useAuthStore((state) => state.userType);
  const deleteMemory = useMemoryStore((state) => state.deleteMemory);

  // category color
  const borderColor = {
    People: "3px solid green",
    Place: "3px solid blue",
    Event: "3px solid orange",
  }[memory.category] || "3px solid gray";

  return (
    <div className="card p-3 shadow-sm text-center" style={{ width: "180px" }}>
      <img
        src={memory.img}
        alt={memory.label}
        className="rounded mb-2"
        width="150"
        height="150"
        style={{ objectFit: "cover", border: borderColor }}
      />

      <h6>{memory.label}</h6>

      {/* Play Voice Button */}
      <button className="btn btn-outline-primary btn-sm mt-2 w-100">
        <FaVolumeUp /> Play Voice
      </button>

      {/* Delete button – ONLY for caregiver */}
      {userType === "caregiver" && (
        <button
          className="btn btn-danger btn-sm mt-2 w-100"
          onClick={() => deleteMemory(memory.id)}
        >
          <FaTrash /> Delete
        </button>
      )}
    </div>
  );
}
