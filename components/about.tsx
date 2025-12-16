"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./section";
import kambliimg from "@/public/kambli3.jpeg";

const skills = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "WCAG",
  "Accessibility",
  "Design Systems",
  "User Research",
  "Prototyping",
  "Usability Testing",
  "A/B Testing",
  "UserTesting",
  "Balsamiq",
  "HTML5",
  "CSS3",
  "JavaScript",
];

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="UX/UI Designer with strong foundation in product experience, accessibility, and interface engineering across healthcare, enterprise, and simulation projects."
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
                "I'm a UX/UI Designer specializing in translating complex requirements into clear, functional interfaces that support user clarity, system accuracy, and scalable digital execution. I've delivered measurable improvements to interaction quality, raising usability outcomes by an average of 32% through research-driven iteration."
              }
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              {
                "My work strengthens cross-functional alignment, improving design–engineering synchronization by 27%, and elevates interface clarity, reducing user friction across user flows by 29%. I partner closely with product and engineering from discovery to delivery."
              }
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((s, idx) => {
                const colors = [
                  {
                    light: "from-cyan-500 to-blue-500",
                    dark: "from-cyan-600 to-blue-600",
                    bgLight: "bg-cyan-50",
                    bgDark: "dark:bg-cyan-900/30",
                    border: "border-cyan-300 dark:border-cyan-700",
                  },
                  {
                    light: "from-blue-500 to-purple-500",
                    dark: "from-blue-600 to-purple-600",
                    bgLight: "bg-blue-50",
                    bgDark: "dark:bg-blue-900/30",
                    border: "border-blue-300 dark:border-blue-700",
                  },
                  {
                    light: "from-purple-500 to-pink-500",
                    dark: "from-purple-600 to-pink-600",
                    bgLight: "bg-purple-50",
                    bgDark: "dark:bg-purple-900/30",
                    border: "border-purple-300 dark:border-purple-700",
                  },
                  {
                    light: "from-pink-500 to-rose-500",
                    dark: "from-pink-600 to-rose-600",
                    bgLight: "bg-pink-50",
                    bgDark: "dark:bg-pink-900/30",
                    border: "border-pink-300 dark:border-pink-700",
                  },
                  {
                    light: "from-rose-500 to-orange-500",
                    dark: "from-rose-600 to-orange-600",
                    bgLight: "bg-rose-50",
                    bgDark: "dark:bg-rose-900/30",
                    border: "border-rose-300 dark:border-rose-700",
                  },
                  {
                    light: "from-orange-500 to-amber-500",
                    dark: "from-orange-600 to-amber-600",
                    bgLight: "bg-orange-50",
                    bgDark: "dark:bg-orange-900/30",
                    border: "border-orange-300 dark:border-orange-700",
                  },
                  {
                    light: "from-amber-500 to-yellow-500",
                    dark: "from-amber-600 to-yellow-600",
                    bgLight: "bg-amber-50",
                    bgDark: "dark:bg-amber-900/30",
                    border: "border-amber-300 dark:border-amber-700",
                  },
                  {
                    light: "from-green-500 to-emerald-500",
                    dark: "from-green-600 to-emerald-600",
                    bgLight: "bg-green-50",
                    bgDark: "dark:bg-green-900/30",
                    border: "border-green-300 dark:border-green-700",
                  },
                ];
                const color = colors[idx % colors.length];
                return (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center rounded-full border cursor-pointer px-4 py-2 text-sm font-semibold backdrop-blur-lg shadow-md transition-all duration-300 ${color.border} ${color.bgLight} ${color.bgDark} hover:shadow-xl hover:bg-gradient-to-r ${color.light} dark:hover:bg-gradient-to-r dark:${color.dark} text-slate-900 dark:text-white hover:text-white`}
                  >
                    {s}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
