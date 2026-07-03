import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { StatsData } from "../../shared/StatsData"

function StatsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {StatsData.map((stats, indes)=>(
                <div key={indes} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-xl border border-slate-200/50
                            dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-600/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 ">{stats.title}</p>
                        <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{stats.value}</p>
                        <div className="flex items-center gap-x-2">
                            {stats.trend === "up" ? <ArrowUpRight className="w-4 h-4 text-emerald-500"/> : <ArrowDownRight className="w-4 h-4 text-red-500"/>}
                            <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 ">vs Last month</span>
                        </div>
                    </div>
                    <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${stats.bgColor}`}>
                        {<stats.icon className={`w-4 h-6 ${stats.textColor}`}/>}
                    </div>
                </div>
                {/* progress bar */}
                <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-linear-to-r rounded-full transition-all duration-100 ${stats.color}`}
                        style={{width: stats.trend === "up" ? "75%" : "45%"}}>
                        
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default StatsGrid