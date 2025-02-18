"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const ExpandingCubes = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;
      if (width < 768) {
        return [
          { x: -180, y: -100 },
          { x: 0, y: -100 },
          { x: 180, y: -100 },
          { x: -180, y: 100 },
          { x: 0, y: 100 },
          { x: 180, y: 100 },
        ];
      }

      return [
        { x: -300, y: -100 },
        { x: 0, y: -100 },
        { x: 300, y: -100 },
        { x: -300, y: 100 },
        { x: 0, y: 100 },
        { x: 300, y: 100 },
      ];
    };

    setPositions(updatePositions());

    const handleResize = () => {
      setPositions(updatePositions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cubeVariants = {
    initial: { x: 0, y: 0, opacity: 1, scale: 2 },
    animate: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    }),
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full">
      <div className="relative h-64 w-full flex items-center justify-center mb-8">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-8 h-8 bg-gray-300 rounded-lg"
            variants={cubeVariants}
            initial="initial"
            animate="animate"
            custom={position}
          />
        ))}

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl self-end font-semibold tracking-tighter">
              Welcome
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandingCubes;
