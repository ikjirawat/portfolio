interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded-md bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]">
      {label}
    </span>
  );
}
