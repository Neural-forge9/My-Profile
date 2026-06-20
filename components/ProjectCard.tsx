import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-xl border border-gray-800 bg-[#181a1f] p-6 hover:border-gray-600 transition-colors">
      <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
        <div className="space-y-4 flex-1">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#d2ff36]">{project.category}</p>
            <h4 className="text-xl font-bold text-white group-hover:text-[#d2ff36] transition-colors">
              <Link href={`/projects/${project.slug}`}>
                <span className="absolute inset-0" aria-hidden="true" />
                {project.title}
              </Link>
            </h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 5).map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300 font-normal border border-gray-700">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge variant="secondary" className="bg-gray-800 text-gray-500 font-normal border border-gray-700">
                +{project.stack.length - 5}
              </Badge>
            )}
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex shrink-0 items-center text-gray-500 group-hover:text-[#d2ff36] transition-colors md:pl-6">
           <span className="text-sm font-medium mr-2">Elaborate</span>
           <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
