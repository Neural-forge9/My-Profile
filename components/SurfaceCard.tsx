import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SurfaceCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-surface overflow-hidden rounded-lg border",
        interactive && "glass-surface-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
