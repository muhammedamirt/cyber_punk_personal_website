"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CyberButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
}

export default function CyberButton({ children, onClick, className = "", variant = "primary" }: CyberButtonProps) {
    const isPrimary = variant === "primary";
    const isSecondary = variant === "secondary";

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`
                group relative px-8 py-3 font-orbitron font-black text-[10px] tracking-[0.4em] uppercase overflow-hidden transition-all duration-300
                ${className}
            `}
        >
            {/* Background Layers */}
            <div className={`
                absolute inset-0 transition-all duration-500
                ${isPrimary ? "bg-red-600 skew-x-[-15deg] group-hover:bg-white" : ""}
                ${isSecondary ? "bg-transparent border border-red-900/40 skew-x-[-15deg] group-hover:border-red-600" : ""}
            `} />

            {/* Glitch Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden transition-opacity">
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-red-500/20 translate-x-full group-hover:-translate-x-full transition-transform duration-700 ease-in-out delay-75" />
            </div>

            {/* Scanning Line */}
            <div className="absolute inset-x-0 h-[1px] bg-white/40 top-0 hidden group-hover:block animate-scan-slow" />

            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-white transition-colors" />

            {/* Content */}
            <span className={`
                relative z-10 flex items-center justify-center gap-3 transition-colors duration-500
                ${isPrimary ? "text-white group-hover:text-black" : "text-red-500 group-hover:text-white"}
            `}>
                {children}

                {/* Decorative Dots */}
                <div className="flex gap-1 ml-1">
                    <div className="w-1 h-1 bg-current opacity-40 group-hover:animate-ping" />
                    <div className="w-1 h-1 bg-current opacity-40" />
                </div>
            </span>

            {/* Neon Shadow */}
            <div className={`
                absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300
                ${isPrimary ? "bg-red-600/50" : "bg-red-950/20"}
            `} />
        </motion.button>
    );
}
