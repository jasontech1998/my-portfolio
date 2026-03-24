import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";
import { ShowcaseImage } from "@/components/ShowcaseImage";

export default function Page() {
  const techStack = ["LitElement", "Typescript"];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          HIL3
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          July 2022
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          I helped develop HIL3, an improved version of EAB&apos;s custom JSON
          parser language. I leveraged my fresh perspective to enhance
          readability and simplify syntax, reducing code complexity and easing
          adoption. I contributed to design, implementation, and integration
          across multiple products, demonstrating my ability to quickly grasp
          and improve complex systems.
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
        <ShowcaseImage src="/assets/work/hil_login.png" alt="Picture of HIL 3 template login view" />
        <ShowcaseImage src="/assets/work/hil_chart.png" alt="Picture of HIL 3 template chart view" />
        <ShowcaseImage src="/assets/work/hil_entity.png" alt="Picture of HIL 3 template entity view" />
        <ShowcaseImage src="/assets/work/hil_render.png" alt="Picture of HIL 3 template render types view" />
      </div>
    </section>
  );
}
