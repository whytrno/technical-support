import * as React from "react"

import {cn} from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className, ...props}, ref) => {
        return (
            <textarea
                className={cn(
                    "py-2 px-4 bg-transparent hover:border-primary rounded-lg w-full border-2 text-sm shadow-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                    className
                )}
                rows={5}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export {Textarea}
