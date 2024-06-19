"use client";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface TGithubButtonProps {
  href: string;
}

export const GithubButton: React.FC<TGithubButtonProps> = ({ href }) => {
  const text = "Github Repo";

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <Button variant="outline" asChild>
        <a rel="noopener noreferrer" target="_blank" href={href}>
          <Github className="mr-2 h-4 w-4" />
          <motion.span aria-hidden>
            {text.split(" ").map((word, index) => {
              return (
                <span key={word + index}>
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
