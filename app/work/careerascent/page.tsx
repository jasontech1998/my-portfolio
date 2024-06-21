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
        <p className="text-sm self-end leading-snug text-muted-foreground">
          January 2024
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          I played a pivotal role in developing CareerAscent, a new product
          built from 0 -{'>'} 1. As a key team member, I contributed to
          planning the app&apos;s architecture, ultimately selecting React, Material
          UI, and Tailwind CSS for the frontend. This project differed from my
          platform team experience, resembling a startup environment with tight
          deadlines and rapid development. I demonstrated adaptability in this
          fast-paced setting, efficiently implementing features and meeting
          challenging timelines. This experience showcased my ability to thrive
          in diverse development environments and contribute to the full
          lifecycle of a new product.
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
        <div className="flex mt-4 p-4 justify-center rounded-md border-gray-200 border-2">
          <Image
            src="/assets/work/careerascent.png"
            width={750}
            height={650}
            alt="Picture of CareerAscent home page"
            style={{
              maskImage: `linear-gradient(to top, transparent, black 20%)`,
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
