import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Page() {
  const techStack = ["LitElement", "Polymer", "Typescript"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          UI Library
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          January 2021
        </p>
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
            <Image
              src="/assets/work/ui_one.png"
              width={550}
              height={550}
              alt="Picture of UI Library one"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
            <Image
              src="/assets/work/ui_two.png"
              width={550}
              height={550}
              alt="Picture of UI Library two"
              priority
            />
          </div>
          <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
            <Image
              src="/assets/work/ui_three.png"
              width={550}
              height={550}
              alt="Picture of UI Library three"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
