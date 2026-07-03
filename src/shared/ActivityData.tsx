import { CreditCard, ShoppingCart, User, type LucideIcon } from "lucide-react";

interface ActivityDataProps {
    id: number;
    type: string;
    icon: LucideIcon;
    title: string;
    description: string;
    time: string;
    color: string;
    bgColor: string;
}

export const ActivityData: ActivityDataProps[] = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New order recevied",
        description: "order #2 for $442",
        time: "5 minutes ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "payment processed",
        description: "payment of $1.52 completed",
        time: "12 minutes ago",
        color: "text-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
        id: 4,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        id: 5,
        type: "order",
        icon: ShoppingCart,
        title: "New order recevied",
        description: "order #2 for $442",
        time: "5 minutes ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
        id: 6,
        type: "payment",
        icon: CreditCard,
        title: "payment processed",
        description: "payment of $1.52 completed",
        time: "12 minutes ago",
        color: "text-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    
];