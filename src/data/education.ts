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
    institution: "King Mongkut's Institute of Technology Ladkrabang",
    degree: "Bachelor of Engineering",
    field: "Manufacturing System Engineering",
    startYear: 2016,
    endYear: 2020,
    highlights: [
      "Cooperative project with SCG: LoRa-based fleet monitoring for mining operations",
      "Pneumatic automation control system with MQTT and multi-device access",
    ],
  },
];
