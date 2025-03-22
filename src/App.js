import React, { useState } from "react";
import ConfettiEffect from "./components/ConfettiEffect";
import "./App.css";
import { motion } from "framer-motion";
import FestiveStrips from "./components/FestiveStrips";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      {!isOpen ? (
        <div className="click-to-open" onClick={() => setIsOpen(true)}>
          <h2>🎉 Click to Open the Surprise! 🎉</h2>
        </div>
      ) : (
        <>
          
          {/* Confetti Effect Starts Immediately */}
          <ConfettiEffect />

          {/* Balloons Floating Up */}
          <div className="balloons">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="balloon"></div>
            ))}
          </div>

          {/* Birthday Person Image (Appears AFTER 2 seconds) */}
          <motion.div
            className="birthday-photo-container"
            initial={{ scale: 0, rotate: 180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
          >
            <img
              src="/images/birthday_photo.jpg"
              alt="Birthday Person"
              className="birthday-photo"
            />
          </motion.div>

          {/* Hat Animation (AFTER Image Appears) */}
          <motion.img
            src="/images/hat.svg"
            alt="Birthday Hat"
            className="birthday-hat"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />

          {/* Glowing "23 🎉" (Appears after hat) */}
          <motion.div
            className="birthday-age"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            23 🥳
          </motion.div>

          {/* Typing Animation for Happy Birthday Message */}
          <motion.h2
            className="birthday-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 4 }}
          >
            Happy Birthday Anjali ji🎉
          </motion.h2>
        </>
      )}
    </div>
  );
};

export default BirthdayCard;
