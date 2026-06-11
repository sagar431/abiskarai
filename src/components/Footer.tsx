import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface LinksGroupProps {
  title: string;
  links: { title: string; href: string }[];
}

function LinksGroup({ title, links }: LinksGroupProps) {
  return (
    <div className="p-2">
      <h3 className="mt-2 mb-4 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {title}
      </h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-xs text-slate-400 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialCard({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border-t border-b border-slate-100 p-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white md:border-t-0"
    >
      <span className="font-medium">{title}</span>
      <ArrowRight className="h-4 w-4 transition-colors" />
    </a>
  );
}

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-[#0a0a0a]",
        className
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative grid grid-cols-1 border-x border-slate-100 dark:border-slate-800 sm:grid-cols-2 sm:divide-x sm:divide-slate-100 dark:sm:divide-slate-800 md:grid-cols-4 md:divide-x md:divide-slate-100 dark:md:divide-slate-800">
          <div>
            <SocialCard title="GitHub" href="https://github.com/sagar431" />
            <LinksGroup
              title="Services"
              links={[
                { title: "Landing Pages", href: "#services" },
                { title: "WhatsApp Bots", href: "#services" },
                { title: "AI Agents", href: "#services" },
                { title: "Automation", href: "#services" },
                { title: "Consulting", href: "#contact" },
              ]}
            />
          </div>
          <div>
            <SocialCard
              title="Hugging Face"
              href="https://huggingface.co/sagar007"
            />
            <LinksGroup
              title="Products"
              links={[
                { title: "AI Website Generator", href: "#products" },
                { title: "Research Assistant", href: "#products" },
                { title: "Vibe App Builder", href: "#products" },
                { title: "MLOps Agent", href: "#products" },
                { title: "WhatsApp Bot", href: "#products" },
              ]}
            />
          </div>
          <div>
            <SocialCard title="YouTube" href="https://youtube.com/@abiskarai" />
            <LinksGroup
              title="Company"
              links={[
                { title: "About", href: "#" },
                { title: "Process", href: "#process" },
                { title: "Projects", href: "#projects" },
                { title: "Testimonials", href: "#testimonials" },
                { title: "FAQ", href: "#faq" },
              ]}
            />
          </div>
          <div>
            <SocialCard title="LinkedIn" href="https://linkedin.com/in/abiskarai" />
            <LinksGroup
              title="Contact"
              links={[
                { title: "Book a Call", href: "#contact" },
                { title: "Email Us", href: "mailto:sagar@abiskarai.com" },
                { title: "Privacy Policy", href: "#" },
                { title: "Terms of Use", href: "#" },
                { title: "Cookie Policy", href: "#" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-slate-100 p-3 dark:border-slate-800">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} AbiskarAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
