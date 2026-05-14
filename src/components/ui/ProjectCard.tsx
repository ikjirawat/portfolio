"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import SkillBadge from "./SkillBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.div
      className={`group cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-[var(--shadow)] transition-all duration-200 hover:border-[var(--accent)]/40 hover:shadow-md ${
        featured ? "sm:col-span-2" : ""
      }`}
      variants={fadeUp}
    >
      <div className={featured ? "sm:flex sm:gap-8" : ""}>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className={`font-semibold text-[var(--text)] ${featured ? "text-xl" : "text-base"}`}>
              {project.title}
            </h3>
            {project.featured && (
              <span className="flex-shrink-0 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/8 px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                Featured
              </span>
            )}
          </div>

          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <SkillBadge key={tag} label={tag} />
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-4 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
