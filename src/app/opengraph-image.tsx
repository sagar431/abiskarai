import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #030712 0%, #0c1524 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: 12, textTransform: "uppercase", color: "rgba(125,211,252,0.9)" }}>
          AbiskarAI Agency
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1 style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: "80%" }}>
            Agents that reason, execute, and deliver measurable outcomes.
          </h1>
          <p style={{ fontSize: 28, color: "rgba(148,163,184,0.9)", maxWidth: "70%" }}>
            Specializing in AI agent development, model training, and inference optimization.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "rgba(148,163,184,0.9)" }}>
          <span>absiskarai.ai</span>
          <span style={{ color: "rgba(96,165,250,0.9)" }}>•</span>
          <span>Agentic Portfolio Studio</span>
        </div>
      </div>
    ),
    size,
  );
}










