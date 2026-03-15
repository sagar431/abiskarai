import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      {/* Glowing 404 */}
      <div className="relative mb-8 select-none">
        <div className="text-[8rem] font-black leading-none text-white/5 sm:text-[12rem]">404</div>
        <div className="absolute inset-0 flex items-center justify-center text-[8rem] font-black leading-none tracking-tight text-white sm:text-[12rem]">
          <span className="text-gradient">4</span>
          <span className="animate-pulse text-primary-500">0</span>
          <span className="text-gradient">4</span>
        </div>
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
      </div>

      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary-500">
        Page not found
      </p>
      <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
        Looks like our AI wandered off.
      </h1>
      <p className="mb-10 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist — or maybe it was automated out of existence.
        Either way, let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(255,106,0,0.4)] transition hover:bg-primary-400"
        >
          ← Take me home
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
