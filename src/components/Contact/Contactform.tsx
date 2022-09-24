import React, { useRef } from "react";
import "./Contactform.scss";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import { motion } from "framer-motion";

function Contactform() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("successfull");
  };
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="contact_container"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="contact_info"
      >
        <h4>Contact information</h4>
        <div className="contact_opening">
          <p>
            MON
            <span style={{ marginLeft: "30px" }}>08:00 - 17:00</span>
          </p>
          <p>
            TUE <span style={{ marginLeft: "30px" }}>08:00 - 17:00</span>
          </p>
          <p>
            WEN <span style={{ marginLeft: "25px" }}>08:00 - 17:00</span>
          </p>
          <p>
            THU <span style={{ marginLeft: "28px" }}>08:00 - 17:00</span>
          </p>
          <p>
            FRI <span style={{ marginLeft: "34px" }}>08:00 - 17:00</span>
          </p>
        </div>
        <div className="icons">
          <div className="icon_text">
            <AiOutlinePhone className="icon" />
            <span>+421 111 222 333</span>
          </div>
          <div className="icon_text">
            <AiOutlineMail className="icon" />
            <span>test@email.com</span>
          </div>
          <div className="icon_text">
            <BiMap className="icon" />
            <span>Zilina, Postova 1, Slovensko</span>
          </div>
        </div>
        <div className="social_media">
          <a href="" className="icon_circle">
            <FiFacebook className="social_icon" />
          </a>
          <a href="" className="icon_circle">
            <RiLinkedinLine className="social_icon" />
          </a>
          <a href="" className="icon_circle">
            <AiOutlineWhatsApp className="social_icon" />
          </a>
        </div>
      </motion.div>
      <motion.form
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="form_area"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="form">
          <div className="form_input">
            <input type="text" name="" required></input>
            <label>Name</label>
            <div className="form_input">
              <input type="text" name="" required></input>
              <label>Surrname</label>
            </div>
          </div>
          <div className="form_input">
            <input type="text" name="" required></input>
            <label>Email</label>
            <div className="form_input">
              <input type="text" name="" required></input>
              <label>Number</label>
            </div>
          </div>
          <div className="form_input_subject">
            <input type="text" name="" required></input>
            <label>Subject</label>
          </div>
          <div className="form_input">
            <textarea required></textarea>
            <label>Message</label>
          </div>
          <div className="submit_button">
            <input
              type="submit"
              name=""
              value="Submit"
              className="submit_button_press"
            />
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default Contactform;
