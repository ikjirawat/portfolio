export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Go", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "FastAPI", "React", "SvelteKit"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "PostgreSQL", "SQLite"],
  },
  {
    category: "Cloud",
    items: ["Vercel", "Railway", "AWS", "GitHub Actions"],
  },
];
