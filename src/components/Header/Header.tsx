import React from "react";
import "./Header.css";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { GoQuote } from "react-icons/go";
import justitia from "../assets/images/justitia.png";
import hammer from "../assets/images/hammer.png";

function Header() {
  return (
    <div className="header" id="home">
      <div className="header_h1">
        <h1>Hire Attorney To Handle</h1>
        <h1>Your Legal Issues</h1>
      </div>
      <div className="header_button">
        <button type="button" className="header_button_text">
          <p>Contact us</p>
          <FiChevronRight className="button_arrow" fontSize={15} />
        </button>
      </div>
      <div className="header_info">
        <div className="header_info_stats">
          <div className="info">
            <div className="projects_completed">
              <h3>294</h3>
              <h4>Projects completed</h4>
            </div>
            <div className="break" />
            <div className="awards_gain">
              <h3>25</h3>
              <h4>Award again</h4>
            </div>
            <div className="break" />
            <div className="branches">
              <h3>10</h3>
              <h4>Branches</h4>
            </div>
          </div>
        </div>
        <div className="header_info_image">
          <div className="header_info_image_background">
            <img src={justitia} alt="justitia" className="justitia" />
            <AiOutlineArrowDown
              fontSize={30}
              className="arrow_down"
              href="/#about"
            />
          </div>
          <div className="header_info_image_arrow_down"></div>
        </div>
        <div className="header_info_text">
          <div className="hammer_img">
            <img
              src={hammer}
              alt="hammer"
              className="header_info_text_hammer"
            />
          </div>
          <div className="quote_div">
            <GoQuote fontSize={40} className="quote" />
          </div>
          <div className="info_text">
            <p>We pritorise our</p>
            <p>
              client's <span style={{ color: "orangered" }}>statement</span>
            </p>
          </div>
        </div>
        <div className="header_overlay"></div>
      </div>
    </div>
  );
}

export default Header;
