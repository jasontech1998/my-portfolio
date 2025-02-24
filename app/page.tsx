import { Connect } from "@/components/Connect";
import { Intro } from "@/components/Intro";
import { Bio } from "@/components/Bio";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">jason yu</h1>
      <div className="space-y-6">
        <Intro />
        <Bio />
        <Connect />
      </div>
    </main>
  );
}