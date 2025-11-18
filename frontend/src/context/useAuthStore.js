import { create } from "zustand";

const useAuthStore = create((set) => ({
  userType: null, // "patient" or "caregiver"
  login: (type) => set({ userType: type }),
  logout: () => set({ userType: null }),
}));

export default useAuthStore;
