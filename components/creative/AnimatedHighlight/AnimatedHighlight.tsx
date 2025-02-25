"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedHighlight = ({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`relative inline-block text-transparent ${gradient} bg-clip-text font-medium`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0.9 }}
      whileHover={{
        opacity: 1,
        scale: 1.05,
        y: -2, // Slight upward movement
        transition: {
          duration: 0.3,
          type: "spring", // Spring physics for more natural motion
          stiffness: 300,
          damping: 10,
        },
      }}
      // Add a subtle pulse shadow effect when hovered
      animate={{
        textShadow: isHovered
          ? "0 0 8px rgba(255,255,255,0.5)"
          : "0 0 0px rgba(255,255,255,0)",
      }}
    >
      {children}
      {isHovered && (
        <motion.span
          className="absolute inset-0 -z-10 opacity-25 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      )}
    </motion.span>
  );
};

export default AnimatedHighlight;
