"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { workData } from "@/lib/data";

export default function CustomStackItems() {
  const animatedItems = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const [focused, setFocused] = useState<string | null>(null);

  const items = workData;

  return (
    <div onMouseLeave={() => setFocused(null)}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col gap-3 mt-8"
      >
        {items.map((item) => (
          <motion.article
            className="relative z-0"
            variants={animatedItems}
            key={item.title}
            whileHover={{
              x: 10,
              transition: { type: "string", duration: 0.2, delay: 0.1 },
            }}
          >
            <a
              className="flex flex-col w-full p-3 -mx-3 relative cursor-pointer justify-end rounded-md from-muted/50 to-muted no-underline outline-none focus:shadow-sm"
              href={item.href}
              onMouseEnter={() => setFocused(item.title)}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium leading-none max-w-60 sm:max-w-md">
                  <p className="line-clamp-2 text-sm leading-snug">
                    {item.title}
                  </p>
                  <p className="pt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </a>

            {focused === item.title ? (
              <motion.div
                transition={{
                  duration: 0.3,
                  type: "easeIn",
                }}
                className="absolute inset-0 -z-10 -mx-3 p-3 w-full rounded-md from-muted/50 to-muted bg-gradient-to-b"
                layoutId="highlight"
              />
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
