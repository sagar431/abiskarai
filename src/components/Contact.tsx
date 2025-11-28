import Link from "next/link";
import { agency } from "@/data/agency";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-divider border-t pt-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Let's build something.
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl text-muted">
                Ready to ship production AI? Get in touch and we'll respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`mailto:${agency.contact.email}`}
                className="glass-button inline-flex items-center gap-2 text-sm font-semibold"
              >
                {agency.contact.email}
              </Link>
              <Link
                href={agency.contact.calendly}
                target="_blank"
                className="glass-outline inline-flex items-center gap-2 text-sm font-semibold"
              >
                Schedule Call
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


