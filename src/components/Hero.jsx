// src/components/Hero.jsx
import { motion } from "framer-motion";

const heroBg =
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-layer">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            TRANSFORM YOUR <span>BODY &amp; MIND</span>
          </h1>
          <p>
            Experience premium fitness training with state-of-the-art equipment
            and expert trainers.
          </p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="btn-primary"
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore More
            </button>
            <button
              className="btn-outline"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, repeat: Infinity, repeatType: "reverse", duration: 1 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
