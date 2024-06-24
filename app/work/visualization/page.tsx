import { StackBadge } from "@/components/StackBadge";

import Image from "next/image";

export default function Page() {
  const techStack = ["LitElement", "Chartjs", "Typescript", "HIL3"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Visualization
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          January 2023
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          I led the comprehensive upgrade of EAB&apos;s visualization library,
          overseeing the project from research to implementation. After
          selecting the most suitable open-source library, I crafted each chart
          type from scratch. I created and presented compelling demos to
          showcase the improvements to the platform team. Taking on an
          educational role, I guided other developers in effectively using these
          upgraded charts. The new visualizations were successfully integrated
          across multiple products. This project highlighted my ability to lead
          complex technical initiatives and drive adoption of new tools.
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/barchart.png"
              width={750}
              height={750}
              alt="Picture of Bar Chart"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/barchart_detailed.png"
              width={750}
              height={750}
              alt="Picture of detailed Bar Chart"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/linechart.png"
              width={750}
              height={750}
              alt="Picture of Line Chart"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
