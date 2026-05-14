"use client";

import { motion } from "framer-motion";
import type { Award } from "@/data/awards";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AwardItem from "@/components/ui/AwardItem";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface AwardsProps {
  awards: Award[];
}

export default function Awards({ awards }: AwardsProps) {
  if (awards.length === 0) return null;

  return (
    <SectionWrapper id="awards" title="Awards">
      <motion.div
        className="max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {awards.map((a) => (
          <AwardItem key={a.title} award={a} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
