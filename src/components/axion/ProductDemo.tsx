"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { youTubeId } from "@/data/products";

export function ProductDemo({ product }: { product: Product }) {
  const [playing, setPlaying] = useState(false);
  const id = youTubeId(product.demoUrl);
  const posterLabel = `${product.title} — demo thumbnail`;

  return (
    <article className="flex flex-col">
      <div
        className="group relative aspect-video overflow-hidden rounded-2xl bg-[#1a1d2e]"
        data-media-placeholder={posterLabel}
      >
        {playing && id ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={product.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${product.title} demo`}
          >
            {/* Thumbnail — swap this for a custom poster via Codex (product.poster) */}
            {product.poster ? (
              <Image
                src={product.poster}
                alt={posterLabel}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                unoptimized
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-[11px] uppercase tracking-[0.18em] text-white/40">
                {posterLabel}
              </span>
            )}

            {/* Play button */}
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            {/* Category tag */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              {product.category}
            </span>
          </button>
        )}
      </div>

      <h3 className="mt-5 text-[18px] font-semibold text-gray-900 sm:text-[20px]">
        {product.title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-gray-600 sm:text-[15px]">
        {product.tagline}
      </p>
      <p className="mt-3 text-[13px] leading-[1.7] text-gray-500 sm:text-[14px]">
        {product.description}
      </p>
    </article>
  );
}
