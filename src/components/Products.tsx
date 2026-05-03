"use client";

import { SectionHeading } from "./SectionHeading";
import { CardsSlider } from "@/components/ui/cards-slider";

export function Products() {
  return (
    <section id="products" className="overflow-hidden px-3 py-20 sm:px-5 lg:px-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Products & Demos"
          title="See It in Action"
          description="Live demos of what we build — AI agents, automated research tools, and web generation."
        />

        <div className="mt-10">
          <CardsSlider />
        </div>
      </div>
    </section>
  );
}
