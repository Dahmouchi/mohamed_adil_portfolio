import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Automotive Diagnostics",
    description:
      "Identify and analyze vehicle faults using diagnostic tools and modern testing techniques.",
    rating: 5,
    icon: Icons.diagnostics, // you’ll need to add an appropriate icon
  },
  {
    name: "Embedded Electronics",
    description:
      "Understand and work with electronic control units (ECUs) and automotive embedded systems.",
    rating: 5,
    icon: Icons.electronics,
  },
  {
    name: "Vehicle Maintenance",
    description:
      "Perform preventive and corrective maintenance to ensure vehicle reliability and safety.",
    rating: 4,
    icon: Icons.maintenance,
  },
  {
    name: "Electrical Systems",
    description:
      "Diagnose and repair automotive electrical and electronic systems.",
    rating: 4,
    icon: Icons.electricity,
  },
  {
    name: "Engine Systems",
    description:
      "Understand combustion engines, sensors, actuators, and related control systems.",
    rating: 4,
    icon: Icons.engine,
  },
  {
    name: "CAN Bus & Communication",
    description:
      "Work with automotive communication protocols such as CAN bus and OBD-II.",
    rating: 4,
    icon: Icons.network,
  },
  {
    name: "Hydraulics & Mechanics",
    description:
      "Apply knowledge in mechanical and hydraulic systems for diagnostics and repair.",
    rating: 3,
    icon: Icons.mechanics,
  },
  {
    name: "Workshop Safety",
    description:
      "Follow safety standards and procedures in automotive diagnostic workshops.",
    rating: 5,
    icon: Icons.safety,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
