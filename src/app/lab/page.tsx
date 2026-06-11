import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { labEntries } from "@/data/lab";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Notes from the workbench — agent architectures, KV caches, build logs, and field notes from shipping AI products.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function LabPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="05"
        badgeLabel="Lab"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Notes from
              <br />
              the workbench.
            </span>
            <span className="sm:hidden">Notes from the workbench.</span>
          </>
        }
        description="Short, technical write-ups on what I'm learning while shipping AI products — agent architectures, inference internals, build logs, and the small field notes worth keeping."
      />

      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <ul className="flex flex-col">
            {labEntries.map((e, i) => (
              <li key={e.slug}>
                <article
                  className={`group flex cursor-pointer flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-center sm:gap-10 sm:py-10 ${
                    i === 0 ? "border-y border-gray-200" : "border-b border-gray-200"
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-4 sm:w-48">
                    <span className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                      {formatDate(e.date)}
                    </span>
                    {e.status === "draft" ? (
                      <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-gray-500">
                        Soon
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-[12px] uppercase tracking-[0.18em] text-[#F26522]">
                      {e.category}
                    </span>
                    <h2 className="text-[20px] font-medium leading-[1.18] text-gray-900 sm:text-[24px] lg:text-[28px]">
                      {e.title}
                    </h2>
                    <p className="text-[14px] leading-[1.6] text-gray-600 sm:text-[15px]">
                      {e.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:w-44 sm:justify-end">
                    <span className="text-[12px] text-gray-500">{e.readingTime}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-300 group-hover:bg-[#F26522] group-hover:text-white">
                      <ArrowRight
                        size={14}
                        className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                      />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-[13px] text-gray-500 sm:text-[14px]">
            Posts go live as I publish them. Want a heads-up?{" "}
            <a
              href="mailto:sagar@abiskarai.com?subject=Lab%20updates"
              className="text-gray-900 underline underline-offset-4"
            >
              Drop me an email
            </a>{" "}
            and I'll send the first edition when it ships.
          </p>
        </div>
      </section>

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}
