import { TypingButton } from "@/components/TypingButton";
import { StackBadge } from "@/components/StackBadge";
import { BackButton } from "@/components/BackButton";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/pretext-audio";
  const demoHref = "https://wavetext-audio.vercel.app/";

  const techStack = [
    "Next.js 15",
    "TypeScript",
    "Canvas API",
    "Web Audio API",
    "@chenglou/pretext",
    "Tailwind CSS 4",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/projects" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Wavetext
        </h1>
        <TypingButton href={repoHref} text="Github" />
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Audio-reactive lyrics visualizer that flows text around a live
          frequency-driven blob using the Pretext text layout engine. Features
          multi-column text reflow, dynamic font sizing, particle effects, and
          word-level lyric highlighting synced to music.
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
        <div className="flex mt-4 p-2 sm:p-4 justify-center rounded-md border-accent border-2">
          <video className="w-full" controls autoPlay loop muted playsInline>
            <source
              src="/assets/projects/wavetext-demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
