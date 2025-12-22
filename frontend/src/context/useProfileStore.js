import { create } from "zustand";

const useProfileStore = create((set) => ({
  patient: {
    name: "Ramesh Sharma",
    age: 68,
    medicalId: "MED-1023",
  },

  caregiver: {
    name: "Anita Sharma",
    relation: "Daughter",
    phone: "9876543210",
  },

  updatePatient: (data) =>
    set((state) => ({
      patient: { ...state.patient, ...data },
    })),

  updateCaregiver: (data) =>
    set((state) => ({
      caregiver: { ...state.caregiver, ...data },
    })),
}));

export default useProfileStore;
