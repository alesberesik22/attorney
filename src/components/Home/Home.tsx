import { motion } from "framer-motion";
import React from "react";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="App"
    >
      <Navbar />
      <Header />
      <Experience />
    </motion.div>
  );
}

export default Home;
