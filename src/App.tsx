import Header from "./component/layout/Header"
import SideBar from "./component/layout/Sidebar"
import { useState } from "react"
import MainDashboard from "./component/section/MainDashboard"

export const App = () => {
  const [sideBarCollapsed , setSideBarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")
  return (
    // main page
    <div className="min-h-screen bg-linear-to-r from-slate-100 via-blue-100 to-indigo-100
                    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      {/* main page */}
      <div className="flex h-screen overflow-hidden">
        {/* side bar */}
        <SideBar collapsed={sideBarCollapsed} onToggle={()=>setSideBarCollapsed(!sideBarCollapsed)} currentPage={currentPage} onPageChange={setCurrentPage}/>
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* header */}
          <Header sideBarCollapsed={sideBarCollapsed} onToggleSidebar={()=>setSideBarCollapsed(!sideBarCollapsed)}/> 
            
          <main className="flex-1 overflow-y-auto bg-transparent"> 
            <div className="p-6 gap-y-6">
              {currentPage === "dashboard" && <MainDashboard/>}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
