import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { TechMarquee } from "@/components/TechMarquee";
import { Stats } from "@/components/Stats";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <main className="flex w-full flex-col">
        <Hero />

        <TechMarquee />

        <ScrollReveal>
          <Stats />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Products />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Process />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>

        <Footer />
      </main>

      <ChatWidget />
    </div>
  );
}
