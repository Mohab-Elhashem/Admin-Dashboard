interface paragraphProps {
    children: React.ReactNode;
    className?: string;
}

export const Paragraph = ({children , className=""}:paragraphProps)=>{
    return(
        <p className={`text-slate-500 dark:text-slate-300 ${className}`}>{children}</p>
    )
}