import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Production systems we've built for agent orchestration, model training, and inference optimization."
        />

        <div className="mt-12 space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="glass-card group relative overflow-hidden rounded-[24px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1 lg:rounded-[28px] lg:p-12"
            >
              {/* Project number */}
              <div className="absolute right-4 top-4 sm:right-8 sm:top-8 text-xs font-mono text-primary-500/50">
                [{String(index + 1).padStart(2, '0')}]
              </div>

              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
                {/* Left: Title and description */}
                <div className="lg:col-span-5">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary-500 transition sm:text-2xl lg:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-primary-500">{project.tagline}</p>
                    </div>
                    <p className="text-muted leading-relaxed">{project.description}</p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition hover:text-primary-500"
                        >
                          {link.label}
                          <span className="text-xs">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-7">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {/* Metrics */}
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

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="glass-chip font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
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
        </div>
      </div>
    </section>
  );
}


