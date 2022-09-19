import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="name">
        <p className="name_text">Meno Priezvisko</p>
      </div>
      <div className="links">
        <a href="#" className="navigation">
          <p>Home</p>
        </a>
        <a href="#about" className="navigation">
          <p>About</p>
        </a>
        <a href="#experience" className="navigation">
          <p>Experiences</p>
        </a>
        <a href="#testimonial" className="navigation">
          <p>Testimonial</p>
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
          <div className="navbar_smallScreen_links slide_bottom">
            <AiOutlineClose
              fontSize={27}
              color="#fff"
              className="menu_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="navbar_smallLinks">
              <li className="navbar_smallLinks_text">
                <a href="#">Home</a>
              </li>
              <li className="navbar_smallLinks_text">
                <a href="#about">About</a>
              </li>
              <li className="navbar_smallLinks_text">
                <a href="#experience">Experiences</a>
              </li>
              <li className="navbar_smallLinks_text">
                <a href="#testimonial">Testimonial</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
