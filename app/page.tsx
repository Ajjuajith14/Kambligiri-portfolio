import AnimatedBackground from "@/components/animated-background";
import PageTransition from "@/components/page-transition";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceTimeline from "@/components/experience-timeline";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  // Server Component composing Client Components for interactivity per App Router norms [^2].
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <Navbar />
      <PageTransition>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Education />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </PageTransition>
    </main>
  );
}
