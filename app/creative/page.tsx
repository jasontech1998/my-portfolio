import { creative } from "@/lib/data";

import { AnimatedItems } from '@/components/AnimatedItems';

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl self-end font-semibold tracking-tighter">
        Creative
      </h1>
      <AnimatedItems items={creative}/>
    </section>
  );
}
