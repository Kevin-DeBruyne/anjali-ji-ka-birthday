import React, { useState } from "react";
import "./App.css";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className={`card ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(true)}>
        <div className="card-front">
          <h2>🎉 Click to Open 🎉</h2>
        </div>
        <div className="card-inside">
          <div className="left-page">
            <h2>Happy Birthday!</h2>
            <p>🎂 Wishing you all the happiness in the world! 🎂</p>
          </div>
          <div className="right-page">
            <img src="/images/hat.svg" alt="Hat" className="hat" />
            <img src="/images/birthday_photo.jpg" alt="Birthday Person" className="person" />
          </div>
        </div>
      </div>
      {isOpen && <Confetti />}
    </div>
  );
};

const Confetti = () => {
  return (
    <div className="confetti-container">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="confetti"></div>
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="balloon"></div>
      ))}
    </div>
  );
};

export default BirthdayCard;
