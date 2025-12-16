"use client";

import type React from "react";

import Section from "./section";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function MagneticIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, [-60, 60], [-8, 8]);
  const ty = useTransform(y, [-60, 60], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={label}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: tx, y: ty }}
      className="relative inline-flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
    >
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(56,189,248,0.3)] opacity-0 transition group-hover:opacity-100" />
    </motion.a>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      // Validate form data
      formSchema.parse(values);

      // Use FormSubmit.co to send the form data
      const response = await fetch(
        "https://formsubmit.co/ajax/kambligiri502@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            _subject: `Portfolio Contact: Message from ${values.name}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError(err instanceof Error ? err.message : "Failed to send message");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's Build Something Beautiful Together"
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
        >
          <form
            onSubmit={onSubmit}
            className="space-y-4"
            aria-label="Contact form"
          >
            {success && (
              <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                <p className="text-sm text-green-700 dark:text-green-300">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                <p className="text-sm text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-500 mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                className="bg-slate-200/90 dark:bg-slate-300/40 border-white/30 dark:border-slate-700/30 text-slate-800 dark:text-slate-200 placeholder:text-slate-600 dark:placeholder:text-slate-400 focus:border-teal-400 dark:focus:border-teal-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-500 mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-slate-200/60 dark:bg-slate-3300/40 border-white/30 dark:border-slate-700/30 text-slate-800 dark:text-slate-200 placeholder:text-slate-600 dark:placeholder:text-slate-400 focus:border-teal-400 dark:focus:border-teal-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-500 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, ideas, or just say hello..."
                className="min-h-[140px] bg-slate-200/60 dark:bg-slate-300/40 border-white/30 dark:border-slate-700/30 text-slate-800 dark:text-slate-200 placeholder:text-slate-600 dark:placeholder:text-slate-400 focus:border-teal-400 dark:focus:border-teal-400 resize-none"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                I respond within 1–2 business days.
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
        >
          <div className="mx-auto max-w-xl text-center justify-center align-center">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-600">
              Connect
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-600">
              Follow or reach out on the platforms below.
            </p>
            <div className="flex h-full items-center justify-center">
              <div className="flex gap-4">
                <MagneticIcon
                  href="mailto:kambligiri502@gmail.com"
                  label="Email"
                >
                  <Mail className="size-5 dark:bg-slate-500 hover:bg-slate-700" />
                </MagneticIcon>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
