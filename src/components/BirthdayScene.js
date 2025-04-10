import React from "react";
import BirthdayImage from "./BirthdayImage";
import ConfettiEffect from "./Confetti";
import Balloons from "./Balloons";

const BirthdayScene = () => {
  return (
    <div>
      <ConfettiEffect />
      <Balloons />
      <BirthdayImage 
        imgSrc={`${process.env.PUBLIC_URL}/images/birthday_photo.jpg`} 
        hatSrc={`${process.env.PUBLIC_URL}/images/hat.svg`} 
      />
    </div>
  );
};

export default BirthdayScene;
