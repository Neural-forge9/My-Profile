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
    slug: "churn-prediction",
    title: "Customer Churn Prediction & Analytics",
    category: "Data & Machine Learning",
    summary: "Built a churn prediction workflow to identify high-risk users and translate model results into retention-focused product insights.",
    stack: ["Python", "SQL", "Pandas", "Scikit-learn", "Classification Models"],
    problem: "Businesses often fail to proactively identify an at-risk user until they have already churned.",
    solution: "Developed an end-to-end data pipeline and classification model to flag vulnerable users and inform retention strategies.",
    features: [
      "Exploratory data analysis (EDA)",
      "Automated feature engineering",
      "User segmentation based on engagement",
      "Classification modeling (Random Forest, Logistic Regression)",
      "Retention prioritization insights"
    ],
    techDecisions: [
      "Python and Pandas for powerful data manipulation",
      "Scikit-learn for accessible and robust classification modeling",
      "Translated technical evaluation metrics (F1, Recall) into plain business/product priorities"
    ],
    learnings: [
      "Bridging the gap between raw data outputs and actionable product features",
      "Managing class imbalance in real-world tabular datasets",
      "Engineering predictive features from raw transactional data"
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
