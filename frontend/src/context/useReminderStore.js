import { create } from "zustand";

const useReminderStore = create((set) => ({
  reminders: [
    { id: 1, type: "Medicine", time: "9:00 AM", done: false },
    { id: 2, type: "Lunch", time: "1:00 PM", done: false },
  ],

  toggleReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.map((r) =>
        r.id === id ? { ...r, done: !r.done } : r
      ),
    })),

  addReminder: (rem) =>
    set((state) => ({
      reminders: [...state.reminders, rem],
    })),
}));

export default useReminderStore;
