export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  learnings: string[];
  techDecisions: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectMention {
  title: string;
  summary: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "productops-dashboard",
    title: "Web3 Wallet Application",
    category: "Application Development",
    summary: "Built wallet workflows across activity, token management, authentication, token details, network filters, RPC handling, and state-driven dashboard rendering.",
    stack: ["React Native", "TypeScript", "APIs", "RPC", "State Management"],
    problem: "Wallet applications need reliable token visibility, network-aware state, secure setup flows, and resilient blockchain request handling across unstable provider responses.",
    solution: "Built reusable React Native wallet workflows with token search, network filtering, toggle states, composite token/network logos, empty states, and improved RPC fallback handling.",
    features: [
      "Built Activity screen, Manage Tokens, Dashboard Token List, Password setup, Confirm Password, Verify PIN, and token details.",
      "Implemented network filters, token toggles, token search, reusable UI rows, composite logos, empty states, and route-level navigation.",
      "Fixed RPC call handling for blockchain networks, improving failed request recovery, provider fallback behavior, and network-specific token rendering."
    ],
    techDecisions: [
      "Used React Native and TypeScript for typed wallet UI workflows and reusable token row components",
      "Used state-driven rendering to handle dashboard token visibility, toggles, loading states, and empty states",
      "Improved RPC handling for provider fallback, failed request recovery, and network-specific token rendering"
    ],
    learnings: [
      "Designing wallet flows that stay predictable across changing network and token states",
      "Handling blockchain provider failures without breaking user-facing workflows",
      "Keeping mobile UI components reusable while supporting route-level navigation requirements"
    ]
  },
  {
    slug: "healthcare-platform",
    title: "Role-Based Healthcare Platform",
    category: "Full-Stack System",
    summary: "Designed and developed a multi-role healthcare web application with secure authentication, permission-aware dashboards, appointment workflows, records, payments, and real-time communication.",
    stack: ["Next.js", "React", "TypeScript", "Rust Actix", "MariaDB", "JWT", "WebSockets"],
    problem: "Healthcare platforms need explicitly separate, secure workflows for patients, doctors, and administrators without cross-contamination of permissions.",
    solution: "Built a role-based monolithic platform with custom dashboards, secure records, appointment booking, payments, and live chat features.",
    features: [
      "Role-based dashboards (Patient, Doctor, Admin)",
      "JWT-based secure authentication",
      "Appointment management and scheduling",
      "Secure medical records viewing",
      "Real-time messaging system via WebSockets",
      "Payment workflows",
      "Permission-aware screens"
    ],
    techDecisions: [
      "Used Next.js and TypeScript for strongly-typed frontend structure",
      "Used Rust Actix for high-performance, secure backend services",
      "Used MariaDB for relational data storage",
      "Used WebSockets for real-time live chat"
    ],
    learnings: [
      "Managing complex permission-based UI rendering",
      "Integrating Rust backend systems with a React SPA",
      "Handling real-time state with WebSockets in complex application flows"
    ]
  },
  {
    slug: "direct-mail-optimisation",
    title: "Direct Mail Acquisition Optimisation",
    category: "Analytics",
    summary: "An analytical solution for campaign targeting using A/B testing, uplift modelling, incremental conversion lift, and ROI measurement.",
    stack: ["Python", "A/B Testing", "Uplift Modeling", "SQL"],
    problem: "Marketing campaigns waste budget on users who would have converted organically or will never convert regardless of targeting.",
    solution: "Applied uplift modeling to specifically target the 'persuadables'—the cohort of users whose conversion probability increases exclusively due to the campaign.",
    features: [
      "A/B test design and analysis",
      "Uplift modeling / CATE estimation",
      "Response propensity modeling",
      "Incremental conversion lift analysis",
      "ROI measurement dashboards"
    ],
    techDecisions: [
      "Led the modeling approach with conditional average treatment effect (CATE) tools",
      "Used SQL for deep cohort segmentation"
    ],
    learnings: [
      "Measuring the unobservable 'counterfactual' in marketing interventions",
      "Designing rigorous A/B testing frameworks in production"
    ]
  }
];

export const projectMentions: ProjectMention[] = [
  {
    title: "ProductOps Dashboard",
    summary: "Designed a SaaS-style operations dashboard for managing projects, users, tasks, activity logs, and product metrics with a clean React and Next.js interface.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"]
  }
];
