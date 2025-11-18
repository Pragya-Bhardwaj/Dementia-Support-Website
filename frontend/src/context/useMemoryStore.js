import { create } from "zustand";

const useMemoryStore = create((set) => ({
  memories: [
    { id: 1, label: "Daughter - Priya", category: "People", img: "/img1.png" },
    { id: 2, label: "Home", category: "Place", img: "/home.png" },
  ],

  addMemory: (memory) =>
    set((state) => ({
      memories: [...state.memories, memory],
    })),

  deleteMemory: (id) =>
    set((state) => ({
      memories: state.memories.filter((m) => m.id !== id),
    })),
}));

export default useMemoryStore;
