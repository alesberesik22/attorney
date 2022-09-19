import React from "react";
import { motion } from "framer-motion";

function ExperienceCard(props: any) {
  return (
    <div className="card" style={{ background: `${props.bg}` }}>
      {props.icon}
      <div className="card_text">{props.text}</div>
    </div>
  );
}

export default ExperienceCard;
