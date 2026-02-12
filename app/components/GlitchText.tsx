"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
    trigger?: "hover" | "always";
}

export default function GlitchText({ text, className = "", trigger = "always" }: GlitchTextProps) {
    const [isHovered, setIsHovered] = useState(false);
    const active = trigger === "always" || isHovered;

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10">{text}</span>
            {active && (
                <>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: [-2, 2, -1, 1, 0],
                            y: [1, -1, 2, -2, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.2,
                            repeatType: "mirror"
                        }}
                        className="absolute inset-0 text-red-500 z-0 select-none pointer-events-none opacity-70"
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: [2, -2, 1, -1, 0],
                            y: [-1, 1, -2, 2, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.3,
                            repeatType: "mirror"
                        }}
                        className="absolute inset-0 text-orange-500 z-0 select-none pointer-events-none opacity-70"
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
