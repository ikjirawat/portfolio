import type { SkillCategory } from "@/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";

interface AboutProps {
  skills: SkillCategory[];
}

export default function About({ skills }: AboutProps) {
  return (
    <SectionWrapper id="about" title="About">
      <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">
        Bridging the gap between operational technology and information systems
        across manufacturing and logistics. Experienced in MES, SCADA, and IoT
        platforms — building solutions that connect factory-floor devices to
        enterprise data layers using industrial protocols like OPC UA, Modbus,
        and PROFINET.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
