// src/components/Programs.jsx
const programs = [
  {
    title: "Weight Loss",
    desc: "Calorie-burning workouts, diet guidance and progress tracking."
  },
  {
    title: "Muscle Building",
    desc: "Strength training, progressive overload and proper form support."
  },
  {
    title: "Cardio & HIIT",
    desc: "High intensity sessions to improve stamina and heart health."
  },
  {
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to each member&apos;s goals."
  }
];

const Programs = () => {
  return (
    <div className="section-inner">
      <h2 className="section-title">Programs your gym can highlight</h2>
      <p className="section-subtitle">
        We&apos;ll replace this section with your actual plans, timings and offers. This
        helps new members quickly understand what you offer.
      </p>

      <div className="programs-grid">
        {programs.map((p) => (
          <div className="program-card" key={p.title}>
            <div className="program-title">{p.title}</div>
            <div className="program-text">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
