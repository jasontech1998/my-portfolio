import { TypingButton } from "@/components/TypingButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/festifaves";
  const demoHref = "https://festifaves.vercel.app/";
  const techStack = [
    "Nextjs",
    "React",
    "Typescript",
    "NextAuth",
    "OpenAI API",
    "Spotify Web Api",
    "AWS",
    "Tailwind",
    "shadcn",
  ];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Festifaves
        </h1>
        <TypingButton href={repoHref} text="Github" />
      </div>
      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Festifaves leverages the OpenAI API to analyze festival lineups and
          generate personalized Spotify playlists. It uses advanced language
          models to understand artist styles and user preferences. The app also
          integrates AWS S3 for secure and scalable storage of festival lineup
          images, allowing users to easily upload and process event posters.
        </p>
      </div>
      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>
      <div className="py-3">
        <div className="flex flex-wrap justify-between mb-8">
          <h2 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Virtual Showcase
          </h2>
          <TypingButton href={demoHref} text="Demo" />
        </div>
        <p className="text-xs text-muted-foreground mb-4 italic">
          Note: To use the demo, please contact me for Spotify API access (currently in dev mode).
        </p>
        <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
          <video width="650" height="750" controls autoPlay loop muted>
            <source
              src="/assets/projects/festifaves_demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
