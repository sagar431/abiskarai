"use client";

import { cn } from "@/lib/utils";
import React from "react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({
  feature,
  className,
  index = 0,
  ...props
}: FeatureCardProps & { index?: number }) {
  const p = PATTERNS[index % PATTERNS.length];

  return (
    <div
      className={cn("relative overflow-hidden p-6", className)}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <feature.icon
        className="text-foreground/75 size-6"
        strokeWidth={1}
        aria-hidden
      />
      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
      <p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Deterministic patterns to avoid SSR/client hydration mismatch
// (Math.random() produces different values on server vs client)
const PATTERNS: number[][][] = [
  [[8, 2], [9, 4], [7, 1], [10, 5], [8, 3]],
  [[9, 1], [7, 3], [10, 2], [8, 5], [9, 4]],
  [[7, 5], [10, 1], [8, 4], [9, 2], [7, 3]],
  [[10, 3], [8, 1], [9, 5], [7, 2], [10, 4]],
  [[8, 4], [7, 2], [10, 3], [9, 1], [8, 5]],
  [[9, 3], [10, 5], [7, 4], [8, 1], [9, 2]],
  [[7, 1], [8, 3], [10, 2], [9, 5], [7, 4]],
  [[10, 2], [9, 4], [8, 1], [7, 3], [10, 5]],
];

const PATTERNS_LONG: number[][][] = [
  [[8, 2], [9, 4], [7, 1], [10, 5], [8, 3], [9, 1], [7, 5]],
  [[9, 1], [7, 3], [10, 2], [8, 5], [9, 4], [10, 1], [8, 3]],
  [[7, 5], [10, 1], [8, 4], [9, 2], [7, 3], [8, 5], [10, 4]],
  [[10, 3], [8, 1], [9, 5], [7, 2], [10, 4], [9, 3], [7, 1]],
  [[8, 4], [7, 2], [10, 3], [9, 1], [8, 5], [7, 4], [10, 2]],
  [[9, 3], [10, 5], [7, 4], [8, 1], [9, 2], [10, 3], [8, 5]],
  [[7, 1], [8, 3], [10, 2], [9, 5], [7, 4], [8, 2], [9, 1]],
  [[10, 2], [9, 4], [8, 1], [7, 3], [10, 5], [9, 2], [7, 4]],
];

// Extended version for project cards with more content
type ProjectFeatureType = {
  title: string;
  tagline: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  metrics: { label: string; value: string }[];
  techStack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
};

type ProjectFeatureCardProps = React.ComponentProps<"div"> & {
  feature: ProjectFeatureType;
  index: number;
};

export function ProjectFeatureCard({
  feature,
  index,
  className,
  ...props
}: ProjectFeatureCardProps) {
  const p = PATTERNS_LONG[index % PATTERNS_LONG.length];

  return (
    <div
      className={cn("relative overflow-hidden p-6 sm:p-8", className)}
      {...props}
    >
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-primary/5 to-primary/[0.01] absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-primary/5 stroke-primary/15 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      {/* Index badge */}
      <div className="flex items-center justify-between mb-6">
        <feature.icon
          className="text-primary/60 h-6 w-6"
          strokeWidth={1.5}
          aria-hidden
        />
        <span className="font-mono text-xs text-primary/30">
          [{String(index + 1).padStart(2, "0")}]
        </span>
      </div>

      {/* Title & tagline */}
      <h3 className="relative z-10 text-lg font-bold text-primary sm:text-xl">
        {feature.title}
      </h3>
      <p className="relative z-10 mt-1 text-sm text-primary-500">
        {feature.tagline}
      </p>

      {/* Metrics */}
      <div className="relative z-10 mt-5 space-y-2">
        {feature.metrics.map((m) => (
          <div key={m.label} className="flex items-baseline justify-between gap-2">
            <span className="text-xs text-primary/40">{m.label}</span>
            <span className="text-sm font-semibold text-primary">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
        {feature.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-primary/10 bg-primary/[0.04] px-2 py-0.5 text-[10px] text-primary/50"
          >
            {tech}
          </span>
        ))}
        {feature.techStack.length > 4 && (
          <span className="rounded-full border border-primary/10 bg-primary/[0.04] px-2 py-0.5 text-[10px] text-primary/50">
            +{feature.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      {feature.links.length > 0 && (
        <div className="relative z-10 mt-4 flex gap-3">
          {feature.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary/60 transition hover:text-primary"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
