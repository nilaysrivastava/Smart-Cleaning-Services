import React, { useState, useEffect, useCallback } from "react";
import herobg from "../images/hero-bg.png";
import "./animation-text.css";

const Hero: React.FC = () => {
  const textArray = [
    "Aquarium Cleaning",
    "Bathroom Cleaning",
    "Car Wash",
    "Carpet Cleaning",
    "Floor Cleaning",
    "House Cleaning",
    "Housekeeping",
    "Kitchen Cleaning",
    "Office Cleaning",
    "Pest Control",
    "Septic Tank",
    "Sewage Tank",
    "Sofa Cleaning",
    "Water Tank",
  ];
  const [displayText, setDisplayText] = useState(textArray[0]);
  const [animationClass, setAnimationClass] = useState("scrolling-text");

  const updateText = useCallback(() => {
    setAnimationClass("scrolling-text-exit");
    setTimeout(() => {
      setDisplayText(
        textArray[(textArray.indexOf(displayText) + 1) % textArray.length]
      );
      setAnimationClass("scrolling-text-enter");
    }, 500);
  }, [displayText, textArray]);

  useEffect(() => {
    const timer = setInterval(updateText, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [updateText]);
  return (
    <div className="relative image-container bg-[#fae1dd]">
      <img
        src={herobg}
        alt="Smart Cleaning Services - Example 1"
        className=" object-cover"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div> */}
      <div className="absolute left-auto top-0 bottom-0 right-10 p-6 pr-10 text-black flex items-center">
        <div className="max-w-lg">
          <h3 className="text-4xl font-bold">
            Smart Cleaning Services: Redefining Cleanliness
          </h3>
          <p className="mt-2 text-2xl text-gray-800">
            With meticulous attention to detail and unwavering commitment to
            quality, we excel in residential, commercial, and specialized
            cleaning services. Expect nothing less than perfection.
          </p>
          <div className="pl-16 ml-16 text-3xl">
            <div className={`fortune-text ${animationClass}`} style={{}}>
              <h1 className="text-3xl">{displayText}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
