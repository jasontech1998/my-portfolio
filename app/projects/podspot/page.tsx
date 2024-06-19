import { GithubButton } from "@/components/GithubButton";
import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/spotify-comment-app";

  const techStack = ["React", "Redux", "Firebase", "Spotify Web Api"];

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Podspot
        </h1>
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
          Podspot is an app designed to let you listen, comment, and rate your
          favorite podcasts.
        </p>
      </div>
      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Use Case
        </h2>
        <Separator />
        <p className="leading-7 mt-6 mb-4">
          Podspot streamlines the process of curating and disseminating these
          captivating moments by allowing users to seamlessly pinpoint and share
          specific timestamps from podcasts.
        </p>
      </div>
    </section>
  );
}
