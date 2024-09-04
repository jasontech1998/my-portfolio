import { TypingButton } from "@/components/TypingButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const repoHref = "https://github.com/jasontech1998/react-trivia-game";
  const techStack = [
    "React",
    "Typescript",
    "WebSocket API",
    "Tailwind",
  ];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Real Time Trivia Game
        </h1>
        <TypingButton href={repoHref} text="Github" />
      </div>
      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          A fast-paced, real-time trivia game where two players go head-to-head, racing to answer questions quickly and accurately. Leveraging WebSocket technology, the game ensures instant updates and seamless interaction between players, creating a truly dynamic and competitive experience.
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
        <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
          <video width="650" height="750" controls autoPlay loop muted>
            <source
              src="/assets/projects/triviagame_final.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
