"use client";

import Section from "./section";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Target,
  Award,
} from "lucide-react";

const resumeData = {
  personal: {
    name: "Kambli Giri",
    title: "UI/UX Designer",
    email: "kambligiri502@gmail.com",
    phone: "(940) 465 2613",
    location: "Texas, TX",
    linkedin: "LinkedIn",
  },
  summary:
    "UX/UI Designer with strong foundation in product experience, accessibility, and interface engineering across healthcare, enterprise, and simulation projects. Delivered measurable improvements to interaction quality, raising usability outcomes by an average of 32% through research-driven iteration. Strengthened cross-functional alignment, improving design–engineering synchronization accuracy by 27%, and elevated interface clarity, reducing user friction across user flows by 29%. Skilled at translating complex requirements into clear, functional interfaces that support user clarity, system accuracy, and scalable digital execution.",
  experience: [
    {
      title: "UX/UI Designer",
      company: "Designit",
      period: "Sep 2024 – Present",
      achievements: [
        "Enhanced cross-team design alignment by 18% by structuring collaborative ideation sessions in FigJam, defining consistent UI style guides, and drafting foundational UX documentation for multi-platform experiences.",
        "Increased prototype validation speed by 22% by crafting detailed high-fidelity prototypes in Figma, conducting moderated studies via UserTesting, and documenting interaction flows using Balsamiq for early-stage feedback.",
        "Improved accessibility compliance by 19% through iterative usability testing, applying WCAG criteria across key user journeys, and leveraging the Stark plugin to refine color contrast and inclusive interaction behaviors.",
        "Boosted user journey clarity by 16% by mapping task paths in Axure RP, refining interaction models in InVision, and analyzing behavioral recordings using Lookback to identify friction points.",
        "Increased actionable insight generation by 21% by reviewing behavioral heatmaps in Hotjar, validating hypothesis-driven flows with Maze, and enhancing interactive components using a basic understanding of JavaScript.",
        "Accelerated developer handoff efficiency by 24% by preparing annotated design assets in Adobe Illustrator, managing version-controlled updates via GitHub, and conducting remote concept tests through UserTesting to finalize screens.",
      ],
    },
    {
      title: "Product Designer",
      company: "Kellton Tech",
      period: "Mar 2021 – Jun 2023",
      achievements: [
        "Led early-stage discovery workshops using Miro and created low-fidelity wireframes to align stakeholders on product direction, accelerating requirement clarity by 30% during initial phases.",
        "Built detailed user flows and implemented theme customization in WordPress to support scalable design handoffs, reducing design-to-development friction by 25% across cross-functional teams.",
        "Developed modular design systems and set up behavioral dashboards in Google Analytics to track UX patterns, enabling data-driven iteration that improved user task completion rates by 18%.",
        "Conducted iterative A/B testing and maintained version control through Git to validate design hypotheses, resulting in a measurable uplift of 22% in key conversion metrics.",
        "Collaborated closely with engineers using HTML5 prototypes and styled components with CSS3 to ensure pixel-perfect UI implementation, shortening UI review cycles by 28%.",
        "Delivered polished visual assets using Adobe Photoshop and translated high-fidelity layouts through Figma, Adobe XD, and Sketch across multiple project streams, reducing overall design turnaround time by 35%.",
      ],
    },
  ],
  projects: [
    {
      title: "Mobile Health App Redesign",
      description:
        "Increased task completion rate by 40% by redesigning the mobile app interface for elderly users through targeted usability evaluations using Figma, rapid iteration in Balsamiq, and accessibility validation aligned with WCAG guidelines.",
    },
    {
      title: "Electric Vehicle Simulation",
      description:
        "Delivered 100% of project milestones on time by engineering an electric vehicle simulation model using integrated data workflows in MATLAB, component logic modeling in Simulink, and collaborative version control through GitHub.",
    },
  ],
  education: [
    {
      degree: "Master of Science in Information Science",
      school: "University of North Texas",
      period: "Aug 2023 – May 2025",
    },
    {
      degree:
        "Bachelor of Technology in Electrical and Electronics Engineering",
      school: "Kakatiya University College of Engineering and Technology",
      period: "Jun 2018 - Jul 2022",
    },
  ],
  skills: {
    "Design & Prototyping": [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Axure RP",
      "Balsamiq",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    "UX Research & Testing": [
      "UserTesting",
      "Lookback",
      "Maze",
      "Hotjar",
      "Usability Testing",
      "UX Documentation",
      "User Flows",
      "UI Style Guides",
    ],
    "Accessibility & Compliance": ["WCAG", "Stark Plugin", "Accessibility"],
    "Collaboration & Planning": [
      "FigJam",
      "Miro",
      "Design Systems",
      "Prototyping",
    ],
    "Web & Product Technologies": [
      "HTML5",
      "CSS3",
      "JavaScript (basic)",
      "WordPress",
    ],
    "Data & Analytics": ["Google Analytics", "A/B Testing"],
    "Version Control & DevTools": ["Git", "GitHub"],
    "Simulation & Engineering": ["MATLAB", "Simulink"],
  },
};

export default function Resume() {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/resume_kg.pdf";
    link.download = "Kambli_Giri_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    // Open PDF in new tab
    window.open("/resume_kg.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="View and download my complete professional background"
    >
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Button
          onClick={handleOpenNewTab}
          className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ExternalLink className="size-4 mr-2" />
          Open in New Tab
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="w-full sm:w-auto border-slate-300 dark:bg-slate-400 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
        >
          <Download className="size-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
          {/* PDF Embed */}
          <div
            className="relative w-full"
            style={{ height: "80vh", minHeight: "600px" }}
          >
            {/* <iframe src="/resume_kg.pdf" className="w-full h-full border-0" title="Kambli Giri Resume" loading="lazy" /> */}

            {/* Resume Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-8">
              <ResumeContent data={resumeData} />
            </div>

            {/* Fallback for browsers that don't support iframe PDF viewing */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-800 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-center p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  PDF viewer not supported in this browser
                </p>
                <Button
                  onClick={handleOpenNewTab}
                  className="pointer-events-auto bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700"
                >
                  <ExternalLink className="size-4 mr-2" />
                  Open PDF
                </Button>
              </div>
            </div>
          </div>

          {/* PDF Controls Bar */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
            <Button
              onClick={handleOpenNewTab}
              size="sm"
              variant="ghost"
              className="hidden md:inline-flex hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Open in new tab"
            >
              <ExternalLink className="size-4" />
            </Button>
            <Button
              onClick={handleDownload}
              size="sm"
              variant="ghost"
              className="hidden md:inline-flex hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Download PDF"
            >
              <Download className="size-4" />
            </Button>
          </div>
        </div>

        {/* Alternative PDF Viewer for better compatibility */}
        <div className="mt-4 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Having trouble viewing the PDF?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <Button
              onClick={handleOpenNewTab}
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="size-4 mr-2" />
              View in Browser
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="border-slate-300 dark:bg-gray-500 dark:border-slate-600 bg-transparent"
            >
              <Download className="size-4 mr-2" />
              Download Instead
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ResumeContent({ data }: { data: typeof resumeData }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-800 dark:text-slate-200">
      {/* Header */}
      <div className="text-center border-b border-slate-200 dark:border-slate-700 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {data.personal.name}
        </h1>
        <p className="text-xl text-teal-600 dark:text-teal-400 font-semibold mb-4">
          {data.personal.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Mail className="size-4" />
            {data.personal.email}
          </div>
          <div className="flex items-center gap-1">
            <Phone className="size-4" />
            {data.personal.phone}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="size-4" />
            {data.personal.location}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Target className="size-6 text-teal-600 dark:text-teal-400" />
          Professional Summary
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {data.summary}
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Calendar className="size-6 text-teal-600 dark:text-teal-400" />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-teal-400 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {exp.title}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Award className="size-6 text-teal-600 dark:text-teal-400" />
          Key Projects
        </h2>
        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div key={index} className="border-l-2 border-violet-400 pl-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Users className="size-6 text-teal-600 dark:text-teal-400" />
          Education
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-cyan-400 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    {edu.school}
                  </p>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                {category}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
