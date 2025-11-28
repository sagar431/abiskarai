export function GlassBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="liquid-blob animate-float-slow"
        style={{
          top: "-18%",
          left: "-12%",
          width: "36rem",
          height: "36rem",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 140, 60, 0.25), rgba(255, 140, 60, 0))",
          animationDelay: "0s",
        }}
        aria-hidden="true"
      />
      <div
        className="liquid-blob animate-float-slow"
        style={{
          top: "-10%",
          right: "-8%",
          width: "32rem",
          height: "32rem",
          background:
            "radial-gradient(circle at 70% 30%, rgba(90, 125, 255, 0.2), rgba(90, 125, 255, 0))",
          animationDelay: "4s",
        }}
        aria-hidden="true"
      />
      <div
        className="liquid-blob animate-float-slow"
        style={{
          bottom: "-25%",
          left: "50%",
          width: "40rem",
          height: "40rem",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
          animationDelay: "8s",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background: "linear-gradient(180deg, rgba(12, 10, 28, 0.6) 0%, rgba(3, 4, 12, 0) 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-[-30%] h-[55vh]"
        style={{
          background: "radial-gradient(circle at center, rgba(22, 18, 40, 0.75), rgba(2, 3, 10, 0))",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div className="glass-noise" style={{ opacity: 0.1 }} aria-hidden="true" />
    </div>
  );
}










