import React, { useState } from "react";
import "./Message.css";
import testimonialData from "./Testimonialdata";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Message(props: any) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [animate, setAnimate] = useState(false);
  const handleClick = (index: any) => {
    setIndex(index);
  };
  const xOffset = 100;
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? xOffset : -xOffset,
      opacity: 0,
    }),
    active: {
      x: [direction > 0 ? xOffset : -xOffset, 0],
      opacity: [0, 1],
      transition: { delay: 0.2 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -xOffset : xOffset,
      opacity: 0,
    }),
  };
  const endAnimate = () => {
    setAnimate(false);
    console.log(animate);
  };
  return (
    <>
      {testimonialData.length && (
        <>
          <motion.div
            initial={animate && "enter"}
            animate={animate && "active"}
            variants={variants}
            onTransitionEnd={endAnimate}
            className="testimonial_item"
          >
            <div className="message">
              <div className="message_header">
                {testimonialData[index].header}
              </div>
              <div className="message_text">{testimonialData[index].text}</div>
            </div>
            <div className="client_data">
              <div className="client_data_img">
                <img src={testimonialData[index].image} alt="person" />
              </div>
              <div className="client_data_text">
                <div className="client_data_text_name">
                  {testimonialData[index].name}
                </div>
                <div className="client_data_text_position">
                  {testimonialData[index].position}
                </div>
              </div>
            </div>
            <div className="testimonial_buttons">
              <div
                className="testimonial_button"
                onClick={() => {
                  handleClick(
                    index === 0 ? testimonialData.length - 1 : index - 1
                  );
                  setDirection(-1);
                  setAnimate(true);
                }}
              >
                <HiChevronLeft />
              </div>

              <div
                className="testimonial_button"
                onClick={() => {
                  handleClick(
                    index === testimonialData.length - 1 ? 0 : index + 1
                  );
                  setDirection(1);
                  setAnimate(true);
                }}
              >
                <HiChevronRight />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Message;
