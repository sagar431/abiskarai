import type { Metadata } from "next";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { ProductDemo } from "@/components/axion/ProductDemo";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Live demos of AbiskarAI's own products — AI Website Generator, Deep Research Assistant, Vibe app builder, and the MLOps automation agent.",
};

export default function ProductsPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="06"
        badgeLabel="Live demos"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Things we&apos;ve
              <br />
              built to prove it.
            </span>
            <span className="sm:hidden">Things we&apos;ve built to prove it.</span>
          </>
        }
        description="These are our own products — not client work. Each one is a working demo of what we can build for you: generating sites from a prompt, automating research, shipping full apps, and wiring up production ML pipelines."
      />

      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-y-16">
            {products.map((p) => (
              <ProductDemo key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}
