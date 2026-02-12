"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Users,
    Briefcase,
    MessageSquare,
    Zap,
    BarChart3,
    Activity,
    ShieldCheck,
    Terminal as TerminalIcon
} from "lucide-react";
import GlitchText from "../components/GlitchText";
import ScrambleText from "../components/ScrambleText";

export default function AdminDashboard() {
    // Live Stats State
    const [stats, setStats] = useState([
        { label: "Neural Visitors", value: 1248, change: "+12.5%", icon: <Users size={20} /> },
        { label: "Active Missions", value: 12, change: "+2", icon: <Briefcase size={20} /> },
        { label: "Incoming Links", value: 48, change: "+8", icon: <MessageSquare size={20} /> },
        { label: "Core Voltage", value: 98, change: "OPTIMAL", icon: <Zap size={20} /> },
    ]);

    // Live Chart State
    const [chartData, setChartData] = useState(Array(30).fill(0).map(() => Math.random() * 80 + 10));

    // Live Logs State
    const [logs, setLogs] = useState([
        { msg: "New submission from User_782", time: "2m ago", level: "info" },
        { msg: "Database buffer sync complete", time: "12m ago", level: "success" },
        { msg: "Unauthorized access attempts blocked", time: "1h ago", level: "warning" },
        { msg: "Project 'Neo_Protocol' updated", time: "3h ago", level: "info" },
    ]);

    // Live Security State
    const [security, setSecurity] = useState({
        firewall: 94.2,
        encryption: 88.7
    });

    useEffect(() => {
        // Interval to update ALL stats periodically (Stabilized to 10s)
        const statsInterval = setInterval(() => {
            setStats(prev => {
                const next = [...prev];

                // 1. Neural Visitors (Stable tick)
                if (Math.random() > 0.5) {
                    next[0].value += 1;
                    const base = 1100;
                    const percent = ((next[0].value - base) / base * 100).toFixed(1);
                    next[0].change = `+${percent}%`;
                }

                // 3. Incoming Links (Slow drift)
                if (Math.random() > 0.9) {
                    next[2].value += 1;
                }

                // 4. Core Voltage (Stabilized at ~98.5%)
                next[3].value = 98.4 + Math.random() * 0.2;

                return next;
            });

            // Update Security Flux (Very subtle drift)
            setSecurity(prev => ({
                firewall: Math.min(99, Math.max(94, prev.firewall + (Math.random() - 0.5) * 0.05)),
                encryption: Math.min(95, Math.max(88, prev.encryption + (Math.random() - 0.5) * 0.05))
            }));
        }, 10000);

        // Interval to update chart (Reduced to 4s for smoother perception)
        const chartInterval = setInterval(() => {
            setChartData(prev => {
                const newData = [...prev.slice(1), Math.random() * 30 + 40]; // Stable mid-range
                return newData;
            });
        }, 4000);

        // Random log generation (Reduced frequency to 20s)
        const logInterval = setInterval(() => {
            if (Math.random() > 0.8) {
                const levels = ["info", "success"];
                const messages = [
                    "Background sync protocol optimized",
                    "Node_04 status: SECURED",
                    "Database heartbeat detected",
                    "Encryption keys rotated",
                    "Static asset cache refreshed"
                ];
                const newLog = {
                    msg: messages[Math.floor(Math.random() * messages.length)],
                    time: "Just now",
                    level: levels[Math.floor(Math.random() * levels.length)]
                };
                setLogs(prev => [newLog, ...prev.slice(0, 5)]);
            }
        }, 20000);

        return () => {
            clearInterval(statsInterval);
            clearInterval(chartInterval);
            clearInterval(logInterval);
        };
    }, []);

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                        <GlitchText text="Command Center" trigger="always" />
                    </h1>
                    <p className="text-[10px] text-red-800 font-bold tracking-[0.4em] uppercase mt-2">
                        <ScrambleText text="SYSTEM_DIAGNOSTICS :: LIVE_STREAM" delay={500} />
                    </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_green]" />
                        <span className="text-[8px] text-gray-500 font-orbitron">REALTIME_DATA_FLOW: CONNECTED</span>
                    </div>
                    <button className="px-6 py-2 bg-red-900/20 border border-red-600 text-[10px] text-red-500 font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all">
                        Force Manual_Sync
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-black/40 border border-red-900/20 p-6 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-600/40 group-hover:bg-red-600 transition-colors" />
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-950/20 border border-red-900/30 text-red-700">
                                {stat.icon}
                            </div>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 border ${stat.label === "Core Voltage" ? "text-red-500 border-red-950" : "text-green-700 border-green-950 bg-green-950/20"
                                }`}>
                                {stat.label === "Core Voltage" ? `${stat.value.toFixed(1)}%` : stat.change}
                            </span>
                        </div>
                        <h3 className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">{stat.label}</h3>
                        <div className="text-2xl font-black text-white tabular-nums">
                            {stat.label === "Core Voltage" ? stat.value.toFixed(1) + "%" : stat.value.toLocaleString()}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Visualizer (Real-time Scrolling Chart) */}
                <div className="lg:col-span-8 bg-black/40 border border-red-900/20 p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/10" />
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <BarChart3 className="text-red-600" size={18} />
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Neural Load Frequency</h2>
                        </div>
                        <div className="text-[10px] font-orbitron text-red-900 animate-pulse">
                            SCANNING_RANGE: 120HZ
                        </div>
                    </div>

                    <div className="h-64 flex items-end gap-1">
                        {chartData.map((val, i) => (
                            <motion.div
                                key={i}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, height: `${val}%` }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className={`flex-1 min-w-[4px] relative group ${val > 70 ? 'bg-red-500' : val > 40 ? 'bg-red-700' : 'bg-red-900'
                                    }`}
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7px] text-white font-orbitron opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {val.toFixed(1)}%
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Perspective Grid Background for Chart */}
                    <div className="absolute bottom-8 left-8 right-8 h-64 border-b border-red-900/10 pointer-events-none -z-10 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />

                    <div className="mt-4 pt-4 border-t border-red-900/10 flex justify-between text-[8px] text-gray-700 font-bold uppercase tracking-widest font-orbitron">
                        <span>LIVE_T_0</span>
                        <span>LIVE_T_15S</span>
                        <span>LIVE_T_30S</span>
                    </div>
                </div>

                {/* System Activity & Health */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-black/40 border border-red-900/20 p-6 flex flex-col h-[320px]">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2">
                            <Activity size={14} className="text-red-700" />
                            Live_Intercepts
                        </h2>
                        <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex justify-between items-start gap-4 border-l-2 border-red-950 pl-3 py-1 hover:bg-white/5 transition-colors"
                                >
                                    <div className="space-y-1">
                                        <p className={`text-[9px] font-bold leading-tight ${log.level === 'warning' ? 'text-orange-500' : log.level === 'success' ? 'text-green-500' : 'text-gray-400'}`}>
                                            {log.msg}
                                        </p>
                                        <div className="text-[7px] text-gray-700 font-orbitron uppercase">{log.time}</div>
                                    </div>
                                    <span className={`text-[7px] font-bold uppercase px-1 border ${log.level === 'warning' ? 'text-orange-900 border-orange-900' : 'text-red-900 border-red-950'
                                        }`}>
                                        {log.level}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-red-900/5 border border-red-900/20 p-6 relative group overflow-hidden h-[180px] flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <ShieldCheck size={40} className="text-red-600" />
                        </div>
                        <h3 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                            <TerminalIcon size={12} className="text-red-600" />
                            Security Integrity
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-[8px] text-gray-600 mb-1 uppercase font-bold">
                                    <span>Firewall_v4</span>
                                    <span className="tabular-nums">{security.firewall.toFixed(1)}%</span>
                                </div>
                                <div className="w-full h-1 bg-red-950 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: `${security.firewall}%` }} className="h-full bg-red-600 shadow-[0_0_5px_red]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[8px] text-gray-600 mb-1 uppercase font-bold">
                                    <span>Node_Encryption</span>
                                    <span className="tabular-nums">{security.encryption.toFixed(1)}%</span>
                                </div>
                                <div className="w-full h-1 bg-red-950 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: `${security.encryption}%` }} className="h-full bg-orange-600 shadow-[0_0_5px_orange]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
