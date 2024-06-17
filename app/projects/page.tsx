import { projects } from "@/lib/projects_data";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project.title}>
            <a
              className="group flex w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-sm hover:bg-gradient-to-b"
              href={project.href}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium leading-none max-w-60 sm:max-w-md">
                  <p className="line-clamp-2 text-sm leading-snug">
                    {project.title}
                  </p>
                  <p className="pt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
