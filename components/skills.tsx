"use client";

import { motion, type Variants } from "framer-motion";
import Section from "./section";
import { Brush, Code2, Accessibility, Palette, Search } from "lucide-react";

const categories = [
  {
    name: "Design & Prototyping",
    icon: Brush,
    items: [
      {
        name: "Figma",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
      },
      {
        name: "Adobe XD",
        color: "from-pink-500 to-red-500",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
      },
      {
        name: "Sketch",
        color: "from-orange-500 to-yellow-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
      {
        name: "InVision",
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50 dark:bg-red-900/20",
      },
      {
        name: "Axure RP",
        color: "from-blue-500 to-purple-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
      },
      {
        name: "Balsamiq",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      },
      {
        name: "Adobe Photoshop",
        color: "from-teal-500 to-blue-500",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
      },
      {
        name: "Adobe Illustrator",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
    ],
    tip: "Comprehensive design and prototyping toolkit for high-fidelity work.",
  },
  {
    name: "UX Research & Testing",
    icon: Search,
    items: [
      {
        name: "UserTesting",
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      },
      {
        name: "Lookback",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
      },
      {
        name: "Maze",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
      },
      {
        name: "Hotjar",
        color: "from-orange-500 to-yellow-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
      {
        name: "A/B Testing",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50 dark:bg-green-900/20",
      },
      {
        name: "UX Documentation",
        color: "from-slate-500 to-gray-500",
        bgColor: "bg-slate-50 dark:bg-slate-900/20",
      },
      {
        name: "User Flows",
        color: "from-teal-500 to-cyan-500",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
      },
      {
        name: "UI Style Guides",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
      },
    ],
    tip: "Research and testing methods to validate and iterate designs.",
  },
  {
    name: "Accessibility & Compliance",
    icon: Accessibility,
    items: [
      {
        name: "WCAG",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      },
      {
        name: "Accessibility",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50 dark:bg-green-900/20",
      },
      {
        name: "Stark Plugin",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
      },
    ],
    tip: "Inclusive design principles and WCAG compliance standards.",
  },
  {
    name: "Collaboration & Planning",
    icon: Palette,
    items: [
      {
        name: "FigJam",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
      },
      {
        name: "Miro",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      },
      {
        name: "Design Systems",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
      },
      {
        name: "Prototyping",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50 dark:bg-green-900/20",
      },
    ],
    tip: "Tools for cross-functional collaboration and design workflows.",
  },
  {
    name: "Web & Product Technologies",
    icon: Code2,
    items: [
      {
        name: "HTML5",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
      {
        name: "CSS3",
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
      },
      {
        name: "JavaScript",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      },
      {
        name: "WordPress",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
      },
    ],
    tip: "Frontend technologies and platforms for web and product development.",
  },
  {
    name: "Data & Analytics",
    icon: Search,
    items: [
      {
        name: "Google Analytics",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-50 dark:bg-red-900/20",
      },
      {
        name: "A/B Testing",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
      },
    ],
    tip: "Analytics and testing tools for data-driven design decisions.",
  },
  {
    name: "Version Control & DevTools",
    icon: Code2,
    items: [
      {
        name: "Git",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
      {
        name: "GitHub",
        color: "from-gray-500 to-slate-500",
        bgColor: "bg-gray-50 dark:bg-gray-900/20",
      },
    ],
    tip: "Version control and collaboration for design-engineering handoff.",
  },
  {
    name: "Simulation & Engineering",
    icon: Code2,
    items: [
      {
        name: "MATLAB",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-50 dark:bg-red-900/20",
      },
      {
        name: "Simulink",
        color: "from-orange-500 to-yellow-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
      },
    ],
    tip: "Engineering tools for simulation and data modeling.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Tools">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {categories.map((category) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            className="group relative rounded-3xl border border-white/20 dark:border-slate-700/30 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] transition-all duration-500"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-teal-400/20 to-blue-400/20 backdrop-blur-sm">
                <category.icon className="size-5 text-teal-700 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                {category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <SkillButton key={item.name} item={item} tip={category.tip} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function SkillButton({
  item,
  tip,
}: {
  item: { name: string; color: string; bgColor: string };
  tip: string;
}) {
  return (
    <div className="relative group/skill">
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-semibold
          border border-white/30 dark:border-slate-600/30
          bg-white/70 dark:bg-slate-700/70 backdrop-blur-xl
          text-slate-800 dark:text-slate-200
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
          transition-all duration-300
          ${item.bgColor}
        `}
      >
        {/* Gradient border glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
        />

        {/* Inner glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover/skill:opacity-10 blur-xl transition-all duration-300`}
        />

        <span className="relative z-10">{item.name}</span>
      </motion.button>

      {/* Animated Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 rounded-xl border border-white/20 dark:border-slate-600/20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] opacity-0 group-hover/skill:opacity-100 transition-all duration-200 z-50"
      >
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-10`}
        />
        <p className="relative text-xs font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap max-w-xs">
          {tip}
        </p>

        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2">
          <div className="border-4 border-transparent border-t-white/90 dark:border-t-slate-800/90" />
        </div>
      </motion.div>
    </div>
  );
}
