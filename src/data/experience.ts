export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Siemens Limited",
    role: "MES Software Engineer",
    startDate: "2025-07",
    endDate: "Present",
    highlights: [
      "Develop and implement MES and SCADA solutions using WinCC OA, writing custom C++ scripts to automate workflows and build dynamic user interfaces",
      "Integrated MES software with PLC and SCADA systems using Modbus, OPC UA, and PROFINET, ensuring real-time IT/OT data exchange",
      "Collaborate with production, IT, and engineering teams to ensure system interoperability aligned with ISA-95 architecture",
      "Design and query relational databases using SQL for secure data processing, operational metrics, and specialized reporting",
    ],
  },
  {
    company: "Pteris Global Limited",
    role: "HLC Engineer",
    startDate: "2023-04",
    endDate: "2025-06",
    highlights: [
      "Designed and implemented .NET- and SQL-based control and monitoring applications for international airport Baggage Handling Systems (BHS)",
      "Integrated automation equipment with centralized control software, bridging OT-level devices with IT databases and reporting systems",
      "Designed MSSQL Server databases and stored procedures, improving data flow between subsystems and enhancing traceability",
      "On-site deployment and integration at Cairo International Airport, collaborating with global engineering and IT teams",
    ],
  },
  {
    company: "Advanced Info Service (AIS)",
    role: "Embedded Software Engineer",
    startDate: "2021-11",
    endDate: "2023-04",
    highlights: [
      "Developed MQTT and HTTP communication libraries in C/C++ enabling large-scale IoT device connectivity with the AIS IoT Platform (Magellan)",
      "Designed device SDKs and developer tools to accelerate integration for AIS partners, supporting smart manufacturing and agriculture applications",
      "Built C# and Python-based MQTT QA tools to test and validate OTA communication reliability and performance",
      "Authored comprehensive user guides and delivered technical workshops for partner enablement",
    ],
  },
  {
    company: "Belton Industrial (Thailand) Co., LTD.",
    role: "System Analyst (IoT Developer)",
    startDate: "2021-01",
    endDate: "2021-11",
    highlights: [
      "Designed and implemented IoT-based monitoring systems connecting machine-level data to real-time dashboards for factory performance tracking",
      "Developed multi-tasking C/C++ applications for IoT nodes (ESP32/Arduino) and web dashboards using HTML5, JavaScript, and SQL",
      "Defined data architecture for factory monitoring, improving machine utilization and process traceability",
    ],
  },
  {
    company: "Johnson and Johnson (Thailand) Ltd.",
    role: "Maintenance Process Engineer",
    startDate: "2020-09",
    endDate: "2020-12",
    highlights: [
      "Improved manufacturing line efficiency through automation and camera-based inspection system enhancements",
      "Contributed to defect reduction and data-driven maintenance improvements",
    ],
  },
];
