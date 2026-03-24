import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";
import { ShowcaseImage } from "@/components/ShowcaseImage";

export default function Page() {
  const techStack = ["React", "Tailwind", "MaterialUI", "Typescript"];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
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
          I held a key role in developing CareerAscent from scratch,
          architecting the app using React, Material UI, and Tailwind. This
          startup-like project demanded rapid development and adaptability to
          tight deadlines, contrasting with previous platform team experiences.
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
        <ShowcaseImage
          src="/assets/work/careerascent.png"
          alt="Picture of CareerAscent home page"
        />
      </div>
    </section>
  );
}
