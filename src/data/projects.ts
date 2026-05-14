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
    title: "AIS IoT Platform SDK",
    description:
      "Device SDK and communication libraries enabling large-scale IoT connectivity with the AIS Magellan platform. MQTT and HTTP protocols for smart manufacturing and agriculture ecosystems.",
    tags: ["C/C++", "MQTT", "HTTP", "IoT", "ESP32"],
    featured: true,
  },
  {
    title: "Airport BHS Control System",
    description:
      "Real-time control and monitoring applications for international airport Baggage Handling Systems. .NET-based with MSSQL backend, deployed at Cairo International Airport.",
    tags: ["C#", ".NET", "MSSQL", "SCADA", "WPF"],
  },
  {
    title: "Factory IoT Dashboard",
    description:
      "End-to-end IoT monitoring system connecting machine-level sensors to real-time web dashboards. Multi-tasking firmware on ESP32/Arduino with SQL-backed analytics.",
    tags: ["C/C++", "JavaScript", "HTML5", "SQL", "ESP32"],
  },
  {
    title: "LoRa Fleet Monitoring",
    description:
      "Real-time fleet tracking system for SCG mining operations using LoRa communication. C# visualization software (WPF) displaying live speed, location, and cycle time metrics.",
    tags: ["C#", "WPF", "LoRa", "IoT"],
  },
  {
    title: "Pneumatic Automation Control",
    description:
      "Remote PLC control system with MQTT integration enabling multi-device access from PC, tablet, and mobile. Early Industry 4.0 automation project.",
    tags: ["C#", "MQTT", "PLC", "Automation"],
  },
];
