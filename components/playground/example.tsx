"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import "./example.css";

export default function Example() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShouldAnimate((s) => !s)}>
        Animate
      </button>
      <motion.div
        animate={{ scale: shouldAnimate ? 1.5 : 1, y: shouldAnimate ? -40 : 0 }}
        className="element"
      />
    </div>
  );
}
