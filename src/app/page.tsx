import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Marquee } from "@/components/sections/Marquee";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

/** Home page — composes Hero, Services, Marquee, Portfolio, and Contact */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Marquee />
      <Portfolio />
      <Contact />
    </>
  );
}
