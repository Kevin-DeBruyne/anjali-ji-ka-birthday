import React from "react";
import { motion } from "framer-motion";
import "./Confetti.css";

const Confetti = () => {
  return (
    <div className="confetti-container">
      {/* Confetti pieces */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="confetti"
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 100, rotate: Math.random() * 360 }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        ></motion.div>
      ))}

      {/* Balloons */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.img
          key={`balloon-${i}`}
          src="https://cdn-icons-png.flaticon.com/512/856/856934.png"
          className="balloon"
          initial={{ y: window.innerHeight, x: Math.random() * window.innerWidth }}
          animate={{ y: -100, opacity: 1 }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
