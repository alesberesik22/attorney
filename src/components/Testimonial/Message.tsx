import React from "react";
import "./Message.css";
import person from "../assets/images/person.jpg";

function Message() {
  return (
    <>
      <div className="message">
        <div className="message_header"> Incredible experience</div>
        <div className="message_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          ducimus excepturi ullam, repellendus dolores eligendi voluptatum? A ex
          officiis rem mollitia porro labore consequuntur nesciunt? Blanditiis
          libero odit esse quibusdam?
        </div>
      </div>
      <div className="client_data">
        <div className="client_data_img">
          <img src={person} alt="person" />
        </div>
        <div className="client_data_text">
          <div className="client_data_text_name">Ales Beresik</div>
          <div className="client_data_text_position">React Developer</div>
        </div>
      </div>
    </>
  );
}

export default Message;
