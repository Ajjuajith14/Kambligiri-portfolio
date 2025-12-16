"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./section";
import { useRef } from "react";

const items = [
  {
    degree: "Master of Science in Information Science",
    school: "University of North Texas",
  },
  {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    school: "Kakatiya University College of Engineering and Technology",
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <Section id="education" title="Education">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((i) => (
          <motion.div
            key={i.school}
            style={{ rotate }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {"Education"}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-500">
              {i.degree}
            </h3>
            <p className="text-slate-700 dark:text-slate-400">{i.school}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
