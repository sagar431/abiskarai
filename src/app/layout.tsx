import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
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
    default: "AbiskarAI – Websites, WhatsApp Bots & AI Agents",
    template: "%s · AbiskarAI",
  },
  description:
    "AbiskarAI builds conversion-focused websites, WhatsApp automation bots, and custom AI agents for businesses. Real products, real execution.",
  openGraph: {
    title: "AbiskarAI – Websites, WhatsApp Bots & AI Agents",
    description:
      "AbiskarAI builds conversion-focused websites, WhatsApp automation bots, and custom AI agents for businesses. Real products, real execution.",
    type: "website",
    url: "https://absiskarai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbiskarAI – Websites, WhatsApp Bots & AI Agents",
    description:
      "AbiskarAI builds conversion-focused websites, WhatsApp automation bots, and custom AI agents for businesses. Real products, real execution.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
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
    "logo": "https://absiskarai.com/favicon.svg"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <div className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
