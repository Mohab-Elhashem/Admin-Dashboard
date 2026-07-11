import React from "react";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { RevenueData } from "../../shared/RevenueData";

const RevenueChart: React.FC = () => {
    return (
        <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 overflow-hidden">

            {/* رأس المخطط والدوائر التوضيحية */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Revenue Chart</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Monthly revenue and expenses</p>
                </div>

                <div className="sm:flex items-center gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <div className="w-3 h-3 bg-linear-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">Revenue</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="w-3 h-3 bg-linear-to-r from-slate-400 to-slate-500 rounded-full"></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">Expenses</span>
                    </div>
                </div>
            </div>

            {/* حاوية الرسم البياني المتجاوبة */}
            <div className="w-full">
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={RevenueData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>

                        {/* تعريف تأثيرات التدرج اللوني (Gradients) للأعمدة */}
                        <defs>
                            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.6} />
                            </linearGradient>
                            <linearGradient id="expensesGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#94a3b8" />
                                <stop offset="100%" stopColor="#64748b" />
                            </linearGradient>
                        </defs>

                        {/* خطوط الشبكة الخلفية */}
                        <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800/60" vertical={false} />
                        <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />

                        {/* النافذة المنبثقة عند تمرير الماوس */}
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                            }}
                        />

                        {/* ربط الأعمدة بمفاتيح البيانات والتدرجات اللمسية */}
                        <Bar dataKey="revenue" fill="url(#revenueGrad)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        <Bar dataKey="expenses" fill="url(#expensesGrad)" radius={[4, 4, 0, 0]} maxBarSize={40} />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;