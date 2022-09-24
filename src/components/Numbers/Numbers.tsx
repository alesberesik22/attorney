import React from "react";
import { motion } from "framer-motion";
import "./Numbers.css";

function Numbers() {
  return (
    <motion.div className="numbers">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="numbers_text"
      >
        <h1>Some count that matters</h1>
        <h2>Our achievement in the journey in numbers</h2>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ delay: 0.5, duration: 1 }}
        className="numbers_text_values"
      >
        <div className="number_clients">
          <h3>30</h3>
          <h4>Clients</h4>
        </div>
        <div className="break" />
        <div className="number_projects">
          <h3>300+</h3>
          <h4>Taken business legalities</h4>
        </div>
        <div className="break" />
        <div className="number_years">
          <h3>8</h3>
          <h4>Years of Journey</h4>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Numbers;
