import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const techStack = ["LitElement"];

  return (
    <section>
      <div className="flex flex-wrap justify-between">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">HIL3</h1>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="py-3">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Overview
        </h2>
        <Separator />
        <p className="leading-7 mt-6 mb-4">W.I.P.</p>
      </div>
    </section>
  );
}
