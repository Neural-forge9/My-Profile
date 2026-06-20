import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="editorial-container flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-border bg-card font-mono text-xs font-semibold transition-colors group-hover:border-foreground/40">
              NS
            </span>
            <span>
              <span className="block text-sm font-medium leading-none text-foreground">
                Navdeep Singh
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Software Developer
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
            <Link href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground">
              Experience
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </Link>
          </nav>

          <a
            href="mailto:nvdeep0110@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="border-b border-border bg-card/80">
        <div className="editorial-container py-20 md:py-28">
          <div className="max-w-5xl">
            <span className="inline-flex border border-border bg-secondary/40 px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-foreground">
              Available for frontend and full-stack roles
            </span>
            <h1 className="mt-8 max-w-4xl text-[2.4rem] font-normal leading-[1.05] tracking-[-0.04em] text-foreground md:text-[3.6rem]">
              Software Developer building React, Next.js, and TypeScript product experiences.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              I build user-facing web and mobile products with a focus on clean application architecture, reliable UI workflows, API integration, and product-minded execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-0">
              {["React", "Next.js", "TypeScript", "Supabase", "Product UI"].map((item) => (
                <span
                  key={item}
                  className="border border-border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground"
                >
                  {item}
                </span>
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
          <section id="projects" className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="section-kicker">Selected application work</p>
              <h2 className="text-4xl font-normal tracking-[-0.035em] text-foreground md:text-5xl">
                Featured Projects
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Projects focused on React, Next.js, TypeScript, full-stack workflows, analytics, and user-facing software systems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px border border-border bg-border">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
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
            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card p-6 md:p-8">
                  <h3 className="section-kicker">{skillGroup.category}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-border bg-secondary/40 px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-foreground hover:bg-secondary"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid border border-border bg-card md:grid-cols-[1fr_420px]">
            <div className="p-8 md:p-12">
              <p className="section-kicker">Contact</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-normal tracking-[-0.035em] text-foreground md:text-5xl">
                Ready to work together?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                I am open to software developer, frontend, AI product engineering, and product-minded full-stack roles.
              </p>
            </div>
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
          </section>
        </div>
      </div>
    </main>
  );
}
