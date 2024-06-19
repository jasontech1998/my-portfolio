import { GithubButton } from "@/components/GithubButton";
import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/pumpr-app";

  const techStack = ["React", "Redux", "Firebase"];

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Pumpr</h1>
        <GithubButton href={repoHref} />
      </div>

      <div className="flex pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Overview
        </h2>
        <Separator />
        <p className="leading-7 mt-6 mb-4">
          Pumpr is a Fitness Social Media Platform for users to meet workout
          partners with similar strength, goals and schedules.
        </p>
      </div>
      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Use Case
        </h2>
        <Separator />
        <p className="leading-7 mt-6 mb-4">
        Users provide info about themselves to a user profile, and are matched with other users based on their maximum lifts, workout schedule & location, and fitness goals.
        </p>
      </div>
    </section>
  );
}
