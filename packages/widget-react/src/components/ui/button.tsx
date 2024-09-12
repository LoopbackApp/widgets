import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "lb-inline-flex lb-items-center lb-justify-center lb-whitespace-nowrap lb-rounded-md lb-text-sm lb-font-medium lb-ring-offset-background lb-transition-colors focus-visible:lb-outline-none focus-visible:lb-ring-2 focus-visible:lb-ring-ring focus-visible:lb-ring-offset-2 disabled:lb-pointer-events-none disabled:lb-opacity-50",
  {
    variants: {
      variant: {
        default: "lb-bg-primary lb-text-primary-foreground hover:lb-bg-primary/90",
        destructive:
          "lb-bg-destructive lb-text-destructive-foreground hover:lb-bg-destructive/90",
        outline:
          "lb-border lb-border-input lb-bg-background hover:lb-bg-accent hover:lb-text-accent-foreground",
        secondary:
          "lb-bg-secondary lb-text-secondary-foreground hover:lb-bg-secondary/80",
        ghost: "hover:lb-bg-accent hover:lb-text-accent-foreground",
        link: "lb-text-primary lb-underline-offset-4 hover:lb-underline",
      },
      size: {
        default: "lb-h-10 lb-px-4 lb-py-2",
        sm: "lb-h-9 lb-rounded-md lb-px-3",
        lg: "lb-h-11 lb-rounded-md lb-px-8",
        icon: "lb-h-10 lb-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
