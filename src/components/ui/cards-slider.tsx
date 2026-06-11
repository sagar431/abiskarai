"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "AI Website Generator",
    description:
      "Watch our AI generate a complete, styled business website from a text description — ready to deploy with no manual coding required.",
    category: "Web",
    image: "/products/ai-website-generator.png",
    date: "2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Deep Research Assistant",
    description:
      "An AI agent that searches, reads, and synthesises information from dozens of sources to produce structured research reports — in minutes, not hours.",
    category: "Agent",
    image: "/products/deep-research-assistant.png",
    date: "2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Vibe — AI App Builder",
    description:
      "A full-stack platform where a 6-agent AI pipeline collaborates in real time to generate complete Next.js applications from a single prompt.",
    category: "Builder",
    image: "/products/vibe-app-builder.png",
    date: "2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "MLOps Automation Agent",
    description:
      "Watch the agent take a raw ML project and fully set up a production-grade pipeline — configuration, experiment tracking, versioning, and deployment.",
    category: "Agent",
    image: "/products/mlops-agent.png",
    date: "2026",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "WhatsApp Business Bot",
    description:
      "Automate customer conversations, bookings, and follow-ups on WhatsApp — no code needed, just connect and go.",
    category: "WhatsApp",
    image: "/products/whatsapp-business-bot.png",
    date: "2026",
    readTime: "7 min read",
  },
];

export function CardsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.8;

    let newX =
      direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;

    newX = Math.max(Math.min(newX, 0), -width);

    animate(x, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto relative group/slider">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("left")}
          className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all active:scale-95 dark:bg-slate-800/90 dark:border-slate-700 dark:hover:bg-slate-800"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("right")}
          className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all active:scale-95 dark:bg-slate-800/90 dark:border-slate-700 dark:hover:bg-slate-800"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-200" />
        </button>
      </div>

      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden px-4 py-8 -mx-4 -my-8"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          style={{ x }}
          className="flex gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="min-w-[320px] max-w-[320px] h-[420px]"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="group relative h-full overflow-hidden rounded-[20px] border-slate-100 bg-white shadow-sm transition-all duration-500 hover:border-slate-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700 dark:hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30 dark:from-slate-900 dark:via-slate-900/20" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/80 backdrop-blur-md border-slate-200 text-xs font-medium px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-200"
                    >
                      {card.category}
                    </Badge>
                  </div>
                  {/* Hover Overlay Action */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/30">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-black"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)] justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-200">
                      {card.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-mono text-[10px] font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        AI
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {card.category}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          {card.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full dark:bg-slate-800 dark:text-slate-400">
                      <Clock className="h-3 w-3" />
                      <span>{card.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
