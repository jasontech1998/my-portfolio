import { StackBadge } from "@/components/StackBadge";

import Image from "next/image";

export default function Page() {
  const techStack = ["LitElement", "Typescript"];

  return (
    <section>
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
          I helped develop HIL3, an improved version of EAB&apos;s custom JSON parser
          language. I leveraged my fresh perspective to enhance readability and
          simplify syntax, reducing code complexity and easing adoption. I
          contributed to design, implementation, and integration across multiple
          products, demonstrating my ability to quickly grasp and improve
          complex systems.
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
              src="/assets/work/hil_login.png"
              width={750}
              height={750}
              alt="Picture of HIL 3 template login view"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/hil_chart.png"
              width={750}
              height={750}
              alt="Picture of HIL 3 template chart view"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/hil_entity.png"
              width={750}
              height={750}
              alt="Picture of HIL 3 template entity view"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
            <Image
              src="/assets/work/hil_render.png"
              width={750}
              height={750}
              alt="Picture of HIL 3 template render types view"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
