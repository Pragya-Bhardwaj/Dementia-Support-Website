import useAuthStore from "../context/useAuthStore";
import useProfileStore from "../context/useProfileStore";

export default function Profile() {
  const userType = useAuthStore((state) => state.userType);

  const { patient, caregiver, updatePatient, updateCaregiver } =
    useProfileStore();

  const handlePatientChange = (e) => {
    updatePatient({ [e.target.name]: e.target.value });
  };

  const handleCaregiverChange = (e) => {
    updateCaregiver({ [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Profile</h2>

      {/* Patient Info */}
      <div className="card p-4 shadow-sm mb-4">
        <h4 className="mb-3">Patient Information</h4>

        <div className="text-center mb-3">
          <img
            src="https://via.placeholder.com/120"
            alt="Patient avatar"
            className="rounded-circle shadow"
          />
        </div>

        <input
          className="form-control mb-2"
          name="name"
          value={patient.name}
          disabled={userType === "patient"}
          onChange={handlePatientChange}
          placeholder="Patient Name"
        />

        <input
          className="form-control mb-2"
          name="age"
          value={patient.age}
          disabled={userType === "patient"}
          onChange={handlePatientChange}
          placeholder="Age"
        />

        <input
          className="form-control"
          name="medicalId"
          value={patient.medicalId}
          disabled
          placeholder="Medical ID"
        />

        {userType === "patient" && (
          <p className="text-muted mt-2">
            Only your caregiver can edit this information.
          </p>
        )}
      </div>

      {/* Caregiver Info */}
      <div className="card p-4 shadow-sm mb-4">
        <h4 className="mb-3">Caregiver Information</h4>

        <input
          className="form-control mb-2"
          name="name"
          value={caregiver.name}
          disabled={userType === "patient"}
          onChange={handleCaregiverChange}
          placeholder="Caregiver Name"
        />

        <input
          className="form-control mb-2"
          name="relation"
          value={caregiver.relation}
          disabled={userType === "patient"}
          onChange={handleCaregiverChange}
          placeholder="Relation"
        />

        <input
          className="form-control"
          name="phone"
          value={caregiver.phone}
          disabled={userType === "patient"}
          onChange={handleCaregiverChange}
          placeholder="Phone Number"
        />
      </div>

      {/* Save Button */}
      {userType === "caregiver" && (
        <button className="btn btn-primary w-100 mb-5">
          Save Profile
        </button>
      )}
    </div>
  );
}

