import { GithubButton } from "@/components/GithubButton";
import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/spotify-share";
  const techStack = [
    "Nextjs",
    "React",
    "Typescript",
    "NextAuth",
    "Spotify Web Api",
    "Tailwind",
    "shadcn",
    "Vercel",
  ];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Spotify Shared
        </h1>
        <GithubButton href={repoHref} />
      </div>
      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>
      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Overview
        </h2>
        <Separator />
        <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
          <video width="650" height="550" controls autoPlay loop muted>
            <source src="/assets/projects/spotify_shared.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Spotify Shared is an app designed to automate the sharing of your
          liked songs from any album. This tool makes it easy for music
          enthusiasts to share their favorite tracks with friends effortlessly.
        </p>
      </div>
      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Use Case
        </h2>
        <Separator />
        <p className="leading-7 mt-6 mb-4">
          Users can share their liked tracks from albums easily by creating a
          playlist with all their liked songs and copying the playlist url for
          sharing.
        </p>
      </div>
    </section>
  );
}
