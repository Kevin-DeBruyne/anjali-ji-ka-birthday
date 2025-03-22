import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import confetti from 'canvas-confetti';
const ConfettiEffect = () => {
  const [recycle, setRecycle] = useState(true);
  
  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.4 },
    });
    // Restart confetti every 5 seconds
    const interval = setInterval(() => {
      setRecycle(false);
      setTimeout(() => setRecycle(true), 100); // Restart after a short break
    }, 5000); // Restart every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200} // Adjust for more confetti
      recycle={recycle} // Keeps restarting confetti
    />
  );
};

export default ConfettiEffect;