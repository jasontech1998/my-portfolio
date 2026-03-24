"use client";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface TTypingButtonProps {
  href: string;
  text: string;
}

export const TypingButton: React.FC<TTypingButtonProps> = ({ href, text }) => {

  const buttonText = {
    hidden: { display: "none", opacity: 0},
    visible: {
      opacity: 1,
      display: "inline-block",
      transition: {
        duration: 0.1,
      },
    },
  };

  const textIcon = {
    Github: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
    Demo: <Globe className="mr-2 h-4 w-4" />,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <Button variant="outline" asChild>
        <a rel="noopener noreferrer" target="_blank" href={href}>
          {textIcon[text as keyof typeof textIcon]}
          <motion.span aria-hidden>
            {text.split(" ").map((word, index) => {
              return (
                <span key={`${word}-${index}`}>
                  {word.split("").map((char, index) => {
                    return (
                      <motion.span key={char + index} variants={buttonText}>
                        {char}
                      </motion.span>
                    );
                  })}
                  <span>&nbsp;</span>
                </span>
              );
            })}
          </motion.span>
        </a>
      </Button>
    </motion.div>
  );
};
