"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { renderWithHighlights } from "@/app/helper/render";

type Interest = "tech" | "art" | "fashion" | "music" | "movies";

const interests: Interest[] = ["tech", "art", "fashion", "music", "movies"];

const gradients: Record<Interest, string> = {
  tech: "bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600",
  art: "bg-gradient-to-r from-blue-500 via-teal-400 to-green-400",
  fashion: "bg-gradient-to-r from-rose-500 via-purple-500 to-violet-500",
  music: "bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500",
  movies: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
};

const highlightedTerms = [
  {
    text: "four years of expertise",
    gradient: "bg-gradient-to-r from-amber-400 to-orange-500",
  },
  {
    text: "visually captivating",
    gradient: "bg-gradient-to-r from-violet-400 to-purple-600",
  },
  {
    text: "technical expertise",
    gradient: "bg-gradient-to-r from-blue-400 to-indigo-600",
  },
  {
    text: "artistic vision",
    gradient: "bg-gradient-to-r from-rose-400 to-pink-600",
  },
];

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
      <motion.p
        className="text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I bring{" "}
        {renderWithHighlights(
          "four years of expertise in crafting user-friendly interfaces that seamlessly blend aesthetics with functionality. My passion lies in creating visually captivating and intuitive digital experiences that resonate with people.",
          highlightedTerms
        )}
      </motion.p>
      {/* Can turn this into a seperate component later */}
      <motion.p
        className="text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
      </motion.p>
      <motion.p
        className="text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        These diverse interests fuel my creativity and inspire me to approach
        design challenges with a unique perspective, blending{" "}
        {renderWithHighlights("technical expertise with artistic vision.", highlightedTerms)}{" "}
      </motion.p>
    </section>
  );
}

export default Bio;
