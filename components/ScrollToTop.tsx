"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 sm:left-4 sm:right-auto z-50 flex items-center justify-center w-9 h-9 rounded-md border-2 border-black dark:border-white bg-white dark:bg-black shadow-sm backdrop-blur-xl hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
