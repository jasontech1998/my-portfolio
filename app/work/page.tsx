import { workData } from "@/lib/work_data";
import { ChevronRight } from "lucide-react";

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

      <div className="flex flex-col gap-3">
        {workData.map((work) => (
          <article key={work.title}>
            <a
              className="flex flex-col w-full p-3 -mx-3 justify-end rounded-md from-muted/50 to-muted no-underline outline-none focus:shadow-sm hover:bg-gradient-to-b"
              href={work.href}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium leading-none max-w-60 sm:max-w-md">
                  <p className="line-clamp-2 text-sm leading-snug">
                    {work.title}
                  </p>
                  <p className="pt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {work.description}
                  </p>
                </div>
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
