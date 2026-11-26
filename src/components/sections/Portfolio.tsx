import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";

/** PixelForge Studio — Selected Projects 3-column Portfolio grid */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 lg:py-28 bg-[var(--background)] transition-colors duration-200"
    >
      <Container>
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              SELECTED PROJECTS
            </p>
            <h2
              id="portfolio-heading"
              className="font-display font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] text-[var(--foreground)]"
            >
              Good ideas deserve
              <br />
              great execution.
            </h2>
          </div>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            Concept Case Studies — 0{projects.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, i) => {
            const indexLabel = String(i + 1).padStart(2, "0");

            return (
              <article key={project.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--secondary)]">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    width={1000}
                    height={750}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <span className="absolute top-3.5 left-3.5 rounded-md border border-[var(--border)] bg-[var(--background)]/90 px-2.5 py-1 font-display text-[11px] font-semibold tracking-widest text-[var(--foreground)] backdrop-blur-sm">
                    {indexLabel}
                  </span>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-3.5 left-3.5 translate-y-2 rounded-md bg-[var(--accent)] px-3 py-1.5 font-display text-xs font-semibold text-[var(--accent-foreground)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    {project.description}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg tracking-tight text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 font-sans text-xs font-medium text-[var(--muted)]">
                      {project.category}
                    </p>
                  </div>

                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-all duration-200 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)]"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
