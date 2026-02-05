import { forwardRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type GradientType = "primary" | "secondary" | "accent";

interface GradientButtonProps extends ButtonProps {
  gradient?: GradientType;
}

const gradientClasses: Record<GradientType, string> = {
  primary: "bg-gradient-primary",
  secondary: "bg-gradient-secondary",
  accent: "bg-gradient-accent",
};

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradient = "primary", children, disabled, ...props }, ref) => {
    return (
      <motion.div
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className="inline-block"
      >
        <Button
          ref={ref}
          className={cn(
            gradientClasses[gradient],
            "text-primary-foreground border-0 shadow-soft hover:shadow-glow",
            "rounded-full px-8 py-6 text-lg font-semibold",
            "transition-shadow duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          disabled={disabled}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
