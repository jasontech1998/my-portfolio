import { BackButton } from "@/components/BackButton";
import { StackBadge } from "@/components/StackBadge";
import { ListArticleLink } from "@/components/creative/ListArticleLink/ListArticleLink";

export default function Page() {
  const techStack = ["React", "Typescript", "Tailwind"];

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <BackButton href="/creative" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Article Links
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          February 2025
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Grid system article links with animated hover motion
        </p>
      </div>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="flex mt-4 p-4 justify-center items-center rounded-md border-accent border-2">
        <ListArticleLink />
      </div>
    </section>
  );
}
