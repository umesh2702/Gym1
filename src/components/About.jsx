// src/components/About.jsx
import { motion } from "framer-motion";

const features = [
  {
    title: "Premium Equipment",
    desc: "State-of-the-art machines and free weights for every fitness level.",
  },
  {
    title: "Expert Trainers",
    desc: "Certified professionals dedicated to helping you reach your goals.",
  },
  {
    title: "Proven Results",
    desc: "Real transformations and success stories from our members.",
  },
  {
    title: "24/7 Access",
    desc: "Train on your schedule, any time of day or night.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <h2 className="section-title">
          About <span>Elite Gym</span>
        </h2>
        <p className="section-subtitle">
          We are more than just a gym. We&apos;re a community dedicated to helping
          you achieve your fitness goals through personalized training, modern
          equipment, and unwavering support.
        </p>

        <div className="feature-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="feature-icon">🏋️‍♂️</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
