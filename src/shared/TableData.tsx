// 1. تحديد الحالات المسموح بها فقط
type OrderStatus = "completed" | "pending" | "cancelled" | string;

export const getStatusColor = (status: OrderStatus): string => {
    switch (status) {
        case "completed":
            return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400";
        case "pending":
            return "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400";
        case "cancelled":
            return "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400";
        default:
            return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
};

interface OrderDataProps{
    id:string;
    customer:string;
    product:string;
    amount:string;
    status:string;
    date:string;
}

export const OrderData: OrderDataProps[] = [
    {
        id: "#1",
        customer: "John Smith",
        product: "MacBook Pro 16",
        amount: "$239",
        status: "completed",
        date: "2026-01-15",
    },
    {
        id: "#2",
        customer: "Sarah Johnson",
        product: "iPhone 17 Pro",
        amount: "$442",
        status: "pending",
        date: "2026-01-15",
    },
    {
        id: "#3",
        customer: "Mike Wilson",
        product: "AirPods Pro",
        amount: "$249",
        status: "completed",
        date: "2026-01-15",
    },
    {
        id: "#4",
        customer: "Mohab hopa",
        product: "iPad Air",
        amount: "$500",
        status: "cancelled",
        date: "2026-01-15",
    },
    {
        id: "#5",
        customer: "John Smith",
        product: "MacBook Pro 16",
        amount: "$239",
        status: "completed",
        date: "2026-01-15",
    },
    {
        id: "#6",
        customer: "Sarah Johnson",
        product: "iPhone 17 Pro",
        amount: "$442",
        status: "pending",
        date: "2026-01-15",
    },
    {
        id: "#7",
        customer: "Mike Wilson",
        product: "AirPods Pro",
        amount: "$249",
        status: "completed",
        date: "2026-01-15",
    },
    {
        id: "#8",
        customer: "Mohab hopa",
        product: "iPad Air",
        amount: "$500",
        status: "cancelled",
        date: "2026-01-15",
    },
    
]

interface OrderDataTrendProps{
    name:string;
    sales:string;
    revenue:string;
    trend:string;
    change:string;
}

export const OrderDataTrend: OrderDataTrendProps[] = [
    {
        name: "iPhone 17 Pro",
        sales: "5586",
        revenue: "$852.334",
        trend: "up",
        change: "+15%",
    },
    {
        name: "MacBook Pro 16",
        sales: "4463",
        revenue: "$852.334",
        trend: "up",
        change: "+12%",
    },
    {
        name: "AirPods pro",
        sales: "3421",
        revenue: "$852.334",
        trend: "down",
        change: "-3%",
    },
    {
        name: "iPad Air",
        sales: "4025",
        revenue: "$852.334",
        trend: "up",
        change: "+8%",
    },
]