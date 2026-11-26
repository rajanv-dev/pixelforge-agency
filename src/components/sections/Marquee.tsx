const MARQUEE_WORDS = [
  "DESIGN",
  "CREATE",
  "INNOVATE",
  "BUILD",
  "INSPIRE",
  "DIGITAL",
];

/** PixelForge Studio — Seamless CSS infinite typography marquee */
export function Marquee() {
  return (
    <section
      aria-label="Agency ethos"
      className="w-full overflow-hidden bg-[var(--background)] py-10 sm:py-14 lg:py-16 select-none transition-colors duration-200"
    >
      <div className="flex w-max animate-marquee-seamless items-center">
        {[0, 1].map((trackIndex) => (
          <div
            key={trackIndex}
            className="flex shrink-0 items-center"
            aria-hidden={trackIndex === 1 ? "true" : undefined}
          >
            {MARQUEE_WORDS.map((word) => (
              <div
                key={`${trackIndex}-${word}`}
                className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5"
              >
                <span className="font-display font-bold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-[var(--foreground)]">
                  {word}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-lg sm:text-2xl font-bold leading-none"
                >
                  ✳
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
