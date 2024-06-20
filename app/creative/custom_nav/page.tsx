import { StackBadge } from "@/components/StackBadge";
import CustomNav from "@/components/creative/CustomNav";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const techStack = ["React", "Typescript", "Framer Motion", "Tailwind"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Navbar
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          June 2024
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <Separator />

      <div className="flex mt-4 p-4 h-64 justify-center items-center rounded-md border-gray-200 border-2">
        <CustomNav />
      </div>
    </section>
  );
}
