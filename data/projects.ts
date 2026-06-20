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

export const projects: Project[] = [
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
    slug: "productops-dashboard",
    title: "ProductOps Dashboard",
    category: "Application Development",
    summary: "Designed a SaaS-style operations dashboard for managing projects, users, tasks, activity logs, and product metrics with a clean React and Next.js interface.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    problem: "Product and operations teams need one reliable workspace to track project health, user activity, ownership, and task progress without jumping between disconnected tools.",
    solution: "Built a role-aware dashboard concept with authenticated views, structured data tables, project status tracking, task workflows, activity feeds, and metric cards backed by Supabase.",
    features: [
      "Project, task, and user management views",
      "Role-aware dashboard sections",
      "Searchable and filterable data tables",
      "Activity timeline for operational updates",
      "Status cards for product and team metrics",
      "Responsive interface for desktop and mobile workflows"
    ],
    techDecisions: [
      "Used Next.js and TypeScript for route structure, typed data models, and maintainable UI logic",
      "Used Supabase and PostgreSQL for authentication-ready data storage and relational project records",
      "Used Tailwind CSS for a consistent dashboard layout with reusable cards, tables, and status elements",
      "Kept the interface focused on operational clarity: fast scanning, clear hierarchy, and predictable actions"
    ],
    learnings: [
      "Designing information-dense dashboards that remain readable",
      "Structuring product data around real user workflows instead of isolated screens",
      "Balancing frontend polish with backend-ready data modelling"
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
