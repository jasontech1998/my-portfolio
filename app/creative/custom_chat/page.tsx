import AiChat from "@/components/AiChat";
import { StackBadge } from "@/components/StackBadge";

export default function Page() {
  const techStack = ["OpenAI Embeddings",'OpenAI Chat', "Pinecone", "React", "Tailwind"];

  return (
    <section>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Custom Chat
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          September 2024
        </p>
      </div>

      <div className="flex mb-8">
        <p className="text-sm self-end leading-snug text-muted-foreground">
          AI Chat about Jason&apos;s resume
        </p>
      </div>

      <p className="text-xs text-muted-foreground mb-4 italic">
          Note: Recently deleted OpenAI API key due to data breach.
        </p>

      <div className="flex flex-wrap pb-6 gap-1">
        {techStack.map((tech, index) => {
          return <StackBadge key={tech + index} title={tech} />;
        })}
      </div>

      <div className="flex mt-4 p-4 justify-center items-center rounded-md border-accent border-2">
        <AiChat />
      </div>
    </section>
  );
}
