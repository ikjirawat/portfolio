"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  const headingId = `${id}-heading`;

  return (
    <motion.section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {title && (
          <h2
            id={headingId}
            className="mb-12 text-2xl font-semibold tracking-tight text-[var(--text)]"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
