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

const coreProjects: Project[] = [
  {
    title: "Mobile Health App Redesign",
    description:
      "Increased task completion rate by 40% by redesigning the mobile app interface for elderly users through targeted usability evaluations using Figma, rapid iteration in Balsamiq, and accessibility validation aligned with WCAG guidelines.",
    image: "/project_1.jpg",
    tags: ["Figma", "Balsamiq", "WCAG"],
    link: "https://www.figma.com/design/V7HZZHylrCXrN4itnJswIT/HealthCare-Mobile-APP?node-id=0-1&p=f&t=xfosnuCF5w8yaLax-0",
  },
  {
    title: "Electric Vehicle Simulation",
    description:
      "Delivered 100% of project milestones on time by engineering an electric vehicle simulation model using integrated data workflows in MATLAB, component logic modeling in Simulink, and collaborative version control through GitHub.",
    image: "/project_2.png",
    tags: ["MATLAB", "Simulink", "GitHub"],
  },
];

const motionDesigns: Project[] = [
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
    title: "Ice Cream Flavor Campaign — Category Animations",
    description:
      "Short hero animations for generic flavors (Chocolate, Strawberry, Vanilla, Pistachio, Mango). Bold typography, floating garnish elements, and wipe transitions designed for social posts and landing pages.",
    image: "/project_5.png",
    tags: ["Motion Design", "Canva", "Food & Beverage", "Landing Page"],
    link: "https://drive.google.com/file/d/1CUn8JKYpSZAzgczfkPO4xCO5sH6YbabO/view?usp=drivesdk",
  },
];

const ProjectCard = ({
  project,
  index,
  isLast,
  totalCount,
}: {
  project: Project;
  index: number;
  isLast: boolean;
  totalCount: number;
}) => (
  <div
    key={project.title}
    className={`group relative overflow-hidden rounded-3xl border border-white/20 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition-all duration-500 animate-fade-in-up cursor-pointer ${
      isLast && totalCount % 2 === 1
        ? "lg:col-span-2 lg:max-w-xl lg:mx-auto"
        : ""
    }`}
    style={{ animationDelay: `${index * 200}ms` }}
    onClick={() => project.link && window.open(project.link, "_blank")}
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {project.link && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-white/20 backdrop-blur-sm p-2">
            <ExternalLink className="size-4 text-white" />
          </div>
        </div>
      )}
    </div>

    <div className="p-6 lg:p-8">
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

      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="space-y-24">
      <Section
        id="projects"
        title="Projects"
        subtitle="Selected work demonstrating measurable impact and user-centered solutions."
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {coreProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isLast={i === coreProjects.length - 1}
                totalCount={coreProjects.length}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="motion-designs"
        title="Motion Designs"
        subtitle="Creative explorations in animation, micro-interactions, and visual storytelling."
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {motionDesigns.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isLast={i === motionDesigns.length - 1}
                totalCount={motionDesigns.length}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
