"use client";

import { motion } from "framer-motion";
import type { Education as EducationType } from "@/data/education";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  if (education.length === 0) return null;

  return (
    <SectionWrapper id="education" title="Education">
      <motion.div
        className="max-w-2xl space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {education.map((edu) => (
          <motion.div key={edu.institution} variants={fadeUp}>
            <h3 className="text-base font-semibold text-[var(--text)]">
              {edu.institution}
            </h3>
            <p className="mt-0.5 text-sm text-[var(--accent)]">
              {edu.degree} in {edu.field}
            </p>
            <p className="mt-0.5 text-sm text-[var(--text-muted)]">
              {edu.startYear} – {edu.endYear}
            </p>
            {edu.highlights && edu.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--border)]" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
