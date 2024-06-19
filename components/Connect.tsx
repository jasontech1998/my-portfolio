import { FileText, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Connect = () => {
  return (
    <div className="flex gap-3 -mx-4 mt-12">
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
              <div className="flex align-center">
                <FileText />
              </div>
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
              <div className="flex align-center">
                <Github />
              </div>
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
              <div className="flex align-center">
                <Linkedin />
              </div>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
