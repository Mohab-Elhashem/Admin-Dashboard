import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react"
import {OrderData ,OrderDataTrend , getStatusColor} from "../../shared/TableData"

function TableSection() {
  return (
    <div className="space-y-6 rounded-2xl overflow-hidden">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
      border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm text-slate-800 dark:text-white">Recent Orders</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Latest customer orders</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="whitespace-nowrap ">
                <th className="text-left p-4 text-sm font-semibold text-slate-600">Order ID</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">Product</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">Amount</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {OrderData.map((order, index)=>(
                <tr key={index} className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 
                dark:bg-slate-800/50 transition-colors whitespace-nowrap">
                  <td className="p-4 ">
                    <span className="text-sm font-medium text-blue-800">{order.id}</span>
                  </td>
                  <td className="p-4 ">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">{order.customer}</span>
                  </td>
                  <td className="p-4 ">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">{order.product}</span>
                  </td>
                  <td className="p-4 ">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">{order.amount}</span>
                  </td>
                  <td className="p-4 ">
                    <span className={`text-xs font-medium text-slate-400 dark:text-white px-3 py-1 rounded-full whitespace-nowrap overflow-x-auto ${getStatusColor(order.status)}`}>{order.date}</span>
                  </td>
                  <td className="p-4 ">
                    <span className="text-sm text-slate-800 dark:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* top products */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
      border-slate-200/50 dark:border-slate-700/50 overflow-hidden ">
          <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-slate-800 dark:text-white">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      Top Products
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">/best performing products</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
          </div>
          {/* dynamic date */}
          <div className="p-6 space-y-4">
            {OrderDataTrend.map((product, key)=>(
              <div key={key} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{product.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{product.sales}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">{product.revenue}</p>
                  <div className="flex items-center gap-x-1 ">
                    {product.trend === "up" ? <TrendingUp className="w-3 h-3 text-emerald-600"/> : <TrendingDown className="w-3 h-3 text-red-500"/>}
                    <span className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500": "text-red-500"}`}>{product.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
    </div>
  )
}
export default TableSection