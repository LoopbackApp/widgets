import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "lb-flex lb-h-10 lb-w-full lb-rounded-md lb-border lb-border-input lb-bg-background lb-px-3 lb-py-2 lb-text-sm lb-ring-offset-background file:lb-border-0 file:lb-bg-transparent file:lb-text-sm file:lb-font-medium placeholder:lb-text-muted-foreground focus-visible:lb-outline-none focus-visible:lb-ring-2 focus-visible:lb-ring-ring focus-visible:lb-ring-offset-2 disabled:lb-cursor-not-allowed disabled:lb-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
