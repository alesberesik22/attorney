import React from "react";
import "./Header2.css";
import justitia from "../assets/images/justitia.png";
import { FiChevronRight } from "react-icons/fi";

function Header2() {
  return (
    <div className="header">
      <div className="header_info">
        <div className="header_h1">
          <h1>Your Solution</h1>
          <h1>Legal Consultancy</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
            ullam reiciendis voluptates. Facere quod voluptates nisi qui alias
            obcaecati ducimus atque quidem, nemo illo! Beatae cumque odio
            aliquam voluptate!
          </p>
        </div>
        <div className="header_button">
          <a href="/home#contact">
            <button className="header_button_text">
              <p>Contact Us</p>
              <FiChevronRight fontSize={25} style={{ fontWeight: "500" }} />
            </button>
          </a>
        </div>
        <div className="header_end_text">
          <p>Trusted by 100+ people in Czechia</p>
        </div>
      </div>
      <div className="header_image">
        <div className="circle_1" />
        <div className="circle_2" />
        <img src={justitia} alt="justitia" className="justitia" />
        <div className="header_image_text">
          <p>Meno Priezvisko</p>
          <p className="attorney">- attorney</p>
        </div>
      </div>
    </div>
  );
}

export default Header2;
