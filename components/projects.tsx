"use client";

import Section from "./section";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Mobile Health App Redesign",
    description:
      "Improved onboarding, accessibility, and task completion through user-centered design and comprehensive testing.",
    image: "/project_1.jpg",
    tags: ["Accessibility", "Design System", "A/B Testing"],
    link: "https://www.figma.com/design/V7HZZHylrCXrN4itnJswIT/HealthCare-Mobile-APP?node-id=0-1&p=f&t=xfosnuCF5w8yaLax-0",
  },
  {
    title: "Nike Shoe UX Design",
    description:
      "Created an interactive, Nike-inspired shoe product page with bold typography, compelling text overlays, and strong visual hierarchy to enhance user engagement.",
    image: "/project4.png",
    tags: ["UI/UX Design", "Prototyping", "Figma Animation"],
    link: "https://drive.google.com/file/d/1T-VbUSO6wFWBhOhLn4EXx0lQjJOMeECV/view",
  },
  {
    title: "Beverage Landing Animations — Coke, Fanta, Sprite",
    description:
      "Branded hero sections with bold color blocks, wipe reveals, and parallax can motion, plus clean nav/CTA micro-interactions.",
    image: "/project4a.png",
    tags: ["Motion Design", "Landing Page", "Figma", "Micro-interactions"],
    link: "https://drive.google.com/file/d/1sN9f_nqKpQlgUNyjAEpIHstZyU8YpKXI/view",
  },
  {
    title: "Electric Vehicle Simulation",
    description:
      "Led integration of 14 APIs with cross-functional leadership, creating seamless data visualization.",
    image: "/project_2.png",
    tags: ["API", "Leadership", "Data Viz"],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work demonstrating measurable impact and user-centered solutions."
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer"
              onClick={() =>
                project.link && window.open(project.link, "_blank")
              }
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                {project.link && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="size-4 text-white" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700 px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
