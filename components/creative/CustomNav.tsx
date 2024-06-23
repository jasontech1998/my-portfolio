"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CustomNav() {
  const [focused, setFocused] = useState<string | null>(null);

  const items = ["Home", "Work", "Projects", "Creative"];

  return (
    <nav
      onMouseLeave={() => setFocused(null)}
      className="relative z-0 w-full flex-1 items-center justify-center pt-2"
    >
      <ul className="group flex flex-1 list-none items-center justify-center">
        {items.map((item) => (
          <li
            onMouseEnter={() => setFocused(item)}
            className="relative cursor-pointer flex justify-center items-center p-2 mx-2"
            key={item}
          >
            <span className="relative z-0 font-medium">{item}</span>
            {focused === item ? (
              <motion.div
                transition={{
                  duration: 0.3,
                  type: "spring",
                }}
                className="absolute inset-0 -z-10 p-3 w-full rounded-md bg-gray-100"
                layoutId="highlight"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
