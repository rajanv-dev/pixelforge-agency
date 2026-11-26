"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useTheme } from "@/components/providers/ThemeProvider";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/** PixelForge Studio — Sticky minimal navigation bar */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={
        scrolled
          ? "sticky top-0 z-50 w-full bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border)] transition-colors duration-200"
          : "sticky top-0 z-50 w-full bg-[var(--background)] border-b border-transparent transition-colors duration-200"
      }
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between gap-6"
          aria-label="Main navigation"
        >
          {/* Left: Lime geometric logo mark + PixelForge wordmark */}
          <Link
            href="#hero"
            onClick={closeMenu}
            className="flex items-center gap-2.5 shrink-0 rounded-sm"
            aria-label="PixelForge Studio — Home"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-[var(--accent)]"
              aria-hidden="true"
            >
              <span className="h-2.5 w-2.5 rotate-45 bg-[var(--accent-foreground)]" />
            </span>
            <span className="font-display font-bold text-xl tracking-tight text-[var(--foreground)]">
              PixelForge
            </span>
          </Link>

          {/* Center: Home, Services, Work, Contact */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 font-sans text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 rounded-sm"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--foreground)] transition-all duration-300 ease-out group-hover:w-full"
                />
              </a>
            ))}
          </div>

          {/* Right: Theme Toggle + Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              {isDark ? (
                <Sun size={16} aria-hidden="true" />
              ) : (
                <Moon size={16} aria-hidden="true" />
              )}
            </button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-5 py-2.5 font-display text-sm font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] active:scale-[0.98] transition-all duration-200"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              {isDark ? (
                <Sun size={16} aria-hidden="true" />
              ) : (
                <Moon size={16} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
            >
              <div className="flex flex-col gap-2 py-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-md px-3 py-2.5 font-display text-base font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] px-5 py-3 font-display text-sm font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
