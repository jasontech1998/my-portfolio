import { BackButton } from "@/components/BackButton";

const demos = [
  {
    title: "AI Chat",
    description:
      "Integrated AI chat for engineering editors with streaming responses, animated plan cards, and resizable sidebar with canvas auto-panning.",
    src: "/assets/work/roebling/AIChatFinalDemo.mp4",
  },
  {
    title: "Login",
    description:
      "Polished authentication flow with smooth transitions and motion design.",
    src: "/assets/work/roebling/LoginFinalDemo.mp4",
  },
];

export default function Page() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BackButton href="/work" />
      </div>
      <div className="flex flex-wrap justify-between mb-8">
        <h1 className="text-2xl self-end font-semibold tracking-tighter">
          Showcase
        </h1>
        <p className="text-sm self-end leading-snug text-muted-foreground">
          Roebling &middot; 2025
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {demos.map((demo) => (
          <div key={demo.title}>
            <h2 className="text-lg font-medium mb-2">{demo.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {demo.description}
            </p>
            <div className="rounded-lg overflow-hidden border border-accent">
              <video
                src={demo.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
