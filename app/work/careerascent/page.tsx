import { StackBadge } from "@/components/StackBadge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Page() {
  const techStack = ["React", "Tailwind", "MaterialUI", "Typescript"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          CareerAscent
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">January 2024</p>
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
        <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
          <Image
            src="/assets/work/careerascent.png"
            width={750}
            height={650}
            alt="Picture of CareerAscent home page"
            priority
          />
        </div>
      </div>
    </section>
  );
}
