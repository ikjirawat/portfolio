export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Forex Trading Bot",
    description:
      "Automated trading system with real-time signal generation, per-session strategy scheduling, and a live dashboard. Uses RSI/Bollinger Band mean-reversion with H1 trend filtering, ATR-based position sizing, and safety-critical risk management.",
    tags: ["Python", "FastAPI", "SQLite", "WebSocket", "Tailwind"],
    github: "https://github.com/ikjirawat/forex-bot",
    featured: true,
  },
  {
    title: "Workout Planner",
    description:
      "Progressive overload tracker with weekly program generation, exercise history charts, and session logging. Server-rendered for fast loads with offline-capable PWA support.",
    tags: ["SvelteKit", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com/ikjirawat/workout-planner",
  },
  {
    title: "Portfolio",
    description:
      "This site — statically generated with Next.js, dark/light theme, accessible navigation, and animated section transitions. Data-driven architecture: all content lives in TypeScript files, zero CMS dependency.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/ikjirawat/portfolio",
  },
  {
    title: "Oracle Fleet",
    description:
      "Multi-agent AI orchestration system for software development. Specialized agents (backend, frontend, QA, PM) collaborate via structured protocols with persistent memory and inter-agent messaging.",
    tags: ["TypeScript", "Claude API", "CLI", "MCP"],
    github: "https://github.com/ikjirawat/bake-oracle",
  },
];
