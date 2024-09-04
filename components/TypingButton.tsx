"use client";
import { Github, Globe } from "lucide-react";
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
    Github: <Github className="mr-2 h-4 w-4" />,
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
