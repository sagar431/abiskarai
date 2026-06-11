import type { Metadata } from "next";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell AbiskarAI about your project. Reply within a working day with scope, timeline, and price.",
};

const channels = [
  { label: "Email", value: "sagar@abiskarai.com", href: "mailto:sagar@abiskarai.com" },
  { label: "WhatsApp", value: "+91 93377 36575", href: "https://wa.me/919337736575" },
  { label: "Calendly", value: "15-min intro call", href: "https://calendly.com/abiskarai/15min" },
];

export default function ContactPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="04"
        badgeLabel="Contact"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Tell me about
              <br />
              what you're building.
            </span>
            <span className="sm:hidden">Tell me about what you're building.</span>
          </>
        }
        description="I reply within a working day with a clear scope, timeline, and price. If you're closer to 'I have an idea', that's fine too — bring the rough version."
      />

      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-500">
                Project inquiry
              </div>
              <ContactForm />
            </div>

            <aside className="flex flex-col gap-10">
              <div>
                <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-500">
                  Direct channels
                </div>
                <ul className="flex flex-col gap-4">
                  {channels.map((c) => (
                    <li
                      key={c.label}
                      className="rounded-2xl border border-gray-200 p-4"
                    >
                      <div className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                        {c.label}
                      </div>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="mt-1 block text-[15px] font-medium text-gray-900 underline-offset-4 hover:underline sm:text-[16px]"
                      >
                        {c.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#F5F5F5] p-6">
                <div className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
                  Where I'm based
                </div>
                <p className="mt-2 text-[15px] leading-[1.6] text-gray-800 sm:text-[16px]">
                  Bhubaneswar, India · GMT +5:30. Working with clients across India, the US, and the UK.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-900 p-6 text-white">
                <div className="text-[12px] uppercase tracking-[0.18em] text-white/50">
                  Booking
                </div>
                <p className="mt-2 text-[15px] leading-[1.6] text-white/80 sm:text-[16px]">
                  Currently booking projects starting Q1 2026. For urgent work, ping on WhatsApp and I'll let you know if I can fit it in.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
