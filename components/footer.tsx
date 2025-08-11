"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {"Crafted with passion by Kambli Giri – © 2025"}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                if (mounted) {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                }
              }}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              aria-label={`Switch to ${
                resolvedTheme === "dark" ? "light" : "dark"
              } mode`}
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="size-4 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Moon className="size-4 text-slate-700 dark:text-slate-300" />
                )
              ) : (
                <Moon className="size-4 opacity-0" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <motion.button
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ChevronUp className="size-5" />
        </motion.button>
      )}
    </footer>
  );
}
