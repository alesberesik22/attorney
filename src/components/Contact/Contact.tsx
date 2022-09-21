import React from "react";
import "./Contact.css";
import Contactform from "./Contactform";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact" id="contact">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="contact_text"
      >
        <h2>Contact us</h2>
      </motion.div>
      <div className="contact_formular">
        <Contactform />
      </div>
    </div>
  );
}

export default Contact;
