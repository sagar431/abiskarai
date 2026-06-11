import type { Metadata } from "next";
import { PageHeader } from "@/components/axion/PageHeader";
import { CaseCard } from "@/components/axion/CaseCard";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from AbiskarAI — multi-agent AI products, WhatsApp bots, document AI, and conversion-focused landing pages.",
};

export default function WorkPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="01"
        badgeLabel="Selected work"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Real products,
              <br />
              real results.
            </span>
            <span className="sm:hidden">Real products, real results.</span>
          </>
        }
        description="A short list of projects I've shipped end-to-end — from agent-powered AI products to WhatsApp bots that actually convert. Click in for the problem, the stack, and the metrics."
      />

      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
            {cases.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </div>
        </div>
      </section>

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}
