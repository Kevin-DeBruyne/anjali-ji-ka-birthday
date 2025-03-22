import React from "react";
import "./FestiveStrips.css";

const FestiveStrips = () => {
  return (
    <div className="strips-container">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="festive-strip"></div>
      ))}
    </div>
  );
};

export default FestiveStrips;
