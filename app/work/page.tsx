import { workData } from "@/lib/data";

import { AnimatedItems } from "@/components/AnimatedItems";

export default function Page() {
  return (
    <section>
      <div className="flex items-baseline mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter">Work</h1>
        <p className=" ml-2 font-medium">at</p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://eab.com/"
          className="ml-2 underline cursor-pointer font-medium decoration-sky-500"
        >
          EAB
        </a>
      </div>

      <AnimatedItems items={workData} />
    </section>
  );
}
