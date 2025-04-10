import React from "react";
import { motion } from "framer-motion";
import "./BalloonEffect.css";

const BalloonEffect = () => {
  const balloons = Array.from({ length: 12 }); // Increase count for more effect

  return (
    <div className="balloon-container">
      {balloons.map((_, index) => {
        const randomX = Math.random() * 80 + 10; // Random horizontal position
        const delay = Math.random() * 4; // Random delay
        const randomSize = Math.random() * 60 + 80; // Bigger balloons (80px to 140px)

        return (
          <motion.img
            key={index}
            className="balloon"
            src={`${process.env.PUBLIC_URL}/images/favicon.png`} // Ensure balloon image has a string
            alt="Balloon"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-120vh", opacity: 1 }}
            transition={{
              duration: 8,
              delay: delay,
              ease: "easeOut",
              repeat: Infinity,
            }}
            style={{
              left: `${randomX}%`,
              width: `${randomSize}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BalloonEffect;
