import { GithubButton } from "@/components/GithubButton";
import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/spotify-comment-app";

  const techStack = [
    "React",
    "React Router",
    "Redux",
    "Firebase",
    "Spotify Web Api",
  ];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Podspot
        </h1>
        <GithubButton href={repoHref} />
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Podspot is an app designed to let you listen, comment, and rate your
          favorite podcasts.
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Virtual Showcase
        </h2>
        <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
          <video width="650" height="750" controls autoPlay loop muted>
            <source
              src="/assets/projects/podspot.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
