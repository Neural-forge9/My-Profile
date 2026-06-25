import { Project } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { SurfaceCard } from "@/components/SurfaceCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SurfaceCard interactive className="group relative p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <p className="section-kicker">{project.category}</p>
            <h4 className="text-2xl font-normal tracking-[-0.03em] text-foreground transition-colors md:text-3xl">
              <Link href={`/projects/${project.slug}`}>
                <span className="absolute inset-0" aria-hidden="true" />
                {project.title}
              </Link>
            </h4>
          </div>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 5).map((tech, i) => (
              <StatusBadge key={i}>
                {tech}
              </StatusBadge>
            ))}
            {project.stack.length > 5 && (
              <StatusBadge tone="muted">
                +{project.stack.length - 5}
              </StatusBadge>
            )}
          </div>
        </div>
        <div className="mt-4 flex shrink-0 items-center text-muted-foreground transition-colors group-hover:text-foreground md:mt-0 md:pl-6">
           <span className="text-sm font-medium mr-2">Elaborate</span>
           <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </SurfaceCard>
  );
}
