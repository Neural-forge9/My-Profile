import { cn } from "@/lib/utils";

type StatusBadgeTone = "default" | "muted" | "success" | "warning";

const dotToneClass: Record<StatusBadgeTone, string> = {
  default: "bg-primary",
  muted: "bg-muted-foreground",
  success: "bg-success",
  warning: "bg-warning",
};

export function StatusBadge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: StatusBadgeTone;
  className?: string;
}) {
  return (
    <span className={cn("status-pill", className)}>
      <span className={cn("status-pill-dot", dotToneClass[tone])} aria-hidden="true" />
      {children}
    </span>
  );
}
