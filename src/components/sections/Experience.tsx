"use client";

import { motion } from "framer-motion";
import type { Experience as ExperienceType } from "@/data/experience";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <SectionWrapper id="experience" title="Experience">
      <motion.div
        className="max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {experience.map((exp, i) => (
          <TimelineItem
            key={`${exp.company}-${exp.role}`}
            experience={exp}
            isLast={i === experience.length - 1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
