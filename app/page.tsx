import { Connect } from "@/components/Connect";
import { Intro } from "@/components/Intro";
import { Bio } from "@/components/Bio";
import ExpandingCubes from "@/components/creative/ExpandingCubes/ExpandingCubes";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-120px)] py-8 sm:py-0">
      <ExpandingCubes>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">jason yu</h1>
        <div className="space-y-4">
          <Intro />
          <Bio />
          <Connect />
        </div>
      </ExpandingCubes>
    </main>
  );
}
