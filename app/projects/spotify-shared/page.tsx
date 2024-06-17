import { GithubButton } from "@/components/GithubButton";
import { Separator } from "@/components/ui/separator";

export default function Page() {

  const repoHref = "https://github.com/jasontech1998/spotify-share";

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Spotify Shared
        </h1>
        <GithubButton href={repoHref} />
      </div>
      <div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Overview
        </h2>
        <Separator />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Spotify Share is an app designed to automate the sharing of your liked
          (or saved) songs from any album. This tool makes it easy for music
          enthusiasts to share their favorite tracks with friends effortlessly.
        </p>
      </div>
      <div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Use Case
        </h2>
        <Separator />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          The primary use case of Spotify Share is to automate the process of
          sharing all your liked (or saved) songs from an album.
        </p>
      </div>
      <div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Why I built this
        </h2>
        <Separator />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
        As a music enthusiast, I often discuss new albums with my friends and share which songs we liked the most. To streamline this process and make sharing easier, I built Spotify Share. After all, sharing is caring!
        </p>
      </div>
    </section>
  );
}
