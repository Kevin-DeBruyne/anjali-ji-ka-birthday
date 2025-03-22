import React from "react";
import { motion } from "framer-motion";
import "./Balloons.css";

const Balloons = () => {
  return (
    <div className="balloons-container">
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="https://example.com/balloon.png"
          className="balloon"
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: -500, opacity: 1 }}
          transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default Balloons;
