import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { Download, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Navdeep Singh
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
          Software Developer building AI-powered product experiences.
        </h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
          I build user-facing web and mobile workflows using React, Next.js, React Native, TypeScript, APIs, and AI-assisted development. Currently focused on AI product workflows, UX execution, and full-stack product engineering.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="#projects" className="inline-flex items-center justify-center rounded-md bg-[#d2ff36] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#d2ff36]/90 transition-colors">
            View Projects
          </Link>
          <a href="/navdeep-singh-resume.pdf" download className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-transparent px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
          <div className="flex gap-4 ml-auto items-center">
            <a href="https://www.linkedin.com/in/navdeepsingh1600/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:nvdeep0110@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
          <p className="text-gray-400">
            Selected projects that show my work across AI product workflows, full-stack development, analytics, and user-facing software systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Current Work</h3>
          <p className="text-gray-400">
            My experience spans software development, cloud support, operational systems, analytics, and product-facing technical support.
          </p>
        </div>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l border-gray-700 pb-2">
              <div className="absolute w-3 h-3 bg-[#d2ff36] rounded-full -left-[6.5px] top-1.5" />
              <div className="mb-2">
                <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                <p className="text-gray-400 text-sm">{exp.company} • {exp.period}</p>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                   <li key={i} className="text-gray-400 text-sm flex items-start">
                     <span className="text-gray-600 mr-2 mt-0.5">•</span>
                     {bullet}
                   </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-[#d2ff36] text-sm font-semibold tracking-wide uppercase">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <Badge key={i} variant="outline" className="border-gray-700 text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Ready to work together?</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          I am open to software developer, frontend, AI product engineering, and product-minded full-stack roles.
        </p>
        <div className="pt-4">
          <a href="mailto:nvdeep0110@gmail.com" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-100 transition-colors">
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
