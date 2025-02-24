"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Interest = "tech" | "art" | "fashion" | "music" | "movies";

const interests: Interest[] = [
  "tech",
  "art",
  "fashion",
  "music",
  "movies",
];

const gradients: Record<Interest, string> = {
  tech: "bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600",
  art: "bg-gradient-to-r from-blue-500 via-teal-400 to-green-400",
  fashion: "bg-gradient-to-r from-rose-500 via-purple-500 to-violet-500",
  music: "bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500",
  movies: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
};


export function Bio() {
  const [currentInterest, setCurrentInterest] = useState<number>(0);
  const [isPageVisible, setIsPageVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    let interval: NodeJS.Timeout | null = null;

    if (isPageVisible) {
      interval = setInterval(() => {
        setCurrentInterest((prev) => (prev + 1) % interests.length);
      }, 2500);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPageVisible]);

  const currentWord = interests[currentInterest];

  return (
    <section className="space-y-6 max-w-2xl mx-auto">
      <p className="text-foreground">
        I bring over four years of expertise in crafting appealing and
        user-friendly interfaces that seamlessly blend aesthetics with
        functionality. My passion lies in creating visually captivating and
        intuitive digital experiences that resonate with people.
      </p>
      <p className="text-foreground whitespace-nowrap">
        Beyond my professional pursuits, I enjoy{" "}
        <span className="relative inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              className={`inline-block text-transparent ${gradients[currentWord]} bg-clip-text font-semibold`}
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  opacity: { duration: 0.4, ease: "easeOut" },
                  y: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.6,
                  },
                },
              }}
              exit={{
                opacity: 0,
                y: -5,
                transition: {
                  opacity: { duration: 0.2 },
                  y: { duration: 0.3 },
                },
              }}
            >
              {currentWord}.
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
      <p className="text-foreground">
        These diverse interests fuel my creativity and inspire me to approach
        design challenges with a unique perspective, blending technical
        expertise with artistic vision.
      </p>
    </section>
  );
}

export default Bio;
