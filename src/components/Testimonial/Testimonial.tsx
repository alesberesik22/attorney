import React from "react";
import Message from "./Message";
import "./Testimonial.css";
import testimonialData from "./Testimonialdata";
import { motion } from "framer-motion";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial_text">
        <h2>Clients Testimonial</h2>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="testimonial_client"
      >
        <Message />
      </motion.div>
    </div>
  );
}

export default Testimonial;
