import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      <section className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="editorial-container py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to portfolio
          </Link>

          <header className="mt-12 max-w-5xl space-y-7">
            <div className="space-y-5">
              <p className="section-kicker">{project.category}</p>
              <h1 className="text-5xl font-normal tracking-[-0.04em] text-foreground md:text-7xl">
                {project.title}
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-0 pt-2">
              {project.stack.map((tech) => (
                <StatusBadge key={tech} className="rounded-none px-4 py-2">
                  {tech}
                </StatusBadge>
              ))}
            </div>
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 border-t border-border pt-5">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </header>
        </div>
      </section>

      <div className="editorial-container py-16 md:py-24">
        <div className="grid border border-border bg-border/60 md:grid-cols-[minmax(0,1fr)_384px]">
          <div className="glass-surface space-y-14 p-8 md:p-12">
            <section className="space-y-5">
              <h2 className="text-3xl font-normal tracking-[-0.03em] text-foreground">The Problem</h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">{project.problem}</p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-normal tracking-[-0.03em] text-foreground">The Solution</h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">{project.solution}</p>
            </section>

            <section className="space-y-5">
              <h2 className="text-3xl font-normal tracking-[-0.03em] text-foreground">Core Features</h2>
              <ul className="grid gap-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="glass-surface-strong space-y-5 border-t p-6 md:border-l md:border-t-0 md:p-8">
            <section className="border border-border/80 bg-background/25 p-5">
              <h3 className="section-kicker">Tech Decisions</h3>
              <ul className="mt-5 space-y-4">
                {project.techDecisions.map((decision) => (
                  <li key={decision} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-border/80 bg-background/25 p-5">
              <h3 className="text-xl font-normal text-foreground">What I Learned</h3>
              <ul className="mt-5 space-y-4">
                {project.learnings.map((learning) => (
                  <li key={learning} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </article>
  );
}
