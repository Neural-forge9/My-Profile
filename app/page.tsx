import { projectMentions, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SurfaceCard } from "@/components/SurfaceCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="editorial-container py-20 md:py-28">
          <div className="max-w-5xl">
            <span className="inline-flex border border-border bg-secondary/40 px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-foreground">
              Available for frontend and full-stack roles
            </span>
            <h1 className="mt-8 max-w-4xl text-[2.4rem] font-normal leading-[1.05] tracking-[-0.04em] text-foreground md:text-[3.6rem]">
              Software Developer building modern web products and AI-powered experiences.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              I build user-facing web and mobile products with a focus on clean application architecture, reliable UI workflows, API integration, and product-minded execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-0">
              {["React", "Next.js", "TypeScript", "Supabase", "Product UI"].map((item) => (
                <StatusBadge key={item} className="rounded-none px-4 py-2">
                  {item}
                </StatusBadge>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View projects
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/navdeepsingh1600/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:nvdeep0110@gmail.com"
                  className="inline-flex size-11 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  aria-label="Email Navdeep"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-container py-16 md:py-24">
        <div className="space-y-24 md:space-y-32">
          <PortfolioSection
            id="projects"
            kicker="Selected application work"
            title="Featured Projects"
            description="Projects focused on React, Next.js, TypeScript, full-stack workflows, analytics, and user-facing software systems."
          >
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </PortfolioSection>

          <section className="space-y-5">
            <h2 className="text-3xl font-normal tracking-[-0.03em] text-foreground">
              More Project mentions:
            </h2>
            <div className="grid gap-3">
              {projectMentions.map((project) => (
                <SurfaceCard key={project.title} className="p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-normal tracking-[-0.03em] text-foreground">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex max-w-xl flex-wrap gap-1.5 md:justify-end">
                      {project.stack.map((tech) => (
                        <StatusBadge key={tech} className="px-2.5 py-1">
                          {tech}
                        </StatusBadge>
                      ))}
                    </div>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </section>

          <div id="experience">
            <ExperienceSection />
          </div>

          <section id="skills" className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">Core stack</p>
              <h2 className="text-4xl font-normal tracking-[-0.035em] text-foreground md:text-5xl">
                Skills
              </h2>
            </div>
            <div className="glass-surface overflow-hidden border">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="grid gap-4 border-b border-border/70 px-4 py-4 last:border-b-0 md:grid-cols-[220px_minmax(0,1fr)] md:items-start md:px-5 md:py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="hidden h-7 w-px bg-primary/45 md:block" aria-hidden="true" />
                    <h3 className="pill-label">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item) => (
                      <StatusBadge key={item} className="px-2.5 py-1">
                        {item}
                      </StatusBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <PortfolioSection
            kicker="Contact"
            title="Ready to work together?"
            description="I am open to software developer, frontend, AI product engineering, and product-minded full-stack roles."
            variant="split"
          >
            <div className="border-t border-border p-8 md:border-l md:border-t-0 md:p-10">
              <h3 className="text-xl font-normal text-foreground">What I bring</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {[
                  "React, Next.js, and TypeScript application development",
                  "API-driven product workflows and authenticated UI states",
                  "Practical debugging across frontend, backend, and cloud systems",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:nvdeep0110@gmail.com"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Email me
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </PortfolioSection>
        </div>
      </div>
    </main>
  );
}
