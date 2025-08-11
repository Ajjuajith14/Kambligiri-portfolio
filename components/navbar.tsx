"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Mail, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResumeClick = () => {
    // Open resume PDF in new tab from public folder
    window.open("/resume_kg.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all">
        <motion.div
          animate={{
            backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
            boxShadow: scrolled
              ? "0 8px 30px rgba(0,0,0,0.12)"
              : "0 4px 20px rgba(0,0,0,0.05)",
          }}
          transition={{ duration: 0.3 }}
          className="mt-3 mb-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
        >
          <nav className="flex h-14 items-center justify-between px-3 sm:px-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("hero")}
              className="font-bold tracking-tight text-slate-900 dark:text-slate-100 text-lg"
              aria-label="Go to top"
            >
              Kambli Giri
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <motion.div
                  key={s.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                    onClick={() => scrollTo(s.id)}
                  >
                    {s.label}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  asChild
                >
                  <a href="#contact" aria-label="Contact">
                    <Mail className="size-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  onClick={handleResumeClick}
                  aria-label="View resume PDF"
                >
                  <FileText className="size-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => {
                    if (mounted) {
                      setTheme(resolvedTheme === "dark" ? "light" : "dark");
                    }
                  }}
                  aria-label={`Switch to ${
                    resolvedTheme === "dark" ? "light" : "dark"
                  } mode`}
                  className="relative overflow-hidden hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {mounted ? (
                      resolvedTheme === "dark" ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Sun className="size-4 text-yellow-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Moon className="size-4 text-slate-700" />
                        </motion.div>
                      )
                    ) : (
                      <Moon className="size-4 opacity-0" />
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
