// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <span className="nav-logo-highlight">ELITE</span>GYM
          </div>
          <p className="footer-text">
            Transform your body and mind with premium fitness training and
            state-of-the-art facilities.
          </p>
          <div className="footer-socials">
            <span>📘</span>
            <span>📸</span>
            <span>𝕏</span>
            <span>▶️</span>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>About</li>
            <li>Trainers</li>
            <li>Equipment</li>
            <li>Gallery</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-text">
            123 Fitness Street
            <br />
            Pragathi Nagar, Hyderabad
          </p>
          <p className="footer-text">
            Phone: +91-98765-43210
            <br />
            Email: info@elitegym.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025. Built with <span>♥</span> by ucreates.
      </div>
    </footer>
  );
}
