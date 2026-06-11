import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "AbiskarAI — Websites, WhatsApp Bots & AI Agents",
    template: "%s · AbiskarAI",
  },
  description:
    "AbiskarAI builds AI systems that automate your busywork — landing pages, WhatsApp bots, and custom AI agents. Working prototypes in weeks, not months.",
  openGraph: {
    title: "AbiskarAI — Websites, WhatsApp Bots & AI Agents",
    description:
      "AbiskarAI builds AI systems that automate your busywork — landing pages, WhatsApp bots, and custom AI agents. Working prototypes in weeks, not months.",
    type: "website",
    url: "https://absiskarai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbiskarAI — Websites, WhatsApp Bots & AI Agents",
    description:
      "AbiskarAI builds AI systems that automate your busywork — landing pages, WhatsApp bots, and custom AI agents. Working prototypes in weeks, not months.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
