import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1000); // Delay for animation effect
  };

  return (
    <div className="envelope-container">
      {!isOpen ? (
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/envelope.png`}
          alt="Click to open"
          className="envelope"
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      ) : (
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/envelope_open.png`}
          alt="Opened Envelope"
          className="envelope"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default Envelope;
