"use client";

import { ReactNode } from "react";
import gsap from "gsap";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, className = "", variant = "primary" }: ButtonProps) {
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-colors duration-300 focus:outline-none";
    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary: "bg-transparent border border-white text-white hover:bg-white/10",
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
