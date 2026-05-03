"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Bot,
  MessageSquare,
  FileText,
  Cpu,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectFeatureCard } from "@/components/ui/grid-feature-cards";

const projectIcons = [Cpu, Globe, MessageSquare, FileText, Bot, Zap];

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  const featureProjects = projects.map((project, i) => ({
    title: project.title,
    tagline: project.tagline,
    icon: projectIcons[i % projectIcons.length],
    metrics: project.metrics,
    techStack: project.techStack,
    highlights: project.highlights,
    links: project.links,
  }));

  return (
    <section id="projects" className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="Client Work"
            title="Results We've Delivered"
            description="Real projects across web, automation, and AI — with measurable outcomes."
          />
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="mt-10 grid grid-cols-1 divide-x divide-y divide-dashed divide-primary/10 border border-dashed border-primary/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featureProjects.map((feature, i) => (
            <ProjectFeatureCard key={i} feature={feature} index={i} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
