import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isOpen]);

  return (
    <div className="App">
      <div className="card-container">
        {!isOpen ? (
          <motion.button
            className="card"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Click here to open the surprise!
          </motion.button>
        ) : (
          <motion.div
            className="card opened"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 1 }}
          >
            <div className="content">
              <h1>Happy 23rd Birthday!</h1>
              <div className="photo-container">
                <img src="/images/birthday_photo.jpg" alt="Birthday Person" className="photo" />
                <motion.img
                  src="/images/hat.svg"
                  alt="Birthday Cap"
                  className="cap"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;