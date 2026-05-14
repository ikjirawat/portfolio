"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" title="Projects">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} featured />
        ))}
        {standard.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
