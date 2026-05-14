"use client";

import { motion } from "framer-motion";
import type { Award } from "@/data/awards";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface AwardItemProps {
  award: Award;
}

export default function AwardItem({ award }: AwardItemProps) {
  return (
    <motion.div className="border-b border-[var(--border)] py-4 last:border-0" variants={fadeUp}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-semibold text-[var(--text)]">{award.title}</h3>
        <span className="text-sm text-[var(--text-muted)]">{award.date}</span>
      </div>
      <p className="mt-0.5 text-sm text-[var(--accent)]">{award.issuer}</p>
      {award.description && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{award.description}</p>
      )}
    </motion.div>
  );
}
