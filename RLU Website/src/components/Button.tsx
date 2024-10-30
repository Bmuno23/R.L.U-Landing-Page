import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonStyles = cva(["transition-colors"],{
    variants: {
        variant:{
            default:["text-gray-900", "focus:outline-none", "bg-white" , "rounded-lg" ,"hover:bg-gray-100" ,"hover:text-blue-700" ,"focus:z-10", "focus:ring-4", "focus:ring-gray-100" ,"dark:focus:ring-gray-700", "dark:bg-gray-800" ,"dark:text-gray-400" ,"dark:border-gray-600" ,"dark:hover:text-white","dark:hover:bg-gray-700", "transform", "transition", "duration-300", "ease-in-out", "hover:scale-105"],
            blueBgHoverNoClick:["text-gray-900", "focus:outline-none", "bg-white" , "hover:bg-gray-100","rounded-lg","hover:text-blue-700"],
            blueNoBg:["text-gray-900", "focus:outline-none", "bg-white" , "rounded-lg","hover:text-blue-700"],
            PtoB:["text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"],
            circle: ["rounded-full bg-white text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"],
        },
        size:{
            icon:["py-2.5", "px-2", "me-2" ,"text-sm", "font-medium"],
            button:["py-2.5", "px-5", "me-2" ,"text-sm", "font-medium"],
        }
    }, 
})


type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant, size, className, ...props}: ButtonProps){
    return <button {...props} className={twMerge(buttonStyles({variant, size}), className)}>

    </button> 
}