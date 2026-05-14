"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <motion.div className="relative flex gap-6" variants={fadeUp}>
      {/* Connector */}
      <div className="flex flex-col items-center">
        <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
        {!isLast && (
          <div className="w-px flex-1 bg-[var(--border)]" />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? "pb-0" : "pb-10"}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-[var(--text)]">
            {experience.company}
          </h3>
          <span className="text-sm text-[var(--text-muted)]">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>
        <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">
          {experience.role}
        </p>
        <ul className="mt-3 space-y-1.5">
          {experience.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--border)]" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
