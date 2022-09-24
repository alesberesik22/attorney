import React from "react";
import Message from "./Message";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial_text">
        <h2>Clients Testimonial</h2>
      </div>
      <div className="testimonial_client">
        <Message />
      </div>
    </div>
  );
}

export default Testimonial;
