import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PortfolioSectionVariant = "plain" | "panel" | "split";

function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-kicker">{kicker}</p>
      <h2 className="text-4xl font-normal tracking-[-0.035em] text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function PortfolioSection({
  id,
  kicker,
  title,
  description,
  children,
  variant = "plain",
  className,
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: PortfolioSectionVariant;
  className?: string;
}) {
  if (variant === "split") {
    return (
      <section
        id={id}
        className={cn("glass-surface grid border md:grid-cols-[1fr_420px]", className)}
      >
        <div className="p-8 md:p-12">
          <SectionHeader kicker={kicker} title={title} description={description} />
        </div>
        {children}
      </section>
    );
  }

  if (variant === "panel") {
    return (
      <section id={id} className={cn("glass-surface border p-6 md:p-8", className)}>
        <SectionHeader kicker={kicker} title={title} description={description} />
        {children && <div className="mt-8">{children}</div>}
      </section>
    );
  }

  return (
    <section id={id} className={cn("space-y-8", className)}>
      <SectionHeader kicker={kicker} title={title} description={description} />
      {children}
    </section>
  );
}
