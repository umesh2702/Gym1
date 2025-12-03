// src/components/Trainers.jsx
import { motion } from "framer-motion";

const trainers = [
  {
    name: "Marcus Steel",
    role: "Strength & Conditioning Coach",
    img: "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Sarah Phoenix",
    role: "Functional Training Specialist",
    img: "https://images.pexels.com/photos/7676400/pexels-photo-7676400.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "David Blaze",
    role: "Weight Loss & Nutrition Coach",
    img: "https://images.pexels.com/photos/7991655/pexels-photo-7991655.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="section section-dark">
      <div className="container">
        <h2 className="section-title">
          Meet Our <span>Expert Trainers</span>
        </h2>
        <p className="section-subtitle">
          Our certified professionals are dedicated to helping you reach your
          fitness goals with personalized training and expert guidance.
        </p>

        <div className="card-grid-3">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              className="trainer-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="trainer-img"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <div className="trainer-info">
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
