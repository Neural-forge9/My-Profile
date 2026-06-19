export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export const primaryExperience: Experience = {
  role: "Software Developer",
  company: "Current Work",
  period: "Jun 2025 - Present",
  description: "Building and improving user-facing product workflows across React Native, React, Next.js, Node.js, and Rust.",
  bullets: [
    "Built frontend workflows for assets, transactions, networks, activity screens, token management, dashboards, and user-facing error states.",
    "Worked on API response handling, authentication states, metadata rendering, async state bugs, and edge-case UI behaviour.",
    "Used Cursor and Codex for faster debugging, implementation planning, and code navigation while maintaining ownership of final code quality."
  ]
};

export const additionalExperience: Experience[] = [
  {
    role: "Technical Support Engineer - M365 Cloud",
    company: "Cloud Service Support",
    period: "Oct 2023 - Feb 2024",
    description: "Resolved customer-impacting Microsoft 365 and Azure AD issues across identity, access, configuration, migration, and service-health workflows.",
    bullets: [
      "Converted ambiguous user-reported issues into structured technical cases with impact analysis, reproduction details, root-cause notes, and resolution steps.",
      "Investigated authentication failures, licensing problems, mailbox access issues, service degradation, and configuration mismatches with support and escalation teams.",
      "Strengthened production troubleshooting habits around access management, service reliability, documentation, and customer-impact resolution."
    ]
  },
  {
    role: "Operations Lead - Microsoft & AWS",
    company: "Cloud & Infrastructure Operations",
    period: "Oct 2022 - May 2023",
    description: "Supported enterprise cloud and infrastructure workflows across AWS and Azure, with a focus on repeatable operations and reliable environment support.",
    bullets: [
      "Worked across IAM/RBAC, compute, storage, virtual networks, monitoring, and access-related troubleshooting for AWS and Azure environments.",
      "Provisioned and maintained cloud infrastructure with Terraform, applying infrastructure-as-code practices for consistency and operational reliability.",
      "Analysed incidents, service trends, and support metrics to improve escalation quality, process visibility, and stakeholder reporting."
    ]
  },
  {
    role: "IoT Product Support Engineer",
    company: "IoT Product Deployments",
    period: "May 2022 - Sep 2022",
    description: "Supported IoT-based product deployments by coordinating setup workflows, validating client requirements, and troubleshooting device-node issues.",
    bullets: [
      "Assisted installation workflows and investigated hardware, software, connectivity, and configuration issues across real-world deployments.",
      "Coordinated between clients, deployment teams, and technical stakeholders to resolve product issues and unblock implementation work.",
      "Documented recurring issues, troubleshooting steps, and deployment observations to reduce repeated support errors."
    ]
  }
];

export const experience = [primaryExperience, ...additionalExperience];
