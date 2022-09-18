import React from "react";
import "./Header.css";
import { FiChevronRight } from "react-icons/fi";

function Header() {
  return (
    <div className="header" id="about">
      <div className="header_h1">
        <h1>Hire Attorneys To Handle</h1>
        <h1>Your Legal Issues</h1>
      </div>
      <div className="header_button">
        <button type="button" className="header_button_text">
          <p>Contact us</p>
          <FiChevronRight className="button_arrow" fontSize={15} />
        </button>
      </div>
      <div className="header_info">
        <div className="header_info_stats"></div>
        <div className="header_info_image"></div>
        <div className="header_info_text"></div>
      </div>
    </div>
  );
}

export default Header;
