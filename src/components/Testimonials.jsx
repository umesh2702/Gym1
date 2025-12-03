// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Anderson",
    role: "Elite Gym Member",
    text: "Elite Gym has completely transformed my fitness journey. The trainers are incredibly knowledgeable and the atmosphere is motivating.",
    letter: "J",
  },
  {
    name: "Emily Rodriguez",
    role: "Elite Gym Member",
    text: "Best gym experience I've ever had. The facility is always clean and the staff is super friendly.",
    letter: "E",
  },
  {
    name: "Michael Chen",
    role: "Elite Gym Member",
    text: "The personal training program here is exceptional. I gained confidence and strength I never thought possible.",
    letter: "M",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="section-title">
          Member <span>Success Stories</span>
        </h2>
        <p className="section-subtitle">
          Hear what our members have to say about their transformation journey
          at Elite Gym.
        </p>

        <div className="card-grid-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{t.letter}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
