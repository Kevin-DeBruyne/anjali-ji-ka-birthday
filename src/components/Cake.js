// src/components/Cake.js
import React from 'react';
import Candle from './Candle';

const Cake = () => {
  return (
    <div className="cake">
      <img src={`${process.env.PUBLIC_URL}/images/cake.png`} alt="Birthday Cake" />
      <div className="candles">
        {Array.from({ length: 4 }).map((_, index) => (
          <Candle key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cake;

