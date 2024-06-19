"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { TItems } from "@/lib/types";

export const AnimatedItems = ({ items }: { items: TItems[] }) => {
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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
      className="flex flex-col gap-3 mt-8"
    >
      {items.map((item) => (
        <motion.article variants={animatedItems} key={item.title}>
          <a
            className="flex flex-col w-full p-3 -mx-3 justify-end rounded-md from-muted/50 to-muted no-underline outline-none focus:shadow-sm hover:bg-gradient-to-b"
            href={item.href}
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
        </motion.article>
      ))}
    </motion.div>
  );
};
