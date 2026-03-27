"use client";

import { motion } from "framer-motion";

interface CubeConfig {
  x: number;
  y: number;
  floatDelay: number;
}

const cubes: CubeConfig[] = [
  { x: -34, y: 0, floatDelay: 0 },
  { x: 0, y: 0, floatDelay: 0.5 },
  { x: 0, y: 34, floatDelay: 1.0 },
];

export function CubeDecoration({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none hidden sm:block ${className}`}
    >
      <div className="relative">
        {cubes.map((cube, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-md shadow-sm"
            style={{ left: cube.x, top: cube.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
          >
            <motion.div
              className="w-full h-full"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5 + cube.floatDelay,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
