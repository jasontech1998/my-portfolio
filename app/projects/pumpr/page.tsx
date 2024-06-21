import { GithubButton } from "@/components/GithubButton";
import { StackBadge } from "@/components/StackBadge";

import Image from "next/image";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/pumpr-app";

  const techStack = ["React", "React Router", "Redux", "Firebase"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Pumpr
        </h1>
        <GithubButton href={repoHref} />
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Pumpr is a Fitness Social Media Platform for users to meet workout
          partners with similar strength, goals and schedules.
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
          <Image
            src="/assets/projects/pumpr.png"
            width={750}
            height={750}
            alt="Picture of Pumpr landing page"
            priority
          />
        </div>
        <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
          <Image
            src="/assets/projects/pumpr_design.jpeg"
            width={750}
            height={750}
            alt="Picture of Pumpr landing page"
            priority
          />
        </div>
      </div>
    </section>
  );
}
