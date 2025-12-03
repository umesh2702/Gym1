// src/components/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Demo only.\n\nOn the real website, this form will send an enquiry to your WhatsApp or email so you never miss a lead."
    );
    setForm({ name: "", phone: "", goal: "" });
  };

  return (
    <div className="section-inner">
      <h2 className="section-title">Make it easy for people to join</h2>
      <p className="section-subtitle">
        This section becomes your gym&apos;s enquiry area – people can enter their
        details and you get the lead instantly.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Enquiry form</h3>
          <p>
            We&apos;ll connect this form to your{" "}
            <span className="contact-highlight">WhatsApp or email</span>. When someone
            fills it, you get their name, number and goal – so you can call them back
            and close the membership.
          </p>
          <p className="contact-note">
            Right now it&apos;s in demo mode – submit to see the example message.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-label">
              Name
              <input
                className="contact-input"
                name="name"
                placeholder="Your prospect's name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-label">
              Phone
              <input
                className="contact-input"
                name="phone"
                placeholder="WhatsApp / mobile number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-label">
              Fitness goal
              <textarea
                className="contact-textarea"
                name="goal"
                placeholder="Weight loss, muscle gain, general fitness etc."
                value={form.goal}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="btn-submit">
              Try demo enquiry
            </button>
          </form>
        </div>

        <div className="map-card">
          <h3>Location &amp; timings</h3>
          <p>
            Here we&apos;ll embed your{" "}
            <span className="contact-highlight">Google Maps location</span> so people
            can tap and get directions from anywhere.
          </p>
          <p className="contact-note">
            We also add your exact address, contact number and opening hours.
          </p>

          <div className="map-placeholder">
            Map embed area (for demo).
            <br />
            In the real site, this will show your gym on Google Maps with a &quot;Get
            Directions&quot; button.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
