import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

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
    <article className="space-y-12">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-2">
          <p className="text-[#d2ff36] font-medium">{project.category}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
        </div>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech, i) => (
            <Badge key={i} variant="outline" className="border-gray-700 bg-gray-800/50 text-gray-300 font-normal">
              {tech}
            </Badge>
          ))}
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">The Solution</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Core Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex flex-start gap-3 text-gray-300 leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d2ff36] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-12">
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-white">Tech Decisions</h3>
            <ul className="space-y-4">
              {project.techDecisions.map((decision, i) => (
                <li key={i} className="text-sm text-gray-400 group">
                  <span className="block text-gray-300 mb-1">{decision}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-bold text-white flex items-center">
              <span className="bg-[#d2ff36] w-1 h-4 rounded-full mr-2" />
              What I Learned
            </h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed">
                  {learning}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
