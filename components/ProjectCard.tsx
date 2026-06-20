import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card p-6 transition-colors hover:bg-secondary/30 md:p-8">
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
              <Badge
                key={i}
                variant="outline"
                className="border-border bg-secondary/40 font-mono text-[0.68rem] font-medium uppercase tracking-[0.08em] text-foreground"
              >
                {tech}
              </Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge
                variant="outline"
                className="border-border bg-secondary/40 font-mono text-[0.68rem] font-medium uppercase tracking-[0.08em] text-muted-foreground"
              >
                +{project.stack.length - 5}
              </Badge>
            )}
          </div>
        </div>
        <div className="mt-4 flex shrink-0 items-center text-muted-foreground transition-colors group-hover:text-foreground md:mt-0 md:pl-6">
           <span className="text-sm font-medium mr-2">Elaborate</span>
           <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
