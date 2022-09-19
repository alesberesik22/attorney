import React from "react";
import { motion } from "framer-motion";
import law from "../assets/images/law.svg";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 5 }}
        className="intro_logo"
      >
        <img src={law} alt="law" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
        className="intro_name"
      >
        Ales Beresik
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
        className="intro_small"
      >
        <span>Hire Your Attorney</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
        className="intro_button"
      >
        <a className="intro_button_text" href="/home">
          Enter site
        </a>
      </motion.div>
    </div>
  );
}

export default Intro;
