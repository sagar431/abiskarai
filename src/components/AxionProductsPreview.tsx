"use client";

import Link from "next/link";
import { ProductDemo } from "./axion/ProductDemo";
import { HeadingHero, SectionBadge } from "./axion/atoms";
import { products } from "@/data/products";

export function AxionProductsPreview() {
  const featured = products.slice(0, 2);

  return (
    <section className="relative w-full bg-white pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="5" label="Live demos" />
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <HeadingHero>
            <span className="block sm:hidden" style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}>
              Things we&apos;ve
              <br /> built to prove it.
            </span>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Things we&apos;ve
              <br />
              built to prove it.
            </span>
          </HeadingHero>
          <Link
            href="/products"
            className="text-[13px] font-medium text-gray-900 underline-offset-4 hover:underline sm:text-[14px]"
          >
            See all demos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-12 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
          {featured.map((p) => (
            <ProductDemo key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
