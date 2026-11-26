"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/** PixelForge Studio — Two-column editorial Hero Section */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-[var(--background)] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 transition-colors duration-200"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.p
              {...fadeUp(0.05)}
              className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
            >
              INDEPENDENT DIGITAL CREATIVE AGENCY
            </motion.p>

            <motion.h1
              id="hero-heading"
              {...fadeUp(0.12)}
              className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[var(--foreground)] text-[2.5rem] sm:text-5xl lg:text-[4rem] xl:text-[4.85rem]"
            >
              WE TURN BOLD
              <br />
              IDEAS INTO{" "}
              <span className="inline-block bg-[var(--accent)] px-3 py-0.5 text-[var(--accent-foreground)]">
                DIGITAL
              </span>
              <br />
              EXPERIENCES.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--muted)]"
            >
              We design, build, and elevate digital experiences that help
              ambitious brands stand out, connect, and grow.
            </motion.p>

            <motion.div
              {...fadeUp(0.28)}
              className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3.5"
            >
              <Button
                href="#portfolio"
                variant="dark"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <span>Explore Our Work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: Large workspace image */}
          <div className="lg:col-span-6">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--secondary)]">
              <Image
                src="/images/hero/hero-studio.jpg"
                alt="Modern laptop in a minimal architectural creative studio with subtle lime-green accents"
                width={1400}
                height={1050}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
