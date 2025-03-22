import React from "react";
import BirthdayImage from "./BirthdayImage";
import ConfettiEffect from "./Confetti";
import Balloons from "./Balloons";

const BirthdayScene = () => {
  return (
    <div>
      <ConfettiEffect />
      <Balloons />
      <BirthdayImage imgSrc="/images/birthday_photo.jpg" hatSrc="/images/hat.svg" />
    </div>
  );
};

export default BirthdayScene;
