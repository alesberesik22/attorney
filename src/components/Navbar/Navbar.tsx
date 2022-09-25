import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="name">
        <p className="name_text">Meno Priezvisko</p>
      </div>
      <div className="links">
        <a href="#" className="navigation">
          <p>Home</p>
        </a>
        <a href="#areas" className="navigation">
          <p>Areas</p>
        </a>
        <a href="#about" className="navigation">
          <p>About</p>
        </a>
        <a href="#testimonial" className="navigation">
          <p>Testimonial</p>
        </a>
        <a href="#contact" className="navigation">
          <p>Contact us</p>
        </a>
      </div>
      <div className="navbar_smallScreen">
        <div className="open_menu">
          <GiHamburgerMenu
            color="#000"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        </div>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={toggleMenu ? "open" : "close"}
            transition={{ staggerChildren: 0.5 }}
            variants={variants}
            className="navbar_smallScreen_links"
          >
            <AiOutlineClose
              fontSize={27}
              color="#fff"
              className="menu_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <motion.ul
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 0.5, duration: 1 }}
              className="navbar_smallLinks"
            >
              <li className="navbar_smallLinks_text">
                <a
                  href="#"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="navbar_smallLinks_text">
                <a
                  href="#areas"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Areas
                </a>
              </li>
              <li className="navbar_smallLinks_text">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="navbar_smallLinks_text">
                <a
                  href="#testimonial"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Testimonial
                </a>
              </li>
              <li className="navbar_smallLinks_text">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact us
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
