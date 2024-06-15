import React, { useState, useEffect, useCallback, useMemo } from "react";
import herobg from "../images/hero-bg.png";
import "./animation-text.css";

const Hero: React.FC = () => {
  const textArray = useMemo(
    () => [
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
    ],
    []
  );

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
    const timer = setInterval(updateText, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [updateText]);

  return (
    <div className="relative bg-[#fae1dd]">
      <div className="flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img
            src={herobg}
            alt="Smart Cleaning Services - Example 1"
            className="object-cover w-full h-auto"
          />
        </div>
        {/* Text Container */}
        <div className="md:w-1/2 flex items-center justify-center p-4 md:p-6 lg:pr-10 text-black">
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Smart Cleaning Services: Redefining Cleanliness
            </h3>
            <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-800">
              With meticulous attention to detail and unwavering commitment to
              quality, we excel in residential, commercial, and specialized
              cleaning services. Expect nothing less than perfection.
            </p>
            <div className="mt-4 text-xl md:text-2xl lg:text-3xl">
              <div className={`fortune-text ${animationClass}`}>
                <h1>{displayText}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
