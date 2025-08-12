"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./section";
import kambliimg from "@/public/kambli3.jpeg";

const skills = [
  "Figma",
  "Angular",
  "Accessibility",
  "WCAG",
  "Design Systems",
  "User Research",
  "Prototyping",
  "Usability Testing",
];

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="UX/UI Designer with 3+ years' experience, focused on accessibility, responsive interfaces, and user-centered research."
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl">
            <Image
              src={kambliimg}
              alt="Portrait of Kambli Giri"
              width={640}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>
        </div>
        <div className="lg:col-span-3 flex items-center">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {
                "I’m a UX/UI Designer with 3+ years’ experience across healthcare and transportation. I use test-driven design and scalable Figma systems to craft accessible, inclusive, and responsive interfaces that feel effortless. I partner closely with product and engineering from discovery to delivery."
              }
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              {
                "I partner closely with product and engineering to ship measurable outcomes — from +55% accessibility improvements to +40% revenue gains."
              }
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 cursor-pointer bg-white/80 dark:bg-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
