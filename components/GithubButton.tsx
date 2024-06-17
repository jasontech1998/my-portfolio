import { Github } from "lucide-react";
import { Button } from "./ui/button";

interface TGithubButtonProps {
    href: string;
  }

export const GithubButton: React.FC<TGithubButtonProps> = ({ href }) => {
  return (
    <Button variant="outline" asChild>
      <a rel="noopener noreferrer" target="_blank" href={href}>
        <Github className="mr-2 h-4 w-4" />
        Github Repo
      </a>
    </Button>
  );
};
