import { roeblingData, eabData } from "@/lib/data";

import { AnimatedItems } from "@/components/AnimatedItems";

export default function Page() {
  return (
    <section>
      <div className="flex items-baseline mb-8 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Work</h1>
        <p className=" ml-2 font-medium">at</p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.roebling.com"
          className="ml-2 underline cursor-pointer font-medium decoration-sky-500"
        >
          Roebling
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Founding Software Engineer &middot; Apr. 2025 &ndash; Present
      </p>

      <AnimatedItems items={roeblingData} />

      <div className="flex items-baseline mb-8 mt-16 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tighter">Work</h1>
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
      <p className="text-sm text-muted-foreground mb-2">
        Software Engineer &middot; Jan. 2021 &ndash; Aug. 2024
      </p>

      <AnimatedItems items={eabData} />
    </section>
  );
}
