import { StackBadge } from "@/components/StackBadge";

import Image from "next/image";

export default function Page() {
  const techStack = ["LitElement", "Ionic", "Angular", "Typescript"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Native App
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          June 2024
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          I contributed to developing a new native experience using the Ionic
          framework. This project involved rapidly rebuilding features from the
          old native app while adapting to an ongoing development process.
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
        <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
          <Image
            src="/assets/work/native_one.png"
            width={500}
            height={500}
            alt="Picture of Journeys feature in Native one"
            priority
          />
        </div>
        <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
          <Image
            src="/assets/work/native_two.png"
            width={500}
            height={500}
            alt="Picture of Journeys feature in Native two"
            priority
          />
        </div>
        <div className="flex mt-4 p-4 justify-center rounded-md border-accent border-2">
          <Image
            src="/assets/work/native_three.png"
            width={500}
            height={500}
            alt="Picture of Journeys feature in Native three"
            priority
          />
        </div>
      </div>
    </section>
  );
}
