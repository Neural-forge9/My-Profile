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
  description: "Building and improving wallet, API, and database-backed product workflows across React Native, TypeScript, Python, FastAPI, and Supabase.",
  bullets: [
    "Built wallet features including Activity screen, Manage Tokens, Dashboard Token List, Password setup, Confirm Password, Verify PIN, token details, and network-filtered token visibility.",
    "Implemented token search, network filters, toggle states, composite token/network logos, reusable token rows, empty states, and state-driven dashboard rendering using React Native and TypeScript.",
    "Fixed RPC call functions for blockchain network management, improving provider fallback handling, request stability, and failed network response recovery by ~35%.",
    "Debugged API response handling, state synchronization, navigation bugs, duplicate token rendering, loading/error states, and edge cases across wallet workflows.",
    "Improved observability of API and RPC flows using logs, traces, and latency checks; reduced recurring client-side error patterns by ~25%.",
    "Built backend workflows using Python, FastAPI, and Supabase for request validation, database-backed operations, structured API responses, and authentication-aware data handling.",
    "Optimized API and database interaction patterns, reducing p95 latency by ~28% and p99 latency spikes by ~20% across frequently accessed application flows.",
    "Reviewed frontend/backend logic, database reads/writes, UI states, and API contracts to identify correctness, performance, and architecture issues.",
    "Wrote structured bug reports, reproduction steps, root-cause notes, and technical feedback explaining issue impact, failure reason, and implementation fix."
  ]
};

export const additionalExperience: Experience[] = [
  {
    role: "Technical Support Engineer - AWS Cloud Operations",
    company: "Cloud Operations | Teleperformance, New Delhi",
    period: "Oct 2023 - Feb 2024",
    description: "AWS · Terraform · Prometheus · Grafana · Jaeger · CloudWatch",
    bullets: [
      "Supported AWS infrastructure issues across IAM, compute, storage, networking, deployment failures, and access-related incidents.",
      "Used Terraform, CloudWatch, Prometheus, Grafana, and Jaeger to validate provisioning, review metrics/traces, and reduce incident triage time by ~30%.",
      "Documented runbooks, RCA notes, and repeatable fixes, lowering recurring escalation effort by ~25%."
    ]
  },
  {
    role: "Operations Lead - Microsoft Azure & AWS",
    company: "Cloud Infrastructure Support | Concentrix, New Delhi",
    period: "Oct 2022 - May 2023",
    description: "AWS · Azure · Terraform · Docker · Observability · Incident Response",
    bullets: [
      "Supported cloud infrastructure workflows across AWS, Azure, IAM/RBAC, virtual networks, compute, storage, and monitoring systems.",
      "Assisted Terraform-based provisioning using reusable configuration patterns, backend state concepts, validation checks, and environment setup support.",
      "Used observability workflows across logs, metrics, and traces to improve issue resolution speed by ~30% and reduce repeated configuration failures."
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
