import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const BentoCard = ({
    children,
    className = "",
    hoverEffect = true,
}: BentoCardProps) => {
    return (
        <div
            className={`
        bg-white
        border border-gray-100
        shadow-sm hover:shadow-xl
        rounded-2xl 
        p-8
        transition-all duration-300
        ${hoverEffect ? "hover:-translate-y-1" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
