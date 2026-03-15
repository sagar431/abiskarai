"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { CoverflowCarousel } from "./CoverflowCarousel";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.04] p-7 shadow-2xl">
      <div className="mb-5 flex items-start justify-between">
        <span className="font-mono text-xs text-primary-500">
          [{String(index + 1).padStart(2, "0")}]
        </span>
        {project.links.length > 0 && (
          <div className="flex gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="flex items-center gap-1 text-xs text-white/40 transition hover:text-primary-400"
              >
                {link.label}<span>↗</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-1 text-sm text-primary-400">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/50">{project.description}</p>
      <div className="my-5 h-px bg-white/[0.06]" />
      <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="rounded-xl bg-white/[0.04] px-3 py-3 text-center">
            <div className="text-lg font-bold text-primary-400">{m.value}</div>
            <div className="mt-0.5 text-[10px] leading-tight text-white/40">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-white/50">
            {tech}
          </span>
        ))}
      </div>
      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-white/40">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-500" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4h8M6 8h8M6 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="2.5" cy="4" r="1" fill="currentColor" />
      <circle cx="2.5" cy="8" r="1" fill="currentColor" />
      <circle cx="2.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CoverflowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="2" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="4" width="3.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <rect x="11.5" y="4" width="3.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [view, setView] = useState<"list" | "coverflow">("list");

  const coverflowItems = projects.map((project, i) => (
    <ProjectCard key={project.slug} project={project} index={i} />
  ));

  return (
    <section id="projects" className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Client Work"
            title="Results We've Delivered"
            description="Real projects across web, automation, and AI — with measurable outcomes."
          />
          <div className="hidden sm:flex shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                view === "list"
                  ? "bg-primary-500 text-white shadow"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <ListIcon /> List
            </button>
            <button
              onClick={() => setView("coverflow")}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                view === "coverflow"
                  ? "bg-primary-500 text-white shadow"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <CoverflowIcon /> Coverflow
            </button>
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {view === "list" ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {projects.map((project, index) => (
                  <article
                    key={project.slug}
                    className="glass-card group relative overflow-hidden rounded-[24px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1 lg:rounded-[28px] lg:p-12"
                  >
                    <div className="absolute right-4 top-4 sm:right-8 sm:top-8 text-xs font-mono text-primary-500/50">
                      [{String(index + 1).padStart(2, "0")}]
                    </div>
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
                      <div className="lg:col-span-5 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary-500 transition sm:text-2xl lg:text-3xl">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-primary-500">{project.tagline}</p>
                        </div>
                        <p className="text-muted leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                          {project.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition hover:text-primary-500"
                            >
                              {link.label}<span className="text-xs">↗</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="grid gap-8 md:grid-cols-2">
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted">Key Metrics</h4>
                            <div className="space-y-3">
                              {project.metrics.map((metric) => (
                                <div key={metric.label}>
                                  <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                                  <div className="text-xs text-muted">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-muted">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span key={tech} className="glass-chip font-medium">{tech}</span>
                              ))}
                            </div>
                            <div className="pt-4">
                              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">Highlights</h4>
                              <ul className="space-y-2 text-sm text-muted">
                                {project.highlights.slice(0, 2).map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-500" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="coverflow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <CoverflowCarousel
                  items={coverflowItems}
                  activeIndex={activeIndex}
                  onActiveChange={setActiveIndex}
                  cardWidth={520}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
