// src/components/Facility.jsx
import { motion } from "framer-motion";

const facility = [
  {
    title: "Group Training Session",
    img: "https://images.pexels.com/photos/3822627/pexels-photo-3822627.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Modern Reception Area",
    img: "https://images.pexels.com/photos/813414/pexels-photo-813414.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Personal Training",
    img: "https://images.pexels.com/photos/7676409/pexels-photo-7676409.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Locker Facilities",
    img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Facility() {
  return (
    <section id="gallery" className="section section-dark">
      <div className="container">
        <h2 className="section-title">
          Our <span>Facility</span>
        </h2>
        <p className="section-subtitle">
          Take a virtual tour of our premium gym facility – from cutting-edge
          equipment to luxurious amenities.
        </p>

        <div className="card-grid-4">
          {facility.map((f, i) => (
            <motion.div
              key={f.title}
              className="gallery-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="gallery-img"
                style={{ backgroundImage: `url(${f.img})` }}
              />
              <div className="gallery-title">{f.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
