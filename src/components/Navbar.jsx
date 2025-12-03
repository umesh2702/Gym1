// src/components/Navbar.jsx
import { motion } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Trainers", id: "trainers" },
  { label: "Equipment", id: "equipment" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-inner">
        <div className="nav-logo-wrap" onClick={() => scrollToSection("home")}>
          <div className="nav-logo-text">
            <span className="nav-logo-highlight">ELITE</span>
            <span>GYM</span>
          </div>
        </div>

        <nav className="nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-join-btn"
          onClick={() => scrollToSection("contact")}
        >
          Join Now
        </button>
      </div>
    </motion.header>
  );
}
