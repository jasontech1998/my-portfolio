"use client";
import React, { useState, useEffect } from "react";
import "./animatedNumber.css";

interface AnimatedNumberProps {
  targetNumber: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  duration = 1000,
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    setCurrentNumber(0);

    if (targetNumber > 0) {
      const increment = Math.ceil(targetNumber / (duration / 16));
      const timer = setInterval(() => {
        setCurrentNumber((prev) => {
          const newNumber = prev + increment;
          return newNumber >= targetNumber ? targetNumber : newNumber;
        });
      }, 16);

      return () => clearInterval(timer);
    }
  }, [targetNumber, duration]);

  return (
    <div className="animated-number-container">
      <div className="animated-number">
        {currentNumber.toLocaleString()}
      </div>
    </div>
  );
};

export default AnimatedNumber;