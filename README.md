# PixelForge Studio

> **We Turn Bold Ideas Into Digital Experiences.**

A modern, responsive digital creative agency website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Project Overview

PixelForge Studio is an editorial creative agency website featuring a warm cream (`#F7F6F2`) Light Mode and deep charcoal (`#111111`) Dark Mode powered by unified CSS custom properties and an electric lime (`#C5F467`) accent, paired with **Space Grotesk** headings and **Inter** body typography.

---

## Features

- **Fluid Editorial Layout**: `1600px` max-width container with responsive `clamp(24px, 5vw, 80px)` horizontal padding across `375px` to `1657px+` viewports.
- **Sticky Navigation & Theme Switcher**: Centered links (`Home`, `Services`, `Work`, `Contact`), hydration-safe `ThemeProvider` toggle with `localStorage` persistence, lime-green `Let's Talk ↗` CTA, and animated mobile drawer.
- **Two-Column Hero**: Bold display typography with `"DIGITAL"` lime highlight, `"Explore Our Work →"` and `"Let's Talk"` CTAs, and optimized studio workspace image.
- **Services Grid**: 4-column desktop card grid (`UI/UX Design`, `Web Development`, `Brand Identity`, `Digital Strategy`) with Card 1 highlighted in `#C5F467` and hover micro-interactions.
- **Seamless CSS Marquee**: Continuous GPU-accelerated horizontal typography marquee (`DESIGN ✳ CREATE ✳ INNOVATE ✳ BUILD ✳ INSPIRE ✳ DIGITAL ✳`) with hover pause and `prefers-reduced-motion` support.
- **Portfolio Showcase**: 6 curated concept case studies (`NOVA FINANCE`, `FORM & FUNCTION`, `AETHER STUDIO`, `GREENSPACE`, `VISION HEALTH`, `MONO ARCHITECTS`) in a 3-column desktop grid with numbered badges, hover zoom, and description pills.
- **Contact Form**: Validated form (`Full Name`, `Email Address`, optional `Project Type`, `Message`) connected to `POST /api/contact`.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.x | App Router, `next/image`, `next/font/google` |
| React | 19.x | Server & Client Components |
| TypeScript | 5.x | Strict type safety |
| Tailwind CSS | 4.x | Utility-first CSS & unified CSS variables |
| Framer Motion | 14.x | Hero entrance & mobile menu animations |
| Lucide React | 1.x | Minimalist UI icons |
| ESLint | 9.x | `eslint-config-next` (Core Web Vitals + TypeScript) |
| clsx + tailwind-merge | latest | Safe Tailwind class merging |

---

## Folder Structure

```text
pixelforge-studio/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hero/
│       │   └── hero-studio.jpg
│       └── projects/
│           ├── project-aether.jpg
│           ├── project-forma.jpg
│           ├── project-greenspace.jpg
│           ├── project-mono.jpg
│           ├── project-nova.jpg
│           └── project-vision.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx
│   │   ├── sections/
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Services.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Container.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── lib/
│   │   └── validation.ts
│   └── types/
│       └── index.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation

```bash
npm install
```

---

## Development Commands

```bash
# Start development server
npm run dev

# Run ESLint
npm run lint

# Type-check with TypeScript
npm run typecheck
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

```bash
npm run build
npm run start
```

---

## Deployment Instructions

Deploy to **Vercel** (recommended):

```bash
npm i -g vercel
vercel --prod
```

No environment variables are required for the base site.

---

## Contact Form Limitations

The contact form performs full client-side and server-side validation (`src/lib/validation.ts` and `src/app/api/contact/route.ts`), returning `200` on valid submissions and `422` on validation errors. **External email delivery is not configured**; to send real emails in production, integrate a provider such as Resend, SendGrid, or Nodemailer inside `src/app/api/contact/route.ts`.

---

## Assumptions & Additional Features

- **Brand & Content**: Built around the fictional **PixelForge Studio** identity with 4 core services and 6 portfolio concept case studies.
- **Theme Provider**: Implemented a hydration-safe light/dark `ThemeProvider` (`src/components/providers/ThemeProvider.tsx`) using `useSyncExternalStore` and unified CSS variables in `src/app/globals.css`, defaulting to Light Mode (`#F7F6F2`) and persisting user preference in `localStorage`.
- **Optional Project Type Field**: Added an optional `Project Type` selector to the Contact form for better lead qualification.
