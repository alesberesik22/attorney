import React, { useState } from "react";
import { motion } from "framer-motion";
import law from "../assets/images/law.svg";
import video from "../assets/video/video.mp4";
import "./Intro.css";
import LoadingIcon from "../Icon/Icon";

function Intro() {
  const [openIntro, setOpenIntro] = useState(false);
  return (
    <div className="intro">
      {openIntro ? (
        <>
          <motion.video
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            loop
            autoPlay
            muted
            style={{
              objectFit: "cover",
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <source src={video} type="video/mp4" />
          </motion.video>
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
        </>
      ) : (
        <LoadingIcon closeAnimation={setOpenIntro} />
      )}
    </div>
  );
}

export default Intro;
