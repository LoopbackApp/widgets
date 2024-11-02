import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "lb-flex lb-min-h-[80px] lb-w-full lb-rounded-md lb-border lb-border-input lb-bg-background lb-px-3 lb-py-2 lb-text-sm lb-ring-offset-background placeholder:lb-text-muted-foreground focus-visible:lb-outline-none focus-visible:lb-ring-2 focus-visible:lb-ring-ring focus-visible:lb-ring-offset-2 disabled:lb-cursor-not-allowed disabled:lb-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
