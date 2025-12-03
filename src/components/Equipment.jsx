// src/components/Equipment.jsx
import { motion } from "framer-motion";

const equipment = [
  {
    title: "Free Weights Zone",
    desc: "Dumbbells, barbells, racks, and benches designed for serious strength training.",
    img: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cardio Center",
    desc: "Treadmills, bikes, and cross trainers with performance tracking.",
    img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="section">
      <div className="container">
        <h2 className="section-title">
          World-Class <span>Equipment</span>
        </h2>
        <p className="section-subtitle">
          Train with the best machines and tools to help you achieve maximum
          results.
        </p>

        <div className="card-grid-2">
          {equipment.map((e, i) => (
            <motion.div
              key={e.title}
              className="image-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="image-card-bg"
                style={{ backgroundImage: `url(${e.img})` }}
              />
              <div className="image-card-overlay">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
