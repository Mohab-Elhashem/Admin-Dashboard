import type React from "react";

interface iconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    className?: string;
}

export const IconBtn = ({children , className="", ...props }:iconBtnProps)=>{
    return (
        <button {...props} className={`p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:text-slate-800 transition-colors cursor-pointer ${className}`} >
            {children}
        </button>
    )
}