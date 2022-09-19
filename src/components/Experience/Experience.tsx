import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineCar } from "react-icons/ai";
import { RiCriminalLine } from "react-icons/ri";
import { FaRegStickyNote } from "react-icons/fa";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="experience" id="experience">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="experience_text"
      >
        <h2>Our Best Practice Areas</h2>
        <h3>We have the best lawyer in these areas</h3>
      </motion.div>
      <div className="experiences">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1.5 }}
          className="experiences_cards"
        >
          <ExperienceCard
            text="Family law"
            bg="rgba(214, 3, 3, 0.07)"
            icon={
              <MdOutlineFamilyRestroom
                fontSize={27}
                style={{ color: "black" }}
              />
            }
          />
          <ExperienceCard
            text="Student law"
            bg="rgba(1, 250, 84, 0.05)"
            icon={<VscLaw fontSize={27} style={{ color: "black" }} />}
          />
          <ExperienceCard
            text="Car accident"
            bg="rgba(4, 81, 247, 0.09)"
            icon={<AiOutlineCar fontSize={27} style={{ color: "black" }} />}
          />
          <ExperienceCard
            text="Bail"
            bg="rgba(250, 122, 2, 0.07)"
            icon={<FaRegStickyNote fontSize={27} style={{ color: "black" }} />}
          />
          <ExperienceCard
            text="Criminal law"
            bg="rgba(131, 1, 252, 0.1)"
            icon={<RiCriminalLine fontSize={27} style={{ color: "black" }} />}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
