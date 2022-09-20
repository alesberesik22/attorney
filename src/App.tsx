import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
