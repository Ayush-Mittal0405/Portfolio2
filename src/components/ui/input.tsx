import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-white/12 bg-slate-950/45 px-4 py-2 text-sm text-white shadow-sm transition-colors placeholder:text-slate-500 focus:border-cyanGlow/70 focus:outline-none focus:ring-2 focus:ring-cyanGlow/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
