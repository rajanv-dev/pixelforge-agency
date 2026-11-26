import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelforge.studio"),
  title: "PixelForge Studio — Independent Digital Creative Agency",
  description:
    "We design, build, and elevate digital experiences that help ambitious brands stand out, connect, and grow.",
  keywords: [
    "digital creative agency",
    "UI/UX design",
    "web development",
    "brand identity",
    "digital strategy",
    "PixelForge Studio",
  ],
  authors: [{ name: "PixelForge Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelforge.studio",
    siteName: "PixelForge Studio",
    title: "PixelForge Studio — We Turn Bold Ideas Into Digital Experiences",
    description:
      "Independent digital creative agency crafting intuitive interfaces, scalable websites, and distinctive brand identities.",
    images: [
      {
        url: "/images/hero/hero-studio.jpg",
        width: 1200,
        height: 900,
        alt: "PixelForge Studio — Independent Digital Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelForge Studio — We Turn Bold Ideas Into Digital Experiences",
    description:
      "Independent digital creative agency crafting intuitive interfaces, scalable websites, and distinctive brand identities.",
    images: ["/images/hero/hero-studio.jpg"],
    creator: "@pixelforgestudio",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pixelforge-theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
