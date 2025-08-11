"use client";

import Section from "./section";
import { cn } from "@/lib/utils";

type Role = {
  company: string;
  period: string;
  title: string;
  highlights: string[];
  metrics: string[];
};

const roles: Role[] = [
  {
    company: "Designit",
    period: "2023 — Present",
    title: "Senior UI/UX Designer",
    highlights: [
      "Led accessibility overhaul for enterprise dashboard",
      "Designed scalable Figma component library",
      "Partnered with research to validate flows",
    ],
    metrics: [
      "+55% accessibility",
      "+28% task success",
      "-20% time-to-complete",
    ],
  },
  {
    company: "Kellton Tech",
    period: "2020 — 2023",
    title: "UI/UX Designer",
    highlights: [
      "Redesigned mobile health app",
      "Improved design handoff with Zeplin",
      "Championed WCAG and 508 compliance",
    ],
    metrics: ["+40% revenue", "+35% retention", "+22 NPS"],
  },
];

export default function ExperienceTimeline() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="pointer-events-none absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400/50 via-slate-300/40 dark:via-slate-700/40 to-violet-400/50 rounded-full" />

        <div className="space-y-12 lg:space-y-16">
          {roles.map((role, idx) => (
            <TimelineCard
              key={role.company}
              role={role}
              align={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function TimelineCard({
  role,
  align,
}: {
  role: Role;
  align: "left" | "right";
}) {
  return (
    <div className="relative animate-fade-in">
      {/* Mobile layout */}
      <div className="lg:hidden flex items-start gap-6">
        <div className="relative flex items-center justify-center">
          <div className="z-10 size-4 rounded-full bg-gradient-to-br from-teal-400 to-violet-400 shadow-[0_0_0_8px_rgba(255,255,255,0.1)] dark:shadow-[0_0_0_8px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="flex-1">
          <TimelineContent role={role} />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        {/* Content: place in col 1 or 3 explicitly */}
        <div
          className={cn(
            "lg:col-start-1 lg:col-end-2",
            align === "right" && "lg:col-start-3 lg:col-end-4",
            align === "left" ? "text-right" : "text-left"
          )}
        >
          <TimelineContent role={role} />
        </div>

        {/* Center dot (always column 2) */}
        <div className="relative flex items-center justify-center lg:col-start-2 lg:col-end-3">
          <div className="z-10 size-4 rounded-full bg-gradient-to-br from-teal-400 to-violet-400 shadow-[0_0_0_8px_rgba(255,255,255,0.1)] dark:shadow-[0_0_0_8px_rgba(0,0,0,0.2)]" />
        </div>
      </div>
    </div>
  );
}

function TimelineContent({ role }: { role: Role }) {
  return (
    <div className="relative rounded-2xl border border-white/20 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-6 lg:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100">
          {role.company}
        </h3>
        <span className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full">
          {role.period}
        </span>
      </div>

      <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-4">
        {role.title}
      </p>

      <ul className="space-y-2 mb-6">
        {role.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 flex-shrink-0" />
            <span className="text-sm lg:text-base leading-relaxed">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      {/* Metrics always visible (no hover) */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-2">
          {role.metrics.map((metric) => (
            <span
              key={metric}
              className="inline-flex items-center rounded-full border border-teal-400/40 cursor-pointer bg-teal-50 dark:bg-teal-900/30 px-3 py-1.5 text-xs lg:text-sm font-semibold text-teal-700 dark:text-teal-300"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
