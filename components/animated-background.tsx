"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      {/* Enhanced theme-aware gradient base */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
        animate={{
          background: [
            "linear-gradient(135deg, rgb(248 250 252) 0%, rgb(255 255 255) 50%, rgb(241 245 249) 100%)",
            "linear-gradient(135deg, rgb(241 245 249) 0%, rgb(248 250 252) 50%, rgb(255 255 255) 100%)",
            "linear-gradient(135deg, rgb(248 250 252) 0%, rgb(255 255 255) 50%, rgb(241 245 249) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Enhanced floating blobs with better dark mode visibility */}
      <motion.div
        style={{ y: y1, filter: "blur(40px)" }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full"
        animate={{
          background: [
            "radial-gradient(ellipse at center, rgba(56,189,248,0.35), transparent 60%)",
            "radial-gradient(ellipse at center, rgba(59,130,246,0.35), transparent 60%)",
            "radial-gradient(ellipse at center, rgba(56,189,248,0.35), transparent 60%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ y: y2, filter: "blur(40px)" }}
        className="absolute top-1/3 -right-28 h-[28rem] w-[28rem] rounded-full"
        animate={{
          background: [
            "radial-gradient(ellipse at center, rgba(139,92,246,0.30), transparent 60%)",
            "radial-gradient(ellipse at center, rgba(168,85,247,0.30), transparent 60%)",
            "radial-gradient(ellipse at center, rgba(139,92,246,0.30), transparent 60%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        animate={{
          rotate: [0, 360],
          background: [
            "conic-gradient(from 90deg, rgba(56,189,248,0.15), rgba(139,92,246,0.15))",
            "conic-gradient(from 180deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15))",
            "conic-gradient(from 270deg, rgba(236,72,153,0.15), rgba(56,189,248,0.15))",
            "conic-gradient(from 360deg, rgba(56,189,248,0.15), rgba(139,92,246,0.15))",
          ],
        }}
        transition={{
          rotate: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 60,
            ease: "linear",
          },
          background: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[-10rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full"
        style={{ filter: "blur(40px)" }}
      />

      {/* Enhanced theme-aware grid with subtle animation */}
      <motion.div
        className="absolute inset-0 bg-[size:32px_32px]"
        animate={{
          backgroundImage: [
            "linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
            "linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
