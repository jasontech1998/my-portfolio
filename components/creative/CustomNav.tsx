"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CustomNav() {
  const [focused, setFocused] = useState<string | null>(null);

  const items = ["Home", "Work", "Projects", "Creative"];

  return (
    <nav
      onMouseLeave={() => setFocused(null)}
      className="relative z-0 max-w-max flex-1 items-center justify-center pt-2"
    >
      <ul className="group flex flex-1 list-none items-center justify-center">
        {items.map((item) => (
          <li
            onMouseEnter={() => setFocused(item)}
            className="relative cursor-pointer flex justify-center items-center w-20 h-10 mx-3 px-0"
            key={item}
          >
            <span className="relative z-0 font-medium">{item}</span>
            {focused === item ? (
              <motion.div
                transition={{
                  duration: 0.3,
                  type: "spring",
                }}
                className="absolute rounded-lg -z-10 bg-gray-100 w-20 h-10"
                style={{ bottom: "0px", left: "0px", width: "100%" }}
                layoutId="highlight"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
