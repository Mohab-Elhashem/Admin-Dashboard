interface SalesChartDataProps{
    name: string;
    value: number;
    fill: string;
}

export const SalesChartData: SalesChartDataProps[]=[
    {name: "Electronics", value: 45, fill: "#3b82f6"},
    {name: "Clothing", value: 30, fill: "#8b5cf6"},
    {name: "Books", value: 15, fill: "#10b981"},
    {name: "Other", value: 10, fill: "#f59e0b"}
]