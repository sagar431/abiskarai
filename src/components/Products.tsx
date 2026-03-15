"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product } from "@/data/products";
import { SectionHeading } from "./SectionHeading";
import { CoverflowCarousel } from "./CoverflowCarousel";

const categoryColour: Record<string, string> = {
  Agent: "text-primary-400 bg-primary-500/10 border border-primary-500/20",
  Web: "text-blue-400 bg-blue-500/10 border border-blue-500/20",
  WhatsApp: "text-green-400 bg-green-500/10 border border-green-500/20",
  Builder: "text-purple-400 bg-purple-500/10 border border-purple-500/20",
};

function getVideoId(embedUrl: string) {
  return embedUrl.split("/").pop() ?? "";
}

function ProductCard({ product, isActive }: { product: Product; isActive: boolean }) {
  const videoId = getVideoId(product.demoUrl);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.04] shadow-2xl">
      <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
        {isActive ? (
          <iframe
            src={product.demoUrl}
            title={product.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={product.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30 backdrop-blur-sm">
                <svg className="ml-1 h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 p-6">
        <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColour[product.category]}`}>
          {product.category}
        </span>
        <div>
          <h3 className="text-lg font-bold text-white">{product.title}</h3>
          <p className="mt-1 text-sm text-primary-400">{product.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-white/50">{product.description}</p>
      </div>
    </div>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CoverflowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="2" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="4" width="3.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <rect x="11.5" y="4" width="3.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [view, setView] = useState<"grid" | "coverflow">("grid");

  const coverflowItems = products.map((product, i) => (
    <ProductCard key={product.slug} product={product} isActive={i === activeIndex} />
  ));

  return (
    <section id="products" className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header row with view toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Products & Demos"
            title="See It in Action"
            description="Live demos of what we build — AI agents, automated research tools, and web generation."
          />
          {/* Hide coverflow toggle on mobile — coverflow needs desktop width */}
          <div className="hidden sm:flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <button
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                view === "grid"
                  ? "bg-primary-500 text-white shadow"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <GridIcon /> Grid
            </button>
            <button
              onClick={() => setView("coverflow")}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                view === "coverflow"
                  ? "bg-primary-500 text-white shadow"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <CoverflowIcon /> Coverflow
            </button>
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
              >
                {products.map((product) => (
                  <article
                    key={product.slug}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.04] shadow-xl transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden pb-[56.25%]">
                      <iframe
                        src={product.demoUrl}
                        title={product.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColour[product.category]}`}>
                        {product.category}
                      </span>
                      <div>
                        <h3 className="font-bold text-white transition group-hover:text-primary-400">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-xs text-primary-400">{product.tagline}</p>
                      </div>
                      <p className="text-xs leading-relaxed text-white/50">{product.description}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="coverflow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <CoverflowCarousel
                  items={coverflowItems}
                  activeIndex={activeIndex}
                  onActiveChange={setActiveIndex}
                  cardWidth={500}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
