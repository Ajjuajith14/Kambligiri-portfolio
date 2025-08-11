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
    email: "kambligiri1999@gmail.com",
    phone: "(940) 843 9446",
    location: "Texas, TX",
    linkedin: "LinkedIn",
  },
  summary:
    "UX/UI Designer with experience enhancing usability and accessibility across healthcare and transportation platforms. Improved interface usability by 35% using scalable Figma systems, increased clinical platform accessibility by 55%, and contributed to a 40% revenue boost through responsive Angular-based web design. Applied user research and iterative testing across 18+ devices to strengthen engagement and task efficiency.",
  experience: [
    {
      title: "UX/UI Designer",
      company: "Designit",
      period: "Sep 2024 – present",
      achievements: [
        "Increased interface usability by 35% across marine and automotive platforms through Figma-based design systems and insights from 20+ usability tests.",
        "Delivered a cross-platform marine application for 18+ devices using Figma components and design tokens, reducing design-to-development handoff time by 30%.",
        "Conducted user research with 25+ end users, identifying critical navigation pain points and reducing error rates by 28%.",
        "Standardized component libraries to streamline collaboration across design and development teams, cutting design time by 20%.",
        "Introduced responsive design patterns tailored to various screen sizes and device types, enhancing user satisfaction scores by 32%.",
        "Integrated structured stakeholder feedback into iterative prototypes, reducing revision cycles by 40%.",
      ],
    },
    {
      title: "Product Designer",
      company: "Kellton Tech",
      period: "Mar 2021 – Jun 2023",
      achievements: [
        "Reengineered the Fitpeo app interface based on feedback from 11+ senior users, improving task completion rates among older adults by 45%.",
        "Enhanced healthcare platform accessibility by 55% by restructuring modules for CCM, RPM, and BHI, reducing clinician input time.",
        "Delivered a fully responsive web app using HTML, CSS, JavaScript, and Angular, driving a 40% increase in user retention and revenue.",
        "Conducted 15+ usability tests to validate design iterations, reducing navigation time by 30%.",
        "Standardized UI components into a shared design library, accelerating development cycles by 25%.",
        "Implemented accessibility compliance strategies aligned with WCAG standards, increasing usage among older demographics by 35%.",
      ],
    },
  ],
  projects: [
    {
      title: "Mobile Health App Redesign",
      description:
        "Revamped a health app interface to improve accessibility for elderly users. Increased task completion rate by 40% through targeted usability testing and iterative prototyping.",
    },
    {
      title: "Electric Vehicle Simulation",
      description:
        "Developed and simulated an EV model by integrating data from 14 websites and 12 databases. Engineered core vehicle logic for improved efficiency modeling. Led a 4-member team, achieving on-time delivery of all project milestones.",
    },
  ],
  education: [
    {
      degree: "MS in Information Science",
      school: "University of North Texas",
      period: "Aug 2023 – May 2025",
    },
    {
      degree: "B.Tech in Electrical and Electronics Engineering",
      school: "Kakatiya University College of Engineering and Technology",
      period: "Jun 2018 - Jul 2022",
    },
  ],
  skills: {
    "Design Tools": ["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop"],
    "Prototyping & Wireframing": ["Figma Prototyping", "InVision", "Balsamiq"],
    "User Research": [
      "Usability Testing",
      "A/B Testing",
      "User Interviews",
      "Accessibility Testing",
    ],
    "Design Systems": ["Figma Components", "Tokens", "Atomic Design"],
    "Web Technologies": ["HTML5", "CSS3", "JavaScript", "Angular"],
    "Responsive Design": ["Mobile-First Design", "Cross-Platform UI"],
    "Accessibility Standards": ["WCAG", "Section 508 Compliance"],
    "Agile Collaboration": ["Jira", "Confluence", "Zeplin"],
    "Version Control": ["Git"],
    "Analytics Tools": ["Google Analytics", "Hotjar"],
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
          className="w-full sm:w-auto border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
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
              className="border-slate-300 dark:border-slate-600 bg-transparent"
            >
              <ExternalLink className="size-4 mr-2" />
              View in Browser
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 bg-transparent"
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
