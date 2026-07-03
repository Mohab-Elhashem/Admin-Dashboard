import { Menu, Search, Filter, Plus, Sun, Bell, Settings, ChevronDown } from "lucide-react";
import admin from "../../assets/admin.jpeg"
import { IconBtn } from "../../shared/IconsBtn"
import { Paragraph } from "../../shared/Paragraph";
import {toggleTheme} from "../Theme"

interface headerProps {
    sideBarCollapsed: boolean;
    onToggleSidebar: () => void;
}

export default function Header({  onToggleSidebar }: headerProps) {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
            <div className="flex justify-between items-center">
                {/* left section */}
                <div className="flex items-center gap-4">
                    <IconBtn onClick={onToggleSidebar}>
                        <Menu className="w-5 h-5" />
                    </IconBtn>
                    <div className="hidden md:block">
                        <h1 className="text-2xl font-black text-slate-800 dark:text-white ">Dashboard</h1>
                        <Paragraph>Welcome back, Mohab! here's what's happening today</Paragraph>
                    </div>
                </div>
                {/* center */}
                <div className="flex-1 max-w-md mx-8">
                    <div className="relative ">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-600 dark:text-slate-300" />
                        <input type="text" placeholder="Search anything" className="w-full pl-10 pr-4 py-2.5 bg-slate-100
                            dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800
                            dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                            focus:border-transparent transition-all"/>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* right section */}
                <div className="flex items-center gap-x-3">
                    {/* quic action */}
                    <button className="hidden lg:flex items-center gap-2 py-2 px-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all cursor-pointer">
                        <Plus className="w-4 h-4" />
                        <span className="text-sm font-medium">New</span>
                    </button>
                    {/* toggle */}
                    <IconBtn onClick={toggleTheme}>
                        <Sun className="w-5 h-5 cursor-pointer" />
                    </IconBtn>
                    {/* notification */}
                    <IconBtn className="relative">
                        <Bell className="w-5 h-5 " />
                        <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                    </IconBtn>
                    {/* setting */}
                    <IconBtn>
                        <Settings className="w-5 h-5" />
                    </IconBtn>
                    {/* user profile */}
                    <div className="flex items-center gap-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
                        <img src={admin} alt="admin" className="w-8 h-8 ring-2 rounded-full ring-blue-500" />
                        <div className="hidden md:block">
                            <Paragraph className="text-sm font-medium">Mohab Elhashem</Paragraph>
                            <Paragraph className="text-xs">Administrator</Paragraph>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

