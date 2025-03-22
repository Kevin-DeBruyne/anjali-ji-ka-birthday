import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./BirthdayImage.css";

const BirthdayImage = ({ imgSrc, hatSrc }) => {
  const imageRef = useRef(null);
  const [hatPosition, setHatPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (imageRef.current) {
      const imgRect = imageRef.current.getBoundingClientRect();
      setHatPosition({
        top: imgRect.top - imgRect.height * 0.35, // Adjusting UP for alignment
        left: imgRect.left + imgRect.width * 0.28, // Moving slightly LEFT
      });
    }
  }, []);

  return (
    <div className="birthday-container">
      <motion.img
        ref={imageRef}
        className="birthday-image"
        src={imgSrc}
        alt="Birthday Person"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        className="birthday-hat"
        src={hatSrc}
        alt="Birthday Hat"
        style={{
          position: "absolute",
          top: `${hatPosition.top}px`,
          left: `${hatPosition.left}px`,
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <motion.div
  className="birthday-age"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1.2, opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
>
  23 🎉
</motion.div>
    </div>
  );
};

export default BirthdayImage;
