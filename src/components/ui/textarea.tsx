import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-lg border border-white/12 bg-slate-950/45 px-4 py-3 text-sm text-white shadow-sm transition-colors placeholder:text-slate-500 focus:border-cyanGlow/70 focus:outline-none focus:ring-2 focus:ring-cyanGlow/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
