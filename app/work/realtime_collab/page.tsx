import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = [
    "Supabase Realtime",
    "TypeScript",
    "React",
    "PostgreSQL",
    "WebSockets",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Real-time Collaboration
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Built a real-time collaboration layer using Supabase Realtime —
          designed a generic subscription factory hook and 7 domain-specific
          hooks powering live updates across files, blocks, projects, and
          equipment for concurrent multi-user editing. Also designed a custom
          Git-like version control system (branching, merging, drafts,
          checkpoints) for collaborative engineering documents on PostgreSQL.
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
