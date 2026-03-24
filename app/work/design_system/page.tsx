import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/Radix",
    "Framer Motion",
    "Storybook",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Design System
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Created a 55+ component design system with light/dark theming,
          animation, and domain-specific UI patterns including equation editors,
          formula fields, and stream visualizations. The system standardizes the
          product experience across the entire Roebling platform.
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
