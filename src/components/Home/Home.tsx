import { motion } from "framer-motion";
import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Header from "../Header/Header2";
import Navbar from "../Navbar/Navbar";
import Numbers from "../Numbers/Numbers";
import Testimonial from "../Testimonial/Testimonial";
import VideoPage from "../VideoPage/VideoPage";

function Home() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="App"
    >
      <Navbar />
      <Header />
      <Numbers />
      <Experience />
      <VideoPage />
      <About />
      <Testimonial />
      <Contact />
    </motion.div>
  );
}

export default Home;
