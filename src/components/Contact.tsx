import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { agency } from "@/data/agency";

export function Contact() {
  return (
    <section id="contact" className="px-3 py-20 sm:px-5 lg:px-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 rounded-[24px] bg-slate-900 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
            Make your business easier to find, contact, and operate.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Start with a simple strategy call. We will turn your current online presence into a
            working AI-enabled system.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            href={agency.contact.calendly}
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-base font-bold text-slate-900 transition-all hover:gap-3"
          >
            Schedule call
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href={`mailto:${agency.contact.email}`}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-base font-bold text-white transition hover:bg-white/10"
          >
            Email us
          </Link>
        </div>
      </div>
    </section>
  );
}
