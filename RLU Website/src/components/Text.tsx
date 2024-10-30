import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


export const textStyles = cva(["transition-colors"], {
    variants:{
        variant:{
            subPara: ["text-blue-400", "font-medium", "font sans", "text-2xl"],
            header: ["text-blue-900", "text-4xl", "decoration-solid", "decoration-2","font-semibold" ],
            signed: ["text-lg", "text-slate-800", "opacity-50"]
        }
    }
})


type TextProps = VariantProps<typeof textStyles> & ComponentProps<"p"> & {
    text: string,
}

export function Text({variant, text, className, ...props}: TextProps){
    return <p {...props} className={twMerge((textStyles({variant})), className)}>{text}</p> 
}