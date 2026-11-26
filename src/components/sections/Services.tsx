import {
  Pencil,
  Code2,
  Layers,
  BarChart3,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";

const iconMap: Record<string, LucideIcon> = {
  Pencil,
  Code2,
  Layers,
  BarChart3,
};

/** PixelForge Studio — Four-column editorial Services section */
export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-[var(--secondary)] border-y border-[var(--border)] transition-colors duration-200"
    >
      <Container>
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              WHAT WE DO
            </p>
            <h2
              id="services-heading"
              className="font-display font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] text-[var(--foreground)]"
            >
              Creative thinking.
              <br />
              Digital execution.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--muted)] max-w-md">
            We combine strategy, design, and technology to build meaningful
            digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Pencil;
            const isHighlighted = i === 0;

            return (
              <article
                key={service.id}
                className={
                  isHighlighted
                    ? "group relative flex h-full flex-col justify-between rounded-lg border border-[var(--accent)] bg-[var(--accent)] p-8 text-[#171717] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-[var(--accent-hover)]"
                    : "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 text-[var(--foreground)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--foreground)]/40"
                }
              >
                {!isHighlighted && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                )}

                <div>
                  <div className="mb-9 flex items-center justify-between">
                    <div
                      className={
                        isHighlighted
                          ? "flex h-12 w-12 items-center justify-center rounded-md bg-[#171717]/10 text-[#171717]"
                          : "flex h-12 w-12 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--foreground)] transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-[#171717]"
                      }
                      aria-hidden="true"
                    >
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <span
                      className={
                        isHighlighted
                          ? "font-display text-xs font-semibold tracking-widest text-[#171717]/75"
                          : "font-display text-xs font-semibold tracking-widest text-[var(--muted)]"
                      }
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className={
                      isHighlighted
                        ? "font-display font-bold text-xl tracking-tight text-[#171717] mb-3"
                        : "font-display font-bold text-xl tracking-tight text-[var(--foreground)] mb-3"
                    }
                  >
                    {service.title}
                  </h3>

                  <p
                    className={
                      isHighlighted
                        ? "text-sm leading-relaxed text-[#171717]/85"
                        : "text-sm leading-relaxed text-[var(--muted)]"
                    }
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className={
                    isHighlighted
                      ? "mt-10 flex items-center justify-between pt-4 border-t border-[#171717]/15"
                      : "mt-10 flex items-center justify-between pt-4 border-t border-[var(--border)]"
                  }
                >
                  <span
                    className={
                      isHighlighted
                        ? "font-sans text-xs font-medium text-[#171717]/80"
                        : "font-sans text-xs font-medium text-[var(--muted)]"
                    }
                  >
                    Learn more
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className={
                      isHighlighted
                        ? "flex h-9 w-9 items-center justify-center rounded-full border border-[#171717]/25 text-[#171717] transition-all duration-200 group-hover:bg-[#171717] group-hover:text-[var(--accent)]"
                        : "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-[#171717]"
                    }
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
