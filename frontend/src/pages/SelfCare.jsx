export default function SelfCare() {
  const tips = [
    {
      title: "Breathe Slowly",
      desc: "Take 5 deep breaths. Inhale through your nose and exhale gently.",
      icon: "🌬",
      color: "#E8F3FF",
    },
    {
      title: "Drink Water",
      desc: "Take a few sips of water to help your body feel better.",
      icon: "💧",
      color: "#E9F7F1",
    },
    {
      title: "Gentle Walk",
      desc: "Walk slowly for a few minutes if you feel comfortable.",
      icon: "🚶",
      color: "#FFF6E5",
    },
    {
      title: "Listen to Music",
      desc: "Play soft or familiar music that you enjoy.",
      icon: "🎵",
      color: "#F3EEFF",
    },
    {
      title: "Rest",
      desc: "Sit or lie down and relax for a few minutes.",
      icon: "😌",
      color: "#FCEEEF",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <h3 className="fw-bold mb-4">Self Care</h3>

      {tips.map((tip, index) => (
        <div
          key={index}
          className="card rounded-4 shadow-sm p-4 mb-3 fw-bold"
          style={{ backgroundColor: tip.color }}
        >
          <div className="d-flex align-items-center">
            <div style={{ fontSize: "2.5rem" }} className="me-3">
              {tip.icon}
            </div>
            <div>
              <div style={{ fontSize: "1.1rem" }}>{tip.title}</div>
              <p className="fw-normal mb-0 mt-1">{tip.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
