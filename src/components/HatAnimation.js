import React from 'react';
import { motion } from 'framer-motion';

const HatAnimation = ({ src }) => {
  return (
    <motion.img
      src={src}
      alt="Birthday Hat"
      className="birthday-hat"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: -50, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  );
};

export default HatAnimation;
