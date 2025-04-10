import React, { useState } from "react";
import ConfettiEffect from "./components/ConfettiEffect";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import FestiveStrips from "./components/FestiveStrips";
import IntroSequence from "./components/IntroSequence";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleIntroComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowIntro(false);
      setIsOpen(true);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="container">
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <IntroSequence onComplete={handleIntroComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="main-content"
          >
            {!isOpen ? (
              <motion.div 
                className="gift-box-container" 
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="gift-box">🎁</div>
                <p className="gift-box-text">Click to open your surprise!</p>
              </motion.div>
            ) : (
              <>
                {/* Confetti Effect Starts Immediately */}
                <ConfettiEffect />
                
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayCard;
