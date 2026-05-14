export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C#", "C/C++", "Python", "SQL", "JavaScript", "HTML5/CSS"],
  },
  {
    category: "Industrial",
    items: ["WinCC OA", "OPC UA", "Modbus", "PROFINET", "SCADA", "PLC"],
  },
  {
    category: "Tools & Frameworks",
    items: ["Visual Studio", "WPF", ".NET", "Node-RED", "Platform IO", "SSRS"],
  },
  {
    category: "Protocols & IoT",
    items: ["MQTT", "HTTP", "RTOS", "Edge Computing", "LoRa", "ESP32"],
  },
];
