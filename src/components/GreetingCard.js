import React, { useState } from "react";
import { motion } from "framer-motion";
import "./GreetingCard.css";

const GreetingCard = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen(); // Triggers all animations after opening
    }, 800); // Delay ensures smooth transition
  };

  return (
    <div className="card-container" onClick={handleOpen}>
      {/* Closed Card */}
      {!isOpen && (
        <motion.div
          className="card closed"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/closed_card.png`} alt="Click to Open" className="card-img" />
        </motion.div>
      )}

      {/* Opened Card */}
      {isOpen && (
        <motion.div
          className="card open"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 180 }}
          transition={{ duration: 1 }}
        >
          <div className="card-front">
            <h2>Happy 23rd Birthday!</h2>
            <p>Wishing you an amazing year ahead! 🎉</p>
          </div>
          <div className="card-back">
            <img src={`${process.env.PUBLIC_URL}/images/open_card.png`} alt="Decorations" className="decor" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GreetingCard;
