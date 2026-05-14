import type { Profile } from "@/data/profile";
import type { SkillCategory } from "@/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";

interface AboutProps {
  profile: Profile;
  skills: SkillCategory[];
}

export default function About({ profile, skills }: AboutProps) {
  return (
    <SectionWrapper id="about" title="About">
      <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
        {profile.tagline} Focused on building systems that are reliable,
        maintainable, and performant — from automated trading pipelines to
        full-stack web applications.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
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
