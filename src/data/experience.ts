export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    startDate: "2025-01",
    endDate: "Present",
    highlights: [
      "Built an automated forex trading system processing 200+ signals/week with FastAPI, SQLite (WAL mode), and real-time WebSocket dashboard",
      "Designed per-session strategy scheduling that improved projected annual returns from -$948 to $39,418 through 12-month backtesting optimization",
      "Implemented safety-critical risk management: position sizing, daily drawdown limits, slippage guards, and concurrent database access with zero data loss",
    ],
  },
  {
    company: "Self-Directed Projects",
    role: "Software Engineer",
    startDate: "2024-03",
    endDate: "2024-12",
    highlights: [
      "Developed a workout planning app with SvelteKit and PostgreSQL, serving 50+ daily active users with sub-200ms page loads",
      "Contributed to open-source tooling for CLI automation, reducing team onboarding time by 40%",
      "Set up CI/CD pipelines with GitHub Actions for 3 production projects, achieving 95%+ test coverage",
    ],
  },
];
