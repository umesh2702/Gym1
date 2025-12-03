// src/components/Mission.jsx
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Our Mission</h2>
          <p>
            At Elite Gym, we believe fitness is a journey, not a destination.
            Our mission is to provide a premium, supportive environment where
            every member can push their limits, achieve their goals, and become
            the best version of themselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
