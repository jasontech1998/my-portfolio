import { StackBadge } from "@/components/StackBadge";
import AnimatedButton from "@/components/creative/AnimatedButton";

export default function Page() {
  const techStack = ["React", "Typescript", "Framer Motion", "Tailwind"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Animated Button
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          June 2024
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
        This is a custom button with loading animation.
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="flex mt-4 p-4 justify-center items-center rounded-md border-accent border-2">
        <AnimatedButton />
      </div>
    </section>
  );
}
