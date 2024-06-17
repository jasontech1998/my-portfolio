import { projects } from "@/lib/projects_data";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project.title}>
            <a
              className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href={project.href}
            >
              <div className="text-sm font-medium leading-none">
                {project.title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {project.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
