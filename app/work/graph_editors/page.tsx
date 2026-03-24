import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = [
    "React Flow",
    "TypeScript",
    "React",
    "Next.js",
    "Framer Motion",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Visual Graph Editors
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Built interactive visual graph editors with React Flow — typed
          connections, auto-layout, undo/redo, and drag-to-reconnect — powering
          the core product experience used by process engineers daily. These
          editors allow engineers to model complex biotech and chemical
          engineering processes visually.
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
