"use client";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CalendlyLink from "./CalendlyLink";

export const Connect = () => {
  return (
    <div className="flex gap-3 -mx-3 mt-12">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/assets/JasonResume2024.pdf"
              className={
                "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [90, 0] }}
                transition={{ duration: 1 }}
                className="flex align-center"
              >
                <FileText />
              </motion.div>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>View resume</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jasontech1998"
              className={
                "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [90, 0] }}
                transition={{ duration: 1 }}
                className="flex align-center"
              >
                <Github />
              </motion.div>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit GitHub Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/jasonyu529/"
              className={
                "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [90, 0] }}
                transition={{ duration: 1 }}
                className="flex align-center"
              >
                <Linkedin />
              </motion.div>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/lockedinagain"
              className={
                "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              }
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [90, 0] }}
                transition={{ duration: 1 }}
                className="flex align-center"
              >
                <Twitter />
              </motion.div>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit Twitter Profile</p>
          </TooltipContent>
        </Tooltip>

        <CalendlyLink />
      </TooltipProvider>
    </div>
  );
};
