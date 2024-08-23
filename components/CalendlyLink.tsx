"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyLink: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jasontech1998/15min",
      });
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Tooltip>
        <TooltipTrigger>
          <a
            href="#"
            onClick={openCalendly}
            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [90, 0] }}
              transition={{ duration: 1 }}
              className="flex align-center"
            >
              <Calendar />
            </motion.div>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Schedule time with me</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default CalendlyLink;
