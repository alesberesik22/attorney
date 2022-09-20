import React from "react";
import "./About.css";
import lawyer from "../assets/images/lawyer.png";
import certificate from "../assets/images/certificate.png";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div className="about" id="about">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.4 }}
        className="about_text"
      >
        <h2>About us</h2>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.4 }}
        className="about_first"
      >
        <div className="about_first_image">
          <img src={lawyer} alt="lawyer" />
        </div>
        <div className="about_first_text">
          <h3>Certifications</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deserunt assumenda, aliquam voluptates, inventore dolor voluptas,
            doloribus et eum quisquam numquam iure debitis alias quod corrupti
            molestiae. Est, provident sint.
          </h4>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.4 }}
        className="about_second"
      >
        <div className="about_second_text">
          <h3>Study</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deserunt assumenda, aliquam voluptates, inventore dolor voluptas,
            doloribus et eum quisquam numquam iure debitis alias quod corrupti
            molestiae. Est, provident sint.
          </h4>
        </div>
        <div className="about_second_image">
          <img src={certificate} alt="certificate" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
