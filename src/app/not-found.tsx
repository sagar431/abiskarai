import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      {/* 404 */}
      <div className="relative mb-8 select-none">
        <div className="text-[8rem] font-black leading-none text-slate-50 sm:text-[12rem]">404</div>
        <div className="absolute inset-0 flex items-center justify-center text-[8rem] font-black leading-none tracking-tight sm:text-[12rem]">
          <span className="text-slate-900">4</span>
          <span className="animate-pulse text-slate-400">0</span>
          <span className="text-slate-900">4</span>
        </div>
      </div>

      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-400">
        Page not found
      </p>
      <h1 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
        Looks like our AI wandered off.
      </h1>
      <p className="mb-10 max-w-md text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist — or maybe it was automated out of existence.
        Either way, let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-black"
        >
          ← Take me home
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
