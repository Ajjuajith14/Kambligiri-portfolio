import type React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-600 mb-4">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
