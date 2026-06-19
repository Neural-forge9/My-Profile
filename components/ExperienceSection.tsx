"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  additionalExperience,
  Experience,
  primaryExperience,
} from "@/data/experience";
import { cn } from "@/lib/utils";

function ExperienceItem({
  experience,
  isPrimary = false,
}: {
  experience: Experience;
  isPrimary?: boolean;
}) {
  return (
    <div className="relative pl-6 border-l border-gray-700 pb-2">
      <div
        className={cn(
          "absolute w-3 h-3 rounded-full -left-[6.5px] top-1.5",
          isPrimary ? "bg-[#d2ff36]" : "bg-gray-600"
        )}
      />
      <div className="mb-2">
        <h4 className="text-lg font-bold text-white">{experience.role}</h4>
        <p className="text-gray-400 text-sm">
          {experience.company} • {experience.period}
        </p>
      </div>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {experience.description}
      </p>
      <ul className="space-y-3">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-start">
            <span className="text-gray-600 mr-2 mt-0.5">•</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const additionalExperienceId = useId();

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">Current Work</h3>
        <p className="text-gray-400">
          My experience spans software development, cloud support, operational
          systems, analytics, and product-facing technical support.
        </p>
      </div>

      <div className="relative space-y-6">
        <div className="relative">
          <ExperienceItem experience={primaryExperience} isPrimary />
          {!isExpanded && additionalExperience.length > 0 && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#0f1115]/70 to-[#0f1115]"
              aria-hidden="true"
            />
          )}
        </div>

        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={additionalExperienceId}
          onClick={() => setIsExpanded((current) => !current)}
          className="group inline-flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900/50 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d2ff36]/60 focus:ring-offset-2 focus:ring-offset-[#0f1115]"
        >
          <span>{isExpanded ? "Hide experience" : "More experience"}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-[#d2ff36] transition-transform duration-300 group-hover:translate-y-0.5",
              isExpanded && "rotate-180 group-hover:translate-y-0"
            )}
            aria-hidden="true"
          />
        </button>

        <div
          id={additionalExperienceId}
          aria-hidden={!isExpanded}
          className={cn(
            "grid transition-all duration-500 ease-out",
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-8 pt-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d2ff36]">
                  Earlier Experience
                </h4>
                <p className="text-sm text-gray-500">
                  Cloud, infrastructure, and product support roles that shaped
                  my production troubleshooting and systems mindset.
                </p>
              </div>
              <div className="space-y-8">
                {additionalExperience.map((experience) => (
                  <ExperienceItem
                    key={`${experience.role}-${experience.period}`}
                    experience={experience}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
