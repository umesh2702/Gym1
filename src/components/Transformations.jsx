// src/components/Transformations.jsx
const transformations = [
  {
    label: "12 WEEK TRANSFORMATION",
    from: "92 kg",
    to: "78 kg",
    text: "Sample story. Here we will add real before/after photos and testimonials from your members."
  },
  {
    label: "8 WEEK STRENGTH GAIN",
    from: "40 kg bench",
    to: "70 kg bench",
    text: "Showcase real strength progress to inspire new members to join."
  },
  {
    label: "6 MONTH LIFESTYLE CHANGE",
    from: "Low energy",
    to: "Active & fit",
    text: "Highlight long-term results to build trust and credibility."
  }
];

const Transformations = () => {
  return (
    <div className="section-inner">
      <h2 className="section-title">Member results &amp; transformations</h2>
      <p className="section-subtitle">
        This is one of the most powerful sections for a gym website. Real stories +
        photos convince people more than any discount.
      </p>

      <div className="trans-grid">
        {transformations.map((t) => (
          <div className="trans-card" key={t.label}>
            <div className="trans-tag">{t.label}</div>
            <div className="trans-numbers">
              <span>From: {t.from}</span>
              <span>To: {t.to}</span>
            </div>
            <div className="trans-text">{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transformations;
