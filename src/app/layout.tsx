import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { GlassBackground } from "@/components/GlassBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://absiskarai.com"),
  title: {
    default: "AbiskarAI – Agentic portfolio studio",
    template: "%s · AbiskarAI",
  },
  description:
    "AbiskarAI designs, fine-tunes, and deploys Gemini-powered agents inspired by S16 Share orchestration.",
  openGraph: {
    title: "AbiskarAI – Agentic portfolio studio",
    description:
      "AI agency building Gemini-backed automation agents, featuring the Multimodal Gemma-270M case study.",
    type: "website",
    url: "https://absiskarai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbiskarAI – Agentic portfolio studio",
    description:
      "We build AI agents that reason, execute, and deliver measurable outcomes.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AbiskarAI",
    "url": "https://absiskarai.com",
    "description": "AbiskarAI designs, fine-tunes, and deploys Gemini-powered agents inspired by S16 Share orchestration.",
    "logo": "https://absiskarai.com/favicon.ico"
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <div className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
          <GlassBackground />
          <div className="relative z-10 flex min-h-screen flex-col gap-6">
            <SiteHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
