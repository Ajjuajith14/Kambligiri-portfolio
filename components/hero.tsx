"use client";

import type React from "react";

import { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function useTypewriter(texts: string[], speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[index % texts.length];
    if (!deleting) {
      if (display.length < full.length) {
        const t = setTimeout(
          () => setDisplay(full.slice(0, display.length + 1)),
          speed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(
          () => setDisplay(full.slice(0, display.length - 1)),
          speed / 1.5
        );
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
  }, [display, deleting, index, texts, speed, pause]);

  return display;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const typed = useTypewriter(
    ["UI/UX Designer", "Human-Centered Creator", "Design Systems Advocate"],
    55,
    1300
  );

  // Magnetic glow for CTA area
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radial = useMotionTemplate`radial-gradient(240px 240px at ${mouseX}px ${mouseY}px, rgba(56,189,248,0.18), transparent 65%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const nameGradient = useMemo(
    () =>
      "bg-gradient-to-r from-teal-600 via-cyan-600 to-violet-600 dark:from-teal-400 dark:via-cyan-400 dark:to-violet-400",
    []
  );

  return (
    <section
      id="hero"
      ref={ref}
      className="relative pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y, opacity }} className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-4 py-2 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="size-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Designing intuitive, accessible, and human-centered digital
                experiences.
              </span>
            </motion.div>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className={`bg-clip-text text-transparent ${nameGradient}`}>
                Kambli Giri
              </span>
            </h1>
            <div className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-500 min-h-[3rem]">
              {typed}
              <span className="ml-1 animate-pulse text-teal-600 dark:text-teal-400">
                |
              </span>
            </div>
            <p className="text-lg text-slate-800 dark:text-slate-500 mb-8 leading-relaxed">
              {
                "Crafting beautiful, accessible digital experiences that put users first. Specializing in design systems, user research, and inclusive design."
              }
            </p>
            <motion.div
              onMouseMove={onMouseMove}
              className="relative mt-12 inline-flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 p-3 backdrop-blur-xl shadow-xl"
              style={{ backgroundImage: radial }}
            >
              <CTAButtons />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <motion.button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative isolate overflow-hidden rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-6 py-3 backdrop-blur-md text-slate-700 dark:text-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll down"
          >
            <span className="sr-only">Scroll down</span>
            <ArrowDown className="size-5 transition-transform group-hover:translate-y-1" />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              initial={false}
              whileHover={{ scale: 1.15, opacity: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{
                background:
                  "radial-gradient(200px 200px at 50% 0%, rgba(139,92,246,0.25), transparent)",
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function CTAButtons() {
  const base =
    "relative overflow-hidden rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500";

  const handleResumeClick = () => {
    // Open resume PDF in new tab from public folder
    window.open("/resume_kg.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <RippleButton
        className={`${base} bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30`}
      >
        <a href="#contact">{"Let's Talk"}</a>
      </RippleButton>
      <RippleButton
        className={`${base} bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl`}
        onClick={handleResumeClick}
      >
        <span>View Resume</span>
      </RippleButton>
    </>
  );
}

function RippleButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((i) => i.id !== id)), 600);
  };

  return (
    <button onClick={handleClick} className={cn("isolate", className)}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/0" />
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 dark:bg-white/20"
          style={{
            left: r.x,
            top: r.y,
            width: 8,
            height: 8,
            animation: "ripple 600ms ease-out forwards",
          }}
        />
      ))}
      <style>{`@keyframes ripple{from{transform:translate(-50%,-50%) scale(1);opacity:0.7}to{transform:translate(-50%,-50%) scale(18);opacity:0}}`}</style>
    </button>
  );
}
