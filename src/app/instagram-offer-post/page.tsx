import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Offer Post",
  description:
    "Single Instagram post creative for AbiskarAI's free Instagram audit strategy offer.",
};

const phoneNumber = "9337736575";

function OfferPost() {
  return (
    <article className="offer-post relative h-[1080px] w-[1080px] overflow-hidden bg-[#f9fbff] text-[#07111f]">
      <div className="absolute inset-0 bg-[url('/instagram/free-audit-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(249,251,255,0.95)_0%,rgba(249,251,255,0.82)_42%,rgba(10,17,31,0.38)_100%)]" />
      <div className="absolute -left-24 top-36 h-[620px] w-[620px] rounded-full bg-[#c7ff5e]/40 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-160px] h-[540px] w-[540px] rounded-full bg-[#ff6b4a]/38 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between px-[78px] py-[70px]">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-[78px] items-center justify-center rounded-[22px] bg-[#07111f] shadow-[0_20px_50px_rgba(7,17,31,0.2)]">
              <span className="text-[48px] font-black leading-none text-[#ff6a00]">
                A
              </span>
            </div>
            <div>
              <p className="text-[34px] font-black leading-none tracking-[-0.04em]">
                AbiskarAI
              </p>
              <p className="mt-1 text-[16px] font-black uppercase tracking-[0.16em] text-[#475467]">
                AI + Digital Growth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-[15px] font-black uppercase tracking-[0.12em] shadow-[0_16px_46px_rgba(7,17,31,0.12)]">
            <Sparkles className="size-4 text-[#ff6a00]" />
            Free Offer
          </div>
        </header>

        <main className="max-w-[820px]">
          <div className="mb-9 inline-flex items-center gap-3 rounded-full bg-[#c7ff5e] px-7 py-4 text-[22px] font-black uppercase tracking-[0.08em] text-[#07111f] shadow-[0_18px_50px_rgba(7,17,31,0.14)]">
            <MessageCircle className="size-6" />
            DM us today
          </div>

          <h1 className="text-[104px] font-black leading-[0.88] tracking-[-0.06em]">
            Free Instagram audit + strategy plan
          </h1>

          <p className="mt-9 max-w-[720px] text-[38px] font-bold leading-[1.05] tracking-[-0.02em] text-[#344054]">
            We will review your Instagram, find what is missing, and suggest a
            clear plan to get more enquiries.
          </p>
        </main>

        <footer className="grid gap-6">
          <div className="flex items-center justify-between border-t border-[#07111f]/12 pt-8">
            <div>
              <p className="text-[22px] font-black uppercase tracking-[0.14em] text-[#475467]">
                Message for your free plan
              </p>
              <p className="mt-2 text-[52px] font-black leading-none tracking-[-0.04em]">
                DM “AUDIT”
              </p>
            </div>
            <div className="flex size-[86px] items-center justify-center rounded-full bg-[#ff6b4a] text-[#07111f] shadow-[0_20px_50px_rgba(255,107,74,0.32)]">
              <ArrowRight className="size-10" strokeWidth={2.4} />
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-[28px] bg-[#07111f] px-7 py-5 text-white shadow-[0_24px_64px_rgba(7,17,31,0.24)]">
            <Phone className="size-8 text-[#c7ff5e]" />
            <p className="text-[38px] font-black tracking-[-0.03em]">
              {phoneNumber}
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default async function InstagramOfferPostPage({
  searchParams,
}: {
  searchParams?: Promise<{ export?: string }>;
}) {
  const params = await searchParams;

  if (params?.export === "1") {
    return (
      <>
        <style>{`
          html,
          body {
            width: 1080px;
            height: 1080px;
            margin: 0;
            overflow: hidden;
            background: #f9fbff;
          }

          header,
          nextjs-portal,
          [data-nextjs-toast],
          [data-nextjs-dialog-overlay] {
            display: none !important;
          }

          .offer-post {
            position: fixed;
            left: 0;
            top: 0;
          }
        `}</style>
        <OfferPost />
      </>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f6fb] px-4 pb-16 pt-28">
      <section className="mx-auto max-w-[1080px]">
        <div className="mb-8 text-[#07111f]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#667085]">
            Instagram Single Post
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.055em]">
            Free audit offer post
          </h1>
        </div>
        <OfferPost />
      </section>
    </main>
  );
}
