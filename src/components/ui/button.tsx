import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-[0.15em] transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "hover:bg-hextech-gold/10 hover:text-hextech-gold",
        hextech:
          "relative border border-hextech-bronze bg-gradient-to-b from-[#1e2328] to-hextech-black text-hextech-gold shadow-[inset_0_0_10px_#000] hover:border-hextech-gold hover:text-hextech-light hover:shadow-[0_0_15px_rgba(200,170,110,0.3)] active:border-white",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hextech", // Hextech is the default style
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
