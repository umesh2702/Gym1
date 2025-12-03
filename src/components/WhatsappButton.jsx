// src/components/WhatsappButton.jsx
import { motion } from "framer-motion";

const phone = "91XXXXXXXXXX"; // replace with real number when using for a client

export default function WhatsappButton() {
  const message = encodeURIComponent(
    "Hi, I saw your gym website and I'm interested in joining. Can you share the membership details?"
  );

  const openWhatsapp = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      className="wa-btn"
      onClick={openWhatsapp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      💬
    </motion.button>
  );
}
