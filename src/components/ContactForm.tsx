"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { ROLL_EASE, TextRoll } from "./axion/atoms";

const projectTypes = [
  "AI agent / automation",
  "WhatsApp bot",
  "Full-stack AI product",
  "Creative AI / ads",
  "Landing page / website",
  "Something else",
];

const budgets = [
  "Under ₹1L / $1.2K",
  "₹1L – ₹4L / $1.2K – $5K",
  "₹4L – ₹10L / $5K – $12K",
  "₹10L+ / $12K+",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    const subject = `New project inquiry — ${payload.name ?? "AbiskarAI"}`;
    const body = [
      `Name: ${payload.name ?? ""}`,
      `Email: ${payload.email ?? ""}`,
      `Project type: ${payload.projectType ?? ""}`,
      `Budget: ${payload.budget ?? ""}`,
      "",
      `${payload.message ?? ""}`,
    ].join("\n");

    const mailto = `mailto:sagar@abiskarai.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("submitted");
  }

  const inputClass =
    "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
            Project type
          </span>
          <select required name="projectType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Pick one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
            Budget
          </span>
          <select required name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>
              Pick a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] uppercase tracking-[0.18em] text-gray-500">
          Tell me about the project
        </span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="What are you trying to build? What's the timeline?"
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-[#F26522] pl-5 pr-2 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
        >
          <TextRoll>Send inquiry</TextRoll>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#F26522] transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
            style={{ transitionTimingFunction: ROLL_EASE }}
          >
            <ArrowRight size={14} />
          </span>
        </button>

        <a
          href="https://wa.me/919337736575"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-200 pl-5 pr-2 py-2 text-[13px] font-medium text-gray-900 transition-colors duration-300 hover:border-gray-900 sm:pl-6 sm:text-[14px]"
        >
          <TextRoll>Or WhatsApp directly</TextRoll>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
            style={{ transitionTimingFunction: ROLL_EASE }}
          >
            <ArrowRight size={14} />
          </span>
        </a>
      </div>

      {status === "submitted" ? (
        <p className="mt-2 text-[13px] text-gray-500">
          Your mail client should have opened. If not, write to{" "}
          <a className="underline underline-offset-4" href="mailto:sagar@abiskarai.com">
            sagar@abiskarai.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
