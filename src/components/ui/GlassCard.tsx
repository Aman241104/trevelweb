import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className = "",
    hoverEffect = true,
}: GlassCardProps) => {
    return (
        <div
            className={`
        bg-glacial-white/30 
        backdrop-blur-md 
        border border-white/20 
        shadow-xl 
        rounded-2xl 
        p-6
        ${hoverEffect
                    ? "hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    : ""
                }
        ${className}
      `}
        >
            {children}
        </div>
    );
};
