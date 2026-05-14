import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { awards } from "@/data/awards";

import NavBar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <NavBar />
      <main>
        <Hero profile={profile} />
        <About skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Awards awards={awards} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
