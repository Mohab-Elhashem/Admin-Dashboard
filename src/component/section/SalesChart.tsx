// 1. استيراد مكونات الرسم البياني الصحيحة من recharts
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
// 2. استيراد الأيقونة من lucide-react مع تغيير اسمها لتجنب أي تضارب
import { PieChart as PieIcon } from "lucide-react";
// 3. استيراد البيانات من ملفها المشترك
import { SalesChartData } from "../../shared/SalesChartData";

function SalesChart() {
    return (
        <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">

            {/* رأس الكارد مع الأيقونة والعناوين */}
            <div className="flex items-center gap-x-2 mb-6">
                <div className="text-blue-500 dark:text-blue-400">
                    <PieIcon className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Sales by Category</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Production Distribution</p>
                </div>
            </div>

            {/* حاوية الرسم البياني - تم إعطاء الـ ResponsiveContainer ارتفاع رقمي ثابت لحل مشكلة الأبعاد نهائياً */}
            <div className="w-full">
                <ResponsiveContainer width="100%" height={200}>
                    <RechartsPieChart>
                        {/* إضافة نافذة التلميح عند تمرير الماوس */}
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0f172a',
                                borderRadius: '8px',
                                color: '#fff',
                                border: 'none'
                            }}
                        />
                        <Pie
                            data={SalesChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={70} 
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {/* التعديل البرمجي: استخدام مكون Cell لتلوين الشرايح بشكل سليم بدل تكرار مكون Pie */}
                            {SalesChartData.map((item, index) => (
                                <Cell key={`cell-${index}`} fill={item.fill || '#3b82f6'} />
                            ))}
                        </Pie>
                    </RechartsPieChart>
                </ResponsiveContainer>
            </div>

            {/* العناصر التوضيحية التحتية (Legend) لعرض الأسماء والقيم المتناسقة */}
            <div className="space-y-3 mt-4">
                {SalesChartData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-800 dark:text-white">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SalesChart;