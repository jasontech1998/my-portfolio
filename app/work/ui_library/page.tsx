import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";
import { ShowcaseImage } from "@/components/ShowcaseImage";

export default function Page() {
  const techStack = ["LitElement", "Polymer", "Typescript"];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          UI Library
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          January 2021
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          I played a pivotal role in developing and maintaining our internal UI
          component library. This critical resource was utilized by multiple
          product teams across the organization, enhancing consistency and
          efficiency in our development processes.
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
        <ShowcaseImage src="/assets/work/ui_one.png" alt="Picture of UI Library one" />
        <ShowcaseImage src="/assets/work/ui_two.png" alt="Picture of UI Library two" />
        <ShowcaseImage src="/assets/work/ui_three.png" alt="Picture of UI Library three" />
      </div>
    </section>
  );
}
