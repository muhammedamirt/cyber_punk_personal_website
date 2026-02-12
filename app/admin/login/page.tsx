"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal,
    ShieldAlert,
    Key,
    Fingerprint,
    ChevronRight,
    Zap,
    Cpu,
    Lock
} from "lucide-react";
import GlitchText from "../../components/GlitchText";
import ScrambleText from "../../components/ScrambleText";
import CyberParticles from "../../components/CyberParticles";

export default function AdminLogin() {
    const router = useRouter();
    const [accessId, setAccessId] = useState("");
    const [securityKey, setSecurityKey] = useState("");
    const [status, setStatus] = useState<"IDLE" | "SCANNING" | "GRANTED" | "DENIED">("IDLE");
    const [errorMsg, setErrorMsg] = useState("");

    // Example IDs requested by user
    const VALID_ID = "AMIR_ROOT";
    const VALID_KEY = "NEO_782";

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("SCANNING");
        setErrorMsg("");

        // Simulate Neural Verification
        setTimeout(() => {
            if (accessId === VALID_ID && securityKey === VALID_KEY) {
                setStatus("GRANTED");
                setTimeout(() => router.push("/admin"), 1000);
            } else {
                setStatus("DENIED");
                setErrorMsg("INVALID_CREDENTIALS :: UNAUTHORIZED_ACCESS_DETECTED");
                setTimeout(() => setStatus("IDLE"), 2000);
            }
        }, 2000);
    };

    return (
        <main className="min-h-screen w-full bg-[#0a0202] flex items-center justify-center p-4 overflow-hidden relative">

            {/* Background System */}
            <div className="absolute inset-0 z-0 opacity-40">
                <CyberParticles />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Decorative Brackets */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-red-900/40" />
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-red-900/40" />

                <div className="bg-black/60 border border-red-900/20 p-8 backdrop-blur-xl relative overflow-hidden group">
                    {/* Scanner Line Animation */}
                    <div className="absolute inset-x-0 h-[1px] bg-red-600/50 top-0 group-hover:animate-scan-slow pointer-events-none" />

                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-16 h-16 border border-red-600/30 flex items-center justify-center mb-6 relative">
                            <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
                            <Lock className="text-red-600" size={30} />
                        </div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                            <GlitchText text="Admin Access" trigger="always" />
                        </h1>
                        <p className="text-[9px] text-red-900 font-bold tracking-[0.4em] uppercase mt-2">
                            <ScrambleText text="AUTHENTICATION_REQUIRED" delay={500} />
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-orbitron text-gray-600 uppercase tracking-widest flex items-center gap-2">
                                <Terminal size={12} className="text-red-900" />
                                Neural Access ID
                            </label>
                            <input
                                type="text"
                                value={accessId}
                                onChange={(e) => setAccessId(e.target.value.toUpperCase())}
                                placeholder="ENTER_ID..."
                                className="w-full bg-black/60 border border-red-900/20 p-4 text-xs font-orbitron text-white focus:border-red-600 outline-none uppercase transition-all tracking-widest placeholder:text-gray-900"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-orbitron text-gray-600 uppercase tracking-widest flex items-center gap-2">
                                <Key size={12} className="text-red-900" />
                                Security Key
                            </label>
                            <input
                                type="password"
                                value={securityKey}
                                onChange={(e) => setSecurityKey(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-black/60 border border-red-900/20 p-4 text-xs font-rajdhani text-white focus:border-red-600 outline-none transition-all tracking-[0.5em] placeholder:text-gray-900"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === "SCANNING"}
                                className={`w-full py-4 relative group overflow-hidden transition-all duration-300 ${status === "SCANNING"
                                        ? "bg-gray-900 text-gray-600 cursor-wait"
                                        : "bg-red-600 text-white hover:bg-white hover:text-black"
                                    }`}
                            >
                                <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                <span className="relative z-10 font-orbitron font-black text-xs tracking-[0.5em] uppercase flex items-center justify-center gap-3">
                                    {status === "SCANNING" ? (
                                        <>
                                            <Cpu className="animate-spin" size={16} />
                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            <Fingerprint size={16} />
                                            Initialize Protocol
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>

                    {/* Status Feedback */}
                    <AnimatePresence>
                        {status === "DENIED" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 p-4 border border-red-600/50 bg-red-900/10 flex items-center gap-3"
                            >
                                <ShieldAlert className="text-red-600 shrink-0" size={18} />
                                <span className="text-[10px] text-red-600 font-bold font-orbitron uppercase tracking-widest leading-tight">
                                    {errorMsg}
                                </span>
                            </motion.div>
                        )}
                        {status === "GRANTED" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 border border-green-600/50 bg-green-900/10 flex items-center gap-3"
                            >
                                <Zap className="text-green-600 shrink-0" size={18} />
                                <span className="text-[10px] text-green-600 font-bold font-orbitron uppercase tracking-widest">
                                    ACCESS_GRANTED :: REDIRECTING_TO_CORE
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Example IDs for User */}
                    <div className="mt-10 pt-6 border-t border-red-900/10 text-center">
                        <p className="text-[8px] text-gray-700 font-orbitron uppercase tracking-widest mb-2">Example Credentials:</p>
                        <div className="flex justify-center gap-6 text-[9px] text-red-900/60 font-bold font-orbitron uppercase tracking-widest">
                            <span>ID: <span className="text-red-900/90">{VALID_ID}</span></span>
                            <span>KEY: <span className="text-red-900/90">{VALID_KEY}</span></span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center px-2 text-[8px] font-orbitron text-gray-700 uppercase tracking-widest">
                    <span>Node_Sec_v4.2</span>
                    <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
                        Live_Uplink
                    </span>
                </div>
            </motion.div>
        </main>
    );
}
