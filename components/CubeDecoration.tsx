"use client";

import { motion } from "framer-motion";
import { useRef, useCallback, useState } from "react";

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
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animFrames = useRef<Map<number, number>>(new Map());
  const rotations = useRef<Map<number, number>>(new Map());
  const spinDelays = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const [hoveredCube, setHoveredCube] = useState<number | null>(null);

  const startSpin = useCallback((index: number) => {
    const el = cubeRefs.current[index];
    if (!el) return;
    el.style.transition = "";

    const speed = 120;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      const current = rotations.current.get(index) ?? 0;
      const next = current + speed * dt;
      rotations.current.set(index, next);
      el.style.transform = `rotate(${next}deg)`;
      animFrames.current.set(index, requestAnimationFrame(tick));
    };

    animFrames.current.set(index, requestAnimationFrame(tick));
  }, []);

  const stopSpin = useCallback((index: number) => {
    const frame = animFrames.current.get(index);
    if (frame) cancelAnimationFrame(frame);
    animFrames.current.delete(index);

    const el = cubeRefs.current[index];
    if (!el) return;

    const current = rotations.current.get(index) ?? 0;
    const target = current + 30;
    el.style.transition = "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)";
    el.style.transform = `rotate(${target}deg)`;

    const onEnd = () => {
      el.style.transition = "";
      rotations.current.set(index, target % 360);
      el.style.transform = `rotate(${target % 360}deg)`;
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  }, []);

  const handleHover = useCallback((index: number) => {
    setHoveredCube(index);
    const timeout = setTimeout(() => {
      startSpin(index);
      spinDelays.current.delete(index);
    }, 150);
    spinDelays.current.set(index, timeout);
  }, [startSpin]);

  const handleLeave = useCallback((index: number) => {
    const pending = spinDelays.current.get(index);
    if (pending) {
      clearTimeout(pending);
      spinDelays.current.delete(index);
    } else {
      stopSpin(index);
    }
    setHoveredCube(null);
  }, [stopSpin]);

  return (
    <div
      className={`absolute top-0 right-0 hidden sm:block ${className}`}
    >
      <div className="relative">
        {cubes.map((cube, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: cube.x, top: cube.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleLeave(i)}
          >
            <motion.div
              animate={{
                y: hoveredCube === i ? 0 : [0, -4, 0],
              }}
              transition={
                hoveredCube === i
                  ? { duration: 0.2 }
                  : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5 + cube.floatDelay,
                    }
              }
            >
              <div
                ref={(el) => { cubeRefs.current[i] = el; }}
                className="w-6 h-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-md shadow-sm"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
