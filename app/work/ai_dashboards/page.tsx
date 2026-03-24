import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Claude API",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          AI Analysis Dashboards
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Architected a schema-driven rendering system for AI-generated analysis
          dashboards that auto-renders charts, tables, and cost breakdowns from
          typed JSON contracts without per-dashboard code. This system enables
          the AI to produce rich, structured engineering analyses that render
          automatically in the frontend.
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
