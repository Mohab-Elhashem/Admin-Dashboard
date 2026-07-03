import StatsGrid from "./StatsGrid"
import Chart from "./Chart"
import TableSection from "./TableSection"
import ActivityFeed from "./ActivityFeed"

function MainDashboard() {
    return (
        
        <div>
            {/*  stats grid   */}
            <StatsGrid/>
            {/* Chart */}
            <Chart/>
            {/* table */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                <div className="xl:col-span-2">
                    <TableSection/>
                </div>
                <div>
                    <ActivityFeed/>
                </div>
            </div>
        </div>
    )
}
export default MainDashboard