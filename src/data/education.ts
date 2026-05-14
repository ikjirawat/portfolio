export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  highlights?: string[];
}

export const education: Education[] = [
  {
    institution: "Chulalongkorn University",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    startYear: 2020,
    endYear: 2024,
    highlights: [
      "Focus on distributed systems and software architecture",
      "Senior project: real-time data pipeline for IoT sensor networks",
    ],
  },
];
