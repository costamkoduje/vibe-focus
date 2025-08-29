import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[16px] fonts-mono-m transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-dark shadow hover:bg-accent/90 border border-gray-mid",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-gray-mid bg-transparent shadow-sm hover:bg-gray-light/10 text-gray-dark",
        secondary:
          "bg-gray-mid text-dark shadow-sm hover:bg-gray-mid/90 border border-gray-mid",
        ghost: "hover:bg-gray-light/10 text-gray-dark",
        link: "text-accent underline-offset-4 hover:underline",
        accent: "bg-accent text-dark shadow hover:bg-accent/90 border border-gray-mid",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-[16px] px-4 py-2 fonts-mono-xs",
        lg: "h-14 rounded-[16px] px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
