import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = [
    "Next.js",
    "TypeScript",
    "React",
    "Supabase",
    "Claude API",
    "Framer Motion",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          AI Chat Experience
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Designed and built an integrated AI chat experience for engineering
          editors — a resizable sidebar with canvas viewport auto-panning,
          streaming responses, animated plan cards, and persistent conversation
          state across sessions. The chat enables process engineers to interact
          with AI directly within their workflow without context switching.
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>
    </section>
  );
}
