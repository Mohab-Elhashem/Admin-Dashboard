import RevenueChart from "./RevenueChart"
import SalesChart from "./SalesChart"

function Chart() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-5">
            <div className="xl:col-span-2">
                <RevenueChart/>
            </div>
            <div className="gap-y-6">
                <SalesChart/>
            </div>
        </div>
    )
}
export default Chart