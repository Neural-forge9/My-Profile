"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  additionalExperience,
  Experience,
  primaryExperience,
} from "@/data/experience";
import { cn } from "@/lib/utils";
import { PortfolioSection } from "@/components/PortfolioSection";

function ExperienceItem({
  experience,
  isPrimary = false,
}: {
  experience: Experience;
  isPrimary?: boolean;
}) {
  return (
    <div className="relative border-l border-border pb-2 pl-6">
      <div
        className={cn(
          "absolute w-3 h-3 rounded-full -left-[6.5px] top-1.5",
          isPrimary ? "bg-foreground" : "bg-muted-foreground"
        )}
      />
      <div className="mb-2">
        <h4 className="text-xl font-normal tracking-[-0.02em] text-foreground">
          {experience.role}
        </h4>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
          {experience.company} • {experience.period}
        </p>
      </div>
      <p className="mb-4 max-w-3xl text-base leading-7 text-muted-foreground">
        {experience.description}
      </p>
      <ul className="space-y-3">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start text-sm leading-6 text-muted-foreground">
            <span className="mr-3 mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
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
    <PortfolioSection
      kicker="Professional timeline"
      title="Current Work"
      description="My experience spans software development, cloud support, operational systems, analytics, and product-facing technical support."
      variant="panel"
    >
      <div className="relative space-y-6">
        <div className="relative overflow-hidden rounded-lg border border-border/70 bg-background/20 p-5">
          <ExperienceItem experience={primaryExperience} isPrimary />
          {!isExpanded && additionalExperience.length > 0 && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-lg bg-gradient-to-b from-transparent via-card/70 to-card/95"
              aria-hidden="true"
            />
          )}
        </div>

        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={additionalExperienceId}
          onClick={() => setIsExpanded((current) => !current)}
          className="pill-control group gap-2 px-5 py-3 font-semibold text-foreground"
        >
          <span>{isExpanded ? "Hide experience" : "More experience"}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-foreground transition-transform duration-300 group-hover:translate-y-0.5",
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
                <h4 className="section-kicker">
                  Earlier Experience
                </h4>
                <p className="text-sm text-muted-foreground">
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
    </PortfolioSection>
  );
}
