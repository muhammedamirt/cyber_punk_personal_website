"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CyberHUD() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("en-GB", { hour12: false }) + ":" + now.getMilliseconds().toString().padStart(3, '0'));
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden opacity-40 select-none">

            {/* Scanlines Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-red-900/40" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-900/40" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-900/40" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-red-900/40" />

            {/* HUD Status Bar (Top Left) */}
            <div className="absolute top-6 left-10 flex flex-col gap-1 tracking-[0.3em]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 animate-pulse" />
                    <span className="text-[8px] font-orbitron text-red-700">SYS_LINK: ESTABLISHED</span>
                </div>
                <div className="text-[8px] font-orbitron text-gray-600">STABILITY: 99.9%</div>
            </div>

            {/* Time & Latency (Top Right) */}
            <div className="absolute top-6 right-10 flex flex-col items-end gap-1 font-orbitron text-[8px] tracking-[0.2em]">
                <div className="text-red-900">UTC // {currentTime}</div>
                <div className="text-gray-600 flex items-center gap-2">
                    LATENCY: 12ms <div className="w-1 h-1 bg-green-900 rounded-full" />
                </div>
            </div>

            {/* Vertical Hex Stream (Right Edge) */}
            <div className="absolute top-1/4 right-3 flex flex-col gap-4">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                        className="text-[7px] font-orbitron text-red-950 rotate-90"
                    >
                        0x{Math.floor(Math.random() * 0xFFF).toString(16).toUpperCase()}
                    </motion.div>
                ))}
            </div>

            {/* Bottom HUD bar */}
            <div className="absolute bottom-6 left-0 w-full px-10 flex justify-between items-end opacity-40">
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <span className="text-[7px] font-orbitron text-gray-700 uppercase">Input_Freq</span>
                        <div className="w-32 h-[1px] bg-red-950 relative overflow-hidden">
                            <motion.div animate={{ left: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute h-full w-12 bg-red-600/50 blur-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="text-[7px] font-orbitron text-gray-700">PROTO_NODE_v4.2.1-final</div>
            </div>

        </div>
    );
}
