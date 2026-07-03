import { ChevronDown, Zap } from "lucide-react"
import admin from "../../assets/admin.jpeg"
import { MenuItem } from "../../shared/MenuItem"
import { useState } from "react";

interface SideBarProps {
    collapsed: boolean;
    onToggle: () => void;
    currentPage: string;
    onPageChange: (pageId: string) => void;
}

export default function SideBar({ collapsed, currentPage, onPageChange }:SideBarProps) {

    const [expandItems, setExpandItems] = useState<Set<string>>(new Set(["analytics"]))
    // open and close sub menu
    const toggleExpanded =(itemid: string):void=>{
        const newExpand = new Set(expandItems)
        if(newExpand.has(itemid)){
            newExpand.delete(itemid)
        }else{
            newExpand.add(itemid)
        }
        setExpandItems(newExpand)
    }


    return (
        // sidebar 
        <div className={`${collapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
                        border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`} >
            {/* logo */}
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
                <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl
                                    flex items-center justify-center shadow-lg">
                        <Zap className="w-6 h-6 text-white " />
                    </div>
                    {/* conditional rendering */}
                    {!collapsed && <div>
                        <h1 className="text-xl font-bold text-slate-800 dark:text-white">Nexus</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
                    </div>}
                </div>
            </div>
            {/* navigation */}
            <nav className="flex-1 p-4 gap-2 overflow-auto ">
                {MenuItem.map((item) => (
                    <div key={item.id}>
                        {/* menu item */}
                        <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currentPage === item.id || item.active ? 
                            "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25":
                            "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800/50" }`}
                                onClick={()=>{
                                    if(item.submenu){
                                        toggleExpanded(item.id)
                                    }else{
                                        onPageChange(item.id)
                                    }
                                }}>
                            <div className="flex items-center gap-x-3 ">
                                <item.icon className="w-5 h-5  dark:text-slate-300" />
                                {!collapsed && 
                                <>

                                    <span className="ml-2 font-medium dark:text-slate-300">{item.label}</span>
                                    {item.badge && <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full ">{item.badge}</span>}
                                    {item.count && <span className="px-2 py-1 text-xs bg-slate-200  dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full ">{item.count}</span>}

                                </>
                                }
                            </div>
                            {item.submenu && <ChevronDown className="w-4 h-4 transition-transform text-slate-500" />}
                        </button>
                        {/* sub menu */}
                        {!collapsed && item.submenu && expandItems.has(item.id) &&
                        <div>
                            {item.submenu?.map((subitem , key)=>(
                                <button key={key} className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 hover:dark:text-slate-200
                                                    hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all">{subitem.label}</button>
                            ))}
                        </div>
                        }
                        
                    </div>
                ))}
            </nav>
            {/* user profile */}
            {!collapsed && <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <img src={admin} alt="admin" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
                    <div className="flex-1">
                        {!collapsed && <div className="min-w-0">
                            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Mohab</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
                        </div>}
                    </div>
                </div>
            </div>}
        </div>
    )
}