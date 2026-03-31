import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";
import ExpandingCubes from "@/components/creative/ExpandingCubes/ExpandingCubes";

export default function Page() {
  const techStack = ["React", "Typescript", "Framer Motion", "Tailwind"];

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <BackButton href="/creative" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Cubes Animation
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          February 2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Expanding cube grid that transforms to show content within using
          Framer Motion animations
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <ExpandingCubes>
        <div className="h-52 flex justify-center items-center">
          <h1 className="text-center font-semibold">Welcome</h1>
        </div>
      </ExpandingCubes>
    </section>
  );
}
