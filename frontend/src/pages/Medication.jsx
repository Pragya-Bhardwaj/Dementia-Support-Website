export default function Medication() {
  const medicines = [
    {
      name: "Morning Medicine",
      time: "9:00 AM",
      note: "Take after breakfast",
    },
    {
      name: "Afternoon Medicine",
      time: "1:00 PM",
      note: "Take with lunch",
    },
    {
      name: "Evening Medicine",
      time: "8:00 PM",
      note: "Take after dinner",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <h3 className="fw-bold mb-4">Medication</h3>

      {medicines.map((med, index) => (
        <div
          key={index}
          className="card rounded-4 shadow-sm p-4 mb-3 fw-bold"
        >
          <div className="d-flex align-items-center">
            <div style={{ fontSize: "2.5rem" }} className="me-3">
              💊
            </div>
            <div>
              <div style={{ fontSize: "1.1rem" }}>{med.name}</div>
              <p className="fw-normal mb-1">{med.note}</p>
              <p className="fw-normal text-muted mb-0">
                Time: {med.time}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="alert alert-info fw-bold mt-4 rounded-4">
        Please take medicines as advised by your caregiver or doctor.
      </div>
    </div>
  );
}
