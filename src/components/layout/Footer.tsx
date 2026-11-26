import { ExternalLink, AtSign, Share2, ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

const FOOTER_NAV = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/pixelforgestudio",
    icon: Share2,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/pixelforgestudio",
    icon: ExternalLink,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/pixelforgestudio",
    icon: AtSign,
  },
];

/** PixelForge Studio — Minimal editorial footer */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)] border-t border-[var(--border)] transition-colors duration-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-sm bg-[var(--accent)]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rotate-45 bg-[var(--accent-foreground)]" />
              </span>
              <span className="font-display font-bold text-lg tracking-tight text-[var(--foreground)]">
                PixelForge
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)] max-w-[240px]">
              An independent digital creative agency turning bold ideas into
              exceptional digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@pixelforge.studio"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                hello@pixelforge.studio
              </a>
              <p className="text-sm text-[var(--muted)]">
                London, United Kingdom
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)] mb-4">
              Social
            </p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">
              &copy; {year} PixelForge Studio. All rights reserved.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 font-display text-xs font-medium text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:border-transparent transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={13} aria-hidden="true" />
              <span>Back to top</span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
